import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { createClient } from '@supabase/supabase-js';
import { GoogleGenAI } from '@google/genai';

// Initialize Supabase Server Client
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseServiceKey);


// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for parsing JSON. Note: Webhooks might need raw body for signature verification.
  // Flutterwave signature is passed in 'verif-hash' header.
  app.use(express.json());

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Flutterwave Webhook
  app.post("/api/webhooks/flutterwave", async (req, res) => {
    const signature = req.headers['verif-hash'];
    
    // In production, compare with your FLUTTERWAVE_SECRET_HASH from .env
    const expectedSignature = process.env.FLUTTERWAVE_SECRET_HASH || 'slipmint_secret_hash';

    if (!signature || signature !== expectedSignature) {
      return res.status(401).send('Unauthorized');
    }

    const payload = req.body;

    // Verify transaction status
    if (payload.event === 'charge.completed' && payload.data.status === 'successful') {
      const customerEmail = payload.data.customer.email;
      
      try {
        // Find user by email and upgrade
        const { data, error } = await supabase
          .from('users')
          .update({
            subscription_tier: 'premium',
            subscription_provider: 'flutterwave',
            flutterwave_customer_id: payload.data.customer.id.toString(),
          })
          .eq('email', customerEmail)
          .select();
        
        if (error) {
          console.error('Error upgrading user in Supabase:', error);
        } else if (data && data.length > 0) {
          console.log(`Upgraded user ${customerEmail} to Premium via Flutterwave`);
        } else {
          console.log(`User ${customerEmail} not found, could not upgrade.`);
        }
      } catch (error) {
        console.error('Error upgrading user:', error);
      }
    }
    
    res.status(200).send('Webhook processed');
  });

  // Example Gemini endpoint for generating report summaries
  app.post("/api/generate-summary", async (req, res) => {
    try {
      const { content } = req.body;
      if (!content) {
        return res.status(400).json({ error: 'Content required' });
      }

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Summarize the following institutional crypto report into a concise Free Tier summary suitable for Telegram:\n\n${content}`
      });

      res.json({ summary: response.text });
    } catch (error) {
      console.error('Gemini API Error:', error);
      res.status(500).json({ error: 'Failed to generate summary' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

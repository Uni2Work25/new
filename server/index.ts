import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

async function startServer() {
  if (process.env.NODE_ENV === 'development') {
    // In development, use Vite's dev server
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    
    app.use(vite.ssrFixStacktrace);
    app.use(vite.middlewares);
  } else {
    // In production, serve static files
    app.use(express.static(join(__dirname, '../dist/public')));
    
    app.get('*', (req, res) => {
      res.sendFile(join(__dirname, '../dist/public/index.html'));
    });
  }

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer().catch(console.error);
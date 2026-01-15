import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

// Define __filename and __dirname for ES modules
const __filename = fileURLToPath(import.meta.url );
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Updated path resolution for Vercel compatibility
  const staticPath = process.env.NODE_ENV === "production"
    ? path.join(__dirname, "public")
    : path.join(__dirname, "..", "dist", "public");

  console.log("Static path:", staticPath);
  console.log("__dirname:", __dirname);

  app.use(express.static(staticPath));

  app.get("*", (_req, res) => {
    const indexPath = path.join(staticPath, "index.html");
    console.log("Serving index.html from:", indexPath);
    res.sendFile(indexPath);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/` );
  });
}

startServer().catch(console.error);
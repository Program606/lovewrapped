import express from "express";
import clientRouter from "./clients.js"; // or "./clients.js" if you kept JS + .d.ts
import { connectDB, closeDB } from "./connectMongo.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Load root .env
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

const app = express();
app.use(express.json());

//routes
app.use("/api", clientRouter);
console.log("MONGO_URI =", process.env.MONGO_URI);
if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is missing from root .env");
}

//start server
async function startServer() {
  await connectDB();
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}

startServer().catch(console.error);

//shutdown
process.on("SIGINT", async () => {
  await closeDB();
  process.exit(0);
});
process.on("SIGTERM", async () => {
  await closeDB();
  process.exit(0);
});

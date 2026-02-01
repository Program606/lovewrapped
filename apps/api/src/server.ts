import express from "express";
import clientRouter from "./clients.js";
import { connectDB, closeDB } from "./connectMongo.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { getAllResponses } from "./googleForm.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Load root .env
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

const app = express();
app.use(express.json());

//routes
app.use("/api", clientRouter);
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

//auth Google
getAllResponses().catch(console.error);
app.get("/auth/google/callback", async (req, res) => {
  const data = { message: "Hello from backend" };

  console.log("Backend log:", data);

  res.json(data);
});


//shutdown
process.on("SIGINT", async () => {
  await closeDB();
  process.exit(0);
});
process.on("SIGTERM", async () => {
  await closeDB();
  process.exit(0);
});

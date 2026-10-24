import express from "express";
import clientRouter from "./clients.js";
import { connectDB, closeDB } from "./connectMongo.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

const app = express();
app.use(express.json());

//start server
async function startServer() {
  console.log("Starting Server");

  // await connectDB();
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });

  // auth Google
}

startServer();

//routes
app.use("/api", clientRouter);

//shutdown
process.on("SIGINT", async () => {
  await closeDB();
  process.exit(0);
});
process.on("SIGTERM", async () => {
  await closeDB();
  process.exit(0);
});

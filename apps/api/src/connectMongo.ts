import { MongoClient, Db } from "mongodb";

let client: MongoClient;
let db: Db;

export async function connectDB() {
  if (db) return db;

  client = new MongoClient(process.env.MONGO_URI!);
  await client.connect();

  db = client.db("lovewrapped");
  console.log("MongoDB connected");

  return db;
}

export function getDB() {
  if (!db) {
    throw new Error("Database not connected");
  }
  return db;
}

export async function closeDB() {
  if (client) {
    await client.close();
    console.log("MongoDB closed");
  }
}

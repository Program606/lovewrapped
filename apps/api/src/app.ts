import express from "express";
import cors from "cors";
import fs from "fs/promises";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
export const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/lovewrapped/data", (req, res) => {
  const tops = ["Black", "White", "Red", "Blue", "Green"];
  const bottoms = ["Jeans", "Shorts", "Skirt", "Trousers"];
  const shoes = ["Sneakers", "Boots", "Sandals", "Loafers"];

  res.json({
    top: _.sample(tops),
    bottom: _.sample(bottoms),
    shoes: _.sample(shoes),
    outfitId: uuidv4(),
  });
});
app.get("/api/lovewrapped/:id", async (req, res) => {
  const id = req.params.id;
  let content;

  try {
    content = await fs.readFile("data/comments/${id}.txt", "utf-8");
  } catch (err) {
    //TODO:
  }
  res.json({
    content: content,
  });
});
app.post("/api/saving", async (req, res) => {
  const id = uuidv4();
  const content = req.body.content;

  if (!content) {
    return res.sendStatus(400);
  }
  await fs.mkdir("data/comments", { recursive: true });
  await fs.writeFile(`data/comments/${id}.txt`, content);
  
  res.status(201).json({
    id: id,
  });
});

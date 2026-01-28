import express from "express";
import fs from "fs/promises";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import { getDB } from "./connectMongo.js";
import {introReq} from "./models/clientModel.js";

const router = express.Router();

//GET all client
router.get("/", (req, res) => {
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
//GET single client
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  let content;

  try {
    content = await fs.readFile("data/comments/${id}.txt", "utf-8");
  } catch (err) {
    //TODO:
  }
  res.json({
    message: "Get client " + id,
  });
});
//POST a new client
router.post("/", async (req, res) => {
  const { id, type, headline, subheadline, from, to, bg, accent } = req.body;

  try {
    const introSlide = await introReq.create({
      id,
      type,
      headline,
      subheadline,
      from,
      to,
      bg,
      accent,
    });
    res.status(200).json(introSlide);
  } catch (err) {
    res.status(400).json({ message: "Error creating intro slide", error: err });
  }

  res.json({ message: `Created client ${id}` });
});
//DELETE a client
router.delete("/:id", async (req, res) => {
  res.json({ message: "Delete client" });
});
//UPDATE a client
router.patch("/:id", async (req, res) => {
  res.json({ message: "Update client" });
});

export default router;

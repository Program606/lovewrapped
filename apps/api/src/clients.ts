import express from "express";
import fs from "fs/promises";
import _ from "lodash";
import { introReq } from "./models/clientModel.js";
import { dummyData1 } from "./data/dummyData.js";

const router = express.Router();

//Get all clients
router.get("/", async (req, res) => {
  try {
    res.json(dummyData1);
  } catch (err) {
    res.json({ message: err });
  }
});
//GET single slide
router.get("/:id", async (req, res) => {
  const slide = dummyData1.find((n) => n.id === req.params.id);
  res.send(slide);
});
//POST a new client
// router.post("/", async (req, res) => {
//   const { id, type, headline, subheadline, from, to, bg, accent } = req.body;

//   try {
//     const introSlide = await introReq.create({
//       id,
//       type,
//       headline,
//       subheadline,
//       from,
//       to,
//       bg,
//       accent,
//     });
//     res.status(200).json(introSlide);
//   } catch (err) {
//     res.status(400).json({ message: "Error creating intro slide", error: err });
//   }

//   res.json({ message: `Created client ${id}` });
// });
//DELETE a client
router.delete("/:id", async (req, res) => {
  res.json({ message: "Delete client" });
});
//UPDATE a client
router.patch("/:id", async (req, res) => {
  res.json({ message: "Update client" });
});

export default router;

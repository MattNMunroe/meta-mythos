const express = require("express");
const db = require("../db/dbConfig");
const deity = express.Router();
const axios = require("axios");
const {
  getAllDeities,
  getDeity,
  deleteDeity,
  createDeity,
  updateDeity,
} = require("../queries/deity");
// const { all } = require("../app");
//controller is needed to have deity popup in backend/postman

//INDEX
deity.get("/", async (req, res) => {
  const allDeities = await getAllDeities();
  res.json({ payload: allDeities });
});

//SHOW
deity.get("/:id", async (req, res) => {
  const { id } = req.params;
  const deity = await getDeity(id);
  if (deity.id) {
    res.json({ success: true, payload: deity });
  } else {
    res.status(404).json({ success: false, payload: "not found" });
  }
});

//CREATE
deity.post("/", async (req, res) => {
  try {
    const deity = await createDeity(req.body);
    res.json({ success: true, payload: deity });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, payload: "server cannot process request" });
  }
});

//UPDATE
deity.put("/:id", async (req, res) => {
  try {
    const deity = await updateDeity(req.params.id, req.body);
    res.json({ success: true, payload: deity });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//DELETE
deity.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedDeity = await deleteDeity(id);
  if (deletedDeity) {
    if (deletedDeity.id) {
      res.status(200).json({ success: true, payload: deletedDeity });
    } else {
      res.status(404).json({ success: false, payload: "Deity not found." });
    }
  } else {
    console.error(deletedDeity);
    res.status(500).json({ success: false, payload: "server error" });
  }
});

module.exports = deity;

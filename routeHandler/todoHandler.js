const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const todoSchema = require("../schemas/todoSchema");

// Creating Model
const Todo = new mongoose.model("Todo", todoSchema); // Capital + Singular name

// GET ALL THE TODOS
router.get("/", (req, res) => {});

// GET A TODO bt ID
router.get("/:id", async (req, res) => {});

// POST TODO
router.post("/", async (req, res) => {});

// POST MULTIPLE TODO
router.post("/all", async (req, res) => {});

// UPDATE TODO / PUT TODO
router.put("/:id", async (req, res) => {});

// DELETE TODO
router.delete("/id", async (req, res) => {});

module.exports = router;

const express = require("express");
const router = express.Router();

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

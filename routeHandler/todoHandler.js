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

// POST A TODO
router.post("/", async (req, res) => {
    const newTodo = new Todo(req.body);
    // await newTodo.save((err) => {
    //     if (err) {
    //         res.status(500).json({
    //             error: "There was an error saving the new Todo",
    //         });
    //     } else {
    //         res.status(200).json({
    //             error: "New Todo saved successfully",
    //         });
    //     }
    // });
    newTodo
        .save()
        .then(() => {
            res.status(200).json({
                message: "New Todo saved successfully",
            });
        })
        .catch((err) => {
            res.status(200).json({
                error: "There was an error saving the new Todo",
                code: err,
            });
        });
});

// POST MULTIPLE TODO
router.post("/all", async (req, res) => {
    try {
        Todo.insertMany(req.body);
        res.status(200).json({
            message: "Array of objects inserted successfully",
        });
    } catch (err) {
        res.status(500).json({
            
            error: "There was an error inserting the new Todo Array",
            code: err,
        });
    }
});

// UPDATE TODO / PUT TODO
router.put("/:id", async (req, res) => {});

// DELETE TODO
router.delete("/id", async (req, res) => {});

module.exports = router;

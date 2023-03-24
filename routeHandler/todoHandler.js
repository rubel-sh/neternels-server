const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const todoSchema = require("../schemas/todoSchema");

// Creating Model
const Todo = new mongoose.model("Todo", todoSchema); // Capital + Singular name

// GET ALL THE TODOS
router.get("/", async (req, res) => {
    try {
        const getAllTodos = await Todo.find({ status: "active" })
            .select({
                title: 1, //Will show only title field
            })
            .limit(2); // Will return only fist two titles
        res.status(200).json({
            message: "Received all the tasks",
            results: getAllTodos,
        });
    } catch (err) {
        res.status(500).json({
            error: "There was an error getting todos",
            code: err,
        });
    }
});

// GET A TODO bt ID
router.get("/:id", async (req, res) => {
    try {
        const getAllTodos = await Todo.find({ _id: req.params.id });
        res.status(200).json({
            message: "Received all the tasks",
            results: getAllTodos,
        });
    } catch (err) {
        res.status(500).json({
            error: "There was an error getting todos",
            code: err,
        });
    }
});

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

    try {
        const saved = await newTodo.save();
        res.status(200).json({
            message: "New Todo saved successfully",
            result: saved,
        });
    } catch (err) {
        res.status(500).json({
            error: "There was an error saving the new Todo",
            code: err,
        });
    }
});

// POST MULTIPLE TODO
router.post("/all", async (req, res) => {
    try {
        const InsetMany = await Todo.insertMany(req.body);
        res.status(200).json({
            message: "Array of objects inserted successfully",
            result: InsetMany,
        });
    } catch (err) {
        res.status(500).json({
            error: "There was an error inserting the new Todo Array",
            code: err,
        });
    }
});

// UPDATE TODO / PUT TODO
router.put("/:id", async (req, res) => {
    try {
        // 1 parameter : Khujo
        // 2 parameter : Ki update korbo
        // 3 parameter : callback => eita try catch e convert hobe

        // updateOne return {acknoledged, updateCount, ...}
        // findByIdAndUpdate returns { updated doc is new:true option is given }
        const updateOne = await Todo.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: { status: "active" } },
            { new: true }
        );
        res.status(200).json({
            message: "Updated Successfully",
            result: updateOne,
        });
    } catch (err) {
        res.status(500).json({
            error: "There was an error updating the Todo",
            code: err,
        });
    }
});

// DELETE TODO
router.delete("/id", async (req, res) => {});

module.exports = router;

const express = require("express");
const path = require("path");

// экземпляр роутера
const itemsRouter = express.Router();

// Get all items
itemsRouter.get("/", (req, res) => {
  res.send("Get all items");
});

// Get item id
itemsRouter.get("/:id", (req, res) => {
  const { id } = req.body;
  res.send(`Get item ${id}`);
});

// Post new item
itemsRouter.post("/", (req, res) => {
  res.send("Post new item");
});

//
module.exports = itemsRouter;

const express = require("express");
const path = require("path");
const { getAllItems, createItem } = require("../controllers/items");
// const multer = require("multer");
const fileMiddleware = require("../middleware/multer");

// multer.diskStorage - создание конфигурации multer
// const storage = multer.diskStorage({
//   destination: "./assets/",
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname),
//     );
//   },
// });

// создание экземпляра multer
// const upload = multer({
//   storage,
// });

// экземпляр роутера
const itemsRouter = express.Router();

// GET /api/items
itemsRouter.get("/", getAllItems);

// GET /api/items/:id
itemsRouter.get("/:id", (req, res) => {
  const { id } = req.body;
  res.send(`Get item ${id}`);
});

// POST /api/items
// itemsRouter.post("/", upload.single("itemImage"), createItem);
itemsRouter.post("/", fileMiddleware.single("itemImage"), createItem);

//
module.exports = itemsRouter;

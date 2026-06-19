const Item = require("../models/item");

// GET
const getAllItems = async (req, res) => {
  try {
    const allItems = await Item.find();

    res.status(200).json(allItems);
  } catch (error) {
    console.error(`Ошибка при получении getAllItems: ${error.message}`);
    res.status(500).json({ message: "Не удалось загрузить Items" });
  }
};

// POST
const createItem = async (req, res) => {
  try {
    const { name, price, description, capacity } = req.body;

    // Формируем URL для доступа к файлу
    // const baseUrl = `http://localhost:${process.env.PORT}`;

    const itemModel = {
      name,
      price,
      description,
      capacity,
      // itemImage: `http://localhost:${process.env.PORT}/static/${req.file.filename}`,
      itemImage: `/assets/${req.file.filename}`,
    };

    const newItem = await Item.create(itemModel);
    res.status(201).json(newItem);
  } catch (error) {
    console.error(`Ошибка при создании createItem: ${error.message}`);
    res.status(500).json({ message: "Не удалось создать Item" });
  }
};

module.exports = { getAllItems, createItem };

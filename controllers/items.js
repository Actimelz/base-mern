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
  // формируем объект ошибки
  const errors = {};

  if (!req.file) {
    errors.itemImage = { message: "Нет изображения" };
  }
  if (!req.body.title) {
    errors.title = { message: "Укажите название" };
  }
  if (!req.body.price) {
    errors.price = { message: "Укажите цену" };
  }
  if (req.body.description && req.body.description.length > 500) {
    errors.description = { message: "Превышен размер описания (500 символов)" };
  }

  // проверка на наличие ошибок
  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }

  //
  try {
    const {
      title,
      price,
      description = "Нет описания",
      capacity = "Не указано",
    } = req.body;

    // Формируем URL для доступа к файлу
    // const baseUrl = `http://localhost:${process.env.PORT}`;

    const itemModel = {
      title,
      price,
      description,
      capacity,
      itemImage: `http://localhost:${process.env.PORT}/static/${req.file.filename}`,
      // itemImage: `/assets/${req.file.filename}`,
    };

    const newItem = await Item.create(itemModel);
    res.status(201).json(newItem);
  } catch (error) {
    console.error(`Ошибка при создании createItem: ${error.message}`);
    res.status(500).json({ message: "Не удалось создать Item" });
  }
};

module.exports = { getAllItems, createItem };
// fixes

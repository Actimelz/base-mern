const express = require("express");
const mongoose = require("mongoose"); // mongoose ODM
// const { MongoClient } = require("mongodb"); // нативный драйвер
const path = require("path");
require("dotenv").config();

//
const app = express();
const port = process.env.PORT || 8001;
const mongoURI = process.env.MONGO_DB_URI;

// middlewares
app.use(express.json()); // для автопарсинга json ("Content-Type": "application/json")
app.use(express.urlencoded({ extended: true })); // для парсинга form-data ("Content-Type": "application/x-www-form")
app.use("/static", express.static(__dirname + "/assets")); // путь к изображениям

//
app.use("/api/items", require("./routes/items"));

// Подключение через MongoClient
// const myMongoClient = new MongoClient(mongoURI); // клиент

// myMongoClient.connect().then(() => {
//   console.log("Соединение с БД успешно!");

//   app.listen(port, () => {
//     console.log(`Сервер запущен! Порт: ${port}`);
//   });
// });

// Подключение через Mongoose
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Соединение с БД успешно!");

    app.listen(port, () => {
      console.log(`Сервер запущен! Порт: ${port}`);
    });
  })
  .catch((error) => {
    console.error("Ошибка подключения к БД:", error.message);
    process.exit(1);
  });

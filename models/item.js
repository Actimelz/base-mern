const mongoose = require("mongoose");

// создание mongoose схемы
const itemSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  capacity: {
    type: String,
    required: true,
  },
  itemImage: {
    type: String,
    required: true,
  },
});

// создание модели на основе схемы
const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
//
// module.exports = mongoose.model("Item", itemSchema);

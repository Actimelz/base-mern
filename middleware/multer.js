const multer = require("multer");
const path = require("path");

//
// multer.diskStorage - создание конфигурации multer
const storage = multer.diskStorage({
  destination: "./assets/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname +
        "-" +
        Date.now() +
        path.extname(file.originalname).replace(" ", "-").toLowerCase(),
    );
  },
});

// типы возможных загружаемых форматов
const types = ["image.png", "image.jpeg", "image.jpg"];
// проверка соответствия типов
const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// создание экземпляра multer
const upload = multer({
  storage,
  fileFilter,
});

// module.exports = multer({ storage, fileFilter });
module.exports = upload;

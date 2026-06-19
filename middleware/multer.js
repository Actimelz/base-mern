const multer = require("multer");

//
// multer.diskStorage - создание конфигурации multer
const storage = multer.diskStorage({
  destination: "./assets/",
  filename: (req, file, cb) => {
    cd(
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
    cd(null, false);
  }
};

// создание экземпляра multer
// const upload = multer({
//   storage,
// });

module.exports = multer({ storage, fileFilter });

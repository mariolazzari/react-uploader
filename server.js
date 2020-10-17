const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");

const app = express();
app.use(fileUpload());

app.get("/upload", (req, res) => {
  res.json({ message: "OK" });
});

app.post("/upload", (req, res) => {
  if (!req.files) {
    return res.status(400).json({ message: "No file attached." });
  }

  const file = req.files.file;
  const fileName = file.name;

  console.log(file);

  file.mv(`${__dirname}/uploads/${fileName}`, error => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error });
    }

    res.status(200).json({ fileName, filePath: `/uploads/${fileName}` });
  });
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(5000, () => console.log("Server started"));

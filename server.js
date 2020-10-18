const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();
app.use(fileUpload());

app.get("/upload", (req, res) => {
  res.json({ message: "OK" });
});

app.post("/upload", (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).json({ message: "No file attached." });
  }

  // file properties
  const { name: fileName, mimetype, size, mv } = req.files.file;
  const filePath = `/uploads/${fileName}`;
  // move file to upload path
  mv(`${__dirname}${filePath}`, error => {
    if (error) {
      return res.status(500).json({ error });
    }
    res.status(200).json({ fileName, filePath, mimetype, size });
  });
});

app.use("/uploads", express.static(`${__dirname}/uploads`));

app.listen(5000, () => console.log("Server started"));

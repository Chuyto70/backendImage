const express = require("express");
const router = express.Router();
const path = require("path");
router.get("/", (req, res) => {
  res.send("Hola mundo");
});

router.post("/upload", (req, res) => {
  let file = req.files.file;
  let ext = file.name.split(".");
  let id = Date.now();
  file.mv(`./files/${id}.${ext[1]}`, (err) => {
    if (err) return res.status(500).send({ message: err });

    return res
      .status(200)
      .send({ message: "Enviado", url: `/image/${id}.${ext[1]}` });
  });
});

router.get("/image/:id", (req, res) => {
  let id = req.params.id;

  res.sendFile(path.join(__dirname, "../files", id));
  //res.sendFile("../files/IMG-20230217-WA0005.jpg");
});

module.exports = router;

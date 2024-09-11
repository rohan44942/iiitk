const express = require("express");
const fileUpload = require("express-fileupload");
const router = express.Router();
const path = require("path");
// const expressFileUpload = require("express-fileUpload");
const assetsFolder = path.join(__dirname, "Assets");
router.use(fileUpload());
router.post("/", (req, res) => {
  const { avatar } = req.files;
  try {
    avatar.mv(path.join(assetsFolder, avatar.name));
    console.log(req.files);
    res.status(200).json({ message: "ok" });
  } catch {
    throw new Error("Error in the avatar and res.status");
  }
});

module.exports = router;

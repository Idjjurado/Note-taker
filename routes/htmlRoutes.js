const path = require("path");
const router = require("express").Router();

// this router gets the notes.html file
router.get("/notes", (req, res) => {
  // this sends the notes.html file to the client
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// this router gets the index.html file
router.get("*", (req, res) => {
  // this sends the index.html file to the client
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;

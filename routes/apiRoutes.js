const router = require("express").Router();
const store = require("../db/store");

// this router gets all notes from the db.json file
router.get("/notes", (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

// this router adds a new note to the db.json file
router.post("/notes", (req, res) => {
  store
    .addNote()
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// this router deletes the note with an id equal to req.params.id
router.delete("/notes/:id", (req, res) => {
  store
    .removeNote()
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;

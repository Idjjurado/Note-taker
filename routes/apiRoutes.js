// will be adding lots of notes since this was the most difficult to understand
const router = require("express").Router();
const store = require("../db/store");

// this router gets all notes from the db.json file
router.get("/notes", (req, res) => {
  // this is the getNotes function from store.js
  store
    // this returns all notes from the db.json file
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

// this router adds a new note to the db.json file
router.post("/notes", (req, res) => {
  // this is the addNote function from store.js
  store
    // req.body is the new note that is being added
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// this router deletes the note with an id equal to req.params.id
router.delete("/notes/:id", (req, res) => {
  // this is the removeNote function from store.js
  store
    // req.params.id is the id of the note that is being deleted
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;

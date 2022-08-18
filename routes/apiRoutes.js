const router = require("express").Router();
const Notes = require("../db/NotesAPI");

router.get("/", (req, res) => {
  Notes.read().then((notes) => {
    return res.json(notes);
  });
});

router.get("/notes", (req, res) => {
  Notes.read()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => console.log(err));
});

router.post("/notes", (req, res) => {
  Notes.addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => console.error(err));
});

router.delete("/notes/:id", (req, res) => {
  Notes.removeNote(req.params.id)
    .then(() => res.json({ message: `${req.params.id} note was  deleted` }))
    .catch((err) => console.error(err));
});

module.exports = router;

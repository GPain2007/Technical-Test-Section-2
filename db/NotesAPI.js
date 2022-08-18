const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class NotesAPI {
  read() {
    return readFileAsync("db/db.json", "utf8");
  }

  getNotes() {
    return this.read()
      .then((notes) => {
        let parseNotes;

        try {
          parseNotes = [].concat(JSON.parse(notes));
        } catch (err) {
          parseNotes = [];
        }

        return parseNotes;
      })
      .catch();
  }
  write(notes) {
    return writeFileAsync("db/db.json", JSON.stringify(notes));
  }
  addNote(note) {
    const { id, title, text } = note;

    const newNote = {
      id: id,
      title: title,
      text: text,
    };
    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);
  }

  removeNote(id) {
    return this.getNotes().then((note) =>
      note
        .filter((note) => note.id !== note.id)
        .then((filteredNotes) => this.write(filteredNotes))
        .catch((err) => console.error(err))
    );
  }
}

module.exports = new NotesAPI();

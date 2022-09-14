class NotesModel {
  constructor() {
    this.notes = [];
  }
  getNotes() {
    return this.notes;
  }
  addNote(note) {
    this.notes.push(note);
  }
  reset() {
    this.notes = [];
  }
}
const notesmodel = new NotesModel
notesmodel.addNote("Buy milk");
notesmodel.addNote("Go to the gym");

module.exports = NotesModel;

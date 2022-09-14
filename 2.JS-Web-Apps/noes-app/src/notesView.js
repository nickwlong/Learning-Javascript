const NotesModel = require('./notesModel')

class NotesView {
  constructor(model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container');
    console.log(this.mainContainerEl);
  }

  addNoteToPage(note) {
    const newNote = document.createElement('div');
    newNote.textContent = note;
    newNote.className = 'note';
    this.mainContainerEl.append(newNote);
  }

  displayNotes() {
    const notes = this.model.getNotes()
    console.log(notes)
    notes.forEach((note) => {
      console.log(note)
      this.addNoteToPage(note)
    });

  }

}

module.exports = NotesView;

const NotesModel = require('./notesModel')

class NotesView {
  constructor(model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container');
    //Select new button and add event listener for 'click'
    //Add a function to the click that creates newNote, stores the value from the form #add-note-input to addNewNote
    document.querySelector('#add-note-btn').addEventListener('click', () => {
      const newNote = document.querySelector('#add-note-input').value;
      this.addNewNote(newNote)
    })
    console.log(this.mainContainerEl);
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    //Updates the page with the new note
    this.displayNotes()
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

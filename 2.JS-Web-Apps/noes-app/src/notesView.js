const NotesModel = require('./notesModel');

class NotesView {
  constructor(model, api) {
    this.model = model
    this.api = api
    this.mainContainerEl = document.querySelector('#main-container');

    document.querySelector('#add-note-btn').addEventListener('click', () => {

      const newNote = document.querySelector('#add-note-input').value;

      this.api.createNote(newNote)
      this.addNewNote(newNote)
      this.displayNotes()

      document.querySelector('#add-note-input').value = ''

    })
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
    const pageNotes = document.querySelectorAll('.note');
    pageNotes.forEach((element) => {
      element.remove()
    });
    const notes = this.model.getNotes()
    notes.forEach((note) => {
      this.addNoteToPage(note)
    });
  }

  displayNotesFromApi() {
    this.api.loadData((data) => {
      
      this.model.setNotes(data)
      this.displayNotes()
      });
    }
  

}

module.exports = NotesView;

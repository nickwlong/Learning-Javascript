const NotesModel = require("./notesModel");
const notesmodel = new NotesModel();
const NotesView = require("./notesView");
const notesView = new NotesView(notesmodel);

notesmodel.addNote('This is an example note');
notesView.displayNotes();
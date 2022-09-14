const NotesModel = require("./notesModel");
const notesmodel = new NotesModel();
const NotesView = require("./notesView");
const notesView = new NotesView(notesmodel);


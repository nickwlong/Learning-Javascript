const NotesModel = require("./notesModel");
const notesmodel = new NotesModel();

const NotesApi = require("./notesApi")
const api = new NotesApi

const NotesView = require("./notesView");
const notesView = new NotesView(notesmodel, api);

notesView.displayNotesFromApi()

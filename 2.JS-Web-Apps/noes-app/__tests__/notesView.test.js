/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesModel = require("../src/notesModel");
const NotesView = require("../src/notesView");

describe("NotesView", function() {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    notesmodel = new NotesModel();
    notesView = new NotesView();
  });

  describe("#addNoteToPage", function() {
    test('Adds a note to page. Note count == 2', function() {
      notesView.addNoteToPage('Testing');
      expect(document.getElementsByClassName('note').length).toBe(2);
    })

  });

  describe("#displayNotes", function() {
    test('gets list of notes and creates a new div element for each', function() {
      document.body.innerHTML = fs.readFileSync('./index.html');
      notesmodel = new NotesModel();
      notesView = new NotesView(notesmodel);

      
      notesmodel.addNote("Buy milk");
      notesmodel.addNote("Go to the gym");
      
      notesView.displayNotes();

      expect(document.getElementsByClassName('note').length).toBe(3);
    })

  });
});

// npm i jest-environment-jsdom

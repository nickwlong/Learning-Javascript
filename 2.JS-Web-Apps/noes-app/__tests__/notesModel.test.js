const NotesModel = require('../src/notesModel')
// model.reset();

// model.getNotes(); // should now return []


describe('NotesModel', function() {

  let notesmodel

  beforeEach(() => {
    notesmodel = new NotesModel();
  })
  describe('#getNotes', function() {
    test('getNotes returns a blank array', function() {
      expect(notesmodel.getNotes()).toEqual([])
    })  
  })
  describe('#addNote', function() {
    test('Adds two notes and returns an array of the notes', function() {
      notesmodel.addNote('Buy milk');
      notesmodel.addNote('Go to the gym');
      expect(notesmodel.getNotes()).toEqual(['Buy milk', 'Go to the gym'])
    })
  })
  describe('#reset', function() {
    test('Resets the notes array to having no entries', function() {
      notesmodel.addNote('Buy milk');
      notesmodel.addNote('Go to the gym');
      notesmodel.reset()
      expect(notesmodel.getNotes()).toEqual([])
    })

  })

  


})
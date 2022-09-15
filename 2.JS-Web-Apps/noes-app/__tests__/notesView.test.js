/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesModel = require("../src/notesModel");
const NotesView = require("../src/notesView");
const Api = require('../src/notesApi');
const { application } = require("express");

require('jest-fetch-mock').enableMocks()

describe("NotesView", function() {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    notesmodel = new NotesModel;
    api = new Api
    notesView = new NotesView(notesmodel, api);
  });

  describe("#addNoteToPage", function() {
    test('Adds a note to page. Note count == 1', function() {
      notesView.addNoteToPage('Testing');
      expect(document.getElementsByClassName('note').length).toBe(1);
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

      expect(document.getElementsByClassName('note').length).toBe(2);
    })

  });

  describe('Form creates new input with button', function() {
    document.body.innerHTML = fs.readFileSync('./index.html');
    
    const model = new NotesModel();
    const api = new Api;
    const view = new NotesView(model, api);

    const input = document.querySelector('#add-note-input'); //collects the query of add-note-input
    input.value = 'Testing a note addition' //creates mock input from form

    const button = document.querySelector('#add-note-btn'); //collects the button
    button.click() //clicks the button



    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toBe('Testing a note addition')

  })

  describe('Form creates new input with button twice, but only shows two.', function() {
    document.body.innerHTML = fs.readFileSync('./index.html');
    
    const model = new NotesModel();
    const api = new Api;
    const view = new NotesView(model, api);

    const input = document.querySelector('#add-note-input'); //collects the query of add-note-input
    input.value = 'Testing a note addition' //creates mock input from form

    const button = document.querySelector('#add-note-btn'); //collects the button
    button.click() //clicks the button

    const input2 = document.querySelector('#add-note-input'); //collects the query of add-note-input
    input2.value = 'New note addition' //creates mock input from form

    const button2 = document.querySelector('#add-note-btn'); //collects the button
    button2.click() //clicks the button


    expect(document.querySelectorAll('div.note').length).toEqual(2);
    expect(document.querySelectorAll('div.note')[0].textContent).toBe('Testing a note addition')
  })

  describe('#displayNotesFromApi', () => {
    it('fetches notes using Api and displays notes', async () => {

      document.body.innerHTML = fs.readFileSync('./index.html');


      const api = new Api();

      fetch.mockResponse(JSON.stringify(['Test API response']));

      const view = new NotesView(notesmodel, api);

      view.displayNotesFromApi();

      await new Promise((resolve, reject) => setTimeout(resolve, 200));

      expect(document.querySelectorAll('div.note').length).toEqual(1);
      expect(document.querySelectorAll('div.note')[0].textContent).toBe('Test API response');

      })

    })
  });


// npm i jest-environment-jsdom

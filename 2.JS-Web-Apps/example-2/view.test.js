/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const View = require('./view');
 
 describe('Page view', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });


  it('displays 2 paragraphs', () => {
     document.body.innerHTML = fs.readFileSync('./index.html');
 
     const view = new View();
 
     expect(document.querySelectorAll('p').length).toBe(2);
  });

  it('displays 4 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();
    view.addParagraph();
    view.addParagraph();

    expect(document.querySelectorAll('p').length).toBe(4);
 });

  it('displays a title', () => {
    const view = new View();
    view.displayTitle();
    expect(document.querySelector('h2').innerText).toBe('My amazing website');
  });

  it('deletes all paragraphs', () => {
    const view = new View();
    view.deleteParagraphs();
    expect(document.querySelectorAll('p').length).toBe(0);
  })

 });

 // npm i jest-environment-jsdom
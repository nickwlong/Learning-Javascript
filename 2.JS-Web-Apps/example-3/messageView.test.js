/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {

  it('clicks the show message button', () => {

    document.body.innerHTML = fs.readFileSync('./index.html');

    const inputEl = document.querySelector('#message-input');
    inputEl.value = 'Some text'

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').innerText).toBe('Some text')
  });


  it('clicks the hide message button button', () => {
    
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();

    const buttonEl2 = document.querySelector('#hide-message-button');
    buttonEl2.click();

    expect(document.querySelector('#message')).toBeNull();

  });
});
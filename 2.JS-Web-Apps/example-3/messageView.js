class MessageView {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    this.buttonEl = document.querySelector('#show-message-button');

    this.hideButtonEl = document.querySelector('#hide-message-button')

    this.buttonEl.addEventListener('click', () => {
      this.displayMessage();
    });

    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    })
  }

  displayMessage() {

    const message = document.querySelector('#message-input').value;

    const newDiv = document.createElement('div');
    newDiv.id = 'message';
    newDiv.innerText = message;
    this.mainContainerEl.append(newDiv);

    document.querySelector('#message-input').value = '';

    console.log('Thanks for clicking me!');
  }

  hideMessage() {
    const message = document.getElementById('message')
    message.remove()
  }
}

module.exports = MessageView;
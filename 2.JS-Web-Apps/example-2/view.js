class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');
    console.log(this.mainContainerEl);
  }

  addParagraph() {
    const newParagraph = document.createElement('p');
    newParagraph.innerText = 'I was created dynamically';
    this.mainContainerEl.append(newParagraph)
  }

  displayTitle() {
    const newTitle = document.createElement('h2');
    newTitle.innerText = 'My amazing website'
    this.mainContainerEl.append(newTitle)
  }

  deleteParagraphs() {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
      paragraph.remove()
    })
    
  }
}

module.exports = View;
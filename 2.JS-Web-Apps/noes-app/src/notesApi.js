class NotesApi {
  
  loadData(callback) {
    fetch('http://localhost:3000/notes')
    .then(response => response.json())
    .then((data) => {
      callback(data)
    });

  }

  createNote(note, callback = null) {
    fetch('http://localhost:3000/notes', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "content": note }),
    })
    .then((note) => {
      callback
    })
  }

}

// notesApi = new NotesApi
// notesApi.loadData((response) => {console.log(response)})


module.exports = NotesApi
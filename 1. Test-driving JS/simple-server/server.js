const express = require('express');
const app = express();
const port = 3000;
let count = 0

app.get('/', (req, res) => {
  res.send(`Hello, express! This changes things. Count = ${count}`)
});

app.post('/counter', (req, res) => {
  res.send(count += 1)
  res.send('root')
})

app.get('/counter'), (req, res) => {
  res.send('counter')
  res.send(`${count}`)
}

app.post('/delete', (req, res) => {
  res.send(count = 0)
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);
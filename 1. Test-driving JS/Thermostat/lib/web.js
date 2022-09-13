const express = require('express');
const app = express();
const port = 3000;

const Thermostat = require('./Thermostat')
const thermo = new Thermostat

app.get('/temperature', (req, res, next) => {
  temperature = thermo.getTemperature()
  res.send(JSON.stringify(temperature))
});

app.post('/up', (req, res, next) => {
  thermo.up()
  res.status(200).send()
})

app.post('/down', (req, res, next) => {
  thermo.down()
  res.status(200).send()
})

app.delete('/temperature', (req, res, next) => {
  thermo.reset()
  res.status(200).send()
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);
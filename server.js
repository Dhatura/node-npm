const config = require('./config.json');
const { add, subtract } = require('./components/math.js');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});

console.log(`5 + 3 = ${add(5, 3)}`);
console.log(`5 - 3 = ${subtract(5, 3)}`);
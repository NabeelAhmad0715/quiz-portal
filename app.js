const express = require('express');

const app = express();
require('dotenv').config();

const port = process.env.PORT;

// app = app.Route();
app.get('/', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end(
    '<h1 style="text-align:center">Welcome to InvoZone NodeJS Training Session</h1>',
  );
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
module.exports = app;

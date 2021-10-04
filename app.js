const express = require('express');
const indexRouter = require('./routes/index');

const app = express();
require('dotenv').config();

const port = process.env.PORT;

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404).send({ error: 'Not found' });
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
module.exports = app;

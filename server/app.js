require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 8888;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app
  .use(express.static(path.resolve(__dirname, '../client/build')))
  .use(cookieParser());

app.use('/spotify', require('./routes/spotify'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`server is running on PORT: ${PORT}`);
});

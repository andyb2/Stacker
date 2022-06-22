require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const { join } = require('path');
const cors = require('cors')
const PORT = process.env.PORT || 8888;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(join(__dirname, '/public')))
    .use(cookieParser());

app.use("/spotify", require("./routes/spotify"));

app.listen(PORT, () => {
    console.log(`server is running on PORT: ${PORT}`)
});

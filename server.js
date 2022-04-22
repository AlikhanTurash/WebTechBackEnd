const express = require("express");
const app = express();
const port = 3000;
const axios = require('axios')
const main = require("./routes/routes");
const {response} = require("express");

app.use(express.static(
    'public'));

app.set('view engine', 'ejs');

app.use('/', main);


app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);


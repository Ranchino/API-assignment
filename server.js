const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const path = require("path")

app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/index.html')))

app.listen(port, () => console.log('Exempel app listening on port ${port}!'));


app.use(express.static('public'))
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const path = require("path");
const fetch = require('node-fetch');


app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/public/index.html')));

app.listen(port, () => console.log(`Exempel app listening on port ${port}!`));


app.use(express.static('public'));

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&&APPID=f12b78c622bfdaeac652753b0c7762b0';
const country = 'Sweden';
const unit = '&units=metric';



app.get('/getWeather/:city', function (req, res) {
    var city = req.params.city; 
    const url = baseUrl+city+","+country+unit+apiKey;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        res.send(data)
    })
    .catch(err => console.log(err))

})


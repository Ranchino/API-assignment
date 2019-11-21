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




app.get('/getWeather/:city', function (req, res) {
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
    /* const apiKey = '&&APPID=f12b78c622bfdaeac652753b0c7762b0'; */
    const apiKey = '&&APPID=aab1b3554741d4087b84336149261dd3';
    const country = 'Sweden';
    const unit = '&units=metric';
    var city = req.params.city; 
    const url = baseUrl+city+","+country+unit+apiKey;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        res.send(data)
    })
    .catch(err => console.log(err))

})

app.get('/getCityInfo/:city', function (req, res) {
    var city = req.params.city;
    const url = `https://restcountries.eu/rest/v2/capital/${city}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        res.send(data)
    })
    .catch(err => console.log(err))
})


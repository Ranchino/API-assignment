function initSite(){
    var inputText = "stockholm"
    getWeather(inputText); 
    getCityInfo(inputText);
}

function submitButton(){
    event.preventDefault();
    var inputText = document.getElementById("searchBox").value.toLowerCase();
    if(listOfCapitals.indexOf(inputText) !== -1) {
        console.log('match');
        getWeather(inputText);
        getCityInfo(inputText);
    }else{
        displayModal();
    }
    
}

var inputText,
element = document.getElementById("searchBox");
if(element != null){
    inputText = element.value.toLowerCase();
    inputText.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchButton").click();
        if(listOfCapitals.indexOf(inputText) !== -1) {
            console.log('match');
            getWeather(inputText);
            getCityInfo(inputText);
        }else{
            displayModal();
        }
      }
    });
}else{
    inputText = null
}



function getWeather(inputText){
    const url = `http://localhost:3000/getWeather/${inputText}`;
    (async () => {
        const response = await fetch(url, {});
        const responseData = await response.json();
        /* console.log(responseData); */
        renderWeather(responseData);
    })()
}

function renderWeather(responseData){
    var tempContainer = document.getElementById("temp");
    var cityContainer = document.getElementById("city");
    var countryContainer = document.getElementById("country");
    var foreCast = document.getElementById("foreCast");

    foreCast.innerHTML = responseData.weather[0].description;
    countryContainer.innerHTML = responseData.sys.country;
    cityContainer.innerHTML = responseData.name;
    tempContainer.innerHTML = Math.round(responseData.main.temp)+ "&#8451";

}

function getCityInfo(inputText){
    const url = `http://localhost:3000/getCityInfo/${inputText}`;
    (async () => {
        const response = await fetch(url, {});
        const responseData = await response.json();
        /* console.log(responseData); */
        renderCityInfo(responseData);
    })()
}

function renderCityInfo(responseData){
    /* console.log("Info om staden funkar"); */
    var populationContainer = document.getElementById("population");
    var countryName = document.getElementById("countryName");
    var imageFlag = document.getElementById("imageFlag");

    if(imageFlag.innerHTML.length) {
        imageFlag.innerHTML = ""
    }
    
    var flag = document.createElement("img")
    flag.src = responseData[0].flag;
    flag.style.width.max = "45em";
    flag.style.height = "25em";
    flag.style.borderRadius = "8px";
    imageFlag.appendChild(flag);

    
    countryName.innerHTML = responseData[0].name;
    populationContainer.innerHTML = responseData[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function displayModal() {
    document.getElementById("modal").style.display = "block";
    document.getElementById("myDialog").showModal(); 
}

function noModal(){
    document.getElementById("myDialog").close();
    document.getElementById("modal").style.display = "none";
}

window.addEventListener('DOMContentLoaded', function () {
    document.getElementById("modal").addEventListener("click", noModal, false);
});

/* window.addEventListener("click", function(event) {
    if (event.target == modal) {
        console.log("klicket funkar");
    }
}); */
/* window.onclick = function(event) {
    if (modal.style.display == "block") {
        document.getElementById("myDialog").close();
        document.getElementById("modal").style.display = "none";
    }
} */

listOfCapitals = [ "abu dhabi", 
"abuja", 
"accra", 
"addis ababa", 
"algiers", 
"amman", 
"amsterdam", 
"andorra la vella", 
"ankara", 
"antananarivo", 
"apia", 
"ashgabat", 
"asmara", 
"astana", 
"asunción", 
"athens", 
"baghdad", 
"baku", 
"bamako", 
"bandar seri begawan", 
"bangkok", 
"bangui", 
"banjul", 
"basseterre", 
"beijing", 
"beirut", 
"belgrade", 
"belmopan", 
"berlin", 
"bern", 
"bishkek", 
"bissau", 
"pretoria", 
"bogotá", 
"brasilia", 
"bratislava", 
"brazzaville", 
"bridgetown", 
"brussels", 
"bucharest", 
"budapest", 
"buenos aires", 
"bujumbura", 
"cairo", 
"canberra", 
"caracas", 
"castries", 
"chisinau", 
"colombo", 
"conakry", 
"copenhagen", 
"dakar", 
"damascus", 
"dhaka", 
"dili", 
"djibouti", 
"dodoma", 
"doha", 
"dublin", 
"dushanbe", 
"freetown", 
"funafuti", 
"gaborone", 
"georgetown", 
"guatemala city", 
"hanoi", 
"harare", 
"havana", 
"helsinki", 
"honiara", 
"islamabad", 
"jakarta", 
"jerusalem", 
"juba", 
"kabul", 
"kampala", 
"kathmandu", 
"khartoum", 
"kiev", 
"kigali", 
"kingston", 
"kingstown", 
"kinshasa", 
"kuala lumpur", 
"kuwait city", 
"libreville", 
"lilongwe", 
"lima", 
"lisbon", 
"ljubljana", 
"lomé", 
"london", 
"luanda", 
"lusaka", 
"luxembourg", 
"madrid", 
"majuro", 
"malabo", 
"male", 
"managua", 
"manama", 
"manila", 
"maputo", 
"maseru", 
"mbabane", 
"mexico city", 
"minsk", 
"mogadishu", 
"monaco", 
"monrovia", 
"montevideo", 
"moroni", 
"moscow", 
"muscat", 
"n'djamena", 
"nairobi", 
"nassau", 
"naypyitaw", 
"new delhi", 
"ngerulmud", 
"niamey", 
"nicosia", 
"nouakchott", 
"nukuʻalofa", 
"oslo", 
"ottawa", 
"ouagadougou", 
"palikir", 
"panama city", 
"paramaribo", 
"paris", 
"phnom penh", 
"podgorica", 
"port louis", 
"port moresby", 
"port of spain", 
"port vila", 
"port-au-prince", 
"porto-novo", 
"prague", 
"praia", 
"pristina", 
"pyongyang", 
"quito", 
"rabat", 
"reykjavik", 
"riga", 
"riyadh", 
"rome", 
"roseau", 
"saint george's", 
"saint john's", 
"san jose", 
"san marino", 
"san salvador", 
"sana'a", 
"santiago", 
"santo domingo", 
"sarajevo", 
"seoul", 
"singapore", 
"skopje", 
"sofia", 
"south tarawa", 
"stockholm", 
"sucre", 
"suva", 
"tallinn", 
"tashkent", 
"tbilisi", 
"tegucigalpa", 
"tehran", 
"thimphu", 
"tirana", 
"tokyo", 
"tripoli", 
"tunis", 
"ulan Bator", 
"vaduz", 
"valletta", 
"vatican city", 
"victoria", 
"vienna", 
"vientiane", 
"vilnius", 
"warsaw", 
"washington, d.c.", 
"wellington", 
"windhoek", 
"yamoussoukro", 
"yaounde", 
"yaren", 
"yerevan", 
"zagreb" ]

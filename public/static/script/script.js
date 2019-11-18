function initSite(){
    var inputText = "Stockholm"
    getWeather(inputText); 
    getCityInfo(inputText);
}

function submitButton(){
    event.preventDefault();
    var inputText = document.getElementById("searchBox").value;
    getWeather(inputText);
    getCityInfo(inputText);
    
}

var inputText,
element = document.getElementById("searchBox");
if(element != null){
    inputText = element.value;
    inputText.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchButton").click();
        getWeather(inputText);
        getCityInfo(inputText);
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
        console.log(responseData);
        renderWeather(responseData);
    })()
}

function renderWeather(responseData){
    var tempContainer = document.getElementById("temp");
    var cityContainer = document.getElementById("city");
    var countryContainer = document.getElementById("country");

    countryContainer.innerHTML = responseData.sys.country;
    cityContainer.innerHTML = responseData.name;
    tempContainer.innerHTML = Math.round(responseData.main.temp)+ "&#8451";

}

function getCityInfo(inputText){
    const url = `http://localhost:3000/getCityInfo/${inputText}`;
    (async () => {
        const response = await fetch(url, {});
        const responseData = await response.json();
        console.log(responseData);
        renderCityInfo(responseData);
    })()
}

function renderCityInfo(responseData){
    console.log("Info om staden funkar");
}





function initSite(){
    var inputText = "Gothenburg"
    getWeather(inputText); 
}

function submitButton(){
    var inputText = document.getElementById("searchBox").value;
    getWeather(inputText);
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


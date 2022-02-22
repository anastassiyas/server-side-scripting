const apiURL= "//api.openweathermap.org/data/2.5/weather?zip=80222&appid=0dfaf5ce678d059af8a85139f40d990d&units=imperial&lang=ru"

fetch (apiURL)
.then((response) => response.json())
.then((weatherInfo) => {
      console.log(weatherInfo);


document.getElementById("place").innerHTML=weatherInfo.name;
document.getElementById("feels").innerHTML=weatherInfo.main.feels_like;
document.getElementById("currentTemp").innerHTML=weatherInfo.main.temp;
document.getElementById("windSped").innerHTML=weatherInfo.wind.speed;
document.getElementById("humid").innerHTML=weatherInfo.main.humidity;
document.getElementById("sunny").innerHTML=weatherInfo.sys.sunrise;



const iconcode=weatherInfo.weather[0].icon;
console.log(iconcode);
const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
console.log(icon_path);

document.getElementById("weatherIcon").src=icon_path;
});



fetch ("testdata.json")
.then((mydata) => mydata.json())
.then((mydata) => {
  
    console.log(mydata.gender);
    console.log(mydata.name);
    console.log(mydata.url);


document.getElementById("first").innerHTML = "Welcome" + mydata.name;
document.getElementById("second").innerHTML = "You can reach me at" + "" + mydata.url;
});
const api2URL="//www.omdbapi.com/?apikey=6c3f9ab7&i=tt0118971";
const img="//img.omdbapi.com/?apikey=6c3f9ab7&i=tt0118971";

fetch (api2URL)
.then((response) => response.json())
.then((movieInfo) => {
      console.log(movieInfo);
document.getElementById("title").innerHTML=movieInfo.Title;
document.getElementById("year").innerHTML=movieInfo.Year;

});

const api3URL="//https://api.covidactnow.org/v2/states.json?apiKey=fab40d04064a447d97693a0505a7209b"

fetch (api3URL)
.then((covidInfo) => {
      console.log(covidInfo);
});

// function CityInput(){
//     let cityname=document.getElementById('CityWorld').value;
//     console.log(cityname);
// }
const apiKey="76377a30bc596bf0c9eb8ab4afc30550";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// let cityname=document.getElementById('CityWorld').value;
// console.log(cityname);

async function checkWeather(city){
    let weatherIcon=document.querySelector(".weather-icon");
    // console.log(city);
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+" °c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"Km/hr";
    console.log(data.weather[0].main);
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="./public/image/clouds.png"
    }
    else if(data.weather[0].main==="Clear"){
        weatherIcon.src="./public/image/clear.png";
    }
    else if(data.weather[0].main==="Rain"){
        weatherIcon.src="./public/image/rain.png";
    }
    else if(data.weather[0].main==="Drizzle"){
        weatherIcon.src="./public/image/drizzle.png";
    }
    else {
        weatherIcon.src="./public/image/mist.png";
    }


    

 }

//  SearchCity();
function SearchCity(){
    let cityname=document.getElementById('CityWorld').value;
    // console.log(cityname);
    checkWeather(cityname);

}



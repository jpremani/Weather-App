// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e7dcb3ebbemsh8b49bc5ac1b6497p12f71djsnce8dceef3461',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };


// // try{
// //     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle')
// //     .then(response=>response.json())
// //     .then(response=>{
// //         console.log(response)
// //     });
// // }
// async function checkWeather(){
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
    
// }
// checkWeather();

// // const apiKey="76377a30bc596bf0c9eb8ab4afc30550";
// // const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${apiKey}&unites=metric`;
// // async function checkWeather(){
// //     const response=await fetch(apiurl);
// //     var data=await response.json();
// //     console.log(data);
// // }
// // checkWeather();


// const apiKey="76377a30bc596bf0c9eb8ab4afc30550";
// const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const searchBox=document.querySelector(".search input");
// const searchBtn=document.querySelector(".search button");
// async function checkWeather(city){
    // const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    // var data=await response.json();
    // console.log(data);
    // console.log(response);
    // document.querySelector(".city").innerHTML=data.name;
    // // document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"deg";
    // document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+" deg";
    // document.querySelector(".humidity").innerHTML=data.main.humidity+" % ";
    // document.querySelector(".wind").innerHTML=data.wind.speed+" Km/Hr";
    // console.log(searchBox.value);


// }
// searchBtn.addEventListener("onClick",()=>{
//     checkWeather(searchBox.value);
    
// })
// checkWeather();
// function SearchCity(){
//     checkWeather(searchBox.value);
//     console.log(searchBox.value);
// }
// function CityInput(){

//     console.log(document.getElementById("CityWorld").value);
// }
// const apiKey="76377a30bc596bf0c9eb8ab4afc30550";
// const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// async function checkWeather(city){
//     const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
//     var data=await response.json();

// }
function CityInput(){
    // let CityName=document.getElementById("CityWorld").value;
    //  console.log(CityName);
    console.log("hello World")
}

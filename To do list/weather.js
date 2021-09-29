const API_KEY = "f8340bb0add5e0750d7e46f32f4779e9"



function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in : ",lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        const temp = document.querySelector("#weather span:nth-child(2)")
        temp.innerText = `${Math.floor(data.main.temp)}℃ `;
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}
function onGeoError(){
    alert("Can't find yo. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
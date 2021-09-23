const API_KEY = "f8340bb0add5e0750d7e46f32f4779e9"



function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url).then(response => response.json()).then(data => {
        console.log(data.name);
    });
}
function onGeoError(){
    alert("Can't find yo. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
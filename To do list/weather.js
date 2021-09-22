const API_KEY = "f8340bb0add5e0750d7e46f32f4779e9"



function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in",lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f8340bb0add5e0750d7e46f32f4779e9=${API_KEY}`
}
function onGeoError(){
    alert("Can't find yo. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
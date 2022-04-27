function OnGeoSuccess(position) {
  const API_KEY = "07e07510e7976cbdcf506bf2342b6bbb";
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units="metric"`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    }); //call url
  console.log(url);
}

function OnGeoError() {
  alert("can't find you!!");
}

navigator.geolocation.getCurrentPosition(OnGeoSuccess, OnGeoError);

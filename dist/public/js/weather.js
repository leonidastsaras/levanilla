fetch('https://api.openweathermap.org/data/2.5/weather?q=Athens,gr&appid=beda86a09ebe5fdfbdde59c0e833a9a0')
  .then(response => response.json())
  .then(json => {
    let temp = json.main.temp - 272.15;
    temp = temp.toFixed(2);
    document.querySelector("div#weather-time span:last-child").textContent += temp + "°";
  });

fetch('https://timeapi.io/api/time/current/zone?timeZone=Europe%2FAthens')
  .then(response => response.json())
  .then(json => {
    document.querySelector("div#weather-time span:first-child").textContent += json.time;
  });
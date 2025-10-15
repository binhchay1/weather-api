const getWeatherBtn = document.getElementById('getWeather');
const result = document.getElementById('result');

getWeatherBtn.addEventListener('click', async () => {
  result.innerHTML = 'Loading...';
  const [lat, lon] = document.getElementById('city').value.split(',');
  const url = `https://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civil&output=json`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    result.innerHTML = '';
    const forecasts = data.dataseries.slice(0, 7);

    forecasts.forEach((day, i) => {
      const date = new Date();
      date.setDate(date.getDate() + i);

      const div = document.createElement('div');
      div.className = 'day';
      const iconPath = getWeatherIcon(day.weather);
      const formattedWeather = formatWeatherName(day.weather);

      div.innerHTML = `
        <h4>${date.toDateString()}</h4>
        <img src="${iconPath}" class="weather-icon" alt="${day.weather}">
        <p><strong>Temp:</strong> ${day.temp2m}°C</p>
        <p><strong>Weather:</strong> ${formattedWeather}</p>
      `;
      result.appendChild(div);
    });
  } catch (err) {
    result.innerHTML = 'Error loading data.';
  }
});

function getWeatherIcon(weather) {
  const path = 'images/';
  const map = {
    clear: 'clear.png',
    cloudy: 'cloudy.png',
    fog: 'fog.png',
    humid: 'humid.png',
    ishower: 'ishower.png',
    lightrain: 'lightrain.png',
    lightsnow: 'lightsnow.png',
    mcloudy: 'mcloudy.png',
    oshower: 'oshower.png',
    pcloudy: 'pcloudy.png',
    rain: 'rain.png',
    rainsnow: 'rainsnow.png',
    snow: 'snow.png',
    tsrain: 'tsrain.png',
    tstorm: 'tstorm.png',
    windy: 'windy.png'
  };
  return map[weather] ? path + map[weather] : path + 'clear.png';
}

function formatWeatherName(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/^./, s => s.toUpperCase());
}
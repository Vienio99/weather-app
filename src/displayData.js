const display = (() => {
  const currentCity = document.getElementById('city')
  const currentTemperature = document.getElementById('current-temperature')
  const currentHumidity = document.getElementById('current-humidity')
  const currentOverview = document.getElementById('current-overview')
  const currentPressure = document.getElementById('current-pressure')
  const currentWind = document.getElementById('current-wind')

  const clearAll = function () {
    currentCity.textContent = ''
    currentOverview.textContent = ''
    currentTemperature.textContent = ''
    currentWind.textContent = ''
    currentPressure.textContent = ''
    currentHumidity.textContent = ''
  }

  const currentWeather = (response) => {
    if (!response.weather) {
      clearAll()
      currentCity.textContent = 'No records found'
    } else {
      currentCity.textContent = response.name
      currentOverview.textContent = response.weather[0].main
      currentTemperature.textContent = 'Temperature: ' + response.main.temp + '°C'
      currentWind.textContent = 'Wind: ' + response.wind.speed + ' m/s'
      currentPressure.textContent = 'Pressure: ' + response.main.pressure + ' mb'
      currentHumidity.textContent = 'Humidity: ' + response.main.humidity + '%'
    }
  }

  const longtermWeather = (response) => {
    console.log(response)
  }

  return { currentWeather, longtermWeather }
})()

export { display }

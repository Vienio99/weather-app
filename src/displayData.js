const display = (() => {
  const currentCity = document.getElementById('city')
  const currentOverview = document.getElementById('current-overview')
  const currentImg = document.getElementById('current-img')
  const currentTemperature = document.getElementById('current-temperature')
  const currentWind = document.getElementById('current-wind')
  const currentPressure = document.getElementById('current-pressure')
  const currentHumidity = document.getElementById('current-humidity')

  const clearAll = function () {
    currentCity.textContent = ''
    currentOverview.textContent = ''
    currentTemperature.textContent = ''
    currentWind.textContent = ''
    currentPressure.textContent = ''
    currentHumidity.textContent = ''
    currentImg.src = ''
  }

  const currentWeather = (response) => {
    clearAll()
    if (!response.weather) {
      currentCity.textContent = 'No records found'
    } else {
      currentCity.textContent = response.name
      currentOverview.textContent = response.weather[0].main
      currentTemperature.textContent = 'Temperature: ' + response.main.temp + '°C'
      currentWind.textContent = 'Wind: ' + response.wind.speed + ' m/s'
      currentPressure.textContent = 'Pressure: ' + response.main.pressure + ' mb'
      currentHumidity.textContent = 'Humidity: ' + response.main.humidity + '%'
      console.log(response.weather[0].main)
      if (response.weather[0].main === 'Clear') {
        currentImg.src = '../img/weather_icons-01.svg'
      } else if (response.weather[0].main === 'Clouds') {
        currentImg.src = '../img/weather_icons-17.svg'
      } else if (response.weather[0].main === 'Rain') {
        currentImg.src = '../img/weather_icons-19.svg'
      }
    }
  }

  const longtermWeather = (response) => {
    const weatherPrediction = document.getElementById('weather-prediction')

    for (let i = 0; i < 5; i++) {
      console.log(response.list[i])
      const container = document.createElement('div')
      container.classList.add('prediction-container')
      weatherPrediction.appendChild(container)

      const overview = document.createElement('div')
      const time = document.createElement('div')
      const img = document.createElement('img')
      const temperature = document.createElement('div')
      const wind = document.createElement('div')
      const pressure = document.createElement('div')
      const humidity = document.createElement('div')

      overview.classList.add('overview')
      time.classList.add('time')
      img.classList.add('img')
      temperature.classList.add('temperature')
      wind.classList.add('wind')
      pressure.classList.add('pressure')
      humidity.classList.add('humidity')

      container.appendChild(overview)
      container.appendChild(time)
      container.appendChild(img)
      container.appendChild(temperature)
      container.appendChild(wind)
      container.appendChild(pressure)
      container.appendChild(humidity)

      overview.textContent = response.list[i].weather[0].main
      time.textContent = response.list[i].dt_txt.slice(11,)
      temperature.textContent = 'Temperature: ' + response.list[i].main.temp + '°C'
      wind.textContent = 'Wind: ' + response.list[i].wind.speed + ' m/s'
      pressure.textContent = 'Pressure: ' + response.list[i].main.pressure + ' mb'
      humidity.textContent = 'Humidity: ' + response.list[i].main.humidity + '%'

      if (response.list[i].weather[0].main === 'Clear') {
        img.src = '../img/weather_icons-01.svg'
      } else if (response.list[i].weather[0].main === 'Clouds') {
        img.src = '../img/weather_icons-17.svg'
      } else if (response.list[i].weather[0].main === 'Rain') {
        img.src = '../img/weather_icons-19.svg'
      }
    }
  }

  return { currentWeather, longtermWeather }
})()

export { display }


(function () {
  const currentCity = document.getElementById('city')
  const currentTemperature = document.getElementById('current-temperature')
  const currentHumidity = document.getElementById('current-humidity')

  const searchBtn = document.getElementById('search-btn')
  const searchForm = document.forms[0]

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const citySearch = searchForm.search.value
    getCurrentWeather(citySearch)
  })

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const citySearch = searchForm.search.value
      getCurrentWeather(citySearch)
    }
  })

  async function getCurrentWeather (city) {
    try {
      const response = await window.fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=97015c07e527f4019713d1dd80c9f0e8`)
      response.json().then(function (response) {
        if (!response.weather) {
          throw Error('No records found')
        } else {
          console.log(response)
          currentCity.textContent = response.name
          currentTemperature.textContent = 'Temperature: ' + response.main.temp + '°C'
          currentHumidity.textContent = 'Humidity: ' + response.main.humidity + '%'
        }
      })
    } catch (err) {
      console.log(err)
    }
  }
})()

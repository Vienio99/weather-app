(function () {
  const currentWeather = document.querySelector('.current-weather')
  const searchBtn = document.getElementById('search-btn')
  const searchForm = document.forms[0]

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const city = searchForm.search.value
    getCurrentWeather(city)
  })

  async function getCurrentWeather (city) {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97015c07e527f4019713d1dd80c9f0e8`)
      response.json().then(function (response) {
        if (!response.weather) {
          throw Error('No records found')
        } else {
          console.log(response.weather[0].description)
          currentWeather.textContent = response.weather[0].description
        }
      })
    } catch (err) {
      console.log(err)
    }
  }
})()

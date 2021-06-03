import { display } from './displayData'

const get = (() => {
  const currentCity = document.getElementById('city')

  const currentWeather = async (city) => {
    currentCity.textContent = 'Loading...'
    try {
      const response = await window.fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=97015c07e527f4019713d1dd80c9f0e8`)
      response.json().then(function (response) {
        display.currentWeather(response)
      })
    } catch (err) {
      console.log(err)
    }
  }

  const longtermWeather = async (city) => {
    currentCity.textContent = 'Loading...'
    try {
      const response = await window.fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=97015c07e527f4019713d1dd80c9f0e8&units=metric`)
      response.json().then(function (response) {
        if (!response) {
          console.log('error')
        } else {
          console.log(response)
        }
      })
    } catch (err) {
      console.log(err)
    }
  }

  return { currentWeather, longtermWeather }
})()

export { get }

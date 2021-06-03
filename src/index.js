import { get } from './fetchData'

(function () {
  // Search form
  const searchBtn = document.getElementById('search-btn')
  const searchForm = document.forms[0]

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const city = searchForm.search.value
    get.currentWeather(city)
    get.longtermWeather(city)
    searchForm.reset()
  })

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const city = searchForm.search.value
      get.currentWeather(city)
      get.longtermWeather(city)
      searchForm.reset()
    }
  })
})()

const searchBar = document.querySelector(".input-weather")
const searchResults = document.querySelector(".app-body")
const errorResults = document.querySelector(".error")
const errorDesc = document.querySelector(".error-desc")

const key = "67d2864c7d276586dbfb3e9e3c71c14d"
const url = "https://api.openweathermap.org/data/2.5/"

searchBar.addEventListener("keypress", (e) => {
  if (e.keyCode == "13") {
    getResult(searchBar.value)
    searchBar.value = ""
  }
})

const getResult = async (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`
  await fetch(query)
    .then((weather) => {
      return weather.json()
    })
    .then(results)
}

const results = (result) => {
  if ((result.cod === "404") | (result.cod === "400")) {
    errorResults.style.visibility = "visible"
    errorResults.style.opacity = "1"
    errorResults.style.transition = "3s ease all"
    errorDesc.style.visibility = "visible"
    errorDesc.style.opacity = "1"
    errorDesc.style.transition = "3s ease all"
    searchResults.style.visibility = "hidden"
    searchResults.style.opacity = "0"
    searchResults.style.transition = "0s"
  } else {
    searchResults.style.visibility = "visible"
    searchResults.style.opacity = "1"
    searchResults.style.transform = "scale(1)"
    searchResults.style.transition = "0.5s ease all"
    errorResults.style.visibility = "hidden"
    errorResults.style.opacity = "0"
    errorResults.style.transition = "0s"
    errorDesc.style.visibility = "hidden"
    errorDesc.style.opacity = "0"
    errorDesc.style.transition = "0s"
    let city = document.querySelector(".city-name")
    city.innerText = `${result.name}`

    let temp = document.querySelector(".temps")
    temp.innerText = `${Math.round(result.main.temp)}°`

    let tempDesc = document.querySelector(".temp-desc")
    tempDesc.innerText = `${result.weather[0].description}`

    let wind = document.querySelector(".wind")
    wind.innerText = `${result.wind.speed}km/h`

    let humidity = document.querySelector(".humidity")
    humidity.innerText = `${result.main.humidity}%`
  }
  console.log(result)
}

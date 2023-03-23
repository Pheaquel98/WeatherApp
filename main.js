const searchBar = document.querySelector(".input-weather")
const searchResults = document.querySelector(".app-body")
const key = "67d2864c7d276586dbfb3e9e3c71c14d"

searchBar.addEventListener("click", () => {
  searchResults.style.visibility = "visible"
  searchResults.style.opacity = "1"
  searchResults.style.transform = "scale(1)"
})

const WEATHER_API_KEY = "d1d03394c90fdf3016a07320dd1afb6d"
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

const namecity = document.querySelector("#cityName")
const temperature = document.querySelector("#temp");
const humidity = document.querySelector("#humidity");
const windspeed = document.querySelector("#windSpeed");
const description = document.querySelector("#description");
const picture = document.querySelector("#weatherIcon")
const cityName = prompt("")

const DEFAULT_QUERY = `?q=${cityName}&appid=${WEATHER_API_KEY}&units=metric`
const weather = async () => {
    const response = await fetch(`${BASE_URL}${DEFAULT_QUERY}`, {
      method: "GET"
    })
    const data = await response.json()
    console.log(data)
    displayData(data)
  }
  
  // 3. Call the function
  weather()
  
  // 1. Create a function called fetchNASAData
  function displayData(data) {
    namecity.textContent = data["name"]
    temperature.textContent = data["main"].temp
    humidity.textContent = data["main"].humidity
    windspeed.textContent = data["wind"].speed
    description.textContent = data.weather[0].description
    picture.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

}
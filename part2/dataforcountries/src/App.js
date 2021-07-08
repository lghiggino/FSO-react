import { useState, useEffect } from "react"
import axios from "axios"
import './App.css';
const api_key = process.env.REACT_APP_WEATHERSTACK_API_KEY

console.log(api_key)

function App() {
  const [countries, setCountries] = useState([])
  const [filterOn, setFilterOn] = useState(false)
  const [filteredCountries, setFilteredCountries] = useState([])
  const [error, setError] = useState(false)
  const [details, setDetails] = useState(false)
  const [weather, setWeather] = useState(null)

  function getCountries() {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data)
    })
  }

  function getWeather(capitalCity) {
    if (!capitalCity) { return }
    axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capitalCity}`).then(response => {
      setWeather(response.data)
      console.log(response.data)
    })
  }

  useEffect(() => {
    getCountries()
  }, [])

  const countriesToShow = filterOn ? filteredCountries : countries

  function countryFilter(data) {
    if (!data) {
      setFilterOn(false)
      setDetails(false)
      setError(false)
    }

    const filteredArray = countries.filter(el => el.name.indexOf(data) !== -1)
    setFilterOn(true)
    setFilteredCountries(filteredArray)

    if (filteredArray.length > 1) {
      setDetails(false)
      setError(false)
    }

    if (filteredArray.length === 0) {
      setError(true)
      setDetails(false)
    }

    if (filteredArray.length === 1) {
      setDetails(true)
      setError(false)
    }
  }

  return (
    <div className="App">
      <form>
        <input onChange={(event) => { countryFilter(event.target.value) }} />
      </form>
      {countriesToShow.map(el => (
        <div key={el.name}>
          <h4>{el.name}</h4>
        </div>
      ))}

      {error &&
        <div>
          <p>No country was found, please make sure you capitalize or type accordingly</p>
        </div>
      }

      {details && filteredCountries.map(el => (
        <div key={el.name}>
          <p>capital: {el.capital}</p>
          <p>population: {el.population}</p>
          <p>area: {el.area}km²</p>
          <h4>Languages</h4>
          {el.languages.map(lang => (
            <div key={lang.name}>
              <span class="mbHalfRem">{lang.name}</span>
            </div>
          ))}
          <img className="image" src={el.flag} alt={`${el.name}-flag`} />
          <p>{el.region} - {el.subregion}</p>
          {/* <h4>Weather</h4>
          <p>current temperature: {weather.current.temperature}C</p>
          <p>{weather.current.weather_descriptions[0]}</p> */}
        </div>
      ))
      }
    </div>
  );
}

export default App;

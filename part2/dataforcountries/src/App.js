import { useState, useEffect } from "react"
import axios from "axios"
import './App.css';

function App() {
  const [countries, setCountries] = useState([])
  const [filterOn, setFilterOn] = useState(false)
  const [filteredCountries, setFilteredCountries] = useState([])
  const [error, setError] = useState(false)
  const [details, setDetails] = useState(false)

  function getCountries() {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data)
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

    const filteredArray = countries.filter(el => el.name.indexOf(data) != -1)
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
          <h4>languages</h4>
          {el.languages.map(lang => (
            <div key={lang.name} class="mbHalfRem">
              <span>{lang.name}</span>
            </div>
          ))}
          <img className="image" src={el.flag} alt={`${el.name}-flag`}/>
          <p>{el.region} - {el.subregion}</p>
        </div>
      ))
      }
    </div>
  );
}

export default App;

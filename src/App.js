import { Grid } from '@material-ui/core';
import React, {useState} from 'react';
import './App.css';
import StateControl from './components/StateControl';
import WeatherStatus from './components/WeatherStatus';
import RenderWeatherFavCities from './components/RenderWeatherFavCities';
import RenderCities from './components/RenderCities';

function App() {
  const [listOfFavCities, setListOfFavCities] = useState([]);
  const [listWeatherOfFavCities, setlistWeatherOfFavCities] = useState([]);
  const [cityName, setCityName] = useState("");
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [favCitiesWeatherInfo, setFavCitiesWeatherInfo] = useState([]);
  
  function onCheckWeatherClick() { // this function get the data from the API for the city tiped in input
    fetch(`https://api.weatherapi.com/v1/current.json?key=1ac5f1f1e4da4c39832151041211205&q=${cityName}&aqi=no`)
      .then(response => response.json())
      .then(json => {
        setWeatherInfo(json);
      });
  }

  function getWeatherInfoForFavCities() { // this function get the data from the API for cities saved in favorite list of cities
    fetch(`https://api.weatherapi.com/v1/current.json?key=1ac5f1f1e4da4c39832151041211205&q=${cityName}&aqi=no`)
      .then(response => response.json())
      .then(json => {
        setFavCitiesWeatherInfo(json);
      });
  }

  function onChange(event) { // this function initializes the variable cityName from state with the value from the input
    setCityName(event.target.value);
    getWeatherInfoForFavCities();
  }

  function onAddToListClick() { // this function add the name of city from input in a lists
    if (cityName.length === 0) {
      return;
    }
    getWeatherInfoForFavCities();
    setlistWeatherOfFavCities(listWeatherOfFavCities.concat(favCitiesWeatherInfo));
    setListOfFavCities(listOfFavCities.concat(cityName));
  }

  function deleteItemFromListWeatherOfFavCities(item) { // this function delete the weather info of a city from the list listWeatherOfFavCities
    const newListWeatherOfFavCities = listWeatherOfFavCities.filter(i => i !== item);
    setlistWeatherOfFavCities(newListWeatherOfFavCities);
  }

  function deleteCityFromListOfFavCities(item) { // this function delete the name of a city from the list listOfFavCities
    const newListOfFavCities = listOfFavCities.filter(i => i !== item);
    setListOfFavCities(newListOfFavCities);
  }

  return (
    <div align="center">
      <p><font color="bluesky" size="10">Weather</font></p>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StateControl
            onChange={event => onChange(event)}
            onAddToListClick={onAddToListClick}
            onCheckWeatherClick={onCheckWeatherClick}
          />
        </Grid>
        <Grid item xs={12}>
          <WeatherStatus 
            weatherInfo={weatherInfo}
          />
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <RenderCities 
              listOfFavCities={listOfFavCities}
              deleteCityFromListOfFavCities={deleteCityFromListOfFavCities}
            />
          </Grid>
          <Grid item xs={10}>
            <RenderWeatherFavCities 
              listWeatherOfFavCities={listWeatherOfFavCities} 
              deleteItemFromListWeatherOfFavCities={deleteItemFromListWeatherOfFavCities}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

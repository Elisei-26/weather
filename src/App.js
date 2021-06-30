import { Grid } from '@material-ui/core';
import React, {useState} from 'react';
import './App.css';
import StateControl from './components/StateControl';
import WeatherStatus from './components/WeatherStatus';
import RenderFavoriteCities from './components/RenderList';

function App() {
  const [listOfCities, setlistOfCities] = useState([]);
  const [cityName, setCityName] = useState("");
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [favCitiesWeatherInfo, setFavCitiesWeatherInfo] = useState([]);
  
  function onCheckWeatherClick() { // this function get the data from the API for the given city
    fetch(`https://api.weatherapi.com/v1/current.json?key=1ac5f1f1e4da4c39832151041211205&q=${cityName}&aqi=no`)
      .then(response => response.json())
      .then(json => {
        setWeatherInfo(json);
      });
  }

  function getWeatherInfoForFavCities() { // this function get the data from the API for the given city
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

  function onAddToListClick() { // this function add the name of city from input in a list
    if (cityName.length === 0) {
      return;
    }
    getWeatherInfoForFavCities();
    setlistOfCities(listOfCities.concat(favCitiesWeatherInfo));
  }

  function onDeleteButtonClick(item) { // this function delete the name of a city from the list
    const newList = listOfCities.filter(i => i !== item);
    setlistOfCities(newList);
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
        <Grid item xs={12}>
          <RenderFavoriteCities 
            list={listOfCities} 
            onDeleteButtonClick={onDeleteButtonClick}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

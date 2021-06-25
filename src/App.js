import { CssBaseline, makeStyles } from '@material-ui/core';
import React, {useState} from 'react';
import './App.css';
import StateControl from './components/StateControl';
import WeatherStatus from './components/WeatherStatus';

function App() {
  const [listOfCities, setlistOfCities] = useState([]);
  const [cityName, setCityName] = useState("");
  const [weatherInfo, setWeatherInfo] = useState("");
  
  function onCheckWeatherClick() { // this function get the data from the API for the given city
    fetch(`https://api.weatherapi.com/v1/current.json?key=1ac5f1f1e4da4c39832151041211205&q=${cityName}&aqi=no`)
      .then(response => response.json())
      .then(json => {
        setWeatherInfo(json);
      });
  }

  function onInputType(event) { // this function initializes the variable cityName from state with the value from the input 
    setCityName(event.target.value);
    
  }

  function onAddToListClick() { // this function add the name of city from input in a list
    const city = cityName;
    if (city.length === 0) {
      return;
    }
    let newList = listOfCities;
    setlistOfCities(newList.concat(city));
  }

  function onFavoriteCityClick(city) { // this function display the weather data for the cities from list
    setCityName(city);
    onCheckWeatherClick();
  }

  function onDeleteButtonClick(item) { // this function delete the name of a city from the list
    const newList = listOfCities.filter(i => i !== item);
    setlistOfCities(newList);
  }

  const useStyles = makeStyles((theme) => ({
    root: {
    minHeight: '100vh',
    backgroundImage: `url(https://images.pexels.com/photos/240526/pexels-photo-240526.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    },
  }));

  return (
    <div>
      <CssBaseline />
      <center>
        <p><font color="bluesky" size="10">Weather</font></p>
        <div>
          <StateControl
            onChange={event => onInputType(event)}
            onAddToListClick={onAddToListClick}
            onCheckWeatherClick={onCheckWeatherClick}
          />
        </div>
        <div>
          <WeatherStatus 
            weatherInfo={weatherInfo}
            list={listOfCities} 
            onFavoriteCityClick={onFavoriteCityClick} 
            onDeleteButtonClick={onDeleteButtonClick}
          />
        </div>
      </center>
    </div>
  );
}

export default App;

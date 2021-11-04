import React, {useState} from 'react';
import './App.css';
import StateControl from './components/StateControl';
import WeatherStatus from './components/WeatherStatus';
import RenderWeatherFavCities from './components/RenderWeatherFavCities';
import RenderCities from './components/RenderCities';
import { Grid } from '@material-ui/core';

function App() {
  const [listOfFavCities, setListOfFavCities] = useState([]);
  const [listWeatherOfFavCities, setlistWeatherOfFavCities] = useState([]);
  const [cityName, setCityName] = useState('');
  const [weatherInfo, setWeatherInfo] = useState([]);

  const [temperature, setTemperature] = useState(0);
  const [wind, setWind] = useState(10000);
  const [pressure, setPressure] = useState(10000);
  const [precipitations, setPrecipitations] = useState(10000);
  const [cloud, setCloud] = useState(10000);

  const [origins, setOrigins] = useState("");
  const [destinations, setDestinations] = useState("");
  const [road, setRoad] = useState([])
  
  function getOrigins(event) {
    setOrigins(event.target.value);
  }

  function getDestinations(event) {
    setDestinations(event.target.value);
  }
  
  function getRoadData() {
    fetch(`https://sheltered-beyond-76433.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origins}&destinations=${destinations}&key=AIzaSyBO2_J0jS-br_C2MzejPtIkZliPa5OrECA`)
      .then(response => response.json())
      .then(result => {
        setRoad(result);
      });
  }
  
  function getTemperature(event) { // this function initializes the variable "temperature" from state with the value from the "temperature" input
    setTemperature(event.target.value);
    if (temperature === null) {
      setTemperature(0);
    }
  }

  function getWind(event) { // this function initializes the variable "wind" from state with the value from the "wind" input
    setWind(event.target.value);
    if (wind === null) {
      setWind(10000);
    }
  }

  function getPressure(event) { // this function initializes the variable "pressure" from state with the value from the "pressure" input
    setPressure(event.target.value);
    if (pressure === null) {
      setPressure(10000);
    }
  }

  function getPrecipitations(event) { // this function initializes the variable "precipitations" from state with the value from the "precipitations" input
    setPrecipitations(event.target.value);
    if (precipitations === null) {
      setPrecipitations(10000);
    }
  }
 
  function getCloud(event) { // this function initializes the variable "cloud" from state with the value from the "cloud" input
    setCloud(event.target.value);
    if (cloud === null) {
      setCloud(10000);
    }
  }

  function onCheckWeatherClick() { // this function get the data from the API for the city tiped in the main input
    fetch(`https://api.weatherapi.com/v1/current.json?key=1e7568329fec4884bdc131450211407&q=${cityName}&aqi=no`)
      .then(response => response.json())
      .then(result => {
        setWeatherInfo(result);
      });
  }
  
  function onChange(event) { // this function initializes the variable cityName from state with the value from the main input
    setCityName(event.target.value);
  }

  function onAddToListClick() { // this function add the name of city from input and the data from api in two saparate lists
    if (cityName.length === 0) {
      return;
    } else {
      fetch(`https://api.weatherapi.com/v1/current.json?key=1e7568329fec4884bdc131450211407&q=${cityName}&aqi=no`)
        .then(response => response.json())
        .then(result => {
          if (result.current?.temp_c >= temperature && result.current?.wind_kph <= wind && result.current?.pressure_mb <= pressure && result.current?.precip_mm <= precipitations && result.current?.cloud <= cloud) {
            setlistWeatherOfFavCities(listWeatherOfFavCities.concat(result));
          }
          setListOfFavCities(listOfFavCities.concat(cityName));
        });
    }
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
        <Grid item xs = {12}>
          <StateControl
            getOrigins = {event => getOrigins(event)}
            getDestinations = {event => getDestinations(event)}
            getTemperature = {event => getTemperature(event)}
            getWind = {event => getWind(event)}
            getPressure = {event => getPressure(event)}
            getPrecipitations = {event => getPrecipitations(event)}
            getCloud = {event => getCloud(event)}
            onChange = {event => onChange(event)}
            onAddToListClick = {onAddToListClick}
            onCheckWeatherClick = {onCheckWeatherClick}
            getRoadData = {getRoadData}
            road = {road} 
          />
        </Grid>
        <Grid item xs = {12}>
          <WeatherStatus 
            weatherInfo = {weatherInfo}
          />
        </Grid>
        <Grid container spacing = {2}>
          <Grid item xs = {2}>
            <RenderCities 
              listOfFavCities = {listOfFavCities}
              deleteCityFromListOfFavCities = {deleteCityFromListOfFavCities}
            />
          </Grid>
          <Grid item xs = {10}>
            <RenderWeatherFavCities 
              listWeatherOfFavCities = {listWeatherOfFavCities} 
              deleteItemFromListWeatherOfFavCities = {deleteItemFromListWeatherOfFavCities}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

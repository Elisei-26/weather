import React from 'react';
import RenderList from './RenderList.jsx';

function WeatherStatus(props) {
  return (
    <div style={ { display: 'inline-flex' } }>
      <div style={ { width: 400 } }>
        <h3>
          City name: {props.weatherInfo.location?.name}
        </h3>
        <h3>
          Local time: {props.weatherInfo.location?.localtime}
        </h3>
        <h3>
          Last update: {props.weatherInfo.current?.last_updated}
        </h3>
        <h3>
          Temperature in °C: {props.weatherInfo.current?.temp_c} 
        </h3>
        <h3>
          Temperature in °F: {props.weatherInfo.current?.temp_f} 
        </h3>
        <h3>
          Condition: {props.weatherInfo.current?.condition.text}
        </h3>
        <h3>
        <img src={props.weatherInfo.current?.condition.icon} alt="img" />
        </h3>
        <h3>
          Wind speed in mph: {props.weatherInfo.current?.wind_mph}
        </h3>
        <h3>
          Wind speed in kph: {props.weatherInfo.current?.wind_kph}
        </h3>
      </div>
      <div style={ { width: 200 } }>
        <RenderList 
          list={props.list} 
          onFavoriteCityClick={props.onFavoriteCityClick} 
          onDeleteButtonClick={props.onDeleteButtonClick}
        /> 
      </div>
      <div style={ { width: 400 } }>
        <h3>
          Wind degree: {props.weatherInfo.current?.wind_degree} 
        </h3>
        <h3>
          Pressure mb: {props.weatherInfo.current?.pressure_mb} 
        </h3>
        <h3>
          Pressure in: {props.weatherInfo.current?.pressure_in} 
        </h3>
        <h3>
          Precipitations mm: {props.weatherInfo.current?.precip_mm}
        </h3>
        <h3>
          Precipitations in: {props.weatherInfo.current?.precip_in}
        </h3>
        <h3> 
          Humidity: {props.weatherInfo.current?.humidity} 
        </h3>
        <h3>
          Cloud: {props.weatherInfo.current?.cloud} 
        </h3>
        <h3>
          Feelslike °C: {props.weatherInfo.current?.feelslike_c} 
        </h3>
        <h3>
          Feelslike °F: {props.weatherInfo.current?.feelslike_f} 
        </h3>
      </div>
    </div>
  );
}

export default WeatherStatus;
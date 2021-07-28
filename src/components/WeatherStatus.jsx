import React from 'react';
import { Grid, Paper } from '@material-ui/core';

function WeatherStatus(props) {
  return (
    <Grid container spacing={3} style={ { width: 1320 } }>
      <Grid item xs={6}>
        <Paper elevation={8} style={ { width: 500 } } align="left">
          <h4 className="text m-3">
            City name: {props.weatherInfo.location?.name}
          </h4>
          <h4 className="text m-3">
            Local time: {props.weatherInfo.location?.localtime}
          </h4>
          <h4 className="text m-3">
            Last update: {props.weatherInfo.current?.last_updated}
          </h4>
          <h4 className="text m-3">
            Temperature in °C: {props.weatherInfo.current?.temp_c} 
          </h4>
          <h4 className="text m-3">
            Temperature in °F: {props.weatherInfo.current?.temp_f} 
          </h4>
          <h4 className="text m-3">
            Condition: {props.weatherInfo.current?.condition?.text}
          </h4>
          <h4 className="text m-3">
            <img src={props.weatherInfo.current?.condition?.icon} alt="img" />
          </h4>
          <h4 className="text m-3">
            Wind speed in kph: {props.weatherInfo.current?.wind_kph}
          </h4>
          <h4 className="text m-3">
            Wind speed in mph: {props.weatherInfo.current?.wind_mph}
          </h4>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper elevation={8} style={ { width: 500 } } align="left">
          <h4 className="text m-3">
            Wind degree: {props.weatherInfo.current?.wind_degree} 
          </h4>
          <h4 className="text m-3">
            Pressure mb: {props.weatherInfo.current?.pressure_mb} 
          </h4>
          <h4 className="text m-3">
            Pressure in: {props.weatherInfo.current?.pressure_in} 
          </h4>
          <h4 className="text m-3">
            Precipitations mm: {props.weatherInfo.current?.precip_mm}
          </h4>
          <h4 className="text m-3">
            Precipitations in: {props.weatherInfo.current?.precip_in}
          </h4>
          <h4 className="text m-3"> 
            Humidity: {props.weatherInfo.current?.humidity} 
          </h4>
          <h4 className="text m-3">
            Cloud: {props.weatherInfo.current?.cloud} 
          </h4>
          <h4 className="text m-3">
            Feelslike °C: {props.weatherInfo.current?.feelslike_c} 
          </h4>
          <h4 className="text m-3">
            Feelslike °F: {props.weatherInfo.current?.feelslike_f} 
          </h4>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default WeatherStatus;

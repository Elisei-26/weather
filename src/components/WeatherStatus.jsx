import React from 'react';
import RenderList from './RenderList.jsx';
import { Grid, Table, Paper } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';

function WeatherStatus(props) {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Paper elevation={8}>
            <h3>Favorite cities</h3>
            <RenderList 
              list={props.list} 
              onFavoriteCityClick={props.onFavoriteCityClick} 
              onDeleteButtonClick={props.onDeleteButtonClick}
            /> 
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={8}>
            <Table style={ { width: 500 } }>
              <center>
                <font size="6">
                  <TableRow>
                    City name: {props.weatherInfo.location?.name}
                  </TableRow>
                  <TableRow>
                    Local time: {props.weatherInfo.location?.localtime}
                  </TableRow>
                  <TableRow>
                    Last update: {props.weatherInfo.current?.last_updated}
                  </TableRow>
                  <TableRow>
                    Temperature in °C: {props.weatherInfo.current?.temp_c} 
                  </TableRow>
                  <TableRow>
                    Temperature in °F: {props.weatherInfo.current?.temp_f} 
                  </TableRow>
                  <TableRow>
                    Condition: {props.weatherInfo.current?.condition.text}
                  </TableRow>
                  <TableRow>
                    <img src={props.weatherInfo.current?.condition.icon} alt="img" />
                  </TableRow>
                  <TableRow>
                    Wind speed in mph: {props.weatherInfo.current?.wind_mph}
                  </TableRow>
                  <TableRow>
                    Wind speed in kph: {props.weatherInfo.current?.wind_kph}
                  </TableRow>
                </font>
              </center>
            </Table>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={8}>
            <Table style={ { width: 500 } }>
              <center>
                <font size="6">
                  <TableRow style={ { alignContent: 'center' } }>
                    Wind degree: {props.weatherInfo.current?.wind_degree} 
                  </TableRow>
                  <TableRow>
                    Pressure mb: {props.weatherInfo.current?.pressure_mb} 
                  </TableRow>
                  <TableRow>
                    Pressure in: {props.weatherInfo.current?.pressure_in} 
                  </TableRow>
                  <TableRow>
                    Precipitations mm: {props.weatherInfo.current?.precip_mm}
                  </TableRow>
                  <TableRow>
                    Precipitations in: {props.weatherInfo.current?.precip_in}
                  </TableRow>
                  <TableRow> 
                    Humidity: {props.weatherInfo.current?.humidity} 
                  </TableRow>
                  <TableRow>
                    Cloud: {props.weatherInfo.current?.cloud} 
                  </TableRow>
                  <TableRow>
                    Feelslike °C: {props.weatherInfo.current?.feelslike_c} 
                  </TableRow>
                  <TableRow>
                    Feelslike °F: {props.weatherInfo.current?.feelslike_f} 
                  </TableRow>
                </font>
              </center>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default WeatherStatus;

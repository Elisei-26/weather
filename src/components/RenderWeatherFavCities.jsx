import React from 'react';
import { Grid, Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

function RenderWeatherFavCities(props) {
  function RenderList(props) {
    if(props.listWeatherOfFavCities.length === 0) {
      return null;
    }
    return (
      <Grid>
        <Paper elevation={8}>
          <Table className="table" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Favorite cities</TableCell>
                <TableCell align="center">Local time</TableCell>
                <TableCell align="center">Last update</TableCell>
                <TableCell align="center">Temperature in °C</TableCell>
                <TableCell align="center">Temperature in °F</TableCell>
                <TableCell align="center">Condition</TableCell>
                <TableCell align="center">Wind speed in kph</TableCell>
                <TableCell align="center">Wind speed in mph</TableCell>
                <TableCell align="center">Wind degree</TableCell>
                <TableCell align="center">Pressure mb</TableCell>
                <TableCell align="center">Pressure in</TableCell>
                <TableCell align="center">Precipitations mm</TableCell>
                <TableCell align="center">Precipitations in</TableCell>
                <TableCell align="center">Humidity</TableCell>
                <TableCell align="center">Cloud</TableCell>
                <TableCell align="center">Feelslike °C</TableCell>
                <TableCell align="center">Feelslike °F</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.listWeatherOfFavCities.map((item, index) => (
                <TableRow key={index}>
                  <TableCell><button className="btn btn-warning m-1" onClick={() => props.deleteItemFromListWeatherOfFavCities(item)}>x</button>{item.location?.name}</TableCell>
                  <TableCell align="center">{item.location?.localtime}</TableCell>
                  <TableCell align="center">{item.current?.last_updated}</TableCell>
                  <TableCell align="center">{item.current?.temp_c} </TableCell>
                  <TableCell align="center">{item.current?.temp_f}</TableCell>
                  <TableCell align="center">{item.current?.condition.text}<img src={item.current?.condition.icon} alt="img" /></TableCell>
                  <TableCell align="center">{item.current?.wind_kph}</TableCell>
                  <TableCell align="center">{item.current?.wind_mph}</TableCell>
                  <TableCell align="center">{item.current?.wind_degree}</TableCell>
                  <TableCell align="center">{item.current?.pressure_mb}</TableCell>
                  <TableCell align="center">{item.current?.pressure_in}</TableCell>
                  <TableCell align="center">{item.current?.precip_mm}</TableCell>
                  <TableCell align="center">{item.current?.precip_in}</TableCell>
                  <TableCell align="center">{item.current?.humidity}</TableCell>
                  <TableCell align="center">{item.current?.cloud}</TableCell>
                  <TableCell align="center">{item.current?.feelslike_c}</TableCell>
                  <TableCell align="center">{item.current?.feelslike_f}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    );
  }

  return (
    <div>
      {RenderList(props)} 
    </div>
  );
}

export default RenderWeatherFavCities;
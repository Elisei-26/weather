import React from 'react';
import { Paper } from '@material-ui/core'

function RenderCities(props) {
  function RenderList(props) {
    if (props.listOfFavCities.length === 0) {
      return null;
    }
    return (
      <Paper elevation={8}>
        <h3>Favorite cities</h3>
        <h3>{props.listOfFavCities.map((item, index) => <Paper key={index} elevation={8}><button className="btn btn-light btn-outline-dark m-1" onClick={() => props.deleteCityFromListOfFavCities(item)}>x</button>{item}</Paper>)}
        </h3>
      </Paper>
    );
  }

  return (
    <div>
      <h3>{RenderList(props)}</h3> 
    </div>
  );
}

export default RenderCities;

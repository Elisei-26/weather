import React from 'react';
import { Paper } from '@material-ui/core'

function RenderCities(props) {
  function RenderList(props){
    if(props.listOfFavCities.length === 0) {
      return null;
    }
    return (
      <Paper elevation={8}>
        <h3>Favorite cities</h3>
        <h3>----------------</h3>
        <div>{props.listOfFavCities.map((item, index) => <p key={index}><button className="btn btn-warning m-1" onClick={() => props.deleteCityFromListOfFavCities(item)}>x</button>{item}</p>)}
        </div>
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
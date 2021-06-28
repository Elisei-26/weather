import React from 'react';
import { Button } from '@material-ui/core';
import { Paper } from '@material-ui/core';

function StateControl(props) {
  return (
    <Paper elevation={10} style={ { width: 1300, color: 'blue' } }>
      <div className="card-body" style={ { display: 'inline-flex' } }>
        <input 
          type="text" 
          className="form-control" 
          style={ { width: 400} } 
          onChange={event => props.onChange(event)} 
          placeholder="Type the name of city" 
        />
        <Button variant="contained" color="primary" onClick={props.onAddToListClick}>☆</Button>
      </div>
      <div>
        <button type="button" className="btn btn-secondary btn-outline-warning m-4" onClick={props.onCheckWeatherClick}>Check weather</button>
      </div>
    </Paper>
  );
}

export default StateControl;

import React from 'react';
import { Button } from '@material-ui/core';

function StateControl(props) {
  return (
    <div>
      <div className="card-body" style={ { display: 'inline-flex' } }>
        <input 
          type="text" 
          className="form-control" 
          style={ { width: 400} } 
          onChange={event => props.onChange(event)} 
          placeholder="Type the name of city" 
        />
        <Button variant="contained" color="primary" /*type="button" className="btn btn-primary m-2"*/ onClick={props.onAddToListClick}>☆</Button>
      </div>
      <div>
        <button type="button" className="btn btn-secondary btn-outline-warning" onClick={props.onCheckWeatherClick}>Check weather</button>
      </div>
    </div>
  );
}

export default StateControl;

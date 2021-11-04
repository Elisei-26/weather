import React from 'react';
import { Button, Paper } from '@material-ui/core';

function StateControl(props) {
  return (
    <Paper elevation={10} style={ { width: 1500 } }>
      <div className="card-body" style={ { display: 'inline-flex' } }>

        <div style={ { width: 500 } }>
          <p>See distance between two cities</p>
          <div style={ { display: 'inline-flex' } }>
            <input 
              type="text" 
              className="form-control m-2" 
              style={ { width: 200, height: 40 } } 
              onChange={event => props.getOrigins(event)} 
              placeholder="Type the name of city" 
            />
            <input 
              type="text" 
              className="form-control m-2" 
              style={ { width: 200, height: 40 } } 
              onChange={event => props.getDestinations(event)} 
              placeholder="Type the name of city" 
            />
          </div>
          <div>
            <Button className="button m-2" variant="contained" color="primary" style={ { width: 100, height: 40 } } onClick={props.getRoadData}>Check Distance</Button>
          </div>
          <p> Distance between cities: {props.road.rows === undefined ? 0 : props.road.rows[0].elements[0].distance.text} </p>
        </div>

        <div style={ { width: 500 } }>
          <div style={ { display: 'inline-flex' } }>
            <input 
              type="text" 
              className="form-control m-2" 
              style={ { width: 200, height: 40 } }
              onChange={event => props.onChange(event)} 
              placeholder="Type the name of city" 
            />
            <Button className="button m-2" variant="contained" color="primary" style={ { width: 40, height: 40 } } onClick={props.onAddToListClick}>☆</Button>
          </div>
          <div>
            <button type="button" className="btn btn-secondary btn-outline-warning m-4" onClick={props.onCheckWeatherClick}>Check weather</button>
          </div>
        </div>

        <div style={ { width: 500 } }>
          <h6>Add to the comparison list according to certain criteria</h6>
          <h6>The temperature in °C</h6>
          <input 
            type="text" 
            className="form-control m-2" 
            style={ { width: 200, height: 30 } }
            onChange={event => props.getTemperature(event)} 
            placeholder="The temperature in °C" 
          />
          <h6>Wind speed in kph</h6>
          <input 
            type="text" 
            className="form-control m-2" 
            style={ { width: 200, height: 30 } }
            onChange={event => props.getWind(event)} 
            placeholder="Wind speed in kph" 
          />
          <h6>Pressure mb</h6>
          <input 
            type="text" 
            className="form-control m-2" 
            style={ { width: 200, height: 30 } }
            onChange={event => props.getPressure(event)} 
            placeholder="Pressure mb" 
          />
          <h6>Precipitations mm</h6>
          <input 
            type="text" 
            className="form-control m-2" 
            style={ { width: 200, height: 30 } }
            onChange={event => props.getPrecipitations(event)} 
            placeholder="Precipitations mm" 
          />
          <h6>Cloud</h6>
          <input 
            type="text" 
            className="form-control m-2" 
            style={ { width: 200, height: 30 } }
            onChange={event => props.getCloud(event)} 
            placeholder="Cloud" 
          />
        </div>

      </div>
    </Paper>
  );
}

export default StateControl;
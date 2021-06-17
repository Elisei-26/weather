import React from 'react';

class WeatherStatus extends React.Component {
    render() {
      return (
        <div style={ { display: 'inline-flex' } }>
          <div style={ { width: 400 } }>
            <h3>
              City name: {this.props.weather.location?.name}
            </h3>
            <h3>
              Local time: {this.props.weather.location?.localtime}
            </h3> 
            <h3>
              Last update: {this.props.weather.current?.last_updated} 
            </h3>
            <h3>
              Temperature in °C: {this.props.weather.current?.temp_c} 
            </h3>
            <h3>
              Temperature in °F: {this.props.weather.current?.temp_f} 
            </h3>
            <h3>
              Condition: {this.props.weather.current?.condition.text}
            </h3>
            <h3>
            <img src={this.props.weather.current?.condition.icon} alt="weather" />
            </h3>
            <h3>
              Wind speed in mph: {this.props.weather.current?.wind_mph}
            </h3>
            <h3>
              Wind speed in kph: {this.props.weather.current?.wind_kph }
            </h3>
          </div>
          <div style={ { width: 400} }>
            <h3>
              Wind degree: {this.props.weather.current?.wind_degree} 
            </h3>
            <h3>
              Pressure mb: {this.props.weather.current?.pressure_mb} 
            </h3>
            <h3>
              Pressure in: {this.props.weather.current?.pressure_in} 
            </h3>
            <h3>
              Precipitations mm: {this.props.weather.current?.precip_mm}
            </h3>
            <h3> 
              Precipitations in: {this.props.weather.current?.precip_in}
            </h3>
            <h3> 
              Humidity: {this.props.weather.current?.humidity} 
            </h3>
            <h3>
              Cloud: {this.props.weather.current?.cloud} 
            </h3>
            <h3>
              Feelslike °C: {this.props.weather.current?.feelslike_c} 
            </h3>
            <h3>
              Feelslike °F: {this.props.weather.current?.feelslike_f} 
            </h3>
          </div>
        </div>
      );
    }
  }

  export default WeatherStatus;

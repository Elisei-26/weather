import React from 'react';
import './App.css';
import Input from './components/Input';
import ButtonAddToList from './components/ButtonAddToList';
import ButtonCheckWeather from './components/ButtonCheckWeather';
import WeatherStatus from './components/WeatherStatus';
import RenderList from './components/RenderList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      cityName: "",
      weather: ""
    }
  }
  
  onSubmit = () => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=1ac5f1f1e4da4c39832151041211205&q=${this.state.cityName}&aqi=no`)
      .then(response => response.json())
      .then(json => {
        this.setState({ weather: json});
      });
  }

  handleInput = (event) => {
    this.setState({cityName: event.target.value});
  }

  handleClick = () => {
    const city = this.state.cityName;
    if (city.length === 0) {
      return;
    }
    let newList = this.state.list;
    this.setState({
      list: newList.concat(city)
    });
  }

  jumpTo = (city) => {
    this.setState({cityName: city});
    this.onSubmit();
  }

  handleDelete = (item) => {
    const newList = this.state.list.filter(i => i !== item);
    this.setState({ list: newList });
  }

  render() {
    return (
      <div>
        <center>
          <p><font color="bluesky" size="10">Weather</font></p>
          <div className="card-body" style={ { display: 'inline-flex' } }>
            <Input 
              onChange={event => this.handleInput(event)}
            />
            <ButtonAddToList 
              onClick={this.handleClick}
            />
          </div>
          <div>
            <ButtonCheckWeather 
              onClick={this.onSubmit} 
            />
          </div>
          <div>
            <WeatherStatus 
              weather={this.state.weather}
            />
          </div>
          <div>
            <RenderList 
              list={this.state.list} 
              jumpTo={this.jumpTo} 
              handleDelete={this.handleDelete}
            />
          </div>
        </center>
      </div>
    );
  }
}

export default App;

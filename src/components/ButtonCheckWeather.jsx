import React from 'react';

class ButtonCheckWeather extends React.Component {
  render () {
    return (
      <button type="button" className="btn btn-secondary btn-outline-warning" onClick={this.props.onClick}>Check weather</button>
    );
  }
}

export default ButtonCheckWeather;
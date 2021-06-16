import React from 'react';

class Input extends React.Component {
  render () {
    return (
      <input 
        type="text" 
        className="form-control" 
        style={ { width: 400} } 
        onChange={event => this.props.onChange(event)} 
        placeholder="Type the name of city" 
      />
    );
  }
}

export default Input;
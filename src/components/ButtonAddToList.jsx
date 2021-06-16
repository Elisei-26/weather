import React from 'react';

class ButtonAddToList extends React.Component {
  render () {
    return (
      <button type="button" className="btn btn-primary m-2" onClick={this.props.onClick}>☆</button>
    );
  }
}

export default ButtonAddToList;
import React from 'react';

class List extends React.Component {
  renderList() {
    if(this.props.list.length === 0) {
      return null;
    }
    return <div>{this.props.list.map((item, index) => <p key={index}><button className="btn btn-primary" onClick={() => this.props.jumpTo(item)}>{item}</button><button className="btn btn-warning m-1" onClick={() => this.props.handleDelete(item)}>x</button></p>)}</div>
  }

  render() {
    return (
      <div style={ { display: 'inline-flex' } }>
        {this.renderList()} 
      </div>
    )
  }
}

export default List;
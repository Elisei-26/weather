import React from 'react';
import { List } from '@material-ui/core';

function StateList(props) {
  function RenderList(props){
    if(props.list.length === 0) {
      return null;
    }
    return (
      <List>{props.list.map((item, index) => <p key={index}><button className="btn btn-primary" onClick={() => props.onFavoriteCityClick(item)}>{item}</button><button className="btn btn-warning m-1" onClick={() => props.onDeleteButtonClick(item)}>x</button></p>)}
      </List>
    );
  }

  return (
    <div style={ { display: 'inline-flex' } }>
      {RenderList(props)} 
    </div>
  );
}

export default StateList;

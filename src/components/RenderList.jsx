import React from 'react';

function List(props) {

  function RenderList(props){
    if(props.list.length === 0) {
      return null;
    }
    return (
      <div>{props.list.map((item, index) => <p key={index}><button className="btn btn-primary" onClick={() => props.onFavoriteCityClick(item)}>{item}</button><button className="btn btn-warning m-1" onClick={() => props.onDeleteButtonClick(item)}>x</button></p>)}
      </div>
    );
  }

  return (
    <div style={ { display: 'inline-flex' } }>
      {RenderList(props)} 
    </div>
  );
}

export default List;
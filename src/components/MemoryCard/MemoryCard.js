import React from 'react';
import './MemoryCard.css';

const MemoryCard = props => (

  // <div className="image-container">
    <img alt={props.name} src={props.src} 
          onClick = {() => props.clickHandler(props.id)} className="refreshMemoryCards" />
  // </div>
)

export default MemoryCard;
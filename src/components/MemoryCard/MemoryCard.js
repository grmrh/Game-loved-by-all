import React from 'react';
import './MemoryCard.css';

const MemoryCard = props => (

  <img alt={props.name} src={props.src} 
        onClick = {() => props.clickHandler(props.id)} className="refreshMemoryCards" />
)

export default MemoryCard;
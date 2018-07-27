import React from 'react';
import './Title.css';

const Title = props => {
  return (
    <div>
    <h1 className='title'>{props.children}</h1>
    <p >
              To get started, click on an image. The score increases by 1 each time you click on an image not clicked before.
              When you click on the image that you clicked before, the Score resets to 0.  The HighScore is the score you achieved before reset to 0.
    </p>
  </div>
  )
}

export default Title;
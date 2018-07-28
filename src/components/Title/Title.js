import React from 'react';
import './Title.css';

const Title = props => {
  return (
    <div>
    <h1 className='title'></h1>
    <p mt-20></p>
    <h1 className='title'>{props.children}</h1>
    <p mt-20>
      To get started, click on an image. The score increases by 1 each time you click on an image not clicked previously.
      But if you do, the Score resets to 0 and the game restarts. The HighScore is the score you achieved before reset.
    </p>
  </div>
  )
}

export default Title;
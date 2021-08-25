import './Card.css';
import React from 'react';

export default function Card({ name, imgUrl }) {
  return (
    <div className='card'>
      <div className='card-align'>
        <div
          className='card-back'
          style={{
            backgroundImage: `url("/img/PlayingCards/card-back1.png")`,
            backgroundSize: 'contain'
          }}
        ></div>
        <div
          className='card-front'
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: 'contain'
          }}
        ></div>
      </div>
    </div>
  );
}

//

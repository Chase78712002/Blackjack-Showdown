import './Card.css';
import React from 'react';

export default function Card({ name, imgUrl }) {
  return (
    <div>
      <div
        className='card'
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: 'contain'
        }}
      ></div>
    </div>
  );
}

//

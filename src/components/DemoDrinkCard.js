import React from 'react';
import shirley from '../images/shirley-temple.webp'

function DrinkCard(props) {
  return (
    <div className="drinkContainer">
      <div className="drinkCard">
          <img
          className="drinkImage"
          src={shirley}
          alt="shirley temple" />
          <h3>Shirley Temple</h3>
          <p>Ginger Ale, Grenadine, Maraschino Cherry</p>
      </div>
    </div>
  )
}   

export default DrinkCard; 
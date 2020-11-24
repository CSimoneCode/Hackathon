import React from 'react';

const DrinkCard = (props) => {
  return (
    <div className="DrinkCard">
      <img className="drinkImage" src={props.drink.image} />
      <h1>{props.drink.name}</h1>
      <p>{props.drink.ingredients}</p>
      <div className="priceTag">{props.drink.price}</div>
      {props.drink.alcoholic && <i className="fas fa-cocktail"></i>}
    </div>
  )
}

export default DrinkCard;

import React from 'react';

const DrinkCard = (props) => {
  return (
    <div className="DrinkCard">
      <h1>{props.drink.name}</h1>
      <p>{props.drink.ingredients}</p>
      <div className="priceTag">{props.drink.price}</div>
      {props.drink.alcoholic && <i class="fas fa-cocktail"></i>}
    </div>
  )
}

export default DrinkCard;
import React from 'react';
import DrinkCard from '../components/DrinkCard';
import DrinkModel from '../models/drinks';

class DrinkList extends React.Component {
  state = {
    drinks: [],
  }

  componentDidMount() {
    this.fetchData();
  };

  fetchData = () => {
    DrinkModel.all().then((res) => {
      this.setState({
        drinks: res.data.drinks,
      });
    });
  };

  
  
  
  render() {
    let drinkList = this.state.drinks.map((drink) => {
      return <DrinkCard key={drink._id} drink={drink} />
    })
    return(
      <div>
        {drinkList}
      </div>
    )
  }
}

export default DrinkList;
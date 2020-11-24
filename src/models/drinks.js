const url = `http://localhost:4000/bevbuddies/drinks/`

class DrinkModel {
  static all() {
    return fetch(url)
      .then(res => res.json())
      .catch((err) => {
        console.log('Error fetching data in DrinkModel.all: ', err);
        return { drinks: []};
      })
  };
  
  static getOne(id) {
    return fetch(`${url}/${id}`)
      .then(res => res.json())
      .catch((err) => {
        console.log('Error fetching data in DrinkModel.getOne: ', err);
      })
  };
};

export default DrinkModel
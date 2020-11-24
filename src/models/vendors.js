const url = `http://localhost:4000/bevbuddies/vendors/`

class VendorModel {
  static all() {
    return fetch(url)
      .then(res => res.json())
      .catch((err) => {
        console.log('Error fetching data in VendorModel.all: ', err);
        return { vendors: []};
      })
  };
  
  static getOne(id) {
    return fetch(`${url}/${id}`)
      .then(res => res.json())
      .catch((err) => {
        console.log('Error fetching data in VendorModel.getOne: ', err);
      })
  };
};

export default VendorModel
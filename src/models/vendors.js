import axios from 'axios';
const url = `http://localhost:4000/bevbuddies/vendors/`

class VendorModel {
  static all = () => {
    let request = axios.get(url);
    return request;
  };

  static getOne = (id) => {
    let request = axios.get(`${url}/${id}`);
    return request;
  };
};

export default VendorModel
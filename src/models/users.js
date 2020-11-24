import axios from 'axios';
const url = `http://localhost:4000/bevbuddies/users/`

class UserModel {
  static all = () => {
    let request = axios.get(url);
    return request;
  };

  static getOne = (id) => {
    let request = axios.get(`${url}/${id}`);
    return request;
  };

  static create = (user) => {
    let request = axios.post(url, user);
    return request;
  };

  static delete = (user) => {
    let request = axios.delete(`${url}/${user._id}`);
    return request;
  };

  static update = (user) => {
    let request = axios.put(`${url}/${user._id}`, user);
    return request;
  };
};

export default UserModel

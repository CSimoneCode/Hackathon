import axios from 'axios';
const url = `http://localhost:4000/bevbuddies/events/`

class EventModel {
  static all = () => {
    let request = axios.get(url);
    return request;
  };

  static getOne = (id) => {
    let request = axios.get(`${url}/${id}`);
    return request;
  };

  static create = (event) => {
    let request = axios.post(url, event);
    return request;
  };

  static delete = (event) => {
    let request = axios.delete(`${url}/${event._id}`);
    return request;
  };

  static update = (event) => {
    let request = axios.put(`${url}/${event._id}`);
    return request;
  };
};

export default EventModel

const url = `http://localhost:4000/bevbuddies/events/`

class EventModel {
  static all() {
    return fetch(url)
      .then(res => res.json())
      .catch((err) => {
        console.log('Error fetching data in EventModel.all: ', err);
        return { events: []};
      })
  };
  
  static getOne(id) {
    return fetch(`${url}/${id}`)
      .then(res => res.json())
      .catch((err) => {
        console.log('Error fetching data in EventModel.getOne: ', err);
      })
  };
  
  static create(eventData) {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(eventData)
    })
      .then(res => res.json())
      .catch((err) => {
        console.log('Error fetching data in EventModel.create: ', err);
      })
  }

  static delete(id) {
    return fetch(`${url}/${id}`, {method:"delete"})
    .then(res => res.json())
    .catch((err) => {
      console.log('Error fetching data in EventModel.delete: ', err);
    })
  }

  static update(event) {
    return fetch(`${url}/${event._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    })
      .then(res => res.json())
      .catch((err) => {
        console.log('Error fetching data in EventModel.update: ', err);
      })
  }
};

export default EventModel
const url = `http://localhost:4000/bevbuddies/users/`

class UserModel {
  static all() {
    return fetch(url)
      .then(res => res.json())
      .catch((err) => {
        console.log('Error fetching data in UserModel.all: ', err);
        return { users: []};
      })
  };
  
  static getOne(id) {
    return fetch(`${url}/${id}`)
      .then(res => res.json())
      .catch((err) => {
        console.log('Error fetching data in UserModel.getOne: ', err);
      })
  };
  
  static create(userData) {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
      .catch((err) => {
        console.log('Error fetching data in UserModel.create: ', err);
      })
  }

  static delete(id) {
    return fetch(`${url}/${id}`, {method:"delete"})
    .then(res => res.json())
    .catch((err) => {
      console.log('Error fetching data in UserModel.delete: ', err);
    })
  }

  static update(user) {
    return fetch(`${url}/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .catch((err) => {
        console.log('Error fetching data in UserModel.update: ', err);
      })
  }
};

export default UserModel

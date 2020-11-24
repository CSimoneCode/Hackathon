import React from 'react';
import EventModel from '../models/event';
import { Link, Redirect } from 'react-router-dom';

class NewEvent extends React.Component {
  state = {
    name: '',
    link: '',
    members: [],
    description: '',
    date: '',
    time: '',
    ageRestriction: true,
  }


  removeItem = () => {
  }


  render() {
    console.log(this.props);

    return (
      <div>
        <h2>Schedule a new event!</h2>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form">
            <label className="formLabel" htmlFor="name">Event Name</label>
            <input className="formInput" type="text" name="name" />
          </div>
          <div className="form">
            <label className="formLabel" htmlFor="name">Event Link</label>
            <input className="formInput" type="text" name="link" />
          </div>
          <div className="form">
            <label className="formLabel" htmlFor="members">Event description</label>
            <input className="formInput" type="text" name="description" />
          </div>
          <div className="form">
            <label className="formLabel" htmlFor="members">Event date</label>
            <input className="formInput" type="text" name="date" />
          </div>
          <div className="form">
            <label className="formLabel" htmlFor="members">Event time</label>
            <input className="formInput" type="text" name="time" />
          </div>
          <div className="form">
            <label className="formLabel" htmlFor="members">Invite guests</label>
            <input  className="formInput" type="text" name="members" />
            <ul>
              <li onClick={this.removeItem}>
                Mirna Gonzales
              </li>
              <li onClick={this.removeItem}>
                Robert Smith
              </li>
              <li onClick={this.removeItem}>
                Carl Simpson
              </li>
              <li onClick={this.removeItem}>
                Daniel Jackson
              </li>
            </ul>
          </div>
          <button onClick={<Link to="/events/5fbc7e97c5ee320affd5b4be"></Link>}>Submit</button>
        </form>
      </div>
    )
  }
}

export default NewEvent;
  
import React from 'react';
import EventModel from '../models/event'

class NewEvent extends React.Component {
  state = {
    name: '',
    members: [],
    description: '',
    date: '',
    time: '',
    ageRestriction: true,
  }

  handleInputChange = (event) => {
    if (event.target.name === 'ageRestriction') {
      this.setState((prevState) => {
        // // another if based on 21 years ago from today's date
        // if (input >= (date - 21years)) {
        //   return { ageRestriction: !prevState.ageRestriction }
        // } else {
        //   return { ageRestriction: !.ageRestriction };
        // }
      })
    } if  (event.target.name === 'members') {
      this.state.members.push()
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    EventModel.create(this.state)
    .then((data) => {
      this.props.history.push('/events');
    });
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <h2>Schedule a new event!</h2>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form">
            <label className="formLabel" htmlFor="name">Name</label>
            <input onChange={this.handleInputChange} className="formInput" value={this.state.name} type="text" name="name" />
          </div>
          <div className="form">
            <label className="formLabel" htmlFor="members">Invite guests</label>
            <input onChange={this.handleInputChange} className="formInput" value={this.state.members} type="text" name="members" />
          </div>
          <div className="form">
            <label className="formLabel" htmlFor="members">Invite guests</label>
            <input onChange={this.handleInputChange} className="formInput" value={this.state.members} type="text" name="members" />
          </div>
        </form>
      </div>
    )
  }
}

export default NewEvent;

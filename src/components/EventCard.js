import React from 'react';

import { Link, Redirect } from 'react-router-dom';

function EventCard(props) {
  return (
    <li className="eventCard">
      <Link to={`/events/${props.event._id}`} className="eventCardLink">
        <img
        className="eventImage"
        src=""
        alt="" />
        <h3>{props.event.name}</h3>
        <p>{props.event.description}</p>
        {/* need to figure out how we're adding members to the event and how we're displaying them here */}
      </Link>
    </li> 
  )
}

export default EventCard; 
    
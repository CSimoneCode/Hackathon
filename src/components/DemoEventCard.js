import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import image from '../images/cantina.jpg'

function EventCard(props) {
  return (
    <li className="eventCard">
        <img
        className="eventImage"
        src={image}
        alt="star wars cantina" />
        <h3>Anakin's Virtual Bachelor Party</h3>
        <p>The wedding may have been officially postponed but Anakin and Padme are still tying the knot at the courthouse, let's help Ani enjoy one last night as an official bachelor.</p>
        <p>Date: December 5th, 2020</p>
        <p>Time: 9:00 PM</p>
        <ul>
          <p>Guest List:</p>
          <li> {/*  user show page link */}
            Robert Smith
          </li>
          <li>
            Daniel Jackson
          </li>
        </ul>
        <p>This is an event for guests age 21+. You will be required to present ID upon delivery for alcoholic beverages.</p>
    </li> 
  )
}   

export default EventCard;     
    
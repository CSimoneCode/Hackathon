import React from 'react';


const Navbar = (props) => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/events/new">New Event</a></li>
        <li><a href="/">Login</a></li>
        <li><a href="/">Signup</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;
import React from 'react';


const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="d-md-flex d-block flex-row mx-md-auto mx-0">
        <a className="navbar-brand" href="#">BevBuddies</a>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample04">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/"><i class="fas fa-home"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">My Events</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
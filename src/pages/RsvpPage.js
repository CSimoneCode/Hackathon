import React from 'react';
import {Link, Redirect} from 'react-router-dom';
// import Drink from '../models/drinks'
// import DrinkCard from '../components/DrinkCard';


class RsvpPage extends React.Component {
  // state = {
  //   drinks: []
  // }


  // componentDidMount() {
  //   Drink.all().then((data) => {
  //     console.log('data', data);

  //     this.setState({ drinks: data.drinks });
  //   });
  // }


  // renderDrinks() {
  //   return this.state.drinks.map((drink, index) => {
  //     return (
  //       <DrinkCard drink={drink} key={drink._id} />
  //     )
  //   });
  // }

  render() {
    return(
      <div>

        <div className="rsvpContainer">
          <div className="row">
            <h2>Patty invited you to </h2>
            <h1>Anakin's Virtual Bachelor Party</h1>
            <p>The wedding may have been officially postponed but Anakin and Padme are still tying the knot at the courthouse, let's help Ani enjoy one last night as an official bachelor.</p>
            <p>7:30 PM     Dec 3, 2020</p>
            <a href="eventname.zoom.us/jd4fhd7">eventname.zoom.us/jd4fhd7</a>
            <p>Attending</p>
            <button>I'll be there!</button>
            <button>Can't make it...</button>
          </div>
        </div>
        
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-lg-6 registration-column text-center">
              <div className="card registration-card">
                <h3 className="card-title delivery details">Delivery Details</h3>
                  <p className="card-text">Don’t worry-your information is private. Only restaurants and bars can view your delivery details.</p>
                  <form method="POST" action="" class="registration-form mt-4" />
                    <div className="input-group mb-4">
                      <p className="form-text">First line of delivery address</p>
                      <input type="text" placeholder="1234 SE Maple St" name="address" required /> 
                    </div>
        <div className="input-group mb-4">
          <p>Unit Number</p>
          <input type="text" placeholder="98765" name="unit-number" required />
        </div>
        <div className="input-group mb-4">
          <p>Enter zipcode</p>
          <input type="text" placeholder="98765" name="zipcode" required />
        </div>
        <div className="input-group mb-4">
          <p>Enter phone number</p>
          <input type="text" placeholder="" name="phone-number" required />
        </div>
          <div className="d-flex justify-content-center mt-3 login_container">
            <button onClick={<Link to="/events/5fbc7e97c5ee320affd5b4be"></Link>}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
  }
}

export default RsvpPage;
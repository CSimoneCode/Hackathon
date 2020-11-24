import React from 'react';
import bar1 from '../images/old-bar.webp';
import bar2 from '../images/pub.webp';
import bar3 from '../images/tiki.webp';

function VendorList() {
  return (
    <div>
      <div className="vendorCard">
        <img src={bar1} alt="Black man sitting at a bar with a drink"/>
        <h1 className="vendorName">The Old Standard</h1>
        <p>Your favorite hole-in-the-wall bar<br/> location: Alice St <br/> hours: </p>
        <button>Select Vendor</button>
      </div>
      <div className="vendorCard">
        <img src={bar2} alt="The handles of beers on tap in a dark bar"/>
        <h1 className="vendorName">Tiki Bar</h1>
        <p>Tropical delights<br/> location: <br/> hours: </p>
        <button>Select Vendor</button>
      </div>
      <div className="vendorCard">
        <img src={bar3} alt="Bottles of liquor on shelves behind the a bar"/>
        <h1 className="vendorName">The Starry Plough Pub</h1>
        <p>Unfussy Irish pub<br/> location: <br/> hours: </p>
        <button>Select Vendor</button>
      </div>
    </div>
  )
}

export default VendorList;
  
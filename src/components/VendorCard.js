import React from 'react';

const VendorCard = (props) => {
  console.log(props.vendor)
  return (
    <div className="vendorCard">
      <img src={`${props.vendor.image}`} alt={`${props.vendor.name}`}/>
      <h1 className="vendorName">{props.vendor.name}</h1>
      <p>{props.vendor.description} <br/> location: {props.vendor.location} <br/> hours: {props.vendor.hours}</p>
      <button>Select Vendor</button>
    </div>
  )
}

export default VendorCard;

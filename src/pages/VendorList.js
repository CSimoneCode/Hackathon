import React from 'react';
import VendorCard from '../components/VendorCard';
import VendorModel from '../models/vendors';

class VendorList extends React.Component {
  state = {
    vendors: [],
  }

  componentDidMount() {
    this.fetchData();
  };

  fetchData = () => {
    VendorModel.all().then((res) => {
      this.setState({
        vendors: res.data.vendors,
      });
    });
  };

  
  
  
  render() {
    let vendorList = this.state.vendors.map((vendor) => {
      return <VendorCard key={vendor._id} vendor={vendor} />
    })
    return(
      <div>
        {vendorList}
      </div>
    )
  }
}

export default VendorList;
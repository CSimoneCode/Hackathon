import React from 'react';
import SponsoredContent from '../components/SponsoredContent';
import UpcomingEvents from '../components/UpcomingEvents';

const HomePage = (props) => {
  return (
    <>
      <h1>Home Page</h1>
      <UpcomingEvents />
      <SponsoredContent />
    </>
  )
}

export default HomePage;
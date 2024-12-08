import React from 'react';
import ListingCard from '../components/ListingCard';
import { listings } from '../assets/mockData';

const HomePage = () => (
  <div className="container mt-4">
    <h1 className='text-primary'>Explore Nearby Stays...</h1>
    <div className="d-flex flex-wrap">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  </div>
);

export default HomePage;

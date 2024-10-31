import { useEffect, useState } from 'react';
import { fetchListings } from '../api';

const Listings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetchListings().then(response => setListings(response.data));
  }, []);

  return (
    <div>
      <h2>All Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>{listing.name} - ${listing.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;

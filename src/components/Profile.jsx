import React, { useState, useEffect } from 'react';
import ListingForm from './ListingForm';
import { createListing, fetchListings, updateListing, deleteListing } from '../api';

const Profile = ({ user }) => {
  const [listings, setListings] = useState([]);
  const [editingListing, setEditingListing] = useState(null);

  useEffect(() => {
    // Fetch user's listings when the profile loads
    fetchListings()
      .then((response) => {
        setListings(response.data);
      })
      .catch((error) => console.error("Error fetching listings:", error));
  }, []);

  const handleCreateOrUpdateListing = (listingData) => {
    if (editingListing) {
      updateListing(editingListing.id, listingData).then((response) => {
        setListings((prevListings) =>
          prevListings.map((listing) =>
            listing.id === editingListing.id ? response.data : listing
          )
        );
        setEditingListing(null); // Exit edit mode
      });
    } else {
      createListing(listingData).then((response) => {
        setListings((prevListings) => [...prevListings, response.data]);
      });
    }
  };

  const handleEditListing = (listing) => {
    setEditingListing(listing);
  };

  const handleDeleteListing = (id) => {
    deleteListing(id).then(() => {
      setListings((prevListings) => prevListings.filter((listing) => listing.id !== id));
    });
  };

  return (
    <div>
      <h2>{user.username}'s Profile</h2>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>

      <h3>{editingListing ? 'Edit Listing' : 'Create New Listing'}</h3>
      <ListingForm
        onSubmit={handleCreateOrUpdateListing}
        onDelete={editingListing ? handleDeleteListing : null}
        initialData={editingListing}
      />

      <h3>Your Listings</h3>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id}>
            <strong>{listing.name}</strong> - ${listing.price}
            <button onClick={() => handleEditListing(listing)}>Edit</button>
            <button onClick={() => handleDeleteListing(listing.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;

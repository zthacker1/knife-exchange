import React, { useState } from 'react';
import ListingForm from './ListingForm';
import { createListing, updateListing, deleteListing } from '../api';

const Profile = ({ user }) => {
  const [editingListing, setEditingListing] = useState(null);

  const handleCreateOrUpdateListing = (listingData) => {
    if (editingListing) {
      updateListing(editingListing.id, listingData).then(() => {
        setEditingListing(null);
        // Update listings state after successful edit
      });
    } else {
      createListing(listingData).then(() => {
        // Update listings state after successful creation
      });
    }
  };

  const handleDeleteListing = (id) => {
    deleteListing(id).then(() => {
      // Update listings state after successful deletion
      setEditingListing(null);
    });
  };

  return (
    <div>
      <h2>{user.username}'s Listings</h2>
      <ListingForm
        onSubmit={handleCreateOrUpdateListing}
        onDelete={handleDeleteListing}
        initialData={editingListing}
      />
      {/* Listings table or list goes here */}
    </div>
  );
};

export default Profile;

// src/components/ListingForm.js
import React, { useState } from 'react';

const ListingForm = ({ onSubmit, initialData = {} }) => {
  const [name, setName] = useState(initialData.name || '');
  const [price, setPrice] = useState(initialData.price || '');
  const [description, setDescription] = useState(initialData.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, price, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{initialData.id ? 'Edit Listing' : 'Create New Listing'}</h3>
      <label>Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} required />
      <label>Price</label>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <label>Description</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">{initialData.id ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default ListingForm;

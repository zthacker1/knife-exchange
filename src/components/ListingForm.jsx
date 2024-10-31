// src/components/ListingForm.jsx
import React, { useState, useEffect } from 'react';

const ListingForm = ({ onSubmit, onDelete, initialData = {} }) => {
  const [name, setName] = useState(initialData.name || '');
  const [price, setPrice] = useState(initialData.price || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [bladeTypeId, setBladeTypeId] = useState(initialData.bladeTypeId || '');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || '');
      setPrice(initialData.price || '');
      setDescription(initialData.description || '');
      setBladeTypeId(initialData.bladeTypeId || '');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      price: parseFloat(price),
      description,
      bladeTypeId,
    });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
      onDelete(initialData.id);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2>{initialData.id ? 'Edit Listing' : 'Create New Listing'}</h2>

      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Enter listing name"
      />

      <label>Price</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        placeholder="Enter price"
      />

      <label>Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter description"
      />

      <label>Blade Type</label>
      <select
        value={bladeTypeId}
        onChange={(e) => setBladeTypeId(e.target.value)}
        required
      >
        <option value="">Select Blade Type</option>
        <option value="1">Fixed Blade</option>
        <option value="2">Folder</option>
        <option value="3">Balisong</option>
        <option value="4">Other</option>
      </select>

      <div style={{ marginTop: '20px' }}>
        <button type="submit">
          {initialData.id ? 'Update Listing' : 'Create Listing'}
        </button>
        {initialData.id && (
          <button
            type="button"
            onClick={handleDelete}
            style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}
          >
            Delete Listing
          </button>
        )}
      </div>
    </form>
  );
};

export default ListingForm;

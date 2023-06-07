import React, { useState } from 'react';
import axios from 'axios';

const ShowSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (query.trim() !== '') {
      onSearch(query);
    }
  };

  return (
    <div >   
     <form onSubmit={handleFormSubmit}>
      <input className='form-control mt-3'
        type="text"
        placeholder="Search for TV shows..."
        value={query}
        onChange={handleInputChange}
      />
      <div className='text-center mt-2'>
      <button type="submit" className='btn btn-primary'>Search</button>
      </div>
    </form>
    </div>

  );
};

export default ShowSearch;

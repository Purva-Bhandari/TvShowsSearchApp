import React from 'react';

const ShowDetails = ({ show }) => {
  return (
    <div className='text-white'>
      <h3>{show.name}</h3>
      <p>{show.summary}</p>
    </div>
  );
};

export default ShowDetails;

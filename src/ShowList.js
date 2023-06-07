import React from 'react';

const ShowList = ({ shows, onShowClick }) => {
  return (
    <ul className='text-white'>
      {shows.map((show) => (
        <li key={show.id}>
          <h3>{show.name}</h3>
          <p>{show.summary}</p>
          <button className ="btn btn-primary" onClick={() => onShowClick(show)}>View Details</button>
        </li>
      ))}
    </ul>
  );
};

export default ShowList;

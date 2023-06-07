import React, { useState } from 'react';
import axios from 'axios';
import ShowSearch from './ShowSearch';
import ShowList from './ShowList';
import ShowDetails from './ShowDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


const App = () => {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  const handleSearch = (query) => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then((response) => {
        setShows(response.data.map((result) => result.show));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleShowClick = (show) => {
    setSelectedShow(show);
  };

  const handleBackClick = () => {
    setSelectedShow(null);
  };

  return (
    <div className='container d-flex align-items-center justify-content-center'>
      <div><h1 className='text-warning mt-4'>TV Show Search</h1>
      {!selectedShow ? (
        <div>
          <ShowSearch onSearch={handleSearch} />
          <ShowList shows={shows} onShowClick={handleShowClick} />
        </div>
      ) : (
        <div>
          <button className='btn btn-primary' onClick={handleBackClick}>Back</button>
          <ShowDetails show={selectedShow} />
        </div>
      )}
      </div>
    </div>
  );
};

export default App;



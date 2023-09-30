import React, { useEffect, useState } from 'react';

const Home = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    // Define the API URL
    const apiUrl = 'https://hoblist.com/api/movieList';

    const requestBody = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category: 'movies',
        language: 'kannada',
        genre: 'all',
        sort: 'voting',
      }),
    };

    fetch(apiUrl, requestBody)
      .then((response) => response.json())
      .then((data) => {
        setMovieList(data.result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Kannada Movies List</h1>
      <ul>
        {movieList.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
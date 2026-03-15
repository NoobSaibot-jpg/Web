import React from 'react';

const Favorites = () => {
  const movies = [
    { title: "Inception", url: "https://www.imdb.com/title/tt1375666/" },
    { title: "The Matrix", url: "https://www.imdb.com/title/tt0133093/" },
    { title: "Interstellar", url: "https://www.imdb.com/title/tt0816692/" },
    { title: "Silicon Valley", url: "https://www.imdb.com/title/tt2575988/" },
    { title: "Mr. Robot", url: "https://www.imdb.com/title/tt4158110/" }
  ];

  return (
    <div className="section">
      <h3>Улюблені фільми та шоу</h3>
      <ol>
        {movies.map((movie, index) => (
          <li key={index}>
            <a href={movie.url} target="_blank" rel="noopener noreferrer">
              {movie.title}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Favorites;
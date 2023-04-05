import { useState } from "react";
import axios from "axios";

import MovieIcon from "./assets/MovieIcon";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [moviesData, setMoviesData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMoviesData([]);
    if (pageNumber !== 1) setPageNumber(1);

    if (!searchTerm) return;

    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=a93ceeb4&s=${searchTerm}&page=${pageNumber}`
    );

    setMoviesData(data?.Search);
    setNumberOfPages(Math.ceil(Number(data?.totalResults) / 10));
  };

  const handleLoadMore = async () => {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=a93ceeb4&s=${searchTerm}&page=${
        pageNumber + 1
      }`
    );

    if (data) {
      setPageNumber(pageNumber + 1);
      setMoviesData([...moviesData, ...data?.Search]);
    }
  };

  return (
    <main className="App">
      <div className="container">
        <h1>Napo Movies</h1>

        <form className="search-movies-form" onSubmit={handleSubmit}>
          <button className="search-movies-form-button">🔍</button>
          <input
            type="text"
            placeholder="Search for a movie..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>

        <div className="search-movies-result">
          {moviesData.length > 0 &&
            moviesData.map((movie) => (
              <div className="movie-item" key={movie.imdbID}>
                {process.env.NODE_ENV === "development" ? (
                  <MovieIcon />
                ) : (
                  <img src={movie.Poster} alt={movie.Title} />
                )}
                <h3>{movie.Title}</h3>
              </div>
            ))}
        </div>
        {pageNumber !== numberOfPages && (
          <button className="load-more-button" onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </main>
  );
}

export default App;

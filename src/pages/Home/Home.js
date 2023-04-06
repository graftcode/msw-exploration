import React, { useState } from "react";
import { Link } from "react-router-dom";

import { getMovies } from "../../axios";
import NoImageAvailable from "../../assets/NoImageAvailable.png";

import "./Home.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [moviesData, setMoviesData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  const resetState = () => {
    setMoviesData([]);
    setPageNumber(1);
    setNumberOfPages(1);
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    resetState();

    if (!searchTerm) return;

    const { data, error } = await getMovies(searchTerm, pageNumber);

    if (error || data.Error) {
      setErrorMessage(error?.message || data?.Error);
      setMoviesData([]);
      return;
    }

    setMoviesData(data?.Search);
    setNumberOfPages(Math.ceil(Number(data?.totalResults) / 10));
  };

  const handleLoadMore = async () => {
    const { data, error } = await getMovies(searchTerm, pageNumber + 1);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    if (errorMessage) {
      setErrorMessage("");
    }

    setPageNumber(pageNumber + 1);
    setMoviesData([...moviesData, ...data?.Search]);
  };

  return (
    <section className="search-movies">
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
              <img
                src={movie.Poster}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = NoImageAvailable;
                }}
                alt={movie.Title}
              />
              <Link to={`${movie.imdbID}`} className="link">
                {movie.Title}
              </Link>
            </div>
          ))}
      </div>
      {pageNumber !== numberOfPages && (
        <button className="load-more-button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </section>
  );
};

export default Home;

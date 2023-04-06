import React, { useEffect, useState } from "react";

import { getMovieInformation } from "../../axios";
import { useNavigate, useParams } from "react-router-dom";

import "./MovieInformation.css";
import Spinner from "../../components/Spinner/Spinner";

const MovieInformation = () => {
  const [movieData, setMovieData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      const { data, error } = await getMovieInformation(movieId);

      if (error) {
        setErrorMessage(error?.message);
        return;
      }

      setMovieData(data);
    };

    fetchMovie();
  }, [movieId]);

  if (!movieData) {
    return <Spinner />;
  }

  if (errorMessage) {
    return (
      <div>
        <p>{errorMessage}</p>
        <button className="back-button" onClick={() => navigate(-1)}>
          {"⬅ "} Back to Homepage
        </button>
      </div>
    );
  }

  return (
    <section className="movie-information">
      <button className="link-button" onClick={() => navigate(-1)}>
        {"⬅ "}Back
      </button>
      <div className="movie-information-wrapper">
        <img src={movieData?.Poster} alt={movieData.ImdbID} />
        <div className="movie-information-text">
          <h2>{movieData.Title}</h2>
          <div className="movie-information-rating">
            Rating: {movieData.Ratings?.[0].Value}
          </div>
          <div className="movie-information-description">{movieData.Plot}</div>
          <p className="movie-information-release">{movieData.Released}</p>
        </div>
      </div>
    </section>
  );
};

export default MovieInformation;

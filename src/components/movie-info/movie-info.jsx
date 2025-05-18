import React, { useEffect, useState } from "react";
import "./movie-info.scss";
import MovieService from "../../services/movie-service";
import Error from "../error/error";
import Spinner from "../spinner/spinner";
import PropTypes from "prop-types";
import useMovieService from "../../services/movie-service";
import { useNavigate } from "react-router-dom";

const MovieInfo = ({ movieId }) => {
  const [movie, setMovie] = useState(null);

  const { getAllDetelies, loading, error } = useMovieService();

  useEffect(() => {
    updateMovie();
    // eslint-disable-next-line
  }, [movieId]);

  const updateMovie = () => {
    if (!movieId) {
      return;
    }
    getAllDetelies(movieId).then((res) => setMovie(res));
  };

  const errorContent = error ? <Error /> : null;
  const loadingContent = loading ? <Spinner /> : null;
  const content = !(error || loading || !movie) ? (
    <Content movie={movie} />
  ) : null;
  const inititialContent = movie || loading || error ? null : <Spinner />;
  return (
    <div className="movieInfo">
      {inititialContent}
      {errorContent}
      {loadingContent}
      {content}
    </div>
  );
};

//NOTE - malumotlarni type larini aniqlab beradi(propTypes)
MovieInfo.propTypes = {
  movieId: PropTypes.number,
};
export default MovieInfo;

const Content = ({ movie }) => {
  console.log(movie);

  let navigate = useNavigate();
  return (
    <>
      <img src={movie.poster_path} />
      <div className="hero__movie-descr">
        <h2>{movie.name}</h2>
        <p>{movie.description}</p>
        <button
          className="btn btn-light"
          onClick={() => navigate(`/movie/${movie.id}`)}
        >
          Details
        </button>
      </div>
    </>
  );
};
Content.propTypes = {
  movie: PropTypes.object,
};

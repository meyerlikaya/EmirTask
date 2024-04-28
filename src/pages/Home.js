import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMovies } from "../redux/datas/movieSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div>
      <h1>Movie List</h1>
      {movies.length > 0 ? (
        <ul>
          {movies.map((movie, index) => (
            <div key={index}>
              <li>{movie.name}</li>
              <img src={movie.imageUrl} alt={movie.name} />
            </div>
          ))}
        </ul>
      ) : (
        <p>No movies to display</p>
      )}
    </div>
  );
};

export default Home;

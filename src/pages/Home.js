// Home.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMovies } from "../redux/datas/movieSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import { getImdb } from "../redux/datas/imdbSlice";
import Pagination from "../components/Pagination";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const imdb = useSelector((state) => state.imdb.movies);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 8;

  useEffect(() => {
    dispatch(getImdb());
  }, [dispatch]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Mevcut sayfadaki filmleri al
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = imdb.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <div className="w-full h-full ">
      <Header />
      <div className="flex justify-evenly content-center w-full h-full">
        <div className="flex justify-evenly content-center flex-wrap">
          <MovieCard imdb={currentMovies} />
        </div>
      </div>
      <div className="mt-10">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(imdb.length / moviesPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/datas/movieSlice";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import MoviesComingCard from "../components/MoviesComingCard";

function AboutPage() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 8;
  const [searchTerm, setSearchTerm] = useState(""); // Arama terimi state'i

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

  // Arama işlevi
  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentMovies = filteredMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="w-full h-full">
      <Header />
      <div className="w-full flex justify-center mt-6">
        <input
          type="text"
          placeholder="Film ara..."
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 rounded-md px-3 py-1 mb-4"
        />
      </div>
      <div className="flex justify-evenly content-center w-full h-full">
        <div className="flex justify-evenly content-center flex-wrap mt-10">
          <MoviesComingCard movie={currentMovies} />
        </div>
      </div>
      <div className="mt-10">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredMovies.length / moviesPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;

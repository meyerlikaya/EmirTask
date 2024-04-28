import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMoviesByName } from "../redux/datas/imdbSlice";
import Jumbatron from "../components/Jumbatron";

function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMovie();
  }, []);

  async function getMovie() {
    setLoading(true);
    try {
      const result = await dispatch(getMoviesByName(params.name)).unwrap();
      if (!result) {
        navigate("/error");
        return;
      }
      setMovie(result);
    } catch (error) {
      console.error("Movie fetch error:", error);
      navigate("/error");
    } finally {
      setLoading(false);
    }
  }

  const handleWatchMovie = () => {
    window.open(movie.url, "_blank");
  };

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  return <Jumbatron movie={movie} />;
}

export default Detail;

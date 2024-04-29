import React, { useEffect, useState } from "react";
import FavoritesCard from "../components/FavoritesCard";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || [] // favorites null ise boş dizi
  );

  useEffect(() => {
    console.log(favorites);
  }, []);

  return (
    <div className="lg:flex lg:flex-row lg:justify-center lg:flex-wrap lg:gap-24 md:mt-4 sm:mt-4 justify-center">
      {favorites.map((favorite, index) => (
        <FavoritesCard key={index} movie={favorite} id={index} /> // id ekleniyor
      ))}
    </div>
  );
};

export default FavoritesPage;

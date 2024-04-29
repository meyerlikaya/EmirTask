import React from "react";
import { useNavigate } from "react-router-dom";

export default function Jumbatron({ movie }) {
  const navigate = useNavigate();

  return (
    <section
      className="bg-center bg-no-repeat bg-cover bg-gray-700 bg-blend-multiply"
      style={{ backgroundImage: `url(${movie.img})` }} // Corrected backgroundImage style
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          {movie.name}
        </h1>
        <h3 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Yıl: {movie.year}
        </h3>
        <h3 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-amber-300 md:text-5xl lg:text-6xl">
          IMDb: {movie.rate}
        </h3>

        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <button
            onClick={() => window.open(movie.url, "_blank")} // Open the URL in a new tab
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            <svg
          className="w-3.5 h-3.5 me-2 transform rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
            İZLE
          </button>
          <button
            onClick={() => navigate("/")}
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Ana Sayfa
          </button>
        </div>
      </div>
    </section>
  );
}

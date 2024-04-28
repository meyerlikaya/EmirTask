const MovieCard = ({ imdb }) => {
  return (
    <>
      {imdb.map((movieData, index) => (
        <div
          key={index}
          className="max-w-xs min-w-80 rounded-lg overflow-hidden shadow-xl mt-6"
        >
          <img className="w-full" src={movieData.img} alt={movieData.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{movieData.name}</div>
            <div className="flex justify-center rounded-md bg-amber-300 w-20">
              <p className="text-gray-700 font-bold text-base">IMBd  {movieData.rate}</p>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {movieData.year}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieCard;

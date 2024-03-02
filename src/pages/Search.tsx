import { useEffect, useState } from "react";
import { searchMovies } from "../api";
import { useParams } from "react-router-dom";
import { MovieDetails } from "../types/movie";
import Card from "../components/Card";

const Search = () => {
  const [searchResults, setSearchResults] = useState<MovieDetails[] | null>(
    null
  );
  const { searchKey } = useParams<{ searchKey: string }>();

  useEffect(() => {
    searchMovies(searchKey).then((items) => {
      setSearchResults(items);
    });
  }, []);
  console.log(searchResults);
  return (
    <div className="max-w-7xl sm:max-w-md md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
      <div className=" w-full text-white  mt-12 ">
        <h1 className=" pt-10 text-white">The result of Search </h1>
        <div className="h-full w-full grid grid-col-3 sm:grid-cols-3  gap-3 xl:grid-cols-5 pt-9 ">
          <Card movieDetails={searchResults} />
        </div>
      </div>
    </div>
  );
};

export default Search;

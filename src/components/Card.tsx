import { DetailedHTMLProps, ImgHTMLAttributes, ReactEventHandler, useState } from 'react';
import { Link } from "react-router-dom";
import { MovieDetails } from "../types/movie";


interface CardProps {
  movieDetails: MovieDetails[] | null;
}

const Card = ({ movieDetails }: CardProps) => {
  const fallBackImg = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://placehold.co/400/png'
  }
  return (
    <>
      {
        movieDetails != null ? (movieDetails.map((movie) => (
          <Link className="rounded card min-h-64 max-w-max" to={`/movie/${movie.id}`} key={movie.id}>
            <div>
              <div className="img h-4/5 max-w-xs border-white border-4 rounded transition duration-700 ease-in-out hover:border-green ">
                <img className="h-full w-full" src={movie.medium_cover_image} alt='error' onError={fallBackImg} />
              </div>
              <div className="description mt-1 ">
                <h5 className=" font-bold transition duration-700 hover:text-silver">{movie.title.length > 20 ? (movie.title.substring(0, 20) + '....') : (movie.title)}</h5>
                <p className="font-light">{movie.year}</p>
              </div>
            </div>
          </Link>
        ))) : ("Loading")
      }
    </>
  );
}

export default Card;

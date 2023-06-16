import { useState } from 'react'
import { Link } from "react-router-dom"
import { MovieDetails } from "../types/movie"

interface CardProps {
  movieDetails: MovieDetails[] | null;


}

const Card = ({ movieDetails }: CardProps) => {


  return (
    <div className="card flex  mx-auto space-x-1 text-white w-full justify-center items-center">
      {
        movieDetails != null ? (movieDetails.map((movie) => (
          <Link className=" rounded card min-h-64 max-w-xs" to={`/movie_details/${movie.id}`} key={movie.id}>
            <div>
              <div className="img h-4/5 border-white border-4 transition duration-700 ease-in-out hover:border-green  ">

                <img className="h-full w-full" src={movie.medium_cover_image} alt='Error loading image' />
              </div>
              <div className="description mt-1 ">
                <h5 className="text-white font-bold">{movie.title.length > 20 ? (movie.title.substring(0, 20) + '....') : (movie.title)}</h5>
                <p className="font-light">{movie.year}</p>
              </div>
            </div>
          </Link >
        ))) : ("Loading")


      }

    </div >)
}

export default Card
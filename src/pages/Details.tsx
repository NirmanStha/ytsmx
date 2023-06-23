import { useEffect, useState } from 'react'
import { fetchMovie } from '../api'
import { useParams } from 'react-router-dom';
import { MovieDetails } from '../types/movie';

const Details = () => {

    const { id } = useParams();

    const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null)

    useEffect(() => {
        fetchMovie(parseInt(id as string)).then((detail) => {
            setMovieDetails(detail);
            console.log(detail)

        }
        )
    }, [])

    return (
        <div className=''>
            {
                movieDetails != null ? (

                    <div className='container text-white mx-auto'>
                        <div className='flex justify-start items-center space-x-3 mt-4 p-3'>
                            <div className="movie-img flex flex-col justify-between items-center space-y-2">
                                <img className='border-4 border-white rounded max-w-full' src={movieDetails.medium_cover_image} alt={movieDetails?.background_image_original} />
                                <button className="btn bg-green font-bold rounded w-full p-2">Download</button>
                                <button className="btn bg-green font-bold rounded w-full p-2">Watch Now</button>
                            </div>
                            <div className="info">

                            </div>
                        </div>


                    </div>







                ) : (<h1>Loading</h1>)
            }

        </div >
    )
}

export default Details
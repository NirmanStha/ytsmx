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
        <div>
            {
                movieDetails != null ? (

                    <div className='container text-white '>

                        <div className="flex justify-between items-center">
                            <div className="card">
                                <div className="h-44">
                                    <img src={movieDetails.medium_cover_image} alt="" />
                                </div>
                            </div>
                            <div className="movie-info"></div>
                            <div className="similar"></div>

                        </div>





                    </div>

                ) : (<h1>Loading</h1>)
            }

        </div>
    )
}

export default Details
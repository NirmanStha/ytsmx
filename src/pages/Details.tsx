import { useEffect, useState } from 'react'
import { fetchMovie } from '../api'
import { useParams } from 'react-router-dom';
import { MovieDetails } from '../types/movie';

const Details = () => {

    const { id } = useParams();

    const [movieDetails, setMovieDetails] = useState<MovieDetails>()

    useEffect(() => {
        fetchMovie(parseInt(id as string)).then((detail) => {
            setMovieDetails(detail)
        }
        )
    }, [])

    return (
        <div className='text-white'>{JSON.stringify(movieDetails)}</div>
    )
}

export default Details
import { useState, useEffect } from 'react'
import { fetchMovies } from '../api'
import Card from '../components/Card';
import { MovieDetails } from '../types/movie';

const Home = () => {


    const [popular, setPopular] = useState<MovieDetails[] | null>(null)
    const [latest, setLatest] = useState<MovieDetails[] | null>(null)
    const [first, setfirst] = useState<MovieDetails[] | null>(null)

    useEffect(() => {
        (async function () {
            const data = await fetchMovies(16);
            setPopular()

        })(); // tei call garney function

    }, [])

    return (
        <div className='container bg-prim mx-auto h-screen text-white '>
            <h2 className='text-center font-bold text-xxl m-2'>Popular Download</h2>
            <div className="card-container mx-auto p-2 popular">
                {moviesDetails != null ? (<Card movieDetails={moviesDetails} />) : (<div> Fetchin datta</div>)}
            </div>
        </div>
    )
}

export default Home
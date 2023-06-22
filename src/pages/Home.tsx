import { useState, useEffect } from 'react'
import { fetchMovies } from '../api'
import Card from '../components/Card';
import { MovieDetails } from '../types/movie';

const Home = () => {


    const [popular, setPopular] = useState<MovieDetails[] | null>(null)
    const [latest, setLatest] = useState<MovieDetails[] | null>(null)
    const [upComing, setUpComing] = useState<MovieDetails[] | null>(null)

    useEffect(() => {
        (async function () {
            const data = await fetchMovies(16);
            setPopular(data.slice(0, 4));
            setLatest(data.slice(4, 12));
            setUpComing(data.slice(12, 16));


        })(); // tei call garney function

    }, [])
    console.log(popular)

    return (
        <>
            <div className='container bg-prim mx-auto  text-white flex justify-center items-center flex-col'>
                <h2 className='text-center font-bold text-xxl m-2 '>Popular Download</h2>
                <div className="card-container mx-auto p-2 popular grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center gap-3">
                    <Card movieDetails={popular} />
                </div>

            </div>
            <div className='container bg-prim mx-auto  text-white flex justify-center items-center flex-col '>
                <h2 className='text-center font-bold text-xxl m-2 '>Latest Movies</h2>
                <div className="card-container mx-auto p-2 popular grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center gap-3">
                    <Card movieDetails={latest} />
                </div>

            </div>
        </>
    )
}

export default Home
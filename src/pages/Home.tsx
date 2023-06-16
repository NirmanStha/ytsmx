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
        <div className='container bg-prim mx-auto h-screen text-white '>
            <h2 className='text-center font-bold text-xxl m-2'>Popular Download</h2>
            <div className="card-container mx-auto p-2 popular">
                <Card movieDetails={popular} />
            </div>
        </div>
    )
}

export default Home
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
    console.log(navigator.userAgent)
    return (
        <>
            {/* Popular */}
            <div className='py-4 container bg-prim mx-auto  text-white flex justify-center items-center flex-col'>
                <h2 className='text-center font-bold text-xxl m-2 '>Popular Download</h2>
                <div className="card-container mx-auto p-2 popular grid grid-cols-2  md:grid-cols-4 justify-center gap-4">
                    <Card movieDetails={popular} />
                </div>

            </div>

            {/* // Warning */}
            <div className="warn flex justify-center items-center flex-col border-2 border-green text-white container mx-auto bg-black sm:w-md  max-w-xl  py-4">

                <h1 className='border-b border-white text-center text-3xl p-3 font-medium'>Warning!</h1>

                <p className='text-center p-3'> If you are not using a VPN already: Accessing and Playing Torrents on a Smartphone is risky and dangerous. You may be in  Kathmandu, NEPAL  and using: {navigator.userAgent} . Your IP is  111.119.49.173 . We strongly recommend all users protecting their device with a VPN.</p>
            </div>


            {/* //Latest */}
            <div className='container bg-prim mx-auto  text-white flex justify-center items-center flex-col '>
                <h2 className='text-center font-bold text-xxl m-2 '>Latest Movies</h2>
                <div className="card-container mx-auto p-2 popular grid grid-cols-2  md:grid-cols-4 justify-center gap-3">
                    <Card movieDetails={latest} />
                </div>

            </div>
        </>
    )
}

export default Home
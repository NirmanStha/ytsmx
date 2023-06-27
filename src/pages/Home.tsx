import { useState, useEffect } from 'react'
import { fetchMovies } from '../api'
import Card from '../components/Card';
import { MovieDetails } from '../types/movie';

const Home = () => {


    const [popular, setPopular] = useState<MovieDetails[] | null>(null)
    const [latest, setLatest] = useState<MovieDetails[] | null>(null)
    const [upComing, setUpComing] = useState<MovieDetails[] | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async function () {
            const data = await fetchMovies(16);
            setLoading(true);
            setPopular(data.slice(0, 4));
            setLatest(data.slice(4, 12));
            setUpComing(data.slice(12, 16));
            setLoading(false);


        })(); // tei call garney function

    }, [])
    console.log(popular)
    console.log(navigator.userAgent)
    return (
        <>

            {
                loading ? (<div className='h-screen flex justify-center items-center'>
                    <div className="loader h-12 w-12 aspect-square flex justify-center items-center animate-spin border-white border-4 border-dashed rounded-full">


                    </div>
                </div>)
                    :
                    (
                        <>
                            <div className='py-4 mt-6 container bg-prim mx-auto  text-white flex justify-center items-center flex-col'>
                                <h2 className='text-center font-bold text-xxl m-2 '>Popular Download</h2>
                                <div className="card-container mx-auto p-2 popular grid grid-cols-2  md:grid-cols-4 justify-center gap-4">
                                    <Card movieDetails={popular} />
                                </div>

                            </div >



                            <div className="warn flex justify-center items-center flex-col border-2 border-green text-white container mx-auto bg-black  lg:max-w-4xl max-w-lg  py-4" >
                                <h1 className='border-b border-white text-center text-3xl p-3 font-medium'>Warning!</h1>
                                <p className='text-center p-3'> If you are not using a VPN already: Accessing and Playing Torrents on a Smartphone is risky and dangerous. You may be in  Kathmandu, NEPAL  and using: {navigator.userAgent} . Your IP is  111.119.49.173 . We strongly recommend all users protecting their device with a VPN.</p>
                            </div >




                            <div className='container bg-prim mx-auto  text-white flex justify-center items-center mt-5 flex-col ' >
                                <h2 className='text-center font-bold text-xxl my-2 '>Latest Movies</h2>
                                <div className="card-container mx-auto p-2 popular grid grid-cols-2  md:grid-cols-4 justify-center gap-3">
                                    <Card movieDetails={latest} />
                                </div>

                            </div >
                        </>
                    )
            }

        </>
    )
}

export default Home
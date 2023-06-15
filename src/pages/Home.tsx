import { useState, useEffect } from 'react'
import fetchMovie from '../api'
const Home = () => {
    const [clickedMovie, setClickedMovie] = useState('');
    const [moviesDetails, setMoviesDetails] = useState({})


    useEffect(() => {
        fetchMovie().then((data) =>
            setMoviesDetails(data))

        console.log(moviesDetails)
    }, [])
    return (
        <div className='container bg-white mx-auto '>

            <div className="card-container p-5 grid gap-1 grid-cols-3 grid-rows-1">

            </div>
        </div>
    )
}

export default Home
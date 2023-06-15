import { useState, useEffect } from 'react'
import fetchMovie from '../api'
import Card from '../components/Card';
const Home = () => {

    const [moviesDetails, setMoviesDetails] = useState()


    useEffect(() => {
        const FetchData = async () => {
            const data = await fetchMovie();
            console.log("this is data", data)

            setMoviesDetails(data)
        }
        FetchData()

    }, [])

    return (
        <div className='container bg-white mx-auto '>

            <div className="card-container p-5 grid gap-1 grid-cols-3 grid-rows-1">
                <Card movieDetails={moviesDetails} />
            </div>
        </div>
    )
}

export default Home
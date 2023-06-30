import { useEffect, useState } from 'react'
import { searchMovies } from '../api'
import { useParams } from 'react-router-dom'
import { MovieDetails } from '../types/movie'
import Card from '../components/Card'

const Search = () => {
    const [searchResults, setSearchResults] = useState<MovieDetails[] | null>(null)
    const { searchKey } = useParams<{ searchKey: string }>();

    useEffect(() => {
        searchMovies(searchKey).then(items => {
            setSearchResults(items);
        })

    }, [])
    console.log(searchResults)
    return (
        <div className='flex justify-between items-center flex-wrap h-screen w-full text-white  mt-12 '>

            <h1 className=' pt-10 text-white'>The result of Search </h1>
            <div className='h-full w-full flex justify-between items-center flex-wrap pt-9 '>
                <Card movieDetails={searchResults} />
            </div>
        </div>
    )
}

export default Search
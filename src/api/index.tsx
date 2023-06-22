import axios from 'axios'
import { MovieDetails } from '../types/movie'

const BASE_URL = 'https://yts.mx/api/v2'


export const fetchMovie = async (id: number): Promise<MovieDetails> => {
    console.log(id)
    const res = await axios.get(`${BASE_URL}/movie_details.json?movie_id=${id}`)

    return res.data.data.movie;
}

export const fetchMovies = async (limit: number): Promise<MovieDetails[]> => {
    const res = await axios.get(`${BASE_URL}/list_movies.json?limit=${limit}`)
    return res.data.data.movies;
}

// const fetchMovie = async (url: string): Promise<MovieDetails> => {

// }

// export default fetchMovie
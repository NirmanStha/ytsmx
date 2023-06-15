import axios from 'axios'
import { useState, useEffect } from 'react'

const BASE_URL = 'https://yts.mx/api/v2/'


const fetchMovie = async () => {
    try {

        const res = await axios.get(`${BASE_URL}/list_movies.json`)

        console.log(res.data.data.movies)
        return res.data.data.movies;
    }
    catch (err) {
        console.log(err)
    }
}

export default fetchMovie
import axios from 'axios'
import { useState, useEffect } from 'react'

const BASE_URL = 'https://yts.mx/api/v2/'


const fetchMovie = async () => {
    try {

        const res = await axios.get(`${BASE_URL}/list_movies.json`)
        const resData = res.data.data.movies;

        return resData;
    }
    catch (err) {
        console.log(err)
    }
}

export default fetchMovie
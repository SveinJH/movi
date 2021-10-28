import axios from 'axios'

const axiosBackend = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`,
    },
})

const axiosFrontend = axios.create({
    /* baseURL: process.env.NEXT_PUBLIC_VERCEL_URL, */
})

export { axiosBackend, axiosFrontend }

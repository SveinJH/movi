import axios from 'axios'

const axiosBackend = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`,
    },
})

const axiosFrontend = axios.create({
    baseURL: 'http://localhost:3000',
})

export { axiosBackend, axiosFrontend }

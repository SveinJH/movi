import { axiosBackend } from '@/utils/axios'

export default async function handler(req, res) {
    const { id } = req.query

    const { movie, credits } = getMovieWithCredits(id)

    res.status(200).json({
        movie,
        credits,
    })
}

export const getMovieWithCredits = async id => {
    const movie = await getMovie(id)
    const credits = await getCredits(id)
    console.log(credits)
    credits.cast = credits?.cast?.splice(0, 9)
    return { movie, credits }
}

export const getMovie = async id => {
    const { data } = await axiosBackend.get(`/movie/${id}?language=no-NO`)
    return data
}

export const getCredits = async id => {
    const { data } = await axiosBackend.get(
        `/movie/${id}/credits?language=no-NO`,
    )
    return data
}

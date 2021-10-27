import { axiosBackend } from '@/utils/axios'

export default async function handler(req, res) {
    console.log('GOT REQQQQQQQQQQQQQQQ')

    const { id } = req.query
    const { data: movie } = await axiosBackend.get(
        `https://api.themoviedb.org/3/movie/${id}?language=no-NO`,
    )
    let { data: credits } = await axiosBackend.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?language=no-NO`,
    )
    credits.cast = credits.cast.splice(0, 9)

    /* console.log(movie, credits) */

    res.status(200).json({
        movie,
        credits,
    })
}

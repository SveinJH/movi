import { axiosBackend } from '@/utils/axios'

export default async function handler(req, res) {
    const { id } = req.query

    const data = getSimilarMovies(id)

    res.status(200).json(data)
}

export const getSimilarMovies = async (id, limit) => {
    const { data } = await axiosBackend.get(
        `/movie/${id}/similar?language=no-NO`,
    )
    return data?.results?.splice(0, limit)
}

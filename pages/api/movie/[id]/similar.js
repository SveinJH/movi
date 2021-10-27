import { axiosBackend } from '@/utils/axios'

export default async function handler(req, res) {
    const { id } = req.query
    const { data: movies } = await axiosBackend.get(
        `/movie/${id}/similar?language=no-NO`,
    )

    res.status(200).json(movies?.results.splice(0, 10))
}

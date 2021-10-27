import { axiosBackend } from '@/utils/axios'

export default async function handler(req, res) {
    const { query } = req

    const { data } = await axiosBackend.get(
        `/search/multi?language=no-NO&region=NO&query=${query.q}`,
        /* `/search/multi?language=no-NO&region=NO&q=${query.q}`, */
    )

    res.status(200).json(data)
}

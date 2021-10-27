import { axiosBackend } from '@/utils/axios'

export default async function handler(req, res) {
    const { data } = await axiosBackend.get(
        '/movie/popular?language=no-NO&region=NO',
    )

    res.status(200).json(data)
}

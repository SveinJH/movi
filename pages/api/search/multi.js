import { axiosBackend } from '@/utils/axios'

export default async function handler(req, res) {
    const { query } = req
    const data = getSearchResults(query.q)

    res.status(200).json(data)
}

export const getSearchResults = async q => {
    const { data } = await axiosBackend.get(
        `/search/multi?language=no-NO&region=NO&query=${q}`,
    )
    return data
}

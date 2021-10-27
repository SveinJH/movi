import { useRouter } from 'next/router'
import styles from '@/styles/Search.module.css'
import { useEffect, useState } from 'react'
import { axiosFrontend } from '@/utils/axios'
import Results from '@/components/results/Results'
import Spinner from '@/components/ui/Spinner'

const SearchResultsPage = () => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    const { query } = useRouter()

    useEffect(() => {
        if (query.q) {
            getSearchResults()
        }
    }, [query.q])

    const getSearchResults = async () => {
        setLoading(true)
        const { data } = await axiosFrontend.get(
            `/api/search/multi?q=${query.q}`,
        )
        console.log(data?.results)
        setLoading(false)
        setResults(data?.results)
    }

    return (
        <div className={styles.search}>
            <h3>Søkeresultater for "{query.q}"</h3>
            {loading && <Spinner />}
            {!loading && <Results results={results} />}
        </div>
    )
}

export default SearchResultsPage

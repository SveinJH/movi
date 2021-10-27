import { useRouter } from 'next/router'
import styles from '@/styles/Search.module.css'
import { useEffect, useState } from 'react'
import { axiosFrontend } from '@/utils/axios'
import Results from '@/components/results/Results'

const SearchResultsPage = () => {
    const [results, setResults] = useState([])
    const { query } = useRouter()

    useEffect(() => {
        if (query.q) {
            getSearchResults()
        }
    }, [query.q])

    const getSearchResults = async () => {
        const { data } = await axiosFrontend.get(
            `/api/search/multi?q=${query.q}`,
        )
        console.log(data?.results)
        setResults(data?.results)
    }

    return (
        <div className={styles.search}>
            <h3>Søkeresultater for "{query.q}"</h3>
            <Results results={results} />
        </div>
    )
}

export default SearchResultsPage

import axios from 'axios'
import styles from '../styles/Home.module.css'
import Results from '@/components/results/Results'

export const getStaticProps = async () => {
    const res = await axios.get('http://localhost:3000/api/movie/popular')

    return {
        props: {
            popularMovies: res?.data?.results,
        },
    }
}

export default function Home({ popularMovies }) {
    console.log(popularMovies)

    return (
        <div>
            {popularMovies && (
                <Results
                    mediaType="movie"
                    results={popularMovies}
                    subtitle="Filmer"
                    title="Populære"
                />
            )}
        </div>
    )
}

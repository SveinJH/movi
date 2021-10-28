import { axiosFrontend } from '@/utils/axios'
import Results from '@/components/results/Results'
import { getPopularMovies } from './api/movie/popular'

export const getStaticProps = async () => {
    const data = await getPopularMovies()

    return {
        props: {
            popularMovies: data?.results,
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

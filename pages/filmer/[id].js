import Image from 'next/image'
import styles from '@/styles/Movie.module.css'
import {
    convertRuntime,
    getDateString,
    getDollarString,
} from '@/utils/index.js'
import Persons from '@/components/actors/Persons'
import Results from '@/components/results/Results'
import { getPopularMovies } from 'pages/api/movie/popular'
import { getMovieWithCredits } from 'pages/api/movie/[id]'
import { getSimilarMovies } from 'pages/api/movie/[id]/similar'

export const getStaticPaths = async () => {
    const data = await getPopularMovies()
    const paths = data?.results?.map(movie => ({
        params: { id: `${movie.id}` },
    }))
    console.log(paths)

    return { paths, fallback: true }
}

export const getStaticProps = async ({ params }) => {
    const { credits, movie } = await getMovieWithCredits(params.id)
    const similarMovies = await getSimilarMovies(params.id, 10)

    return {
        props: { credits, movie, similarMovies },
    }
}

const ResultPage = ({ credits, movie, similarMovies }) => {
    if (!movie || !similarMovies) return null

    const {
        backdrop_path,
        budget,
        genres,
        homepage,
        imdb_id,
        overview,
        release_date,
        revenue,
        runtime,
        title,
    } = movie

    const { cast, crew } = credits

    return (
        <div className={styles.movie}>
            <div className={styles.imageContainer}>
                <Image
                    alt={`${title} backdrop`}
                    src={`https://image.tmdb.org/t/p/w780${backdrop_path}`}
                    width={780}
                    height={439}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>
                    <ul className={styles.genres}>
                        {genres.map(({ id, name }) => (
                            <li key={id} className={styles.genre}>
                                {name}
                            </li>
                        ))}
                    </ul>
                    <p className={styles.overview}>{overview}</p>
                    <Image
                        className={styles.image}
                        src="/imdb.png"
                        width="50"
                        height="25"
                        onClick={() =>
                            window.open(`https://imdb.com/title/${imdb_id}`)
                        }
                    />
                </div>
                <ul className={styles.table}>
                    <li>
                        <div>Spilletid</div>
                        <div>{convertRuntime(runtime)}</div>
                    </li>
                    <li>
                        <div>Utgivelsesdato</div>
                        <div>{getDateString(release_date)}</div>
                    </li>
                    <li>
                        <div>Budsjett</div>
                        <div>{getDollarString(budget)}</div>
                    </li>
                    <li>
                        <div>Inntekt</div>
                        <div>{getDollarString(revenue)}</div>
                    </li>
                    {homepage && (
                        <li
                            className={styles.homepage}
                            onClick={() => window.open(homepage)}
                        >
                            Hjemmeside
                        </li>
                    )}
                </ul>
                <Persons persons={cast} />
            </div>
            <div className={styles.similarMovies}>
                <h2>Lignende filmer</h2>
                <Results mediaType="movie" results={similarMovies || []} />
            </div>
        </div>
    )
}

export default ResultPage

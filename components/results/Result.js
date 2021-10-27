import Image from 'next/image'
import styles from '@/styles/Result.module.css'
import { getGenres, getNorwegianDateString } from '../../utils'
import { AiFillStar } from 'react-icons/ai'
import { useRouter } from 'next/router'
import MovieResultBody from './MovieResultBody'

const Result = ({ result }) => {
    const {
        genre_ids,
        id,
        media_type,
        poster_path,
        release_date,
        title,
        vote_average,
    } = result
    const router = useRouter()

    let resultBody

    switch (media_type) {
        case 'movie':
            resultBody = <MovieResultBody result={result} />
            break
        case 'tv':
            resultBody = <div>TV</div>
            break
        default:
            resultBody = <div>ACTOR</div>
    }

    return (
        <div
            className={styles.card}
            onClick={() => router.push(`/filmer/${id}`)}
        >
            <div>
                <Image
                    src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                    width={225}
                    height={337}
                />
            </div>
            {resultBody}
        </div>
    )
}

export default Result

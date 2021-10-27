import styles from '@/styles/Result.module.css'
import { getGenres, getNorwegianDateString } from '@/utils/index.js'
import { AiFillStar } from 'react-icons/ai'

const MovieResultBody = ({ result }) => {
    const { genre_ids, id, release_date, title, vote_average } = result

    return (
        <div className={styles.content}>
            <div className={styles.rating}>
                <AiFillStar color="var(--primary)" size={20} />
                {vote_average.toFixed(1)}
            </div>
            <div className={styles.title}>{title}</div>
            {
                <div className={styles.genres}>
                    {getGenres(genre_ids).map((genre, i) => (
                        <div key={i} className={styles.genre}>
                            {genre}
                        </div>
                    ))}
                </div>
            }
            <div className={styles.release_date}>
                {getNorwegianDateString(release_date)}
            </div>
        </div>
    )
}

export default MovieResultBody

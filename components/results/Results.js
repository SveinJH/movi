import styles from '@/styles/Results.module.css'
import Result from './Result'

const Results = ({ mediaType, results, title, subtitle }) => {
    return (
        <div>
            <div>
                <h4>{subtitle}</h4>
                <h2>{title}</h2>
            </div>
            <div className={styles.results}>
                {results.map(result => {
                    const updatedResult = { ...result }
                    if (!updatedResult.media_type) {
                        updatedResult.media_type = mediaType
                    }
                    return <Result key={result.id} result={updatedResult} />
                })}
            </div>
        </div>
    )
}

export default Results

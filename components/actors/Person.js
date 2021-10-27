import Image from 'next/image'
import styles from '@/styles/Person.module.css'

const Person = ({ person }) => {
    const { original_name, profile_path } = person

    console.log(profile_path)

    return (
        <div className={styles.person} title={original_name}>
            {profile_path && (
                <Image
                    src={`https://image.tmdb.org/t/p/w185${profile_path}`}
                    width="100"
                    height="100"
                />
            )}
        </div>
    )
}

export default Person

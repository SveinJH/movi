import styles from '@/styles/Persons.module.css'
import Person from './Person'

const Persons = ({ persons }) => {
    return (
        <div className={styles.persons}>
            <h4 className={styles.title}>Skuespillere</h4>
            <div className={styles.container}>
                {persons.map(person => (
                    <Person key={person.id} person={person} />
                ))}
            </div>
        </div>
    )
}

export default Persons

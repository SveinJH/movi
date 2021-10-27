import styles from '@/styles/Page.module.css'
import Nav from './Nav'

const Page = ({ children }) => {
    return (
        <>
            <Nav />
            <div className={styles.page}>{children}</div>
        </>
    )
}

export default Page

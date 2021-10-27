import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Nav.module.css'

const Nav = () => {
    const router = useRouter()
    const [search, setSearch] = useState('')

    const handleSearch = e => {
        e.preventDefault()
        if (search.trim() !== '') {
            alert('searching')
            router.push(`/sok?q=${search}`)
        }
    }

    return (
        <nav className={styles.nav}>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Søk..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </form>
        </nav>
    )
}

export default Nav

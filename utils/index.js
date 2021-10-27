const MONTH_NAMES = [
    'januar',
    'februar',
    'mars',
    'april',
    'mai',
    'juni',
    'juli',
    'august',
    'september',
    'oktober',
    'november',
    'desember',
]

const GENRES = [
    {
        id: 28,
        name: 'Action',
    },
    {
        id: 12,
        name: 'Adventure',
    },
    {
        id: 16,
        name: 'Animation',
    },
    {
        id: 35,
        name: 'Comedy',
    },
    {
        id: 80,
        name: 'Crime',
    },
    {
        id: 99,
        name: 'Documentary',
    },
    {
        id: 18,
        name: 'Drama',
    },
    {
        id: 10751,
        name: 'Family',
    },
    {
        id: 14,
        name: 'Fantasy',
    },
    {
        id: 36,
        name: 'History',
    },
    {
        id: 27,
        name: 'Horror',
    },
    {
        id: 10402,
        name: 'Music',
    },
    {
        id: 9648,
        name: 'Mystery',
    },
    {
        id: 10749,
        name: 'Romance',
    },
    {
        id: 878,
        name: 'Science Fiction',
    },
    {
        id: 10770,
        name: 'TV Movie',
    },
    {
        id: 53,
        name: 'Thriller',
    },
    {
        id: 10752,
        name: 'War',
    },
    {
        id: 37,
        name: 'Western',
    },
    {
        id: 10759,
        name: 'Action & Adventure',
    },
    {
        id: 10762,
        name: 'Kids',
    },
    {
        id: 10763,
        name: 'News',
    },
    {
        id: 10764,
        name: 'Reality',
    },
    {
        id: 10765,
        name: 'Sci-Fi & Fantasy',
    },
    {
        id: 10766,
        name: 'Soap',
    },
    {
        id: 10767,
        name: 'Talk',
    },
    {
        id: 10768,
        name: 'War & Politics',
    },
]

export const convertRuntime = runtime => {
    const hours = Math.floor(runtime / 60)
    const minutes = runtime % 60
    if (hours === 0) return `${minutes}min`
    return `${hours}t ${minutes}min`
}

export const getDateString = dateString => {
    const d = new Date(dateString)
    const day = d.getDate()
    const month = d.getMonth() + 1
    const year = d.getFullYear()
    return `${day > 9 ? day : `0${day}`}.${
        month > 9 ? month : `0${month}`
    }.${year}`
}

export const getNorwegianDateString = dateString => {
    const d = new Date(dateString)
    return `${d.getDate()}. ${MONTH_NAMES[d.getMonth()]} ${d.getFullYear()}`
}

export const getGenres = ids => {
    const genres = []
    ids.forEach(id => {
        genres.push(GENRES.find(g => g.id === id)?.name)
    })
    return genres
}

export const getDollarString = amount => {
    return `$ ${amount.toLocaleString()}`
}

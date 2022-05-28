import Client from './Client'
import axios from 'axios'

const get = async (keywords) => {
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
            q: keywords ? keywords : 'harry potter',
            maxResults: 36,
            orderBy: 'newest',
            startIndex: 0,
            fields: 'items(id, volumeInfo/title, volumeInfo/imageLinks/thumbnail, volumeInfo/averageRating, volumeInfo/authors)'
        }
    })

    return response
}

const getByTitle = () => {
    
}

const BookService = {
    get,
    getByTitle
}

export default BookService
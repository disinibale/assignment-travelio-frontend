import axios from 'axios'

const WishlistClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
})


const BookClient = axios.create({
    baseUrl: process.env.REACT_APP_GOOGLEAPIS
})

const Client = {
    WishlistClient,
    BookClient
}

export default Client
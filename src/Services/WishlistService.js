import Client from "./Client";

const add = async (data) => {
    try {
        const response = await Client.WishlistClient.post('wishlists', {
            uid: data.uid,
            title: data.title,
            rating: data.rating,
            author: data.author,
            thumbnail: data.thumbnail
        })

        return response
    } catch (err) {
        console.log(err)
    }
}

const get = async () => {
    const response = await Client.WishlistClient.get('/wishlists')

    return response
}

const remove = async (id) => {
    try {
        const response = await Client.WishlistClient.delete(`/wishlists/${id}`)

        return response
    } catch (err) {
        console.log(err)
    }
}

const WishlistService = {
    add,
    get,
    remove
}

export default WishlistService
import React, { useState, useEffect } from 'react'
import Card from '../Components/Card'
import WishlistService from '../Services/WishlistService'

const Wishlist = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState(false)

    const wishlist = async () => {
        try {
            const response = await WishlistService.get()

            if (response.data.data) {
                setData(response.data.data)
            } else {
                setError(true)
            }

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        wishlist()
        console.log(data)
    }, [])

    return (
        <>
            <div className='flex justify-between'>
                <h2 className='text-green-800 font-semibold antialiased text-3xl mb-4'>My Wishlist Collections</h2>
            </div>
            <div className={'flex flex-wrap -mx-4'}>
                {(data) && (
                    <>
                        {data.map((data, i) => (
                            <>
                                <Card
                                    key={i}
                                    bookId={data.id}
                                    bookTitle={data.title}
                                    bookAuthors={data.authors}
                                    bookThumbnail={data.thumbnail}
                                    bookRating={data.rating}
                                    updateData={wishlist}
                                />
                            </>
                        ))}
                    </>
                )}
            </div>
        </>
    )
}

export default Wishlist
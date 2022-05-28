import React, { useState, useEffect } from 'react'
import BookService from '../Services/BookService'

import Card from '../Components/Card'

const Home = () => {

    const [books, setBooks] = useState(null)
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)

    const mapBook = async (keywords) => {
        try {
            setLoading(true)
            const response = await BookService.get(keywords)
            setBooks(response.data.items)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        mapBook(query)
    }, [])

    return (
        <>
            <div className='flex justify-between'>
                <h2 className='text-green-800 font-semibold antialiased text-3xl mb-4'>Featured Books</h2>
                <div>
                    <input
                        type='text'
                        placeholder='Type a Keywords'
                        onChange={(e) => setQuery(e.target.value)}
                        className='form-input rounded-md border-gray-300 focus:border-green-500 transition duration-300' />
                    <button
                        className="py-2 px-2 ml-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
                        onClick={(e) => {
                            e.preventDefault()
                            mapBook(query)
                        }}
                    >
                        Search
                    </button>
                </div>
            </div>
            {loading ? (<p>Loading ...</p>) : (
                <div className='flex flex-wrap -mx-4'>
                    {books ? (
                        <>
                            {books?.map((item, id) => {
                                return (
                                    <>
                                        {/* <p>
                                                {item?.id}
                                            </p> */}
                                        <Card
                                            key={id}
                                            bookId={item.id}
                                            bookTitle={item?.volumeInfo?.title}
                                            bookAuthors={item?.volumeInfo?.authors}
                                            bookThumbnail={item?.volumeInfo?.imageLinks?.thumbnail}
                                            bookRating={item?.volumeInfo?.averageRating}
                                        />
                                    </>
                                )
                            })}

                        </>
                    ) : (<>Data kosong</>)}
                </div>
            )}
        </>
    )
}

export default Home
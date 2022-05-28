import React from 'react'

import ReactStars from 'react-stars'
import noImg from '../Assets/Images/no-img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSubtract } from '@fortawesome/free-solid-svg-icons'
import WishlistService from '../Services/WishlistService'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Card = (props) => {

    const url = window.location.href
    const navigate = useNavigate()

    const addWishlist = async (uid, title, rating, authors, thumbnail) => {
        await WishlistService.add({ uid, title, rating, authors, thumbnail }).then(
            (res) => {
                console.log(res)
            }
        ).catch((e) => { console.log(e) })
    }

    const removeWishlist = async (id) => {
        await WishlistService.remove(id).then(
            (res) => {
                props.updateData()
            }
        ).catch((e) => console.log(e))
    }

    return (
        <div className='w-full sm:w-1/2 md:2-1/2 xl:w-1/4 p-4'>
            <div className='block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition duration-300'>
                <div className='relative pb-48 overflow-hidden'>
                    <img
                        className='absolute -z-0 inset--1 h-full w-full object-cover transition duration-300 hover:scale-150'
                        src={props.bookThumbnail ? props.bookThumbnail : noImg}
                        alt='' />
                    <button
                        className={`cursor-pointer absolute mt-2 ml-2 bg-green-500 rounded-full w-12 h-12 ${url === 'http://localhost:3001/wishlist' && 'hidden'}`}
                        onClick={
                            () => {
                                if (addWishlist(props.bookId, props.bookTitle, props.bookRating, props.bookAuthors, props.bookThumbnail)) toast('Book has been added to your wishlist')
                            }
                        }>
                        <FontAwesomeIcon className='text-white' icon={faPlus} />
                    </button>
                    <button
                        className={`cursor-pointer absolute mt-2 ml-2 bg-red-800 rounded-full w-12 h-12 ${url === 'http://localhost:3001/' && 'hidden'}`}
                        onClick={
                            () => {
                                removeWishlist(props.bookId)
                                props.updateData()
                            }
                        }>
                        <FontAwesomeIcon className='text-white' icon={faSubtract} />
                    </button>
                </div>
                <div className='p-4 h-52'>
                    <span className='inline-block px-2 py-1 overflow-hidden whitespace-nowrap max-w-full leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs'>
                        {props.bookAuthors}
                    </span>
                    <h2 className='mt-2 mb-2 text-gray-500 font-bold'>{props.bookTitle}</h2>
                </div>
                <div className='p-4 flex items-center w-full text-gray-600'>

                    {props.bookRating ? (
                        <>
                            <ReactStars size={24} value={props.bookRating} edit={false} count={5} />
                            <span className='ml-2 mt-1'>Book Rating</span>
                        </>
                    ) : (
                        <>
                            <small>This book doesn't have a rating yet</small>
                            {/* <small>{url}</small> */}
                        </>
                    )}

                </div>
            </div>
            
            <ToastContainer />
        </div >
    )
}

export default Card
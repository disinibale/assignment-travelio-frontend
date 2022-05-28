import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = ({ children }) => {
    const activeStyle = 'py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold transition duration-300'
    const deactiveStyle = 'py-4 px-2 py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300'

    const [isOpen, setIsOpen] = useState('hidden')

    const [homeStyle, setHomeStyle] = useState(activeStyle)
    const [wishlistStyle, setWishlistStyle] = useState(deactiveStyle)

    const activateButton = (isActive) => {
        switch (isActive) {
            case 'home':
                setWishlistStyle(deactiveStyle)
                setHomeStyle(activeStyle)
                break
            case 'wishlist':
                setHomeStyle(deactiveStyle)
                setWishlistStyle(activeStyle)
                break
            default:
        }
    }

    return (
        <nav className="bg-white shadow-lg fixed min-w-full z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <a href="https://github.com/disinibale" className="flex items-center py-4 px-2">
                                {/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
                                <span className="font-semibold text-gray-500 text-lg">Book Apps</span>
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-3 ">
                        <Link
                            to='/'
                            className={homeStyle}
                            onClick={() => activateButton('home')}
                        >
                            Home
                        </Link>
                        <Link
                            to='/wishlist'
                            className={wishlistStyle}
                            onClick={() => activateButton('wishlist')}
                        >
                            My Wishlist
                        </Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            className="outline-none mobile-menu-button"
                            onClick={() => isOpen ? setIsOpen('') : setIsOpen('hidden')}>
                            <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                                x-show="!showMenu"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen} mobile-menu`}>
                <ul className="">
                    <li>
                        <Link onClick={() => setIsOpen('hidden')} to='/' className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => setIsOpen('hidden')} to='wishlist' className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                            My Wishlist
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar
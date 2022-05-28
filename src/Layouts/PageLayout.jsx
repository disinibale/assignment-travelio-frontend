import React from 'react'
import { Outlet } from 'react-router-dom'

const PageLayout = () => {
  return (
    <div className='app antialiased bg-gray-100 text-gray-900 pt-12 pb-10 px-6 min-h-screen'>
      <div className='container max-w-6xl mx-auto px-4 mt-10'>
        <Outlet />
      </div>
    </div>
  )
}

export default PageLayout
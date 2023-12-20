import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <body class='bg-gray-100'>
        <header class='bg-blue-500 text-white p-4 flex justify-between'>
          <h1 class='text-4xl font-bold'>Your Website</h1>
          <div className='space-x-4'>
            <Link to='/' className='bg-yellow-500 p-4 rounded-xl text-white'>
              Home
            </Link>
            <Link
              to='/about'
              className='bg-yellow-500 p-4 rounded-xl text-white'
            >
              About Us
            </Link>
            <Link
              to='/contact'
              className='bg-yellow-500 p-4 rounded-xl text-white'
            >
              Contact Us
            </Link>
          </div>
        </header>

        <section class='container mx-auto my-8 p-8 bg-white shadow-md'>
          <h2 class='text-2xl font-bold mb-4'>Welcome to Our Contact</h2>
          <p class='text-gray-700'>This is the Contact page content.</p>
        </section>

        <footer class='bg-blue-500 text-white p-4'>
          <p>&copy; 2023 Your Website. All rights reserved.</p>
        </footer>
      </body>
    </div>
  )
}

export default Contact

import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white w-screen px-5 py-5 text-sm'>
        {/* Copyright info */}
        <p className="text-base text-center">
            Copyright &copy; {new Date().getFullYear()} Bambora Ecommerce. All Rights Reserved
        </p>
    </footer>
  )
}

export default Footer
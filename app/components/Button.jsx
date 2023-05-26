'use client'

import React from 'react'
import { toast } from 'react-toastify'

const Button = () => {
    const handleClick = () => {
        toast.success('Hello Peeps');
    }
    
  return (
    <button 
        onClick={handleClick}
        className='px-4 py-2 bg-slate-800 text-white rounded-md'
    >
        Test Toastify
    </button>
  )
}

export default Button
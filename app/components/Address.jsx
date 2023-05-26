import React from 'react'

const Address = ({totalProductsPrice}) => {
  return (
    <section className='flex flex-col gap-y-4 md:col-span-3'>
        <div className='flex justify-between items-center'>
            <h2 className='font-semibold text-lg sm:text-2xl'>Billing Address</h2>
            <span>Amount to be paid: ${totalProductsPrice}</span>
        </div>

        <h4 className='text-sm text-gray-500'>Please fill in your details to proceed</h4>

        <form className='flex flex-col space-y-5'>
            <div className='flex flex-col space-y-2'>
                <label className='flex items-center space-x-1'>
                    <span>Name</span>
                    <span className='text-red-500 text-lg'>*</span>
                </label>
                <input
                    required 
                    type="text" 
                    placeholder='eg. John Doe'
                    className='py-3 px-4 rounded w-full border focus:border-2'
                    name='name'
                />
            </div>

            <div className='flex flex-col space-y-2'>
                <label className='flex items-center space-x-1'>
                    <span>Address Line 1</span>
                    <span className='text-red-500 text-lg'>*</span>
                </label>
                <input
                    required 
                    type="text" 
                    placeholder='eg. 123 ChristianBorg Road'
                    className='py-3 px-4 rounded w-full border focus:border-2'
                    name='addressL1'
                />
            </div>

            <div className='flex flex-col space-y-2'>
                <label>Address Line 2</label>
                <input
                    type="text" 
                    placeholder='eg. Apt No. 18'
                    className='py-3 px-4 rounded w-full border focus:border-2'
                    name='addressL2'
                />
            </div>

            <div className='flex flex-col space-y-2'>
                <label className='flex items-center space-x-1'>
                    <span>City</span>
                    <span className='text-red-500 text-lg'>*</span>
                </label>
                <input
                    required 
                    type="text" 
                    placeholder='eg. New York'
                    className='py-3 px-4 rounded w-full border focus:border-2'
                    name='city'
                />
            </div>

            <div className='flex flex-col space-y-2'>
                <label className='flex items-center space-x-1'>
                    <span>Postal Code</span>
                    <span className='text-red-500 text-lg'>*</span>
                </label>
                <input
                    required 
                    type="text" 
                    placeholder='eg. 12100'
                    className='py-3 px-4 rounded w-full border focus:border-2'
                    name='pcode'
                />
            </div>

            <div className='flex flex-col space-y-2'>
                <label className='flex items-center space-x-1'>
                    <span>Phone Number</span>
                    <span className='text-red-500 text-lg'>*</span>
                </label>
                <input
                    required 
                    type="text" 
                    placeholder='eg. 698236326'
                    className='py-3 px-4 rounded w-full border focus:border-2'
                    name='phone'
                />
            </div>

            <div className='flex flex-col space-y-2'>
                <label className='flex items-center space-x-1'>
                    <span>Email Address</span>
                    <span className='text-red-500 text-lg'>*</span>
                </label>
                <input
                    required 
                    type="email" 
                    placeholder='eg. johndoe@learning.com'
                    className='py-3 px-4 rounded w-full border focus:border-2'
                    name='email'
                />
            </div>
        </form>
    </section>
  )
}

export default Address
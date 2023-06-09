import React from 'react'

const Address = ({totalProductsPrice, address, setAddress}) => {
    const handleAddressInputChange = (e) => {
        const {name, value} = e.target;
        setAddress(prev => ({...prev, [name]: value}));
    }

  return (
    <section className='flex flex-col gap-y-4 md:col-span-3'>
        <div className='flex justify-between items-center'>
            <h2 className='font-semibold text-xl text-gray-600'>Billing Address</h2>
            <span className='font-medium'>Amount to be paid: ${totalProductsPrice}</span>
        </div>

        <h4 className='text-sm text-gray-500'>Please fill in your details to proceed</h4>

        <div className='flex flex-col space-y-5'>
            <div className='flex flex-col space-y-2'>
                <label className='flex items-center space-x-1'>
                    <span>Name</span>
                    <span className='text-red-500 text-lg'>*</span>
                </label>
                <input
                    required
                    onChange={handleAddressInputChange}
                    value={address.name} 
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
                    onChange={handleAddressInputChange}
                    value={address.address_line1} 
                    type="text" 
                    placeholder='eg. 123 ChristianBorg Road'
                    className='py-3 px-4 rounded w-full border focus:border-2'
                    name='address_line1'
                />
            </div>

            <div className='flex flex-col space-y-2'>
                <label>Address Line 2</label>
                <input
                    type="text" 
                    onChange={handleAddressInputChange}
                    value={address.address_line2}
                    placeholder='eg. Apt No. 18'
                    className='py-3 px-4 rounded w-full border focus:border-2'
                    name='address_line2'
                />
            </div>

            <div className='flex flex-col space-y-2'>
                <label className='flex items-center space-x-1'>
                    <span>Country</span>
                    <span className='text-red-500 text-lg'>*</span>
                </label>
                <input
                    required
                    onChange={handleAddressInputChange}
                    value={address.country} 
                    type="text" 
                    placeholder='eg. MA'
                    className='py-3 px-4 rounded w-full border focus:border-2'
                    name='country'
                    maxLength={2}
                />
            </div>

            <div className='flex flex-col space-y-2'>
                <label className='flex items-center space-x-1'>
                    <span>City</span>
                    <span className='text-red-500 text-lg'>*</span>
                </label>
                <input
                    required
                    onChange={handleAddressInputChange}
                    value={address.city} 
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
                    onChange={handleAddressInputChange}
                    value={address.postal_code} 
                    type="text" 
                    placeholder='eg. 12100'
                    className='py-3 px-4 rounded w-full border focus:border-2'
                    name='postal_code'
                />
            </div>

            <div className='flex flex-col space-y-2'>
                <label className='flex items-center space-x-1'>
                    <span>Phone Number</span>
                    <span className='text-red-500 text-lg'>*</span>
                </label>
                <input
                    required
                    onChange={handleAddressInputChange}
                    value={address.phone_number} 
                    type="text" 
                    placeholder='eg. 698236326'
                    className='py-3 px-4 rounded w-full border focus:border-2'
                    name='phone_number'
                />
            </div>

            <div className='flex flex-col space-y-2'>
                <label className='flex items-center space-x-1'>
                    <span>Email Address</span>
                    <span className='text-red-500 text-lg'>*</span>
                </label>
                <input
                    required
                    onChange={handleAddressInputChange}
                    value={address.email_address} 
                    type="email" 
                    placeholder='eg. johndoe@learning.com'
                    className='py-3 px-4 rounded w-full border focus:border-2'
                    name='email_address'
                />
            </div>
        </div>
    </section>
  )
}

export default Address
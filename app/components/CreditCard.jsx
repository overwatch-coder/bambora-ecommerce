import React from 'react'

const CreditCard = ({card, setCard, isLoading}) => {
    const handleCardInputChange = (e) => {
        const {name, value} = e.target;
        setCard(prev => ({...prev, [name]: value}));
    }

  return (
    <section className='md:col-span-2 flex flex-col gap-y-5 mt-7 md:mt-0'>
        <h2 className='font-semibold text-xl text-gray-600'>Card Details</h2>

        <div className="flex flex-col space-y-4 w-full">
            <div className='flex flex-col space-y-2'>
                <label className='flex items-center space-x-1'>
                    <span>Card Holder Name</span>
                    <span className='text-red-500 text-lg'>*</span>
                </label>
                <input
                    required
                    onChange={handleCardInputChange}
                    value={card.name} 
                    type="text" 
                    placeholder='eg. John Doe'
                    className='py-3 px-4 rounded w-full border focus:border-2'
                    name='name'
                    maxLength={64}
                />
            </div>

            <div className='flex flex-col space-y-2'>
                <label className='flex items-center space-x-1'>
                    <span>Card Number</span>
                    <span className='text-red-500 text-lg'>*</span>
                </label>
                <input
                    required
                    onChange={handleCardInputChange}
                    value={card.number} 
                    type="text" 
                    placeholder='4030000010001234'
                    className='py-3 px-4 rounded w-full border focus:border-2'
                    name='number'
                    maxLength={20}
                />
            </div>

            <div className='flex flex-col space-y-2'>
                <label className='flex items-center space-x-1'>
                    <span>Expiry (MM/YY)</span>
                    <span className='text-red-500 text-lg'>*</span>
                </label>
                <div className='flex items-center space-x-3'>
                    <input
                        required
                        onChange={handleCardInputChange}
                        value={card.expiry_month} 
                        type="text" 
                        placeholder='05'
                        className='py-3 px-4 rounded w-full border focus:border-2'
                        name='expiry_month'
                        maxLength={2}
                    />
                    
                    <input
                        required
                        onChange={handleCardInputChange}
                        value={card.expiry_year} 
                        type="text" 
                        placeholder='17'
                        className='py-3 px-4 rounded w-full border focus:border-2'
                        name='expiry_year'
                        maxLength={2}
                    />
                </div>
            </div>

            <div className='flex flex-col space-y-2'>
                <label className='flex items-center space-x-1'>
                    <span>CVV</span>
                    <span className='text-red-500 text-lg'>*</span>
                </label>
                <input
                    required
                    onChange={handleCardInputChange}
                    value={card.cvd} 
                    type="text" 
                    placeholder='123'
                    className='py-3 px-4 rounded w-full border focus:border-2 md:w-1/2'
                    name='cvd'
                    maxLength={4}
                />
            </div>
        </div>

        <button 
            className={`text-white bg-slate-700 ${isLoading ? '' : 'hover:bg-slate-900'} px-4 py-3 rounded mt-2`}
            type='submit'
            disabled={isLoading}
        >   
            {isLoading ? 'Processing...': 'Pay Now'}
        </button>
    </section>
  )
}

export default CreditCard
import React from 'react'

const CreditCard = ({cardNumber, cvv, expiry}) => {
  return (
    <section className='md:col-span-1 flex flex-col gap-y-5'>
        <h2 className='font-medium text-xl text-gray-600'>Card Details</h2>

        <div className="flex flex-col space-y-4 w-full">
            <div className='flex flex-col space-y-2'>
                <label className='flex items-center space-x-3'>
                    <span className='text-gray-600 w-full'>Card Number</span>
                    <button 
                        onClick={() => cardNumber.current.focus()}
                        className='rounded bg-slate-800 hover:bg-slate-700 cursor-pointer px-4 py-2 text-white'
                    >
                        setFocus
                    </button>
                </label>
                <div id="card-number"></div>
            </div>

            <hr />

            <div className='flex flex-col space-y-2'>
                <label className='flex items-center space-x-3'>
                    <span className='text-gray-600 w-full'>Card Number</span>
                    <button 
                        onClick={() => cvv.current.focus()}
                        className='rounded bg-slate-800 hover:bg-slate-700 cursor-pointer px-4 py-2 text-white'
                    >
                        setFocus
                    </button>
                </label>
                <div id="cvv"></div>
            </div>

            <hr />

            <div className='flex flex-col space-y-2'>
                <label className='flex items-center space-x-3'>
                    <span className='text-gray-600 w-full'>MM / YY</span>
                    <button 
                        onClick={() => expiry.current.focus()}
                        className='rounded bg-slate-800 hover:bg-slate-700 cursor-pointer px-4 py-2 text-white'
                    >
                        setFocus
                    </button>
                </label>
                <div id="expiry"></div>
            </div>

        </div>
        
        <button className='text-white bg-slate-700 hover:bg-slate-900 px-4 py-3 rounded mt-2'>Proceed</button>
    </section>
  )
}

export default CreditCard
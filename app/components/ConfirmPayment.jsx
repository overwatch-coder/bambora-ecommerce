import React from 'react'

const ConfirmPayment = ({paymentInfo, confirmPayment, cancelPayment, totalProductsPrice}) => {
  return (
    <section>
        <h1 className='font-[georgia] font-semibold text-2xl my-3'>Confirm your Payment</h1>

        <div className='flex flex-col space-y-5 md:flex-row md:justify-between md:space-y-0'>
            <div className='flex flex-col space-y-3 divide-y-3 p-3'>
                <div className='flex flex-row items-center space-x-4'>
                    <span className='font-light text-gray-500'>Card number:</span>
                    <span className='font-semibold'>************{paymentInfo.cardNumber.slice(-4)}</span>
                </div>

                <div className='flex items-center space-x-4'>
                    <span className='font-light text-gray-500'>Expiry Date:</span>
                    <span className='font-semibold'>{paymentInfo.expiry}</span>
                </div>

                <div className='flex items-center space-x-4'>
                    <span className='font-light text-gray-500'>Name on Card:</span>
                    <span className='font-semibold'>{paymentInfo.name}</span>
                </div>

                <div className='flex items-center space-x-4'>
                    <span className='font-light text-gray-500'>Billing Address:</span>
                    <span className='font-semibold'>{paymentInfo.address}</span>
                </div>

                <div className='flex items-center space-x-4'>
                    <span className='font-light text-gray-500'>Email:</span>
                    <span className='font-semibold'>{paymentInfo.email}</span>
                </div>
            </div>

            <div
                className='bg-slate-800 text-white flex flex-col space-y-4 p-3 rounded'
            >
                <h2 className='font-semibold'>Payment Summary</h2>
                <p>Order Number: {paymentInfo.order_number}</p>
                <h3>Total amount:</h3>
                <h2 className='font-bold text-3xl'>${totalProductsPrice}</h2>
            </div>
        </div>
        
        <div className='flex flex-col space-y-4 md:flex-row items-center justify-center my-10 md:space-x-5 md:space-y-0'>
            <button 
                className='px-5 py-3 text-white bg-green-600 hover:bg-green-700 rounded'
                onClick={confirmPayment}
            >
                Confirm payment
            </button>
            <button 
                className='px-5 py-3 text-white bg-red-600 hover:bg-red-700 rounded'
                onClick={cancelPayment}
            >
                Cancel payment
            </button>
        </div>
    </section>
  )
}

export default ConfirmPayment
import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs';

const PaymentComplete = ({paymendId}) => {
  return (
    <section className='flex flex-col items-center p-5 space-y-4 text-center'>
        <BsFillCheckCircleFill 
            size={100}
            color='green'
        />

        <h1 className='font-semibold text-gray-700 text-2xl'>Payment Complete</h1>
        <p className='font-medium text-gray-600 text-lg'>Thank you</p>
        <h3 className='text-gray-500'>Your payment has been successful and your order is being prepared.</h3>

        <h5 className='text-gray-600'>Order Number</h5>
        <h5 className='border-t-2 border-gray-400 border-b-2 font-bold text-xl font-[georgia] py-2 w-full'>
            {paymendId}
        </h5>
    </section>
  )
}

export default PaymentComplete
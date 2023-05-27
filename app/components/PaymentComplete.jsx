import Link from 'next/link';
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

        <Link href={'/'} className='px-5 py-3 bg-gray-700 hover:bg-gray-900 rounded transition mt-2 text-center text-white'>
            Back to products
        </Link>
    </section>
  )
}

export default PaymentComplete
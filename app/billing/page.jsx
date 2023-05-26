"use client"
import Script from 'next/script'
import React, { useContext, useEffect, useMemo, useRef } from 'react'
import { ProductContext } from '../Context/ProductContext'
import { useCart } from 'react-use-cart'
import { useRouter } from 'next/navigation'
import Address from '../components/Address'
import CreditCard from '../components/CreditCard'

const BillingAddress = () => {
    const { isEmpty } = useCart();
    const { totalProductsPrice } = useContext(ProductContext);
    const router = useRouter()

    //get reference to card details
    const [address, setAddress] = useState({})
    const [cardNumber, setCardNumber] = useState('');
    const [cardCvv, setCardCvv] = useState('');
    const [cardExpiry, setCardExpiry] = useState({
        month: '',
        year: ''
    });

    //redirect to homepage if cart is empty
    if(isEmpty || totalProductsPrice === 0) return router.push('/');


  return (
    <>
        <div className='px-5 grid grid-cols-1 md:grid-cols-4 gap-y-5 md:gap-y-0 md:gap-x-10 mx-auto max-w-2xl mt-5 mb-16'>
            {/* Billing Address */}
            <Address 
                totalProductsPrice={totalProductsPrice}
            />

            {/* Checkout form goes here */}
            <CreditCard 
                cardNumber={cardNumber}
                cvv={cardCvv}
                expiry={cardExpiry}
            />
        </div>
        
        <Script src='https://libs.na.bambora.com/customcheckout/1/customcheckout.js'></Script>
    </>
  )
}

export default BillingAddress
"use client"

import React, { useContext, useState } from 'react'
import { ProductContext } from '../Context/ProductContext'
import axios from 'axios';
import { toast } from 'react-toastify';
import { redirect, useRouter } from 'next/navigation';
import { useCart } from 'react-use-cart';
import PaymentComplete from '../components/PaymentComplete';
import ConfirmPayment from '../components/ConfirmPayment';
import Head from 'next/head';

const CofirmDetails = () => {
    const { totalProductsPrice, paymentInfo, setTotalProductsPrice } = useContext(ProductContext);
    const { isEmpty, emptyCart } = useCart();
    const router = useRouter();
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [paymentId, setPaymentId] = useState("");

    const confirmPayment = async () => {
        setIsConfirmed(false);

        const paymentRequest = {
            amount: Number(totalProductsPrice).toFixed(2),
            payment_method: "payment_profile",
            payment_profile:{
                customer_code: paymentInfo.customer_code,
                card_id: 1,
                complete: true
            }
        }

        const paymentResponse = await axios.post('/api/payment', paymentRequest);
        if(paymentResponse.status !== 200)  throw new Error('There was a problem making payment. Please try again later!');

        const paymentID = await paymentResponse.data.id;
        toast.success(`Payment of ${totalProductsPrice} confirmed successfully!`);
        setIsConfirmed(true);
        setPaymentId(paymentInfo.order_number);

        // empty the cart
        emptyCart();
        setTotalProductsPrice(0);
        
        setTimeout(() => {
            setIsConfirmed(false);
            redirect('/');
        }, 5000);

    }

    const cancelPayment = () => {
        toast.success('Payment cancelled!');
        router.push('/cart');
    }

    if((!isConfirmed && (totalProductsPrice === 0 || isEmpty))) return redirect('/');

  return (
    <>
        <Head>
            <title>Confirm Payment | Bambora Ecommerce</title>
            <meta name="description" content="Confirm your payment on Bambora Ecommerce" />
        </Head>
        <section 
        className={`${isConfirmed ? "max-w-lg" : "max-w-3xl"} mx-auto shadow-md mt-10 p-5 mb-20 rounded-2 border-gray-500`}
        >
        
        {isConfirmed ? 
            <PaymentComplete
            paymentId={paymentId} 
            /> 
            : 
            (
                <ConfirmPayment 
                paymentInfo={paymentInfo}
                confirmPayment={confirmPayment}
                cancelPayment={cancelPayment}
                />
            )}
                
        </section>
    </>
    )}
        
        export default CofirmDetails
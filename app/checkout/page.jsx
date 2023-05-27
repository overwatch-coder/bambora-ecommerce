"use client"

import React, { useContext, useState } from 'react'
import { ProductContext } from '../Context/ProductContext'
import { useCart } from 'react-use-cart'
import { redirect, useRouter } from 'next/navigation'
import Address from '../components/Address'
import CreditCard from '../components/CreditCard'
import axios from 'axios'
import { toast } from 'react-toastify'
import Head from 'next/head'

const BillingAddress = () => {
    const router = useRouter();

    let localProfile = {};
    
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        localProfile = JSON.parse(localStorage.getItem('profile'));
    }

    const { isEmpty } = useCart();
    const { totalProductsPrice, setPaymentInfo } = useContext(ProductContext);
    
    const [isLoading, setIsLoading] = useState(false);
    const [profile, setProfile] = useState(Object.keys(localProfile).keys > 0 ? localProfile : {});

    //get reference to card details
    const [address, setAddress] = useState({
        name : "",
        address_line1 : "",
        address_line2 : "",
        city : "",
        province : "--",
        country : "",
        postal_code : "",
        phone_number : "",
        email_address: ""
    })

    const [card, setCard] = useState({
        name : "",
        number : "",
        expiry_month : "",
        expiry_year : "",
        cvd : ""
    });

    const handleBilling = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        
        //clear previous profile
        if(Object.keys(profile).length > 0) {
            const res = await axios.post('/api/profile/profile_id', profile.id);

            if(res.status !== 200) throw new Error('Oops, something went wrong. Try again later!');

            const data = await res.data;

            toast.success('Profile ' + data + 'deleted successfully');

            localStorage.removeItem('profile');
            setProfile({});
        }else{
            localStorage.removeItem('profile');
            setProfile({});
        }

        //generate card token
        const cardResponse = await axios.post('/api/token', card);
        if(cardResponse.status !== 200)  throw new Error('There was a problem making payment. Please try again later!');
        const token = await cardResponse.data;

        toast.success('Credit Card added successfully!');

        //create a payment profile
        const profileBody = {
            token : {
                name: card.name,
                code: token
            },
            billing : address,
            validate : true
        }

        const addressResponse = await axios.post('/api/profile', profileBody);

        if(addressResponse.status !== 200)  throw new Error('There was a problem making payment. Please try again later!');

        const profileData = await addressResponse.data;

        //save profile info to localstorage
        setProfile({id: profileData.customer_code});
        localStorage.setItem('profile', JSON.stringify({id: profileData.customer_code}));

        //get all neccessary info and save to context provider
        setPaymentInfo(prev => ({
            ...prev,
            token: token,
            customer_code: profileData.customer_code,
            order_number: profileData.order_number,
            cardNumber: card.number,
            expiry: `${card.expiry_month}/${card.expiry_year}`,
            name: card.name,
            address: `${address.address_line1}, ${address.city}, ${address.country} ${address.postal_code}`,
            email: address.email_address,
            price: Number(totalProductsPrice).toFixed(2) 
        }));

        //send success message to client
        toast.success('Payment profile created successfully!');

        //set loading to false
        setIsLoading(false);

        //clear address and card input fields
        setAddress({
            name : "",
            address_line1 : "",
            address_line2 : "",
            city : "",
            province : "--",
            country : "",
            postal_code : "",
            phone_number : "",
            email_address: ""
        });

        setCard({
            name : "",
            number : "",
            expiry_month : "",
            expiry_year : "",
            cvd : ""
        })

        //redirect user to confirmation page
        router.push('/confirm');
    }

    //redirect to homepage if cart is empty
    if(isEmpty || totalProductsPrice === 0) return redirect('/');

  return (
    <>
    <Head>
        <title>Checkout and Pay | Bambora Ecommerce</title>
        <meta name="description" content="Checkout, fill your address and billing info to process payment" />
    </Head>
    <form 
        onSubmit={handleBilling}
    >
        <div className='px-5 grid grid-cols-1 md:grid-cols-5 gap-y-5 md:gap-y-0 md:gap-x-10 mx-auto max-w-5xl mt-5 mb-16'>
            {/* Billing Address */}
            <Address 
                totalProductsPrice={Number(totalProductsPrice).toFixed(2)}
                address={address}
                setAddress={setAddress}
            />

            {/* Checkout form goes here */}
            <CreditCard 
                card={card}
                setCard={setCard}
                isLoading={isLoading}
            />
        </div>
    </form>
    </>
  )
}

export default BillingAddress
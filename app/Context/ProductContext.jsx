'use client'

import {createContext, useState, useEffect} from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from "react-use-cart";

export const ProductContext = createContext();

const ProductContextProvider = ({children}) => {
    const [totalProductsPrice, setTotalProductsPrice] = useState(0);
    const [paymentInfo, setPaymentInfo] = useState({
      token: "",
      customer_code: "",
      order_number: "",
      cardNumber: "",
      expiry: "",
      name: "",
      address: "",
      email: ""
    });

    useEffect(() => {
      const deleteExistingProfile = async () => {
          const customerId = JSON.parse(localStorage.getItem('customerId'));
          if(customerId){
              const res = await axios.delete('/api/profile', customerId);
              if(res.status !== 200) throw new Error('Oops, something went wrong. Try again later!');

              const profileId = await res.data;
              console.log(profileId);
              
              localStorage.removeItem('customerId');
          }
      }
      
      deleteExistingProfile();
    }, []);
    
    const contextValues = {
        totalProductsPrice,
        setTotalProductsPrice,
        paymentInfo, 
        setPaymentInfo
    }

  return (
    <ProductContext.Provider value={contextValues}>
      <CartProvider>
        {children}
      </CartProvider>
      <ToastContainer />
    </ProductContext.Provider>
  )
}

export default ProductContextProvider
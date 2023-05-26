'use client'

import {createContext, useState} from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from "react-use-cart";

export const ProductContext = createContext();

const ProductContextProvider = ({children}) => {
    const [totalProductsPrice, setTotalProductsPrice] = useState(0);
    const contextValues = {
        totalProductsPrice,
        setTotalProductsPrice
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
"use client"

import React from 'react'
import { useCart } from 'react-use-cart'
import Link from 'next/link'
import Image from 'next/image'
import ProductCart from '../components/ProductCart'

export const metadata = {
  title: 'Your Cart | Bambora Ecommerce',
}

const CartPage = () => {
  const { items, removeItem, isEmpty, updateItemQuantity, emptyCart, cartTotal } = useCart();
  return (
    <div className="px-7">
        {isEmpty ?
          <div className="flex flex-col items-center gap-y-7 text-center mx-auto">
            <Image 
              src={"https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png"} 
              alt="Empty Cart" 
              className="object-contain" 
              width={300}
              height={300}
            />

            <h3 className="text-xl md:text-3xl font-poppins capitalize">Your cart is currently <span className="text-red-600">empty</span></h3>

            <Link
              href='/' 
              className="bg-slate-700 hover:bg-slate-900 text-white rounded px-4 py-2"
            >
              Return to Shop
            </Link>
          </div>
          :
          <div className="md:shadow-lg">
            <ProductCart 
              products={items} 
              removeFromCart={removeItem}
              clearCart={ emptyCart }
              addQuantity={updateItemQuantity}
              removeQuantity={updateItemQuantity}
              totalPrice={cartTotal} 
            />
          </div>
        }
      </div>
  )
}

export default CartPage
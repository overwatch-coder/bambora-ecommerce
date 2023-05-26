import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi';
import { MdDeleteForever  } from 'react-icons/md';
import { useCart } from 'react-use-cart';
import { ProductContext } from '../Context/ProductContext';

const ProductCart = ({
    products, 
    removeFromCart, 
    clearCart,
    addQuantity,
    removeQuantity,
    totalPrice}) => {
    const { totalItems } = useCart();
    let shippingFee = 10;

    const {totalProductsPrice, setTotalProductsPrice} = useContext(ProductContext);
    useEffect(() => {
        setTotalProductsPrice(shippingFee + totalPrice);
    }, [setTotalProductsPrice, shippingFee, totalPrice]);

  return (
    <section 
        className={'grid grid-cols-1 lg:grid-cols-3 py-10 md:px-5'}
    >
        <div className={`col-span-1 lg:col-span-2 md:px-5 pb-5 flex flex-col gap-y-5`}>
            {<h2 className="flex justify-between items-center">
                <span className="font-bold text-gray md:text-xl uppercase">
                    Shopping Cart
                </span>
                <span className="text-base font-bold">
                    {products.length} unique items
                </span>
            </h2>}

            <div className="flex flex-col gap-y-10 pt-5">
                {products.map((product, index) => (
                    <div 
                        key={index} 
                        className={`md:grid-cols-5 grid grid-cols-2 gap-y-3 gap-x-5 md:place-items-center border-b-2 last:border-b-0 border-gray/25 pb-5`
                    }>
                        <Image 
                            src={product.image} 
                            alt={product.title} 
                            className="w-20 h-24 object-cover" 
                            width={20}
                            height={20}
                        />

                        <Link href={`/product/${product.id}`} className='flex flex-col gap-y-2'>
                            <span className='font-bold'>{product.title}</span>
                        </Link>

                        <h4 className='flex items-center gap-x-3 pt-4 md:pt-0'>
                            <button onClick={() => removeQuantity(product.id, product.quantity - 1 )}>
                                <FiMinus size={20} />
                            </button>
                            <span className='font-extrabold text-lg'>{product.quantity}</span>
                            <button onClick={() => addQuantity(product.id, product.quantity + 1)}>
                                <FiPlus size={20} />
                            </button>
                        </h4>

                        <h4 className='font-medium pt-4 md:pt-0'>
                            $ {product.itemTotal.toFixed(2)}
                        </h4>

                        <button 
                            onClick={() => removeFromCart(product.id)}
                            className={`col-span-2 md:col-span-1`}
                        >
                            <MdDeleteForever 
                                size={30} 
                                className="text-red-400 hover:text-red-600 md:place-items-center float-right" 
                            />
                        </button>
                    </div>
                ))}
            </div>

            <div className='flex items-center gap-x-5 py-10 flex-row-reverse justify-between'>
                <button 
                    className='uppercase bg-red-500 hover:bg-red-700 px-4 py-3 text-white text-sm font-medium'
                    onClick={clearCart}
                >
                    Clear Cart
                </button>

                <Link 
                    href='/' 
                    className='uppercase bg-slate-700 hover:bg-slate-900 text-white px-4 py-3'
                >
                    Back to shop
                </Link>
            </div>
        </div>


        {/* Order Summary and Checkout goes here */}        
        <div className="col-span-1 bg-slate-800 text-white px-5 flex flex-col gap-y-5">
            <h2 className='text-lg md:text-xl lg:text-2xl uppercase py-5 border-b-2 border-white/30 pb-5'>
                Order Summary
            </h2>

            <div className='flex flex-col gap-y-5 py-5 mb-auto'>
                <h3 className='flex justify-between items-center'>
                    <span className='font-medium'>Subtotal ({totalItems} items)</span>
                    <span className='text-lg font-semibold'>${ totalPrice.toFixed(2) }</span>
                </h3>

                <h3 className='flex justify-between items-center'>
                    <span className='font-medium'>Shipping</span>
                    <span className='text-lg font-semibold'>${ shippingFee.toFixed(2) }</span>
                </h3>
            </div>

            <h3 className='flex justify-between items-center'>
                <span className='font-medium'>Total</span>
                <span className='text-lg font-semibold'>${ totalProductsPrice }</span>
            </h3>
            <Link 
                href={'/billing'} 
                className='py-3 px-4 bg-green-600 hover:bg-green-700 text-white uppercase text-center mx-auto my-3 w-full transition'
            >
                Checkout
            </Link>
        </div>    
    </section>
  )
}

export default ProductCart
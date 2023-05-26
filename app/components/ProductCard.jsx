'use client'

import Image from 'next/image'
import { toast } from 'react-toastify'
import { useCart } from 'react-use-cart'

const ProductCard = ({product}) => {
    const { addItem } = useCart();

    const addToCart = () => {
        addItem(product);
        toast.success('Item added to cart');
    }

  return (
    <section className='className={`flex flex-col col-span-1 shadow-md p-5 space-y-2 mb-5`}'>
        <Image 
            src={product.image} 
            alt={product.title} 
            width={500}
            height={500}
            className={`w-[300px] h-[300px] object-cover mx-auto`} 
        />

        <p className='font-bold text-xl'>${product.price}</p>

        <div className='text-gray-500 font-light'>
          <p className='text-sm'>{product.category}</p>
        </div>

        <p className='font-medium text-gray-500'>{product.title}</p>

        <div className='group-hover:border-b-4 group-hover:border-gray group-hover:animate-fadeX'></div>

        <button 
            className='bg-cyan-700 text-white rounded uppercase text-center px-4 py-2 text-sm hover:bg-cyan-900'
            onClick={addToCart}
        >
            Add to cart
        </button>
    </section>
  )
}

export default ProductCard
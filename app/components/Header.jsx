"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import { MdOutlineShoppingBag } from 'react-icons/md';
import { useCart } from 'react-use-cart';

const Header = () => {
    const { totalItems } = useCart();
    const router = useRouter();
    
  return (
    <header className="bg-slate-800 text-white w-screen sticky top-0 drop-shadow-md z-50 border-gray border-b-[1px] md:border-0 px-5 py-3">
        <section className='flex justify-between items-center mx-auto'>
            {/* Logo */}
            <Link href={'/'} className='text-xl font-[georgia]'>
                Bambora Ecommerce
            </Link>

            <nav className='flex items-center space-x-5 uppercase mx-5'>
                <button 
                    className='hover:text-cyan-500 relative'
                    onClick={() => router.push('/cart')}
                >
                    <MdOutlineShoppingBag 
                        size={27}
                    />
                    
                    <span 
                        className='absolute -bottom-2 right-0 text-sm bg-white text-black text-center rounded-full p-[1px] font-semibold'
                    >
                        {totalItems}
                    </span>
                </button>

                <Link href={'/'} className='hover:text-cyan-500'>Admin</Link>
            </nav>
        </section>
    </header>
  )
}

export default Header
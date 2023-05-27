import './globals.css'
import ProductContextProvider from './Context/ProductContext';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';


export const metadata = {
  title: 'Bambora Ecommerce',
  description: 'Welcome to Bambora E-Commerce Shop',
}

export default function RootLayout({ children }) {

  axios.defaults.baseURL = process.env.NODE_ENV === "development" ? 'http://localhost:3000' : process.env.API_BASE_URL;

  return (
    <html lang="en">
      <body className='font-[poppins] scroll-smooth overflow-x-hidden'>
        <ProductContextProvider>
          <section className='flex flex-col min-h-screen'>
            <Header />
            <main className='mb-auto mt-10'>
              {children}
            </main>
            <Footer />
          </section>
        </ProductContextProvider>
      </body>
    </html>
  )
}

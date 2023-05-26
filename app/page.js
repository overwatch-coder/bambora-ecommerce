import ProductCard from "./components/ProductCard";

const Home = async () => {
  const response = await fetch('https://fakestoreapi.com/products?sort=desc');
  const products = await response.json();
  return (
    <section>
      <h1 className="px-5 font-semibold text-2xl font-[georgia]">All Products</h1>
      <div className="px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 my-7 md:my-5">
        {products.map((product) => (
          <ProductCard 
            product={product}
            key={product.id}
          />
        ))}
      </div>
    </section>
  )
}

export default Home
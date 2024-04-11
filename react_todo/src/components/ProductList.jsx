import {React,useState,useEffect} from 'react'

import ProductCard from './ProductCard';
const ProductList = () => {
        const [products,setProducts] = useState([]);
    
    useEffect(
        ()=>{

            fetch('https://dummyjson.com/products/')
            .then(res => res.json())
            .then(json => setProducts(json.products))
        },
        []
    )


  return (
    <div className='grid gap-4  grid-cols-1 md:grid-cols-3 ' >
      {products.map((product)=>{
        return (
            <ProductCard
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.thumbnail}
            brand={product.brand}
            key={product.id}
            stock = {product.stock}
            category={ product.category}
            rating= {product.rating}


            
            />
        )
      })}
    </div>
  )
}

export default ProductList

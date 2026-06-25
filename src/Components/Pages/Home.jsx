import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios';
import Hero from './Hero';


function Home() {

  const [products , setProducts] = useState([])

  const getProducts = () => {
  axios
    .get("https://dummyjson.com/products")
    .then((res) => {
      setProducts(res.data.products);
    
      
    })
    .catch((err) => {
      console.log(err);
    });
};

  useEffect(()=>{
    getProducts()
  },[])

 


  return (    
    <>
    <Hero />
   <section className='py-5'>
    <h1 className='text-3xl text-center font-bold py-3'>Our Products</h1>
    <div className='max-w-[1320px] mx-auto grid grid-cols-4 gap-5 mx-5'>

      {
        products.map((obj,index)=>{
          return (<Card data={obj} key={index} />)
        })
      }
    </div>

    
   </section>
    </>
  )
}

export default Home

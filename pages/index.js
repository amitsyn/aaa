import React from 'react'

export default function ProductList({products}) {
  return (
    <>
   <h1>List of article</h1>
   {
   products.map((product)=>{
        return (
            <div key ={product.id}>
            <h2>
            {product.id} {product.title} | {product.description}
            </h2>
            </div>
        )
    })
   }
   </>
  )
}
export async function getServerSideProps(){
    const res = await fetch('https://themeger.shop/wordpress/katen/catalog/wp-json/wp/v2/posts')
   const data = await res.json()

   return {
    props:{
        products:data
    }
   }
}
    
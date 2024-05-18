import React from 'react'
import productsData from "../constants/products.json"

const Products = () => {
  return (
    <div className='featured-products h-auto text-[5rem] text-background text-center py-12 font-fugaz'>
        <div className='mb-5'>Products</div>
        <div className='grid grid-cols-3 place-items-center gap-20 mb-6'>
          {productsData.products.map((product) => {
            return(
                <Product product = {product} key = {product.name}/>
            )
          })}
        </div>
         <button className='bg-background text-white self-start w-52 h-20 rounded-3xl text-2xl font-lato'>
            See More
          </button>
    </div>
  )
}


const Product = (props) => {
    return(
        <>
        <div className='w-[90%] flex flex-col gap-6 bg-background shadow-2xl shadow-background rounded-[2rem] max-w-96'>
           <h1 className='text-center text-white text-3xl font-lato pt-6'>
               {props?.product.name}
           </h1>
           <img src={props?.product.image} alt="product-image" className='mx-5 px-6' />
           <h5 className='text-left pl-8 text-white font-bold text-3xl font-lato'>
             Packing
           </h5>
           <div className='flex flex-col gap-3 items-start pl-4 pb-4'>
                {props?.product.packing.map((pack) => {
                    return (
                         <div className='flex gap-3 justify-start items-center h-8' key={pack.name}>
                            <img src="./packing-icon.png" alt="icon" />
                            <p className=' text-[1rem] text-white text-left font-lato'>{pack.name} - {pack.price}</p>
                        </div>

                    )
                })}
           </div>
        </div>
        </>
    )
}

export default Products
import React from 'react'
import productsData from "../constants/products.json"

const Products = () => {
  return (
    <div className='featured-products h-auto text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] text-background text-center lg:py-16 py-20 font-fugaz'>
        <div className='mb-5'>Products</div>
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-10 xl:gap-20 mb-6'>
          {productsData.products.map((product) => {
            return(
                <Product product = {product} key = {product.name}/>
            )
          })}
        </div>
         <button className='bg-background text-white self-start w-40 h-16 rounded-2xl lg:w-52 lg:h-20 lg:rounded-3xl text-2xl font-lato'>
            See More
          </button>
    </div>
  )
}


const Product = (props) => {
    return(
        <>
        <div className='w-[80%] mx-auto md:w-[90%] flex flex-col md:gap-6 bg-background shadow-2xl shadow-background rounded-[2rem] max-w-96'>
           <h1 className='text-center text-white text-2xl md:text-3xl font-lato pt-3 md:pt-6'>
               {props?.product.name}
           </h1>
           <img src={props?.product.image} alt="product-image" className='mx-5 px-6 max-md:w-4/5 max-md:mx-auto py-3' />
           <h5 className='text-left pl-6 md:pl-8 max-md:pb-4 text-white font-bold text-2xl md:text-3xl font-lato'>
             Packing
           </h5>
           <div className='flex flex-col gap-2 md:gap-3 items-start pl-4 pb-4'>
                {props?.product.packing.map((pack) => {
                    return (
                         <div className='flex gap-2 md:gap-3 justify-start items-center h-8' key={pack.name}>
                            <img src="./packing-icon.png" alt="icon" />
                            <p className='text-sm md:text-[1rem] text-white text-left font-lato'>{pack.name} - {pack.price}</p>
                        </div>

                    )
                })}
           </div>
        </div>
        </>
    )
}

export default Products
import React from 'react'

const Card = ({product}) => {
  return (
      <div className='min-w-[300px] w-full p-2.5 border-gray-300 rounded-md shadow-md'>
        <img className='w-full h-[250px] object-contain' src={product.images[0]} alt=""/>
        <h1 className='text-sxl font-semibold mt-3'>{product.title}</h1>
        <p className='text-sm my-4'>{product.description}</p>
        <p className='text-red-600 font-medium'>{product.currency}{product.prices}</p>
      </div>
  )
}

export default Card
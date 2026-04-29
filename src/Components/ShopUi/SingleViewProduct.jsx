import React from 'react'
import { useLoaderData } from 'react-router-dom'

function SingleViewProduct() {

    const singleProduct = useLoaderData();
    console.log("yessss: gotit",singleProduct);
    
  return (
    <div className="border rounded-[12px] h-auto max-h-auto overflow-hidden
        transition w-auto">
            <img src={singleProduct.image} alt={singleProduct.title} className="h-48 w-full object-contain" />
            <>
                <span className="text-gray-700 italic font-medium text-sm underline"> {singleProduct.category.toUpperCase()} </span>
                <h2 className="text-lg font-medium line-clamp-2">
                    {singleProduct.title} - {singleProduct.price}
                </h2>
                <p className="text-gray-600 text-sm mt-3 line-clamp-3">
                    {singleProduct.description}
                </p>
            </>
        </div>
  )
}

export default SingleViewProduct

import React from 'react'
import { useState, useEffect } from 'react';

const ProductApis = () => {

    const [products, setProducts] = useState([]);
      
    const handleproducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        handleproducts();
    }, []);


     
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-28 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="mx-auto mb-12 max-w-7xl text-center">

        <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Our Collection
        </span>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Explore Our
          <span className="ml-2 text-slate-400">
            Products
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
          Discover premium products carefully selected for quality,
          style and everyday performance.
        </p>

      </div>


      {/* Products Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {products.map((product) => (

          <div
            key={product.id}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
          >

            {/* Image */}
            <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-white p-6">

              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
              />

              {/* Product Number */}
              <span className="absolute left-3 top-3 rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white">
                #{product.id}
              </span>

            </div>


            {/* Content */}
            <div className="px-1 pb-1 pt-5">

              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">
                {product.category}
              </p>

              <h2 className="line-clamp-2 min-h-[48px] text-base font-semibold leading-6 text-white">
                {product.title}
              </h2>


              {/* Rating */}
              <div className="mt-4 flex items-center gap-2">

                <div className="flex items-center gap-1 rounded-lg bg-white/5 px-2.5 py-1.5">
                  <span className="text-sm text-yellow-400">
                    ★
                  </span>

                  <span className="text-xs font-medium text-slate-300">
                    {product.rating?.rate || "4.5"}
                  </span>
                </div>

                <span className="text-xs text-slate-500">
                  ({product.rating?.count || 0} reviews)
                </span>

              </div>


              {/* Price + Button */}
              <div className="mt-5 flex items-center justify-between">

                <div>
                  <p className="text-xs text-slate-500">
                    Price
                  </p>

                  <p className="text-xl font-bold text-white">
                    ${product.price}
                  </p>
                </div>

                <button
                  className="rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-slate-950 transition-all duration-300 hover:bg-slate-200"
                >
                  View Product
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default ProductApis


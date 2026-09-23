import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiShoppingCart,
} from "react-icons/fi";

const Card = ({ product }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.05]">
      
      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-white p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-violet-50 opacity-70" />

        <img
          src={product.image}
          alt={product.title}
          className="relative z-10 h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Content */}
      <div className="p-5">

        {/* Category */}
        <p className="mb-2 text-xs font-medium capitalize text-cyan-400">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="line-clamp-2 min-h-[48px] text-base font-bold leading-6 text-white">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-sm text-yellow-400">
            ★
          </span>

          <span className="text-sm font-medium text-white/70">
            {product.rating?.rate || "4.5"}
          </span>

          <span className="text-xs text-white/30">
            ({product.rating?.count || 0})
          </span>
        </div>

        {/* Price + View */}
        <div className="mt-5 flex items-center justify-between gap-3">
          
          <div>
            <p className="text-xs text-white/30">
              Price
            </p>

            <p className="mt-1 text-xl font-black text-white">
              ${product.price}
            </p>
          </div>

          {/* View Product */}
          <Link
            to={`/products/${product.id}`}
            className="group/btn flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300"
          >
            <span>
              View
            </span>

            <FiArrowUpRight
              size={17}
              className="transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Add To Cart */}
        <button
          type="button"
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] py-3 text-sm font-semibold text-white transition hover:border-cyan-400/20 hover:bg-cyan-400/[0.08]"
        >
          <FiShoppingCart size={17} />

          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
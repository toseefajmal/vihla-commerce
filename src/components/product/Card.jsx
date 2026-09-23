
import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiShoppingCart,
  FiStar,
  FiHeart,
} from "react-icons/fi";

const Card = ({ product }) => {
  return (
    <div className="group relative overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#0a0a0f] shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/25 hover:shadow-[0_25px_70px_rgba(34,211,238,0.08)]">

      {/* Top Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Product Image */}
      <div className="relative m-2 h-64 overflow-hidden rounded-[20px] bg-white">

        {/* Image Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-violet-50" />

        <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-violet-300/20 blur-3xl" />

        {/* Category */}
        <div className="absolute left-4 top-4 z-20 rounded-full border border-slate-200/70 bg-white/80 px-3 py-1.5 backdrop-blur-md">
          <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-600">
            {product.category}
          </span>
        </div>

        {/* Wishlist */}
        <button
          type="button"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/70 bg-white/80 text-slate-500 backdrop-blur-md transition-all duration-300 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500"
        >
          <FiHeart size={15} />
        </button>

        {/* Image */}
        <div className="flex h-full w-full items-center justify-center p-8">
          <img
            src={product.image}
            alt={product.title}
            className="relative z-10 h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>

        {/* Bottom Image Gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/[0.05] to-transparent" />
      </div>

      {/* Product Content */}
      <div className="p-5">

        {/* Rating */}
        <div className="mb-3 flex items-center justify-between">

          <div className="flex items-center gap-2 rounded-full border border-yellow-400/10 bg-yellow-400/[0.06] px-2.5 py-1">
            <FiStar
              size={12}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="text-[11px] font-bold text-yellow-300">
              {product.rating?.rate || "4.5"}
            </span>

            <span className="text-[10px] text-white/30">
              ({product.rating?.count || 0})
            </span>
          </div>

          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/20">
            Premium
          </span>
        </div>

        {/* Title */}
        <h2 className="line-clamp-2 min-h-[52px] text-[15px] font-bold leading-6 tracking-[-0.01em] text-white transition-colors duration-300 group-hover:text-cyan-100">
          {product.title}
        </h2>

        {/* Divider */}
        <div className="my-4 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />

        {/* Price + View */}
        <div className="flex items-end justify-between gap-3">

          {/* Price */}
          <div>
            <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
              Starting From
            </p>

            <div className="flex items-baseline gap-1">
              <span className="text-sm font-medium text-cyan-400">
                $
              </span>

              <span className="text-2xl font-black tracking-tight text-white">
                {product.price}
              </span>
            </div>
          </div>

          {/* View Product */}
          <Link
            to={`/products/${product.id}`}
            className="group/btn flex items-center gap-2 rounded-xl border border-white/10 bg-white px-4 py-2.5 text-xs font-bold text-slate-950 shadow-lg transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-300 hover:shadow-[0_8px_25px_rgba(34,211,238,0.15)]"
          >
            <span>View</span>

            <FiArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
            />
          </Link>

        </div>

        {/* Add To Cart */}
        <button
          type="button"
          className="group/cart relative mt-4 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05] py-3 text-xs font-bold text-cyan-200 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.10] hover:text-cyan-100"
        >

          {/* Button Shine */}
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-700 group-hover/cart:translate-x-full" />

          <FiShoppingCart
            size={16}
            className="relative transition-transform duration-300 group-hover/cart:scale-110"
          />

          <span className="relative">
            Add to Cart
          </span>

        </button>

      </div>
    </div>
  );
};

export default Card;



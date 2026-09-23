import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiShoppingCart,
  FiHeart,
  FiMinus,
  FiPlus,
  FiCheck,
} from "react-icons/fi";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const handleProduct = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://fakestoreapi.com/products/${id}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }

      const data = await response.json();

      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleProduct();
  }, [id]);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  /* Loading */
  if (loading) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#050507] px-4 text-white">

        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 backdrop-blur-xl">

          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/10 border-t-cyan-400" />

          <span className="text-sm text-white/50">
            Loading product...
          </span>

        </div>

      </section>
    );
  }

  /* Product Not Found */
  if (!product) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#050507] px-4 text-white">

        <div className="text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-red-400/20 bg-red-400/10 text-red-400">
            !
          </div>

          <h1 className="mt-6 text-3xl font-bold">
            Product Not Found
          </h1>

          <p className="mt-3 text-sm text-white/40">
            The product you're looking for doesn't exist.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            <FiArrowLeft size={17} />
            Back to Products
          </Link>

        </div>

      </section>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050507] px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.08] blur-[140px]" />

        <div className="absolute -right-40 top-1/3 h-[450px] w-[450px] rounded-full bg-violet-500/[0.08] blur-[140px]" />

        <div className="absolute bottom-0 left-1/2 h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/[0.05] blur-[140px]" />

      </div>

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Back Button */}
        <Link
          to="/products"
          className="group mb-8 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white/60 transition hover:bg-white/[0.08] hover:text-white"
        >
          <FiArrowLeft
            size={17}
            className="transition-transform duration-200 group-hover:-translate-x-1"
          />

          Back to Products
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* Image */}
          <div className="relative">

            <div className="absolute -inset-5 rounded-[2rem] bg-cyan-500/[0.06] blur-3xl" />

            <div className="relative flex min-h-[450px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white p-10 shadow-2xl">

              <img
                src={product.image}
                alt={product.title}
                className="max-h-[400px] w-full object-contain transition duration-500 hover:scale-105"
              />

            </div>

          </div>

          {/* Product Info */}
          <div>

            {/* Category */}
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              {product.category}
            </span>

            {/* Title */}
            <h1 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex flex-wrap items-center gap-3">

              <div className="flex items-center gap-1 text-yellow-400">
                ★★★★★
              </div>

              <span className="text-sm font-medium text-white/70">
                {product.rating?.rate || "4.5"}
              </span>

              <span className="text-sm text-white/30">
                ({product.rating?.count || 0} reviews)
              </span>

            </div>

            {/* Price */}
            <div className="mt-7">

              <span className="text-4xl font-black text-white">
                ${product.price}
              </span>

            </div>

            {/* Description */}
            <p className="mt-6 text-base leading-8 text-white/50">
              {product.description}
            </p>

            <div className="my-7 h-px bg-white/10" />

            {/* Quantity */}
            <div>

              <p className="mb-3 text-sm font-semibold text-white">
                Quantity
              </p>

              <div className="flex w-fit items-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">

                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="flex h-11 w-11 items-center justify-center text-white/60 transition hover:bg-white/[0.08] hover:text-white"
                >
                  <FiMinus size={16} />
                </button>

                <span className="flex h-11 w-12 items-center justify-center border-x border-white/10 text-sm font-semibold">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="flex h-11 w-11 items-center justify-center text-white/60 transition hover:bg-white/[0.08] hover:text-white"
                >
                  <FiPlus size={16} />
                </button>

              </div>

            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <button
                type="button"
                className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                <FiShoppingCart size={19} />

                Add to Cart

                <FiArrowUpRight
                  size={17}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                <FiHeart size={18} />

                Wishlist
              </button>

            </div>

            {/* Product Details */}
            <div className="mt-8 grid grid-cols-2 gap-3">

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">

                <p className="text-xs text-white/30">
                  Product ID
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  #{product.id}
                </p>

              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">

                <p className="text-xs text-white/30">
                  Category
                </p>

                <p className="mt-1 capitalize text-sm font-semibold text-white">
                  {product.category}
                </p>

              </div>

            </div>

            {/* Features */}
            <div className="mt-4 grid gap-3 sm:grid-cols-3">

              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-3">

                <FiCheck className="text-cyan-400" />

                <span className="text-xs text-white/50">
                  Quality Product
                </span>

              </div>

              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-3">

                <FiCheck className="text-cyan-400" />

                <span className="text-xs text-white/50">
                  Secure Shopping
                </span>

              </div>

              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-3">

                <FiCheck className="text-cyan-400" />

                <span className="text-xs text-white/50">
                  Fast Support
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProductDetail;
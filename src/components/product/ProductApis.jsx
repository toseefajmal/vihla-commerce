
import React, { useEffect, useState } from "react";
import Card from "./Card";

const ProductApis = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleProducts = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://fakestoreapi.com/products"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050507] px-4 py-24 text-white sm:px-6 lg:px-8">

      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-48 -top-40 h-[550px] w-[550px] rounded-full bg-cyan-500/[0.07] blur-[160px]" />

        <div className="absolute -right-48 top-[25%] h-[600px] w-[600px] rounded-full bg-violet-600/[0.07] blur-[170px]" />

        <div className="absolute bottom-[-200px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/[0.05] blur-[170px]" />
      </div>

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top Shine */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-5 py-2.5 shadow-[0_0_30px_rgba(34,211,238,0.04)] backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
              Our Collection
            </span>

            <span className="text-[10px] text-white/20">✦</span>

            <span className="text-[10px] font-semibold text-cyan-300/80">
              Premium Selection
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Discover Products
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Made to Stand Out
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
            Explore a carefully curated collection of quality products
            designed to bring style, comfort and performance into your
            everyday life.
          </p>

        </div>

        {/* Stats */}
        {!loading && products.length > 0 && (
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl">

            <div className="px-4 py-5 text-center">
              <p className="text-xl font-black text-white sm:text-2xl">
                {products.length}+
              </p>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30 sm:text-[10px]">
                Products
              </p>
            </div>

            <div className="border-x border-white/[0.07] px-4 py-5 text-center">
              <p className="text-xl font-black text-white sm:text-2xl">
                100%
              </p>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30 sm:text-[10px]">
                Quality
              </p>
            </div>

            <div className="px-4 py-5 text-center">
              <p className="text-xl font-black text-white sm:text-2xl">
                Premium
              </p>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30 sm:text-[10px]">
                Selection
              </p>
            </div>

          </div>
        )}

        {/* Section Divider */}
        <div className="my-14 flex items-center gap-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-white/10" />

          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-cyan-400" />
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25">
              Featured Collection
            </span>
            <span className="h-1 w-1 rounded-full bg-violet-400" />
          </div>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-white/10" />
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-4"
              >
                <div className="h-64 animate-pulse rounded-2xl bg-white/[0.06]" />

                <div className="mt-5 h-4 w-3/4 animate-pulse rounded-full bg-white/[0.06]" />

                <div className="mt-3 h-3 w-1/2 animate-pulse rounded-full bg-white/[0.04]" />

                <div className="mt-6 h-10 animate-pulse rounded-xl bg-white/[0.05]" />
              </div>
            ))}

          </div>
        )}

        {/* Products */}
        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {products.map((product) => (
              <Card
                key={product.id}
                product={product}
              />
            ))}

          </div>
        )}

        {/* No Products */}
        {!loading && products.length === 0 && (
          <div className="flex min-h-[350px] items-center justify-center">

            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] px-10 py-10 text-center shadow-2xl backdrop-blur-xl">

              <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                <span className="text-xl text-white/50">×</span>
              </div>

              <p className="mt-5 text-lg font-bold text-white">
                No Products Found
              </p>

              <p className="mt-2 text-sm text-white/35">
                Please try again later.
              </p>

              <button
                onClick={handleProducts}
                className="mt-6 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] px-5 py-2.5 text-xs font-bold text-cyan-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.12]"
              >
                Try Again
              </button>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default ProductApis;

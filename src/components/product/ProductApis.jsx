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

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.08] blur-[140px]" />

        <div className="absolute -right-40 top-1/3 h-[450px] w-[450px] rounded-full bg-violet-500/[0.08] blur-[140px]" />

        <div className="absolute bottom-0 left-1/2 h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/[0.05] blur-[140px]" />

      </div>

      {/* Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <span className="mb-5 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-300">
            Our Collection
          </span>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            Explore Our{" "}

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Products
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
            Discover premium products carefully selected for quality,
            style and everyday performance.
          </p>

        </div>

        {/* Loading */}
        {loading && (
          <div className="flex min-h-[300px] items-center justify-center">

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 backdrop-blur-xl">

              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/10 border-t-cyan-400" />

              <span className="text-sm text-white/50">
                Loading products...
              </span>

            </div>

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
          <div className="flex min-h-[300px] items-center justify-center">

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-6 text-center">

              <p className="text-lg font-semibold text-white">
                No products found
              </p>

              <p className="mt-2 text-sm text-white/40">
                Please try again later.
              </p>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default ProductApis;
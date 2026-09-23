import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiPlay,
  FiCheckCircle,
  FiShoppingBag,
  FiStar,
} from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050b14] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-[140px]" />

      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 py-28 sm:px-7 lg:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">
          
          {/* Left Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Welcome to Vihla Commerce
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Shop Smarter.
              <span className="block text-blue-300">
                Live Better.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Discover premium products designed for modern lifestyles.
              Explore our carefully selected collection and enjoy a simple,
              secure and reliable shopping experience.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/products"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
              >
                Explore Products
                <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white transition hover:border-blue-400/30 hover:bg-blue-500/10"
              >
                <FiPlay />
                Discover More
              </Link>
            </div>

            {/* Features */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
                  <FiCheckCircle />
                </div>
                <span className="text-sm text-slate-400">
                  Quality Products
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
                  <FiCheckCircle />
                </div>
                <span className="text-sm text-slate-400">
                  Secure Shopping
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
                  <FiCheckCircle />
                </div>
                <span className="text-sm text-slate-400">
                  Fast Delivery
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/[0.08] pt-7">
              <div>
                <h3 className="text-2xl font-bold">100+</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Products
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">50+</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Collections
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">4.9</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Customer Rating
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="relative w-full max-w-lg">
              {/* Main Card */}
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#08111f] p-6 shadow-2xl">
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Featured
                    </p>

                    <h3 className="mt-2 text-xl font-semibold">
                      Premium Collection
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                    <FiShoppingBag size={21} />
                  </div>
                </div>

                {/* Product Visual */}
                <div className="relative mt-6 flex h-80 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent">
                  <div className="absolute h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

                  <div className="relative flex h-48 w-48 items-center justify-center rounded-[2.5rem] border border-white/10 bg-[#0c192b] shadow-2xl">
                    <span className="text-5xl font-bold tracking-tight text-blue-300">
                      VC
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-[#08111f]/90 px-4 py-3 backdrop-blur">
                    <p className="text-xs text-slate-500">
                      Starting from
                    </p>

                    <p className="mt-1 text-lg font-bold">
                      $89
                    </p>
                  </div>

                  <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-2 text-xs text-blue-300">
                    <FiStar fill="currentColor" />
                    4.9 Rating
                  </div>
                </div>

                {/* Bottom */}
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">
                      Modern essentials
                    </p>

                    <p className="mt-1 font-semibold">
                      Designed for you
                    </p>
                  </div>

                  <Link
                    to="/products"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-950 transition hover:bg-blue-50"
                  >
                    <FiArrowUpRight />
                  </Link>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-[#08111f] p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                    <FiCheckCircle />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Shopping
                    </p>
                    <p className="text-sm font-semibold">
                      Safe & Secure
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -right-5 top-16 hidden rounded-2xl border border-white/10 bg-[#08111f] p-4 shadow-xl sm:block">
                <p className="text-xs text-slate-500">
                  Customers
                </p>

                <p className="mt-1 text-lg font-bold">
                  10K+
                </p>

                <p className="mt-1 text-xs text-blue-300">
                  Happy shoppers
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
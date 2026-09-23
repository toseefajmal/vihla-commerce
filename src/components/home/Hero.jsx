
import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiPlay,
  FiCheckCircle,
  FiShoppingBag,
  FiStar,
  FiTruck,
  FiShield,
  FiHeadphones,
  FiChevronRight,
  FiZap,
  FiHeart,
} from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#050b14] text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute left-[-180px] top-20 h-[500px] w-[500px] rounded-full bg-blue-600/[0.08] blur-[150px]" />

      <div className="pointer-events-none absolute right-[-180px] top-[30%] h-[500px] w-[500px] rounded-full bg-indigo-600/[0.08] blur-[150px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/[0.05] blur-[150px]" />

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* ================= HERO ================= */}

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-7 sm:pb-20 lg:px-8 lg:pt-36">

        {/* Announcement */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.07] px-4 py-2 text-xs font-medium text-blue-300 shadow-[0_0_30px_rgba(59,130,246,0.08)] sm:text-sm">
            <FiZap size={14} />

            <span>
              Premium shopping experience for modern lifestyles
            </span>

            <FiChevronRight size={14} />
          </div>
        </div>

        {/* Main Hero */}
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* LEFT */}
          <div>

            {/* Small Label */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-blue-400 opacity-50" />
                <span className="relative h-2 w-2 rounded-full bg-blue-400" />
              </span>

              <span className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
                Welcome to Vihla Commerce
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-[78px]">

              Everything You Need.

              <span className="mt-2 block bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                All in One Place.
              </span>

            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Discover carefully selected products built for everyday life.
              From modern essentials to premium favorites, Vihla brings
              quality, convenience and style together in one seamless
              shopping experience.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/products"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 shadow-[0_15px_40px_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Explore Products

                <FiArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                to="/about"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-500/[0.08]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.08]">
                  <FiPlay size={11} fill="currentColor" />
                </span>

                Discover More
              </Link>

            </div>

            {/* Trust */}
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <FiCheckCircle className="text-blue-300" />
                Quality Products
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <FiShield className="text-blue-300" />
                Secure Checkout
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <FiTruck className="text-blue-300" />
                Fast Delivery
              </div>

            </div>

            {/* Stats */}
            <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-white/[0.08] pt-7">

              <div>
                <h3 className="text-2xl font-bold sm:text-3xl">
                  100+
                </h3>

                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Products
                </p>
              </div>

              <div className="border-l border-white/[0.08] pl-5 sm:pl-7">
                <h3 className="text-2xl font-bold sm:text-3xl">
                  10K+
                </h3>

                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Customers
                </p>
              </div>

              <div className="border-l border-white/[0.08] pl-5 sm:pl-7">
                <h3 className="flex items-center gap-1 text-2xl font-bold sm:text-3xl">
                  4.9
                  <FiStar
                    size={17}
                    className="text-blue-300"
                    fill="currentColor"
                  />
                </h3>

                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Rating
                </p>
              </div>

            </div>
          </div>

          {/* ================= RIGHT SHOWCASE ================= */}

          <div className="relative mx-auto w-full max-w-xl">

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.09] blur-[100px]" />

            {/* Main Card */}
            <div className="relative rounded-[2rem] border border-white/[0.09] bg-[#08111f]/90 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-5">

              {/* Top */}
              <div className="flex items-center justify-between px-2 py-2">

                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-slate-600">
                    Vihla Select
                  </p>

                  <h3 className="mt-1 text-lg font-semibold">
                    Premium Collection
                  </h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/10 bg-blue-500/10 text-blue-300">
                  <FiShoppingBag size={20} />
                </div>

              </div>

              {/* Product Area */}
              <div className="relative mt-4 flex h-[390px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-blue-500/[0.12] via-indigo-500/[0.08] to-transparent">

                {/* Decorative circles */}
                <div className="absolute left-[-50px] top-[-50px] h-52 w-52 rounded-full border border-white/[0.04]" />

                <div className="absolute bottom-[-80px] right-[-60px] h-64 w-64 rounded-full border border-blue-400/[0.06]" />

                <div className="absolute h-64 w-64 rounded-full bg-blue-500/[0.08] blur-3xl" />

                {/* Product */}
                <div className="relative flex h-52 w-52 items-center justify-center rounded-[3rem] border border-white/[0.1] bg-[#0b1829] shadow-[0_30px_70px_rgba(0,0,0,0.4)]">

                  <div className="absolute inset-4 rounded-[2.5rem] border border-blue-400/[0.06]" />

                  <span className="relative text-6xl font-bold tracking-[-0.05em] text-blue-300">
                    VC
                  </span>

                </div>

                {/* Price */}
                <div className="absolute bottom-5 left-5 rounded-xl border border-white/[0.08] bg-[#08111f]/90 px-4 py-3 shadow-xl backdrop-blur-md">

                  <p className="text-[10px] uppercase tracking-wider text-slate-600">
                    Starting from
                  </p>

                  <p className="mt-1 text-xl font-bold">
                    $89
                  </p>

                </div>

                {/* Rating */}
                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-blue-400/20 bg-[#08111f]/90 px-3 py-2 text-xs font-medium text-blue-300 backdrop-blur-md">

                  <FiStar fill="currentColor" />

                  4.9

                </div>

                {/* Favorite */}
                <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#08111f]/90 text-slate-400 backdrop-blur-md">
                  <FiHeart size={17} />
                </div>

              </div>

              {/* Bottom Info */}
              <div className="flex items-center justify-between px-2 pb-1 pt-5">

                <div>
                  <p className="text-xs text-slate-500">
                    Modern essentials
                  </p>

                  <p className="mt-1 font-semibold">
                    Designed for everyday living
                  </p>
                </div>

                <Link
                  to="/products"
                  className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white text-slate-950 transition duration-300 hover:bg-blue-50"
                >
                  <FiArrowUpRight
                    size={19}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

              </div>

            </div>

            {/* Floating Customer Card */}
            <div className="absolute -left-5 bottom-14 hidden rounded-2xl border border-white/[0.08] bg-[#08111f]/95 p-4 shadow-2xl backdrop-blur-xl sm:block">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <FiCheckCircle size={19} />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-600">
                    Shopping
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    Safe & Secure
                  </p>
                </div>

              </div>

            </div>

            {/* Floating Customer Card */}
            <div className="absolute -right-5 top-20 hidden rounded-2xl border border-white/[0.08] bg-[#08111f]/95 p-4 shadow-2xl backdrop-blur-xl sm:block">

              <p className="text-[10px] uppercase tracking-wider text-slate-600">
                Trusted By
              </p>

              <p className="mt-1 text-xl font-bold">
                10K+
              </p>

              <div className="mt-1 flex items-center gap-1 text-xs text-blue-300">
                <FiStar fill="currentColor" />
                Happy shoppers
              </div>

            </div>

          </div>
        </div>

        {/* ================= SERVICE STRIP ================= */}

        <div className="mt-20 grid overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] sm:grid-cols-2 lg:grid-cols-4">

          {/* Service 1 */}
          <div className="group flex items-center gap-4 border-b border-white/[0.07] p-5 transition hover:bg-white/[0.03] sm:border-r lg:border-b-0">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300 transition group-hover:bg-blue-500/15">
              <FiTruck size={19} />
            </div>

            <div>
              <h4 className="text-sm font-semibold">
                Fast Delivery
              </h4>

              <p className="mt-1 text-xs text-slate-600">
                Quick & reliable shipping
              </p>
            </div>

          </div>

          {/* Service 2 */}
          <div className="group flex items-center gap-4 border-b border-white/[0.07] p-5 transition hover:bg-white/[0.03] lg:border-b-0 lg:border-r">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
              <FiShield size={19} />
            </div>

            <div>
              <h4 className="text-sm font-semibold">
                Secure Payment
              </h4>

              <p className="mt-1 text-xs text-slate-600">
                Protected checkout
              </p>
            </div>

          </div>

          {/* Service 3 */}
          <div className="group flex items-center gap-4 border-b border-white/[0.07] p-5 transition hover:bg-white/[0.03] sm:border-b-0 sm:border-r lg:border-r">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
              <FiCheckCircle size={19} />
            </div>

            <div>
              <h4 className="text-sm font-semibold">
                Quality Assured
              </h4>

              <p className="mt-1 text-xs text-slate-600">
                Carefully selected products
              </p>
            </div>

          </div>

          {/* Service 4 */}
          <div className="group flex items-center gap-4 p-5 transition hover:bg-white/[0.03]">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
              <FiHeadphones size={19} />
            </div>

            <div>
              <h4 className="text-sm font-semibold">
                Customer Support
              </h4>

              <p className="mt-1 text-xs text-slate-600">
                Here when you need us
              </p>
            </div>

          </div>

        </div>

        {/* ================= CATEGORY SECTION ================= */}

        <div className="mt-20">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                Explore
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Shop by Collection
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
                Explore different categories and discover products that fit
                your lifestyle.
              </p>
            </div>

            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-300"
            >
              View All Products

              <FiArrowUpRight
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </div>

          {/* Categories */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <Link
              to="/products"
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#08111f] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/20"
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-blue-500/[0.07] blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                  <FiShoppingBag size={20} />
                </div>

                <h3 className="mt-6 font-semibold">
                  Everyday Essentials
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-600">
                  Practical products for everyday life.
                </p>

                <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-blue-300">
                  Explore
                  <FiArrowUpRight />
                </span>
              </div>
            </Link>

            <Link
              to="/products"
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#08111f] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/20"
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-indigo-500/[0.07] blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-300">
                  <FiStar size={20} />
                </div>

                <h3 className="mt-6 font-semibold">
                  Premium Picks
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-600">
                  Handpicked products worth discovering.
                </p>

                <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-blue-300">
                  Explore
                  <FiArrowUpRight />
                </span>
              </div>
            </Link>

            <Link
              to="/products"
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#08111f] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/20"
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-500/[0.06] blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                  <FiZap size={20} />
                </div>

                <h3 className="mt-6 font-semibold">
                  Trending Now
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-600">
                  Popular products people love right now.
                </p>

                <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-blue-300">
                  Explore
                  <FiArrowUpRight />
                </span>
              </div>
            </Link>

            <Link
              to="/products"
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#08111f] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/20"
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-purple-500/[0.07] blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300">
                  <FiHeart size={20} />
                </div>

                <h3 className="mt-6 font-semibold">
                  Customer Favorites
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-600">
                  Discover products loved by our customers.
                </p>

                <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-blue-300">
                  Explore
                  <FiArrowUpRight />
                </span>
              </div>
            </Link>

          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}

        <div className="relative mt-20 overflow-hidden rounded-[2rem] border border-blue-400/10 bg-gradient-to-br from-blue-500/[0.09] via-[#08111f] to-indigo-500/[0.07] p-8 sm:p-12">

          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/[0.08] blur-3xl" />

          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-indigo-500/[0.06] blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                Start Shopping
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                Find something you'll love.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
                Browse our collection and discover premium products selected
                for modern everyday living.
              </p>
            </div>

            <Link
              to="/products"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Start Exploring

              <FiArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;


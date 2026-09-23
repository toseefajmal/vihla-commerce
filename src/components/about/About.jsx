
import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiHeart,
  FiShield,
  FiTruck,
  FiUsers,
  FiShoppingBag,
  FiTarget,
  FiAward,
  FiStar,
  FiZap,
  FiGlobe,
  FiPackage,
} from "react-icons/fi";

const About = () => {
  const values = [
    {
      icon: <FiTarget size={22} />,
      number: "01",
      title: "Our Mission",
      text: "Make online shopping simple, reliable and enjoyable through a thoughtful digital experience.",
    },
    {
      icon: <FiHeart size={22} />,
      number: "02",
      title: "Customer First",
      text: "Every part of Vihla is designed around making the customer journey easier and more enjoyable.",
    },
    {
      icon: <FiAward size={22} />,
      number: "03",
      title: "Quality Matters",
      text: "We focus on products that combine everyday usefulness, quality and lasting value.",
    },
    {
      icon: <FiShield size={22} />,
      number: "04",
      title: "Trust & Security",
      text: "A transparent and secure shopping experience is at the heart of everything we build.",
    },
  ];

  const features = [
    {
      icon: <FiShoppingBag size={22} />,
      title: "Curated Products",
      text: "A carefully selected collection made for modern everyday needs.",
    },
    {
      icon: <FiTruck size={22} />,
      title: "Reliable Delivery",
      text: "Fast and dependable delivery designed around your convenience.",
    },
    {
      icon: <FiShield size={22} />,
      title: "Secure Experience",
      text: "A safe and comfortable shopping journey from discovery to checkout.",
    },
    {
      icon: <FiUsers size={22} />,
      title: "Customer Support",
      text: "Helpful assistance whenever you need a hand with your shopping.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050b14] text-white">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden border-b border-white/[0.06]">

        {/* Background */}
        <div className="pointer-events-none absolute left-[-150px] top-20 h-[450px] w-[450px] rounded-full bg-blue-600/[0.08] blur-[150px]" />

        <div className="pointer-events-none absolute right-[-150px] top-[25%] h-[450px] w-[450px] rounded-full bg-indigo-600/[0.08] blur-[150px]" />

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

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-7 lg:px-8 lg:pb-32 lg:pt-40">

          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

            {/* Hero Content */}
            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.07] px-4 py-2 text-xs font-medium uppercase tracking-wider text-blue-300">
                <FiZap size={13} />
                About Vihla Commerce
              </div>

              <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Shopping Should
                <span className="block bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                  Feel Effortless.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                Vihla Commerce brings carefully selected products together
                with a modern shopping experience built around simplicity,
                quality and trust.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/products"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 shadow-[0_20px_50px_rgba(255,255,255,0.07)] transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
                >
                  Explore Products
                  <FiArrowUpRight
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.08]"
                >
                  Get In Touch
                  <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>

              </div>

              {/* Trust */}
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">

                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <FiCheckCircle className="text-blue-300" />
                  Quality Focused
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <FiShield className="text-blue-300" />
                  Secure Shopping
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <FiUsers className="text-blue-300" />
                  Customer First
                </div>

              </div>

            </div>

            {/* Hero Visual */}
            <div className="relative mx-auto w-full max-w-lg">

              <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.09] blur-[110px]" />

              <div className="relative rounded-[2rem] border border-white/[0.09] bg-[#08111f]/90 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">

                <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-slate-600">
                      Our Identity
                    </p>

                    <h3 className="mt-2 text-xl font-semibold">
                      Vihla Commerce
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                    <FiShoppingBag size={20} />
                  </div>

                </div>

                <div className="relative mt-5 flex h-[350px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-blue-500/[0.12] via-indigo-500/[0.08] to-transparent">

                  <div className="absolute h-64 w-64 rounded-full border border-white/[0.04]" />

                  <div className="absolute h-48 w-48 rounded-full border border-blue-400/[0.06]" />

                  <div className="absolute h-52 w-52 rounded-full bg-blue-500/[0.08] blur-3xl" />

                  <div className="relative flex h-48 w-48 items-center justify-center rounded-[3rem] border border-white/[0.1] bg-[#0b1829] shadow-[0_30px_80px_rgba(0,0,0,0.5)]">

                    <div className="absolute inset-4 rounded-[2.5rem] border border-blue-400/[0.06]" />

                    <span className="relative text-6xl font-bold tracking-[-0.06em] text-blue-300">
                      VC
                    </span>

                  </div>

                  <div className="absolute left-4 top-4 rounded-xl border border-white/[0.08] bg-[#08111f]/90 px-4 py-3 backdrop-blur-xl">
                    <p className="text-[10px] uppercase tracking-wider text-slate-600">
                      Founded Around
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      Simplicity
                    </p>
                  </div>

                  <div className="absolute bottom-4 right-4 rounded-xl border border-white/[0.08] bg-[#08111f]/90 px-4 py-3 backdrop-blur-xl">
                    <div className="flex items-center gap-2">
                      <FiStar
                        size={14}
                        className="text-blue-300"
                        fill="currentColor"
                      />

                      <span className="text-sm font-semibold">
                        4.9
                      </span>
                    </div>

                    <p className="mt-1 text-[10px] text-slate-600">
                      Customer Rating
                    </p>
                  </div>

                </div>

                <div className="grid grid-cols-3 gap-3 pt-5">

                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3 text-center">
                    <p className="text-lg font-bold">100+</p>
                    <p className="mt-1 text-[10px] text-slate-600">
                      Products
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3 text-center">
                    <p className="text-lg font-bold">10K+</p>
                    <p className="mt-1 text-[10px] text-slate-600">
                      Customers
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3 text-center">
                    <p className="text-lg font-bold">24/7</p>
                    <p className="mt-1 text-[10px] text-slate-600">
                      Experience
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}

      <section className="border-b border-white/[0.06] bg-[#08111f]">

        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">

          <div className="border-b border-white/[0.06] px-6 py-10 text-center sm:px-8 lg:border-b-0 lg:border-r">
            <p className="text-3xl font-bold sm:text-4xl">
              100+
            </p>

            <p className="mt-2 text-xs uppercase tracking-wider text-slate-600">
              Products
            </p>
          </div>

          <div className="border-b border-white/[0.06] px-6 py-10 text-center sm:px-8 lg:border-b-0 lg:border-r">
            <p className="text-3xl font-bold sm:text-4xl">
              50+
            </p>

            <p className="mt-2 text-xs uppercase tracking-wider text-slate-600">
              Collections
            </p>
          </div>

          <div className="px-6 py-10 text-center sm:px-8 lg:border-r lg:border-white/[0.06]">
            <p className="text-3xl font-bold sm:text-4xl">
              10K+
            </p>

            <p className="mt-2 text-xs uppercase tracking-wider text-slate-600">
              Customers
            </p>
          </div>

          <div className="px-6 py-10 text-center sm:px-8">
            <div className="flex items-center justify-center gap-1">
              <p className="text-3xl font-bold sm:text-4xl">
                4.9
              </p>

              <FiStar
                size={19}
                className="text-blue-300"
                fill="currentColor"
              />
            </div>

            <p className="mt-2 text-xs uppercase tracking-wider text-slate-600">
              Customer Rating
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================
          STORY
      ========================================================= */}

      <section className="relative overflow-hidden py-24 lg:py-32">

        <div className="pointer-events-none absolute left-[-150px] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-7 lg:grid-cols-2 lg:px-8">

          {/* Visual */}
          <div className="relative">

            <div className="absolute -inset-5 rounded-[2.5rem] bg-blue-500/[0.04] blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/[0.08] bg-[#08111f] p-5 shadow-2xl">

              <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-blue-500/[0.12] via-indigo-500/[0.07] to-transparent">

                <div className="flex h-[470px] items-center justify-center">

                  <div className="relative">

                    <div className="absolute inset-[-40px] rounded-full bg-blue-500/[0.1] blur-[60px]" />

                    <div className="relative flex h-56 w-56 items-center justify-center rounded-[3.5rem] border border-white/[0.1] bg-[#0b1829] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">

                      <span className="text-7xl font-bold tracking-[-0.06em] text-blue-300">
                        VC
                      </span>

                    </div>

                  </div>

                </div>

                {/* Top Label */}
                <div className="absolute left-5 top-5 rounded-xl border border-white/[0.08] bg-[#08111f]/90 px-4 py-3 backdrop-blur-xl">

                  <p className="text-[10px] uppercase tracking-wider text-slate-600">
                    Experience
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    Modern Shopping
                  </p>

                </div>

                {/* Bottom Label */}
                <div className="absolute bottom-5 right-5 rounded-xl border border-blue-400/10 bg-[#08111f]/90 px-4 py-3 backdrop-blur-xl">

                  <p className="text-[10px] uppercase tracking-wider text-slate-600">
                    Our Focus
                  </p>

                  <p className="mt-1 text-sm font-semibold text-blue-300">
                    Customer First
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Story Content */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Built Around
              <span className="block bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                Better Experiences.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              Vihla Commerce was created with a simple idea: shopping online
              should not feel complicated. We wanted to create a place where
              discovering products feels natural, browsing feels effortless
              and every interaction feels intentional.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-400">
              From product discovery to checkout, we focus on creating a
              clean, trustworthy and convenient experience that puts people
              first.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10">
                  <FiCheckCircle className="text-blue-300" />
                </span>

                <span className="text-sm text-slate-400">
                  Carefully selected products
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10">
                  <FiCheckCircle className="text-blue-300" />
                </span>

                <span className="text-sm text-slate-400">
                  Simple and modern interface
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10">
                  <FiCheckCircle className="text-blue-300" />
                </span>

                <span className="text-sm text-slate-400">
                  Customer-focused service
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}

      <section className="relative border-y border-white/[0.06] bg-[#08111f] py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">

          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

            <div className="max-w-2xl">

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                Our Principles
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                What We
                <span className="text-blue-300">
                  Believe In.
                </span>
              </h2>

              <p className="mt-5 leading-7 text-slate-500">
                The principles behind our products, platform and customer
                experience.
              </p>

            </div>

            <div className="hidden h-px w-40 bg-gradient-to-r from-blue-400/40 to-transparent lg:block" />

          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => (
              <div
                key={value.title}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#050b14] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/20"
              >

                <div className="absolute right-0 top-0 text-7xl font-bold text-white/[0.025]">
                  {value.number}
                </div>

                <div className="relative">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/10 bg-blue-500/10 text-blue-300">
                    {value.icon}
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {value.text}
                  </p>

                  <div className="mt-6 h-px w-8 bg-blue-400/30 transition-all duration-300 group-hover:w-16" />

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          WHY VIHLA
      ========================================================= */}

      <section className="relative py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Content */}
            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                Why Vihla
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                Designed for a
                <span className="block text-blue-300">
                  Better Journey.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Great shopping is more than just products. It's about
                discovering something useful, understanding what you're
                buying and feeling confident throughout the experience.
              </p>

              <Link
                to="/products"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Start Shopping

                <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

            </div>

            {/* Features */}
            <div className="grid gap-4 sm:grid-cols-2">

              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-white/[0.08] bg-[#08111f] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/20"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                      {feature.icon}
                    </div>

                    <span className="text-xs font-semibold text-slate-700">
                      0{index + 1}
                    </span>

                  </div>

                  <h3 className="mt-6 text-lg font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {feature.text}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          TRUST SECTION
      ========================================================= */}

      <section className="border-y border-white/[0.06] bg-[#08111f] py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">

          <div className="grid gap-4 md:grid-cols-3">

            <div className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-[#050b14] p-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                <FiGlobe size={21} />
              </div>

              <div>
                <h3 className="text-sm font-semibold">
                  Modern Platform
                </h3>

                <p className="mt-1 text-xs text-slate-600">
                  Built for today's shoppers
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-[#050b14] p-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                <FiPackage size={21} />
              </div>

              <div>
                <h3 className="text-sm font-semibold">
                  Quality Selection
                </h3>

                <p className="mt-1 text-xs text-slate-600">
                  Products worth discovering
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-[#050b14] p-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                <FiShield size={21} />
              </div>

              <div>
                <h3 className="text-sm font-semibold">
                  Trust & Security
                </h3>

                <p className="mt-1 text-xs text-slate-600">
                  Shopping with confidence
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="px-5 py-24 sm:px-7 lg:px-8 lg:py-32">

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-blue-400/10 bg-gradient-to-br from-blue-600/[0.15] via-[#08111f] to-indigo-600/[0.08] px-6 py-16 text-center shadow-[0_30px_100px_rgba(0,0,0,0.25)] sm:px-12 sm:py-20">

          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[500px] -translate-x-1/2 rounded-full bg-blue-500/[0.09] blur-[120px]" />

          <div className="pointer-events-none absolute bottom-[-100px] left-[-100px] h-64 w-64 rounded-full bg-indigo-500/[0.06] blur-[100px]" />

          <div className="relative">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/10 bg-blue-500/10 text-blue-300">
              <FiShoppingBag size={24} />
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              Your Next Discovery
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Discover a Smarter Way to Shop.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Explore our collection and find products selected for modern
              everyday living.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/products"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Explore Products

                <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white transition hover:border-blue-400/20 hover:bg-white/[0.07]"
              >
                Contact Us
                <FiArrowUpRight />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default About;



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
} from "react-icons/fi";

const About = () => {
  const values = [
    {
      icon: <FiTarget size={24} />,
      title: "Our Mission",
      text: "Our mission is to make online shopping simple, reliable and enjoyable for everyone.",
    },
    {
      icon: <FiHeart size={24} />,
      title: "Customer First",
      text: "Every decision we make starts with creating a better experience for our customers.",
    },
    {
      icon: <FiAward size={24} />,
      title: "Quality Matters",
      text: "We focus on carefully selected products that deliver value and quality.",
    },
    {
      icon: <FiShield size={24} />,
      title: "Trust & Security",
      text: "We believe secure and transparent shopping is the foundation of a great store.",
    },
  ];

  const features = [
    {
      icon: <FiShoppingBag size={24} />,
      title: "Curated Products",
      text: "A carefully selected collection for modern everyday needs.",
    },
    {
      icon: <FiTruck size={24} />,
      title: "Reliable Delivery",
      text: "Fast and dependable delivery from checkout to your doorstep.",
    },
    {
      icon: <FiShield size={24} />,
      title: "Secure Experience",
      text: "A safe and comfortable shopping experience you can trust.",
    },
    {
      icon: <FiUsers size={24} />,
      title: "Customer Support",
      text: "Helpful support whenever you need assistance.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050b14] text-white">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="pointer-events-none absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-[140px]" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-36 sm:px-7 lg:px-8 lg:pb-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              About Vihla Commerce
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              More Than a Store.
              <span className="block text-blue-300">
                A Better Way to Shop.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Vihla Commerce is built around a simple idea — online shopping
              should be modern, convenient, reliable and enjoyable. We bring
              carefully selected products together with an experience designed
              around you.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/products"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
              >
                Explore Products
                <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white transition hover:border-blue-400/30 hover:bg-blue-500/10"
              >
                Get In Touch
                <FiArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-white/[0.06] bg-[#08111f]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          <div className="border-b border-white/[0.06] px-5 py-10 text-center md:border-b-0 md:border-r">
            <h3 className="text-3xl font-bold">100+</h3>
            <p className="mt-2 text-sm text-slate-500">Products</p>
          </div>

          <div className="border-b border-white/[0.06] px-5 py-10 text-center md:border-b-0 md:border-r">
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="mt-2 text-sm text-slate-500">Collections</p>
          </div>

          <div className="px-5 py-10 text-center md:border-r md:border-white/[0.06]">
            <h3 className="text-3xl font-bold">10K+</h3>
            <p className="mt-2 text-sm text-slate-500">Customers</p>
          </div>

          <div className="px-5 py-10 text-center">
            <h3 className="text-3xl font-bold">4.9</h3>
            <p className="mt-2 text-sm text-slate-500">Customer Rating</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="pointer-events-none absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-7 lg:grid-cols-2 lg:items-center lg:px-8">

          {/* Visual */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/5 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#08111f] p-6">
              <div className="flex h-[420px] items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent">

                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[70px]" />

                  <div className="relative flex h-52 w-52 items-center justify-center rounded-[3rem] border border-white/10 bg-[#0c192b] shadow-2xl">
                    <span className="text-6xl font-bold text-blue-300">
                      VC
                    </span>
                  </div>
                </div>

                <div className="absolute left-10 top-10 rounded-2xl border border-white/10 bg-[#08111f]/90 px-5 py-4 backdrop-blur">
                  <p className="text-xs text-slate-500">Experience</p>
                  <p className="mt-1 font-semibold">Modern Shopping</p>
                </div>

                <div className="absolute bottom-10 right-10 rounded-2xl border border-white/10 bg-[#08111f]/90 px-5 py-4 backdrop-blur">
                  <p className="text-xs text-slate-500">Focus</p>
                  <p className="mt-1 font-semibold text-blue-300">
                    Customer First
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Our Story
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Built for the Way
              <span className="block text-blue-300">
                You Shop Today.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Vihla Commerce was created with a clear purpose: to bring
              together quality products and a modern shopping experience.
              Instead of making customers navigate complicated interfaces,
              we focus on keeping everything simple and easy to explore.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              From discovering products to making a purchase, every part of
              the experience is designed to feel smooth, trustworthy and
              convenient.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <FiCheckCircle className="shrink-0 text-blue-300" />
                <span className="text-sm text-slate-400">
                  Carefully selected products
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FiCheckCircle className="shrink-0 text-blue-300" />
                <span className="text-sm text-slate-400">
                  Simple and modern shopping experience
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FiCheckCircle className="shrink-0 text-blue-300" />
                <span className="text-sm text-slate-400">
                  Customer-focused service
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-white/[0.06] bg-[#08111f] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              What We Believe
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Values That Guide
              <span className="text-blue-300"> Everything We Do.</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Our approach is built around quality, trust and creating an
              experience that customers actually enjoy.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-3xl border border-white/[0.08] bg-[#050b14] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300 transition group-hover:bg-blue-500/15">
                  {value.icon}
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Why Vihla
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Everything You Need for a Better Shopping Experience.
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                We combine carefully selected products with a clean,
                convenient and customer-focused experience.
              </p>

              <Link
                to="/products"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
              >
                Start Shopping
                <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-white/[0.08] bg-[#08111f] p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                    {feature.icon}
                  </div>

                  <h3 className="mt-5 font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 sm:px-7 lg:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-blue-400/10 bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-[#08111f] px-6 py-16 text-center sm:px-12">

          <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[100px]" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
              <FiShoppingBag size={25} />
            </div>

            <h2 className="mt-7 text-3xl font-bold sm:text-4xl">
              Ready to Discover Something New?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
              Explore our collection and find products that fit your lifestyle.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
            >
              Explore Products
              <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;


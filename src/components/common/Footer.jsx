import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiGithub,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050b14] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-7 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-lg font-bold text-blue-300">
                VC
              </div>

              <span className="text-xl font-bold tracking-tight">
                Vihla<span className="text-blue-300">.</span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-500">
              Discover premium products designed for modern lifestyles.
              Shop smarter with a simple, secure and reliable shopping
              experience.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-300"
              >
                <FiFacebook size={17} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-300"
              >
                <FiInstagram size={17} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-300"
              >
                <FiTwitter size={17} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-300"
              >
                <FiGithub size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-sm text-slate-500 transition hover:text-blue-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-sm text-slate-500 transition hover:text-blue-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="text-sm text-slate-500 transition hover:text-blue-300"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-slate-500 transition hover:text-blue-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Customer Service
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="/products"
                  className="text-sm text-slate-500 transition hover:text-blue-300"
                >
                  Shop All
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-sm text-slate-500 transition hover:text-blue-300"
                >
                  Why Choose Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-slate-500 transition hover:text-blue-300"
                >
                  Help & Support
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-slate-500 transition hover:text-blue-300"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Get In Touch
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
                  <FiMail size={16} />
                </div>

                <div>
                  <p className="text-xs text-slate-600">
                    Email
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    support@vihla.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
                  <FiPhone size={16} />
                </div>

                <div>
                  <p className="text-xs text-slate-600">
                    Phone
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    +92 300 1234567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
                  <FiMapPin size={16} />
                </div>

                <div>
                  <p className="text-xs text-slate-600">
                    Location
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Pakistan
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 rounded-3xl border border-white/[0.08] bg-[#08111f] p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <p className="text-sm font-semibold text-blue-300">
                Stay Updated
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Get the latest products & offers.
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Subscribe to our newsletter for updates and exclusive offers.
              </p>
            </div>

            <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-[#050b14] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-400/30"
              />

              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-50">
                Subscribe
                <FiArrowUpRight />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:px-7 md:flex-row md:items-center md:justify-between lg:px-8">

          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Vihla Commerce. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              to="/"
              className="text-xs text-slate-600 transition hover:text-blue-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="/"
              className="text-xs text-slate-600 transition hover:text-blue-300"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/contact"
              className="text-xs text-slate-600 transition hover:text-blue-300"
            >
              Contact
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiChevronRight,
  FiShoppingBag,
  FiHome,
  FiUser,
  FiGrid,
} from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: FiHome,
    },
    {
      name: "About",
      path: "/about",
      icon: FiUser,
    },
    {
      name: "Products",
      path: "/products",
      icon: FiGrid,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: FiShoppingBag,
    },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        className={`relative mx-auto max-w-7xl overflow-hidden rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "border-blue-400/20 bg-[#07101c]/95 shadow-[0_20px_80px_rgba(0,0,0,0.55)]"
            : "border-white/10 bg-[#08111f]/90 shadow-[0_20px_80px_rgba(0,0,0,0.4)]"
        } backdrop-blur-2xl`}
      >
        {/* Top Highlight */}
        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />

        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-28 left-1/3 h-52 w-52 rounded-full bg-indigo-500/10 blur-3xl" />

        {/* Main Navbar */}
        <div className="relative flex h-[76px] items-center justify-between px-5 sm:px-7">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="group flex items-center"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-blue-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

              <img
                src="/logo.png"
                alt="Vihla Commerce"
                className="relative h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-11"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center rounded-2xl border border-white/[0.07] bg-white/[0.035] p-1.5 md:flex">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`group relative flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-white text-slate-950 shadow-[0_8px_25px_rgba(255,255,255,0.12)]"
                      : "text-slate-400 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  <Icon
                    size={15}
                    className={`transition-transform duration-200 ${
                      isActive
                        ? "text-slate-950"
                        : "text-slate-500 group-hover:text-blue-300"
                    }`}
                  />

                  <span>{item.name}</span>

                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-blue-500" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden items-center gap-3 md:flex">
            {/* Small Status */}
            <div className="hidden items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3.5 py-2.5 lg:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs font-medium text-slate-400">
                Online Store
              </span>
            </div>

            {/* Login
            <Link
              to="/login"
              className="group relative flex items-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white hover:text-slate-950"
            >
              <span className="relative z-10">Login</span>

              <FiArrowUpRight
                size={17}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            */}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white transition-all duration-200 hover:border-blue-400/20 hover:bg-blue-500/10 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`grid transition-all duration-300 md:hidden ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-white/[0.07] px-4 pb-4 pt-4">
              {/* Mobile Status */}
              <div className="mb-3 flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Vihla Commerce
                </span>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-xs text-emerald-300">
                    Online
                  </span>
                </div>
              </div>

              <div className="space-y-1.5">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;

                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-white text-slate-950 shadow-lg"
                          : "text-slate-400 hover:bg-white/[0.06] hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          size={17}
                          className={
                            isActive
                              ? "text-slate-950"
                              : "text-slate-500"
                          }
                        />

                        <span>{item.name}</span>
                      </div>

                      <FiChevronRight
                        size={17}
                        className={`transition-transform duration-200 ${
                          isActive
                            ? "translate-x-0 text-slate-950"
                            : "text-slate-600"
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Login
              <Link
                to="/login"
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
              >
                Login
                <FiArrowUpRight size={17} />
              </Link>
              */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


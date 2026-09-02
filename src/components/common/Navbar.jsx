
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiChevronRight,
} from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#08111f]/95 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        
        {/* Premium Top Highlight */}
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Subtle Background Glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/4 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative flex h-[76px] items-center justify-between px-5 sm:px-7">
          
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-auto object-contain sm:h-11"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center rounded-2xl border border-white/[0.07] bg-white/[0.03] p-1.5 md:flex">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative rounded-xl px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-white text-slate-950 shadow-lg"
                      : "text-slate-400 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Login */}
          <div className="hidden md:flex">
            <Link
              to="/login"
              className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-white hover:text-slate-950"
            >
              <span>Login</span>
              <FiArrowUpRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white transition-colors hover:bg-white/[0.1] md:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="relative border-t border-white/[0.08] px-4 pb-4 pt-3 md:hidden">
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-white text-slate-950"
                        : "text-slate-400 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    <FiChevronRight size={18} />
                  </Link>
                );
              })}

              {/* Mobile Login */}
              {/* <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-950"
              >
                Login
                <FiArrowUpRight size={17} />
              </Link> */}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

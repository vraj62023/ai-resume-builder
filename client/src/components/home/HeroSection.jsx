'use client';
import logo from "../../assets/logo.png";
import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import FiberBackground from './FibreBackground.jsx';
import { Link } from "react-router-dom";

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  return (
    <section className="relative flex min-h-screen flex-col items-center text-white text-sm font-sans overflow-hidden">
      <FiberBackground />

      {/* Navigation */}
      <nav className="relative z-50 flex w-full items-center justify-between bg-black/20 px-6 backdrop-blur md:px-16 lg:px-24 xl:px-32">
        <a href="#" className="flex-shrink-0">
         <img src={logo} alt="logo" className="w-20 mt-1 pt-2"/>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <a href="#" className="transition hover:text-indigo-300 ">Home</a>
          <a href="#features" className="transition hover:text-indigo-300">Features</a>
          <a href="#testimonials" className="transition hover:text-indigo-300">Testimonials</a>
          <a href="#contact" className="transition hover:text-indigo-300">Contact</a>
        </div>

        <div className="hidden space-x-3 lg:block">
          <Link to = "/login?state=signup" className="rounded-md bg-indigo-600 px-6 py-2 text-white transition hover:bg-indigo-700">Get started</Link>     
          <Link to='/login?state=login' className="rounded-md border border-indigo-400 px-6 py-2 transition hover:bg-indigo-300/20" href="/login">Login</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="active:scale-90 transition lg:hidden"
        >
          <Menu size={26} />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-black/60 text-lg backdrop-blur lg:hidden">
          <a href="#" className="transition hover:text-indigo-300">Home</a>
          <a href="#features" className="transition hover:text-indigo-300">Features</a>
          <a href="#testimonials" className="transition hover:text-indigo-300">Testimonials</a>
          <a href="#contact" className="transition hover:text-indigo-300">Contact</a>
          <Link to = "/login?state=signup" className="rounded-md bg-indigo-600 px-6 py-2 text-white transition hover:bg-indigo-700">Get started</Link>     
          <Link to='/login?state=login' className="rounded-md border border-indigo-400 px-6 py-2 transition hover:bg-indigo-300/20" href="/login">Login</Link>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="flex size-10 items-center justify-center rounded-md bg-indigo-100 p-1 text-black transition hover:bg-indigo-200 active:ring-3 active:ring-white"
          >
            <X size={24} />
          </button>
        </div>
      )}

      {/* Hero Content */}
      
      <div className="relative z-10 flex flex-col items-center px-6 pt-16 sm:pt-20 md:pt-32">
        <div className="flex items-center gap-2 rounded-full border border-indigo-600 px-4 py-2 text-gray-50">
          <div className="size-2.5 rounded-full bg-green-500" />
          <span>ATS-Friendly • Modern Templates • 1-Click PDF</span>
        </div>

        <h1 className="mt-4 max-w-2xl text-center text-5xl font-semibold leading-tight md:text-6xl md:leading-tight">
          Create a professional resume in minutes.
        </h1>

        <p className="mt-2 max-w-lg text-center text-base">
          Create clean, modern, ATS-friendly resumes with live preview and instant PDF download.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link to="/app" className="group flex items-center gap-2 rounded-lg bg-indigo-600 px-7 h-11 text-white transition active:scale-95 hover:bg-indigo-700">
            Create Resume
            <ArrowRight size={20} className="transition group-hover:translate-x-1" />
          </Link>

          <button className="rounded-lg border border-indigo-400 px-8 h-11 transition active:scale-95 hover:bg-white/10">
            View Templates
          </button>
        </div>
      </div>
    </section>
  );
}

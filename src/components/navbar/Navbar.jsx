"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  ChevronDown,
  BookOpen,
  Award,
  GraduationCap,
  Calculator,
  Sparkles
} from "lucide-react";

// Courses array mapped to the database slugs
const courses = [
  {
    name: "8th to 10th Foundation",
    slug: "8th-to-10th-foundation",
    subtext: "Maths, Science & English",
    icon: <GraduationCap className="w-4.5 h-4.5 text-indigo-500" />
  },
  {
    name: "10th SSC Board",
    slug: "10th-ssc-board",
    subtext: "SSC Board Specialist",
    icon: <BookOpen className="w-4.5 h-4.5 text-emerald-500" />
  },
  {
    name: "FYJC & SYJC",
    slug: "fyjc-syjc",
    subtext: "Commerce & Science",
    icon: <Calculator className="w-4.5 h-4.5 text-amber-500" />
  },
  {
    name: "Degree Section",
    slug: "degree-section",
    subtext: "University Prep Support",
    icon: <Award className="w-4.5 h-4.5 text-rose-500" />
  },
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-2xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-semibold text-lg overflow-hidden relative">
            <Image
              width={50}
              height={50}
              src="/logo.webp"
              alt="logo"
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 leading-tight">
              Ritesh
            </h2>
            <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest -mt-0.5">
              Academy
            </p>
          </div>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-7">
          <Link
            href="/"
            className="text-gray-700 hover:text-indigo-600 transition-colors text-sm font-semibold"
          >
            Home
          </Link>

          {/* Hover Menu Trigger for Courses */}
          <div
            className="relative py-2"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/Course"
              className="text-gray-700 hover:text-indigo-600 transition-colors text-sm font-semibold flex items-center gap-1 cursor-pointer"
            >
              Courses
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "transform rotate-180 text-indigo-600" : "text-gray-400"}`} />
            </Link>

            {/* Courses Dropdown Overlay card */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 transform -translate-x-1/3 mt-1 w-72 bg-white border border-gray-150 rounded-2xl shadow-lg p-2.5 z-50 backdrop-blur-md"
                >
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider px-3 pb-2 border-b border-gray-50 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
                    <span>Academic Programs</span>
                  </div>
                  <div className="space-y-0.5 mt-2">
                    {courses.map((course) => (
                      <Link
                        key={course.slug}
                        href={`/Course/${course.slug}`}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-indigo-50/50 group transition-all"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-white group-hover:border-indigo-100 transition-all">
                          {course.icon}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-900 group-hover:text-indigo-600 transition-colors leading-tight">
                            {course.name}
                          </p>
                          <p className="text-[10px] text-gray-400 group-hover:text-gray-500 transition-colors mt-0.5">
                            {course.subtext}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/About"
            className="text-gray-700 hover:text-indigo-600 transition-colors text-sm font-semibold"
          >
            About
          </Link>

          <Link
            href="/Admission"
            className="text-gray-700 hover:text-indigo-600 transition-colors text-sm font-semibold"
          >
            Admission
          </Link>

          <Link
            href="/Contact"
            className="text-gray-700 hover:text-indigo-600 transition-colors text-sm font-semibold"
          >
            Contact
          </Link>

          <Link
            href="/Result"
            className="text-gray-700 hover:text-indigo-600 transition-colors text-sm font-semibold"
          >
            Result
          </Link>

          <Link
            href="/Gallery"
            className="text-gray-700 hover:text-indigo-600 transition-colors text-sm font-semibold"
          >
            Gallery
          </Link>
        </div>

        {/* Replaced Join Now with Two CTAs */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+918104837019"
            className="hidden sm:flex px-4 py-2 border border-gray-250 hover:border-black hover:bg-gray-50 rounded-full text-xs font-bold text-gray-800 transition-all items-center gap-1.5 shadow-2xs"
          >
            <Phone className="w-3.5 h-3.5 text-indigo-600" />
            <span>Call Us</span>
          </a>

          <Link
            href="/#demo-form"
            className="px-5 py-2.5 rounded-full bg-black text-white hover:bg-indigo-600 text-xs sm:text-sm font-bold transition-all shadow-xs"
          >
            Book Demo
          </Link>
        </div>

      </div>
    </nav>
  );
}
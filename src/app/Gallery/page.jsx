"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Image as ImageIcon,
  Compass,
  ArrowRight,
  Phone,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Sparkles,
  Info,
  Users,
  Award
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Categories definition
const categories = ["All", "Classroom", "Events", "Study Sessions", "Seminars"];

// Gallery items data using existing assets
const galleryItems = [
  {
    id: 1,
    title: "Modern Interactive Classroom",
    category: "Classroom",
    image: "/home/banner.webp",
    desc: "Our well-ventilated, digital projector-equipped classrooms designed for optimal engagement and learning focus in Andheri East.",
    date: "August 2025"
  },
  {
    id: 2,
    title: "10th SSC Board Pre-exam Guidance",
    category: "Seminars",
    image: "/home/ritesh.webp",
    desc: "Special mentoring session by Prof. Ritesh Singh breaking down last-minute exam writing techniques for SSC board students.",
    date: "January 2026"
  },
  {
    id: 3,
    title: "Annual Student Outdoor Picnic",
    category: "Events",
    image: "/home/banner1.webp",
    desc: "Students enjoying team-building activities, games, and relaxation during our annual day-out recreation event.",
    date: "December 2025"
  },
  {
    id: 4,
    title: "Weekly Mock Test Environment",
    category: "Study Sessions",
    image: "/home/ssc.webp",
    desc: "Simulated exam conditions conducted every Sunday to build student speed, precision, and board exam confidence.",
    date: "February 2026"
  },
  {
    id: 5,
    title: "Felicitation Ceremony (Toppers)",
    category: "Events",
    image: "/home/mainmu.webp",
    desc: "Honoring our high-scoring board toppers with medals, trophies, and academic scholarships in the presence of parents.",
    date: "June 2025"
  },
  {
    id: 6,
    title: "Collaborative Study Circles",
    category: "Study Sessions",
    image: "/home/banner.webp",
    desc: "Small peer groups collaborating to solve complex calculations under the direct supervision of expert mathematics faculty.",
    date: "September 2025"
  },
  {
    id: 7,
    title: "Language & Grammar Masterclass",
    category: "Classroom",
    image: "/home/banner1.webp",
    desc: "Active communication and essay writing sessions focusing on securing top scoring in English and Hindi board papers.",
    date: "October 2025"
  },
  {
    id: 8,
    title: "HSC Commerce Career Seminar",
    category: "Seminars",
    image: "/home/ritesh.webp",
    desc: "Career guidance counseling focusing on degree choices (B.Com/BMS/BFM) and university preparation paths.",
    date: "November 2025"
  }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter items based on active category
  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxIndex]);

  const handleNext = () => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filteredItems.length));
  };

  const handlePrev = () => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 pb-20 overflow-x-hidden">
      
      {/* 1. HERO HEADER */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100 py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-white to-rose-50/40 -z-10" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 text-center relative">
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-full text-indigo-700 text-xs sm:text-sm font-semibold mb-6 shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-indigo-600 animate-pulse" />
            <span>Campus Life & Achievements</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl mx-auto"
          >
            A Glimpse Into Life At <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-indigo-900 to-indigo-600">Ritesh Academy</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed"
          >
            Explore our classroom interactions, weekly testing schedules, educational career seminars, picnics, and high-achiever felicitation programs.
          </motion.p>
        </div>
      </section>

      {/* 2. FILTER CONTROLS */}
      <section className="py-8 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative z-20">
        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 bg-white p-3 border border-gray-150 rounded-2xl sm:rounded-full shadow-xs max-w-3xl mx-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setLightboxIndex(null); // Reset lightbox on category switch
                }}
                className={`relative px-5 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive 
                    ? "bg-black text-white shadow-xs" 
                    : "text-gray-600 hover:text-black hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. DYNAMIC GALLERY GRID */}
      <section className="py-8 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-gray-150 rounded-[28px] overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col justify-between h-full"
              >
                <div className="relative h-56 w-full bg-gray-100 overflow-hidden cursor-pointer" onClick={() => setLightboxIndex(idx)}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  {/* Category tag */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs border border-gray-200/50 px-3 py-1 rounded-full text-[10px] font-bold text-gray-800 shadow-2xs">
                    {item.category}
                  </div>
                  
                  {/* Hover Overlay Icon */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-gray-900 shadow-sm transform scale-90 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Content details */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mt-1 leading-snug group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs mt-2 leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  <button 
                    onClick={() => setLightboxIndex(idx)}
                    className="w-full mt-4 py-2 border border-gray-200 hover:border-black hover:bg-black hover:text-white rounded-xl text-xs font-bold text-gray-700 transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    View Enlarged Photo
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state fallback */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-white border border-gray-150 rounded-[32px] max-w-xl mx-auto space-y-4 shadow-2xs">
            <ImageIcon className="w-12 h-12 text-gray-300 mx-auto" />
            <div>
              <h3 className="text-lg font-bold text-gray-900">No photos found</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">We will upload photos for the "{activeCategory}" category soon.</p>
            </div>
            <button
              onClick={() => setActiveCategory("All")}
              className="px-5 py-2 bg-black hover:bg-indigo-600 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
            >
              Show All Photos
            </button>
          </div>
        )}
      </section>

      {/* 4. LIGHTBOX MODAL OVERLAY */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Header controls inside lightbox */}
            <div className="flex justify-between items-center text-white w-full max-w-7xl mx-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold text-indigo-300 border border-white/10 uppercase">
                  {filteredItems[lightboxIndex].category}
                </span>
                <span className="text-xs text-gray-400">| {filteredItems[lightboxIndex].date}</span>
              </div>
              <button 
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer text-white"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main photo viewer and navigation */}
            <div className="relative flex-1 flex items-center justify-center max-w-5xl w-full mx-auto my-4" onClick={(e) => e.stopPropagation()}>
              
              {/* Left arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-0 sm:-left-16 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Central image wrapper */}
              <div className="relative max-h-[65vh] h-[500px] w-full sm:w-[80vw] flex items-center justify-center">
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full h-full max-h-[60vh] rounded-2xl overflow-hidden shadow-2xl border border-white/5"
                >
                  <Image
                    src={filteredItems[lightboxIndex].image}
                    alt={filteredItems[lightboxIndex].title}
                    fill
                    priority
                    className="object-contain"
                  />
                </motion.div>
              </div>

              {/* Right arrow */}
              <button
                onClick={handleNext}
                className="absolute right-0 sm:-right-16 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom info inside lightbox */}
            <div 
              className="bg-white/5 border border-white/10 rounded-2xl p-5 text-white max-w-3xl w-full mx-auto text-center space-y-2 backdrop-blur-md"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg sm:text-xl font-bold text-white leading-tight">
                {filteredItems[lightboxIndex].title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto">
                {filteredItems[lightboxIndex].desc}
              </p>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider pt-1">
                Photo {lightboxIndex + 1} of {filteredItems.length} in this view
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. CAMPUS HIGHLIGHTS BRIEF */}
      <section className="py-12 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="bg-white border border-gray-150 rounded-[32px] p-8 sm:p-10 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="space-y-3 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mt-0.5 shrink-0 border border-indigo-100">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-gray-900 text-sm">Interactive Study Methods</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Comfortable seating, clean boards, and digital projection setups foster focused, active participation.
              </p>
            </div>
          </div>

          <div className="space-y-3 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mt-0.5 shrink-0 border border-emerald-100">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-gray-900 text-sm">Toppers Celebrated</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Securing toppers guides motivation! We periodically honor successful board and university scholars.
              </p>
            </div>
          </div>

          <div className="space-y-3 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 mt-0.5 shrink-0 border border-amber-100">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-gray-900 text-sm">Extracurricular Development</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Sunday picnics, patriotic assemblies, and counseling talks maintain student growth balances.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="py-12 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="bg-black text-white rounded-[32px] p-8 sm:p-12 relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-indigo-950 to-indigo-900 opacity-90 -z-10" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left space-y-2">
              <span className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-indigo-300 text-xs font-bold uppercase tracking-wider">
                Visit Us Physically
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight pt-1">
                Want to see our campus live?
              </h2>
              <p className="text-indigo-200 text-xs sm:text-sm leading-relaxed">
                Connect directly with Prof. Ritesh Singh to set up a counselor meeting, visit our center in Andheri East, or claim 2 free trial batches.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <a
                href="https://wa.me/918104837019"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2.5 shadow-sm"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp Message
              </a>
              <Link
                href="/#demo-form"
                className="flex-1 sm:flex-none px-7 py-4 rounded-2xl bg-white hover:bg-indigo-50 text-black font-bold text-sm transition-colors flex items-center justify-center gap-2.5 shadow-sm text-center"
              >
                Book Demo Batches
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
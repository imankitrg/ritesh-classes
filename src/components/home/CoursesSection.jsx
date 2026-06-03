"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { courses1 } from "@/data/courses";
import {
  GraduationCap,
  BookOpen,
  Calculator,
  ArrowRight,
  CalendarDays,
  BadgeCheck,
  Check,
  Sparkles
} from "lucide-react";

// Icon mapping registry to map mock database keys to Lucide components
const iconMap = {
  graduation: GraduationCap,
  book: BookOpen,
  calculator: Calculator,
  arrowRight: ArrowRight,
  calendarDays: CalendarDays,
  badgeCheck: BadgeCheck,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};

export default function CoursesSection() {
  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">

        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-16 text-left">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full text-indigo-700 text-xs font-semibold mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
            <span>Academic Excellence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight"
          >
            Academic Programs <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-indigo-950 to-indigo-600">Designed For Every Student</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm sm:text-base mt-4 max-w-xl leading-relaxed"
          >
            Explore our curriculum structured for board preparations, Commerce, Science and university support classes.
          </motion.p>
        </div>

        {/* COURSES CARD GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {courses1.map((course, index) => {
            // Fix: Map icon strings correctly to SVG components
            const IconComponent = iconMap[course.icon] || GraduationCap;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="flex h-full flex-col overflow-hidden rounded-[32px] border border-gray-150 bg-white hover:border-indigo-150 hover:shadow-lg transition-all duration-300 flex-1 justify-between">
                  
                  {/* Image header */}
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-103"
                    />
                    
                    {/* Floating duration tag */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs border border-gray-200/50 px-3 py-1 rounded-full text-[10px] font-bold text-gray-800 shadow-2xs">
                      {course.duration}
                    </div>
                  </div>

                  {/* Card Content body */}
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    
                    {/* Header: Icon + Title */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 border border-indigo-100/50">
                        <IconComponent className="h-5.5 w-5.5 text-indigo-600" />
                      </div>

                      <div>
                        <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-indigo-600 transition-colors">
                          {course.title}
                        </h3>
                        <p className="mt-1 text-xs font-semibold text-gray-400">
                          {course.subjects}
                        </p>
                      </div>
                    </div>

                    {/* Description text */}
                    <p className="mt-4 text-sm leading-relaxed text-gray-500">
                      {course.description}
                    </p>

                    {/* Info key-value block */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 p-4 bg-gray-50/50 rounded-2xl border border-gray-100">
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-gray-100">
                          <CalendarDays className="h-4.5 w-4.5 text-gray-600" />
                        </div>
                        <div>
                          <p className="text-[9px] uppercase tracking-wider font-bold text-gray-400">Program Type</p>
                          <p className="font-bold text-gray-800 text-xs mt-0.5">{course.duration}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-gray-100">
                          <BadgeCheck className="h-4.5 w-4.5 text-gray-600" />
                        </div>
                        <div>
                          <p className="text-[9px] uppercase tracking-wider font-bold text-gray-400">Batch details</p>
                          <p className="font-bold text-gray-800 text-xs mt-0.5">{course.batches}</p>
                        </div>
                      </div>
                    </div>

                    {/* Features list bullet points */}
                    <div className="mt-6 space-y-3 pt-2 border-t border-gray-50">
                      <div className="flex items-center gap-2.5 text-xs text-gray-600">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>Weekly Topic-wise Test & Full-length Papers</span>
                      </div>

                      <div className="flex items-center gap-2.5 text-xs text-gray-600">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>Personal Mentoring overseen by Prof. Ritesh Singh</span>
                      </div>

                      <div className="flex items-center gap-2.5 text-xs text-gray-600">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>Dedicated Handout Booklets & Revision Sessions</span>
                      </div>
                    </div>

                    {/* Action buttons footer */}
                    <div className="mt-8 flex gap-3 pt-4 border-t border-gray-100">
                      <Link 
                        href="/Admission"
                        className="flex-1 py-3 px-4 rounded-xl bg-black hover:bg-indigo-600 text-white font-bold text-xs text-center transition-colors shadow-2xs cursor-pointer"
                      >
                        Enroll Now
                      </Link>

                      <Link 
                        href={`/Course/${course.slug}`}
                        className="flex-1 py-3 px-4 rounded-xl border border-gray-200 hover:border-black hover:bg-gray-50 text-gray-700 hover:text-black font-bold text-xs text-center transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        View Syllabus
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
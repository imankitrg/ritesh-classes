"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  GraduationCap, 
  Award, 
  CheckCircle,
  Users,
  Compass
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import CoursesSection from "@/components/home/CoursesSection";

export default function Course() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 pb-20 overflow-x-hidden">
      
      {/* 1. DEDICATED COURSES HERO BANNER */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100 py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-white to-amber-50/40 -z-10" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 text-center relative">
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-full text-indigo-700 text-xs sm:text-sm font-semibold mb-6 shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-indigo-600 animate-pulse" />
            <span>Curriculum & Batches</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Excellence In Board Exams <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-indigo-950 to-indigo-600">& Higher Education</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed"
          >
            Choose from our carefully structured academic streams designed to build conceptual depth, exam speed, and high scoring in Mumbai.
          </motion.p>
        </div>
      </section>

      {/* 2. DYNAMIC DIVISION CARDS */}
      <section className="py-12 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-150 rounded-[32px] p-8 shadow-2xs hover:shadow-sm transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-6">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-gray-900">Secondary Foundation</h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
              For 8th, 9th, and 10th SSC/CBSE students. Build robust fundamentals in Mathematics, Science, and English grammar.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-50 flex items-center gap-2 text-indigo-600 text-xs font-bold">
              <span>Weekly Practice Mock Exams</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-gray-150 rounded-[32px] p-8 shadow-2xs hover:shadow-sm transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-gray-900">Junior College (HSC)</h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
              Targeted boards guidance for FYJC and SYJC Commerce/Science standards. Focus on accountancy, math, and core physics.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-50 flex items-center gap-2 text-emerald-600 text-xs font-bold">
              <span>Board Presentation Guidance</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-gray-150 rounded-[32px] p-8 shadow-2xs hover:shadow-sm transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-gray-900">Degree College Support</h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
              Professional coaching and exam preparation support for B.Com, BMS, BAF, and other specialized degree courses.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-50 flex items-center gap-2 text-amber-600 text-xs font-bold">
              <span>Flexible Class Timings</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. CORE COURSES LISTING SECTION */}
      <section className="-mt-12">
        <CoursesSection />
      </section>

      {/* 4. METHODOLOGY HIGHLIGHT */}
      <section className="py-12 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="bg-white border border-gray-150 rounded-[32px] p-8 sm:p-10 lg:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-indigo-600 uppercase">Our Approach</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Why Our Curriculum Delivers Results</h2>
              <p className="text-gray-500 text-sm sm:text-base mt-4 leading-relaxed">
                Ritesh Academy is not just about rote learning. Our study environment combines disciplined schedules with empathetic mentorship to ensure every student feels supported.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-600">
                  <strong className="text-gray-900">Concept-First Teaching:</strong> We break complex theorems down to simple steps before introducing board equations.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-600">
                  <strong className="text-gray-900">Weekly Performance Tracker:</strong> Parents are updated immediately regarding test scores and class attendance details.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-600">
                  <strong className="text-gray-900">Limited Batch Sizes:</strong> Max 30 students per classroom to allow Prof. Ritesh Singh to monitor student progress personally.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center space-y-2">
              <Users className="w-8 h-8 text-indigo-600 mx-auto" />
              <h4 className="font-extrabold text-sm text-gray-900">Expert Faculties</h4>
              <p className="text-xs text-gray-400">Subject-specialist teachers for boards.</p>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center space-y-2">
              <Compass className="w-8 h-8 text-indigo-600 mx-auto" />
              <h4 className="font-extrabold text-sm text-gray-900">Career Mentoring</h4>
              <p className="text-xs text-gray-400">counseling support after SSC and HSC results.</p>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center space-y-2 sm:col-span-2">
              <Sparkles className="w-8 h-8 text-indigo-600 mx-auto" />
              <h4 className="font-extrabold text-sm text-gray-900">Free Trial Lectures</h4>
              <p className="text-xs text-gray-400">Enroll for 7 days free demo batches to witness our teaching style live.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION SECTION */}
      <section className="py-12 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="bg-black text-white rounded-[32px] p-8 sm:p-12 relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-indigo-950 to-indigo-900 opacity-90 -z-10" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left space-y-2">
              <span className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-indigo-300 text-xs font-bold uppercase tracking-wider">
                Start Your Journey
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight pt-1">
                Have questions about our syllabus?
              </h2>
              <p className="text-indigo-200 text-xs sm:text-sm leading-relaxed">
                Connect directly with Prof. Ritesh Singh to schedule a free counseling batch visit or select your trial lectures.
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
                Book Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
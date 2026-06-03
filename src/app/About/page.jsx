"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  BookOpen,
  HeartHandshake,
  Users,
  CheckCircle,
  Phone,
  ArrowRight,
  Clock,
  Target,
  Shield,
  Activity,
  Compass,
  Briefcase,
  Calendar,
  Sparkles,
  ChevronRight,
  TrendingUp,
  MapPin
} from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

// Stats configuration
const stats = [
  { label: "Years of Excellence", value: "3+", icon: <Calendar className="w-5 h-5 text-indigo-600" /> },
  { label: "Students Mentored", value: "500+", icon: <Users className="w-5 h-5 text-emerald-600" /> },
  { label: "Board Specialists", value: "100%", icon: <Award className="w-5 h-5 text-amber-600" /> },
  { label: "Satisfaction Rate", value: "98%", icon: <TrendingUp className="w-5 h-5 text-rose-600" /> }
];

// Core values configuration
const coreValues = [
  {
    title: "Concept-First Teaching",
    desc: "We prioritize conceptual clarity over rote memorization. Once concepts are clear, problem-solving becomes natural.",
    icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
    color: "from-indigo-500/10 to-blue-500/5 border-indigo-100/50"
  },
  {
    title: "Disciplined Atmosphere",
    desc: "A focused classroom and regular attendance rules ensure students maintain momentum and study consistency.",
    icon: <Shield className="w-6 h-6 text-emerald-600" />,
    color: "from-emerald-500/10 to-teal-500/5 border-emerald-100/50"
  },
  {
    title: "Personalized Counseling",
    desc: "We identify learning gaps early and provide personalized mentorship sessions to help weaker students catch up.",
    icon: <HeartHandshake className="w-6 h-6 text-rose-600" />,
    color: "from-rose-500/10 to-orange-500/5 border-rose-100/50"
  },
  {
    title: "Parent Transparency",
    desc: "Weekly reports, mock test evaluations, and regular parent-teacher meetings ensure shared alignment on progress.",
    icon: <Activity className="w-6 h-6 text-cyan-600" />,
    color: "from-cyan-500/10 to-sky-500/5 border-cyan-100/50"
  }
];

// Academic streams configuration
const academicStreams = [
  {
    title: "Secondary Foundation",
    grade: "Classes 8th - 10th (SSC & CBSE)",
    desc: "Building a rock-solid foundation in Mathematics, Science, and languages. Special exam strategy support for SSC Boards.",
    icon: <GraduationCap className="w-8 h-8 text-indigo-600" />
  },
  {
    title: "Junior College Support",
    grade: "Classes 11th & 12th (FYJC & SYJC)",
    desc: "Comprehensive coaching for Commerce & Science streams. Rigorous test series and syllabus coverage aligned with college boards.",
    icon: <Compass className="w-8 h-8 text-emerald-600" />
  },
  {
    title: "Degree College Programs",
    grade: "Undergrad Support (B.Com, BSc, BA)",
    desc: "Professional guidance for university examinations with practical sessions and structured preparation structures.",
    icon: <Briefcase className="w-8 h-8 text-amber-600" />
  }
];

// Teachers config (aligned with TeachersSection.jsx)
const teachers = [
  {
    name: "Ritesh Kumar",
    subject: "Mathematics",
    qualification: "M.Sc Maths, B.Ed",
    experience: "2 Years Experience",
    color: "border-indigo-100 bg-indigo-50/30"
  },
  {
    name: "Anjali Sharma",
    subject: "English",
    qualification: "BA English Hons",
    experience: "2 Years Experience",
    color: "border-emerald-100 bg-emerald-50/30"
  },
  {
    name: "Vikram Singh",
    subject: "Accountancy",
    qualification: "M.Com, B.Ed",
    experience: "2 Years Experience",
    color: "border-amber-100 bg-amber-50/30"
  },
  {
    name: "Pooja Verma",
    subject: "Hindi",
    qualification: "MA Hindi",
    experience: "2 Years Experience",
    color: "border-rose-100 bg-rose-50/30"
  }
];

// Milestones timeline
const milestones = [
  {
    year: "2024",
    title: "Humble Beginnings",
    desc: "Ritesh Academy started with high-school foundation classes, helping 8th-10th standard students master basic concepts."
  },
  {
    year: "2025",
    title: "Junior College Expansion",
    desc: "Launched specialised courses for commerce and science junior college (11th & 12th) with rigorous mock test models."
  },
  {
    year: "2026",
    title: "Degree Support & Tech Integration",
    desc: "Included university support options, Sunday masterclasses, and parent mobile report systems for complete academic tracking."
  }
];

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 pb-20 overflow-x-hidden">
      
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100 py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-white to-rose-50/40 -z-10" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 text-center relative">
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-full text-indigo-700 text-xs sm:text-sm font-semibold mb-6 shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-indigo-600 animate-pulse" />
            <span>Inspiring Excellence Since 2024</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Nurturing Knowledge, Character <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-indigo-900 to-indigo-600">And Student Success</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed"
          >
            Ritesh Classes has become a trusted name in Andheri East, Mumbai, by providing students with personalized attention, disciplined study environments, and complete syllabus command.
          </motion.p>
        </div>
      </section>

      {/* 2. STATS BANNER */}
      <section className="py-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white border border-gray-150 rounded-3xl p-6 sm:p-8 shadow-md grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="text-center space-y-2 flex flex-col items-center justify-center border-r last:border-0 border-gray-100/85"
            >
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 shadow-2xs">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">{stat.value}</h3>
                <p className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. FOUNDER & DIRECTOR SPOTLIGHT */}
      <section className="py-16 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Founder Portrait Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-white border border-gray-200 rounded-[32px] overflow-hidden shadow-xs relative group"
          >
            <div className="relative h-[420px] sm:h-[480px] w-full bg-gray-100">
              <Image
                src="/home/ritesh.webp"
                alt="Prof. Ritesh Singh"
                fill
                priority
                className="object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-xs font-semibold uppercase tracking-wider">
                Founder & Director
              </div>

              <div className="absolute bottom-8 left-8 text-white right-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                  Prof. Ritesh Singh
                </h2>
                <p className="text-indigo-300 text-sm font-semibold mt-1">
                  B.Com(F.M) | M.Com | B.Ed
                </p>
              </div>
            </div>
            
            {/* Quick stats / facts card bottom */}
            <div className="p-6 bg-indigo-950 text-white flex justify-between items-center">
              <div>
                <p className="text-[10px] text-indigo-300 uppercase tracking-widest font-bold">Focus Stream</p>
                <p className="text-sm font-semibold mt-0.5">SSC & Junior College Boards</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-indigo-300 uppercase tracking-widest font-bold">Experience</p>
                <p className="text-sm font-semibold mt-0.5">3+ Years of Mentorship</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Message & Vision */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-[0.2em] text-indigo-600 uppercase">
                Director's Message
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                Guiding Students to Absolute Conceptual Mastery
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              "At Ritesh Academy, we believe that education is not simply about scoring marks in exams. It is about laying strong, unbreakable academic foundations through logical concepts. Once a student starts asking the 'why' behind formulas and definitions, academic excellence is a natural result."
            </p>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Ritesh Classes was established in Andheri East to bridge the gap between classroom teaching and individual students' comprehension levels. We maintain strict batch size limits so our professors can sit with every student, analyze their mock test mistakes, and guide them with customized revision techniques.
            </p>

            {/* Vision items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5 shrink-0">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Personal Attention</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Limited seats per batch ensure customized study schedules.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5 shrink-0">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Weekly Testing Cycle</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Mock tests scheduled every Sunday with results shared with parents.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link
                href="/#demo-form"
                className="px-6 py-3.5 rounded-2xl bg-black text-white hover:bg-indigo-600 text-xs sm:text-sm font-bold transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
              >
                Book Free Demo Class
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+918104837019"
                className="px-6 py-3.5 rounded-2xl bg-white border border-gray-200 hover:bg-gray-50 text-xs sm:text-sm font-bold transition-colors inline-flex items-center gap-2 text-gray-900 cursor-pointer shadow-2xs"
              >
                <Phone className="w-4 h-4 text-indigo-600" />
                Contact Office
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. CORE PHILOSOPHY / PILLARS */}
      <section className="py-16 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.2em] text-indigo-600 uppercase">
              Our Core Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              The 4 Pillars of Ritesh Classes
            </h2>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              We design our academic schedules, revision batches, and test timelines around these fundamental philosophies to support student progress.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`p-6 sm:p-8 rounded-[32px] border bg-gradient-to-br ${val.color} flex flex-col justify-between hover:shadow-md transition-all h-full`}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-2xs">
                    {val.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{val.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. ACADEMIC STREAMS */}
      <section className="py-16 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-indigo-600 uppercase">
            Curriculum Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            Academic Streams We Coach
          </h2>
          <p className="text-gray-500 text-sm mt-3 leading-relaxed">
            Ritesh Academy provides comprehensive coaching support for school foundation levels, board levels, and college structures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {academicStreams.map((stream, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-150 rounded-[32px] p-8 shadow-xs flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shadow-2xs">
                  {stream.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{stream.title}</h3>
                  <p className="text-indigo-600 text-xs font-bold mt-1 uppercase tracking-wider">{stream.grade}</p>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{stream.desc}</p>
              </div>

              <div className="mt-8 pt-5 border-t border-gray-100 flex justify-between items-center">
                <Link
                  href="/Course"
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors inline-flex items-center gap-1"
                >
                  View Full Syllabus
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/Admission"
                  className="px-4 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-[11px] font-bold text-gray-700 transition-all"
                >
                  Apply Online
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. TIMELINE / MILESTONES */}
      <section className="py-16 bg-white border-t border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-indigo-600 uppercase">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Timeline of Milestones
            </h2>
            <p className="text-gray-500 text-sm mt-3">
              Trace how Ritesh Academy expanded its wings from elementary coaching to comprehensive board specialization in Mumbai.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Center line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform sm:-translate-x-1/2 z-0" />

            <div className="space-y-12 relative z-10">
              {milestones.map((ms, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`flex flex-col sm:flex-row items-start ${isEven ? "sm:flex-row-reverse" : ""} gap-6 sm:gap-0`}
                  >
                    {/* Content Block */}
                    <div className="w-full sm:w-1/2 flex justify-start sm:justify-center px-6">
                      <div className="bg-gray-50 border border-gray-200 rounded-[28px] p-6 max-w-sm shadow-2xs hover:shadow-sm transition-shadow">
                        <span className="inline-block px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-700 text-xs font-bold mb-3">
                          Year {ms.year}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900">{ms.title}</h3>
                        <p className="text-gray-500 text-xs sm:text-sm mt-2 leading-relaxed">{ms.desc}</p>
                      </div>
                    </div>

                    {/* Timeline Node Icon */}
                    <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center z-20 shadow-xs">
                      <div className="w-3.5 h-3.5 rounded-full bg-indigo-600 animate-pulse" />
                    </div>

                    {/* Spacer block for standard grid placement */}
                    <div className="hidden sm:block w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 7. EXPERT FACULTY GRID */}
      <section className="py-16 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-indigo-600 uppercase">
            Team & Mentors
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            Meet Our Subject Experts
          </h2>
          <p className="text-gray-500 text-sm mt-3 leading-relaxed">
            Our specialized professors bring standard concepts to life, maintaining Ritesh Classes' academic delivery model.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`border rounded-3xl p-6 flex flex-col justify-between hover:shadow-md transition-all ${teacher.color}`}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-2xs font-extrabold text-indigo-600 text-lg">
                  {teacher.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{teacher.name}</h3>
                  <span className="text-xs text-indigo-600 font-bold uppercase tracking-wide">{teacher.subject} Faculty</span>
                </div>
                <div className="space-y-1.5 pt-3 border-t border-gray-100/50">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <GraduationCap className="w-4 h-4 text-indigo-500 shrink-0" />
                    <span className="font-semibold text-gray-900">{teacher.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Briefcase className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{teacher.experience}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. ACTIONABLE CTA SECTION */}
      <section className="py-12 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="bg-black text-white rounded-[32px] p-8 sm:p-12 relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-indigo-950 to-indigo-900 opacity-90 -z-10" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left space-y-2">
              <span className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-indigo-300 text-xs font-bold uppercase tracking-wider">
                Enrollment Support
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight pt-1">
                Ready to secure your future?
              </h2>
              <p className="text-indigo-200 text-xs sm:text-sm leading-relaxed">
                Connect directly with Prof. Ritesh Singh to select batch timings, inquire about fee structures, or book 2 free demo lectures.
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
                WhatsApp Sir
              </a>
              <Link
                href="/Admission"
                className="flex-1 sm:flex-none px-7 py-4 rounded-2xl bg-white hover:bg-indigo-50 text-black font-bold text-sm transition-colors flex items-center justify-center gap-2.5 shadow-sm"
              >
                Apply for Admission
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
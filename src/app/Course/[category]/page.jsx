"use client";

import { use } from "react";
import { courses1 } from "@/data/courses";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  BookOpen, 
  Calculator, 
  Award, 
  CalendarDays, 
  BadgeCheck,
  CheckCircle,
  ArrowRight,
  Clock,
  Phone,
  BookMarked,
  Sparkles
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Icon mapping registry
const iconMap = {
  graduation: GraduationCap,
  book: BookOpen,
  calculator: Calculator,
  arrowRight: ArrowRight,
  calendarDays: CalendarDays,
  badgeCheck: BadgeCheck,
};

// Curated syllabus curriculum mappings
const syllabusDetails = {
  "8th-to-10th-foundation": [
    { 
      title: "Mathematics Foundation", 
      topics: ["Algebraic Equations & Identites", "Rational & Irrational Numbers", "Basic Triangles & Trigonometry", "Ratio & Proportion Concepts"] 
    },
    { 
      title: "Science & Technology", 
      topics: ["Fundamentals of Physics", "Basic Inorganic Chemistry", "Introduction to Plant & Animal Cells", "Environmental Resource Management"] 
    },
    { 
      title: "Language Skills", 
      topics: ["English Grammatical Syntax", "Creative Letter Writing", "Comprehensive Essay Formats", "Spoken Conversation Worksheets"] 
    }
  ],
  "10th-ssc-board": [
    { 
      title: "Mathematics (Algebra & Geometry)", 
      topics: ["Quadratic Equations", "Arithmetic Progression & Financial Planning", "Probability distributions", "Similarity & Pythagoras Theorem", "Coordinate Geometry & Circle Theorems"] 
    },
    { 
      title: "Science & Technology (Part I & II)", 
      topics: ["Gravitation & Laws of Motion", "Chemical Reactions & Metallurgy", "Lenses & Refraction of Light", "Heredity & Evolutionary Biology", "Life Processes in Living Organisms"] 
    },
    { 
      title: "Social Studies & Languages", 
      topics: ["Modern Indian History", "Political Science Foundations", "Map analysis & Geographic formations", "Hindi, English & Marathi grammar papers"] 
    }
  ],
  "fyjc-syjc": [
    { 
      title: "Book-keeping & Accountancy", 
      topics: ["Double Entry System Theory", "Subsidiary Books & Ledger posting", "Bank Reconciliation Statements", "Partnership Final Accounts", "Bill of Exchange & Valuation of Goodwill"] 
    },
    { 
      title: "Commerce & Management Studies", 
      topics: ["Principles of Management (OCM)", "Forms of Business Organisations", "Secretarial Practices (SP)", "Consumer Protection Acts"] 
    },
    { 
      title: "Mathematical Statistics", 
      topics: ["Mathematical Logic & Matrices", "Continuity & Differentiation", "Probability & Linear Regression", "Applications of Definite Integrals"] 
    }
  ],
  "degree-section": [
    { 
      title: "Advanced Financial Accounting", 
      topics: ["Final Accounts of Companies", "Amalgamation & Absorption of Companies", "Internal Reconstruction", "Cost Sheet & Profit Planning Analysis"] 
    },
    { 
      title: "Direct & Indirect Taxation", 
      topics: ["Basic Concepts of Income Tax", "Heads of Income (Salary, House Property, Capital Gains)", "GST Calculations & Billing", "Filing of Tax Returns"] 
    },
    { 
      title: "Management Tutorials", 
      topics: ["Strategic Operations & Logistics", "Human Resource Principles", "Corporate Communication Modules"] 
    }
  ]
};

export default function CoursePage({ params }) {
  // Unwrap parameters in Client Component
  const { category } = use(params);

  const course = courses1.find(
    (item) => item.slug === category
  );

  if (!course) {
    notFound();
  }

  // Resolve Icon
  const IconComponent = iconMap[course.icon] || GraduationCap;

  // Resolve syllabus list
  const syllabus = syllabusDetails[course.slug] || [
    { title: "Core Modules", topics: ["Syllabus overview", "Subject lectures", "Problem sheets"] }
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 pb-24 overflow-x-hidden">
      
      {/* 1. PREMIUM HEADER HERO BANNER */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100 py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-white to-rose-50/40 -z-10" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative">
          
          <Link
            href="/Course"
            className="inline-flex items-center gap-1 text-xs font-bold text-gray-400 hover:text-indigo-600 transition-colors mb-6 uppercase tracking-wider"
          >
            ← Back to All Courses
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mt-2">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full text-indigo-700 text-xs font-semibold shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
                <span>{course.duration}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                {course.title}
              </h1>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                {course.subjects} • Mapped to Mumbai board curriculums & university syllabus guidelines.
              </p>
            </div>

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 border border-indigo-100 shadow-xs self-start lg:self-center">
              <IconComponent className="h-8 w-8 text-indigo-600" />
            </div>
          </div>

        </div>
      </section>

      {/* 2. DUAL COLUMN DETAILS GRID */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT COLUMN: ABOUT & SYLLABUS */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview Card */}
            <div className="bg-white border border-gray-150 rounded-[32px] p-8 shadow-2xs">
              <h2 className="text-xl font-extrabold text-gray-900">About the Program</h2>
              <p className="text-gray-500 text-sm leading-relaxed mt-4">
                {course.description} Our course is structured systematically with dedicated lecture sequences that ensure core fundamentals are cleared first. Ritesh Classes places maximum importance on students solving problems independently while receiving personalized guidance.
              </p>

              {/* Highlights Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-start gap-2.5 text-xs text-gray-600">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Topic-wise notes & worksheets</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-gray-600">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Regular assessment reviews with parents</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-gray-600">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Interactive question bank reviews</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-gray-600">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Personal mock prelim series</span>
                </div>
              </div>
            </div>

            {/* Curriculum Syllabus Card */}
            <div className="bg-white border border-gray-150 rounded-[32px] p-8 shadow-2xs">
              <div className="flex items-center gap-2 mb-6">
                <BookMarked className="w-5 h-5 text-indigo-600" />
                <h2 className="text-xl font-extrabold text-gray-900">Course Syllabus & Structure</h2>
              </div>

              <div className="space-y-6">
                {syllabus.map((subj, idx) => (
                  <div 
                    key={idx}
                    className="p-5 bg-gray-50/50 border border-gray-100 rounded-2xl"
                  >
                    <h4 className="font-extrabold text-sm text-gray-900 border-b border-gray-100 pb-2.5">
                      {subj.title}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4">
                      {subj.topics.map((topic, keyIdx) => (
                        <div key={keyIdx} className="flex items-center gap-2 text-xs text-gray-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: STICKY BOOKING CARD */}
          <div className="space-y-6 lg:sticky lg:top-24">
            
            <div className="bg-white border border-gray-150 rounded-[32px] p-6 sm:p-8 shadow-2xs space-y-6">
              
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Batch Availability
                </span>
                <h3 className="text-lg font-extrabold text-gray-900 mt-1 leading-snug">
                  {course.batches}
                </h3>
              </div>

              {/* Quick Details panel */}
              <div className="space-y-4 p-4.5 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-3 text-xs text-gray-600">
                  <Clock className="w-4 h-4 text-indigo-500" />
                  <span>Morning & Evening batches available</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-600">
                  <BadgeCheck className="w-4 h-4 text-emerald-500" />
                  <span>Board pattern evaluation modules</span>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="space-y-3 pt-2">
                <Link
                  href="/#demo-form"
                  className="w-full py-4 bg-black hover:bg-indigo-600 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-2xs transition-colors cursor-pointer"
                >
                  Book 7 Days Demo Batch
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="tel:+918104837019"
                  className="w-full py-4 border border-gray-200 hover:border-black text-gray-700 hover:text-black font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer bg-white"
                >
                  <Phone className="w-4 h-4 text-indigo-600" />
                  Call Office
                </a>

                <a
                  href="https://wa.me/918104837019"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <FaWhatsapp className="text-base" />
                  WhatsApp Direct Inquiry
                </a>
              </div>

              <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                *Demo lectures require advance slot reservation. For physical address visits, see our Contact page guidelines.
              </p>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
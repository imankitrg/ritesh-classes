"use client";

import { motion } from "framer-motion";
// import {
//   GraduationCap,
//   BookOpen,
//   Calculator,
//   ArrowRight,
//   CalendarDays,
//   BadgeCheck,
// } from "lucide-react";

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
} from "lucide-react";

const iconMap = {
  graduation: GraduationCap,
  book: BookOpen,
  calculator: Calculator,
  arrowRight: ArrowRight,
  calendarDays: CalendarDays,
  badgeCheck: BadgeCheck,
};
const icon = iconMap[courses1.icon];


// const courses = [
//   {
//     title: "8th To 10th Foundation",
//     icon: <Icon className="w-8 h-8 text-indigo-600" />,
//     image: "/home/banner1.webp",
//     duration: "Academic Program",
//     subjects: "Maths, Science & English",
//     description:
//       "Strong academic foundation with weekly tests, mentorship, doubt solving, and board-focused preparation.",
//     batches: "Morning & Evening Batches",
//   },
//   {
//     title: "10th SSC Board",
//     icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
//     image: "/home/ssc.webp",
//     duration: "Board Focused",
//     subjects: "All SSC Subjects",
//     description:
//       "Complete SSC preparation with prelims, revision lectures, paper solving, and exam guidance.",
//     batches: "Limited Student Batch",
//   },
//   {
//     title: "FYJC & SYJC",
//     icon: <Calculator className="w-8 h-8 text-indigo-600" />,
//     image: "/home/ssc.webp",
//     duration: "Junior College",
//     subjects: "Commerce & Science",
//     description:
//       "Concept-based teaching with personal attention, regular tests, and career guidance sessions.",
//     batches: "Weekly Practice Sessions",
//   },
//   {
//     title: "Degree Section",
//     icon: <GraduationCap className="w-8 h-8 text-indigo-600" />,
//     image: "/home/mainmu.webp",
//     duration: "University Support",
//     subjects: "Focused Academic Guidance",
//     description:
//       "Professional mentorship and exam-oriented learning environment for degree students.",
//     batches: "Flexible Timings",
//   },
// ];

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
    y: 40,
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
    <section className="py-24 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* HEADER */}
        <div className="max-w-3xl mb-16">

          <p className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase mb-3">
            Courses For Every Student
          </p>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight"
          >
            Academic Programs Designed
            For Every Student
          </motion.h2>

        </div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {courses1.map((course, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">

                  {/* Icon + Title */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50">
                      {course.icon}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {course.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {course.subjects}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-sm leading-relaxed text-gray-600">
                    {course.description}
                  </p>

                  {/* Info */}
                  <div className="mt-6 space-y-4">

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100">
                        <CalendarDays className="h-5 w-5 text-gray-700" />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-500">
                          Program Type
                        </p>

                        <p className="font-medium text-gray-900">
                          {course.duration}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100">
                        <BadgeCheck className="h-5 w-5 text-gray-700" />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-500">
                          Batch Details
                        </p>

                        <p className="font-medium text-gray-900">
                          {course.batches}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Features */}
                  <div className="mt-6 space-y-3">

                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                      Weekly Tests & Assessments
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                      Personal Mentorship
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                      Study Materials & Notes
                    </div>

                  </div>

                  {/* CTA — pushed to bottom with mt-auto */}
                  <div className="mt-auto flex gap-3 pt-6">

                    <button className="flex-1 rounded-xl bg-black py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-600 active:scale-95">
                      <Link href="/Admission">
                        Enroll Now
                      </Link>
                    </button>

                    <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 transition-all duration-300 hover:border-gray-400 hover:bg-gray-100 active:scale-95">
                      <Link href={`/Course/${course.slug}`}>
                        View Details
                      </Link>
                    </button>

                  </div>

                </div>
              </div>
            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>
  );
}
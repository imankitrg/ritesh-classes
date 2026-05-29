"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Calculator,
  ArrowRight,
  CalendarDays,
  BadgeCheck,
} from "lucide-react";

import Image from "next/image";

const courses = [
  {
    title: "8th To 10th Foundation",
    icon: <GraduationCap className="w-8 h-8 text-black" />,
    image: "/home/banner1.webp",
    duration: "Academic Program",
    subjects: "Maths, Science & English",
    description:
      "Strong academic foundation with weekly tests, mentorship, doubt solving, and board-focused preparation.",
    batches: "Morning & Evening Batches",
    color: "bg-blue-50",
  },
  {
    title: "10th SSC Board",
    icon: <BookOpen className="w-8 h-8 text-black" />,
    image: "/home/ssc.webp",
    duration: "Board Focused",
    subjects: "All SSC Subjects",
    description:
      "Complete SSC preparation with prelims, revision lectures, paper solving, and exam guidance.",
    batches: "Limited Student Batch",
    color: "bg-emerald-50",
  },
  {
    title: "FYJC & SYJC",
    icon: <Calculator className="w-8 h-8 text-black" />,
    image: "/home/ssc.webp",
    duration: "Junior College",
    subjects: "Commerce & Science",
    description:
      "Concept-based teaching with personal attention, regular tests, and career guidance sessions.",
    batches: "Weekly Practice Sessions",
    color: "bg-purple-50",
  },
  {
    title: "Degree Section",
    icon: <GraduationCap className="w-8 h-8 text-black" />,
    image: "/home/mainmu.webp",
    duration: "University Support",
    subjects: "Focused Academic Guidance",
    description:
      "Professional mentorship and exam-oriented learning environment for degree students.",
    batches: "Flexible Timings",
    color: "bg-orange-50",
  },
];

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
        >

          {courses.map((course, index) => (

            <motion.div
              key={index}
              variants={itemVariants}
              className="group [perspective:2000px]"
            >

              {/* FLIP CARD */}
              <div className="relative h-[520px] w-full rounded-[32px] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* FRONT */}
                <div className="absolute inset-0 rounded-[32px] bg-gray-50 border border-gray-200 p-7 [backface-visibility:hidden] flex flex-col">

                  {/* TOP ICON */}
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-emerald-400 flex items-center justify-center mb-8">

                    <Image
                      src={course.image}
                      alt={course.title}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />

                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-semibold text-gray-900 leading-snug">
                    {course.title}
                  </h3>

                  {/* SUBJECT */}
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {course.subjects}
                  </p>

                  {/* INFO */}
                  <div className="space-y-4 mt-8">

                    <div className="flex items-start gap-3">

                      <div className="w-10 h-10 rounded-2xl bg-white border border-gray-200 flex items-center justify-center">
                        <CalendarDays className="w-5 h-5 text-gray-700" />
                      </div>

                      <div>
                        <p className="text-sm text-gray-500">
                          Duration
                        </p>

                        <p className="font-medium text-gray-900">
                          {course.duration}
                        </p>
                      </div>

                    </div>

                    <div className="flex items-start gap-3">

                      <div className="w-10 h-10 rounded-2xl bg-white border border-gray-200 flex items-center justify-center">
                        <BadgeCheck className="w-5 h-5 text-gray-700" />
                      </div>

                      <div>
                        <p className="text-sm text-gray-500">
                          Batch Type
                        </p>

                        <p className="font-medium text-gray-900">
                          {course.batches}
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* BUTTONS */}
                  <div className="mt-auto flex gap-3 pt-8">

                    <button className="flex-1 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-colors">
                      Enroll
                    </button>

                    <button className="flex-1 py-3 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium transition-colors">
                      Demo
                    </button>

                  </div>

                </div>

                {/* BACK */}
                <div className="absolute inset-0 rounded-[32px] bg-black text-white p-7 [transform:rotateY(180deg)] [backface-visibility:hidden] ">

                  {/* SMALL ICON */}
                  <div className="w-20 h-20 rounded-full overflow-hidden border border-black/10">

                    <Image
                      src={course.image}
                      alt={course.title}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />

                  </div>

                  {/* TITLE */}
                  <h3 className="text-3xl font-semibold mt-8 leading-tight">
                    {course.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-300 leading-relaxed mt-6">
                    {course.description}
                  </p>

                  {/* FEATURES */}
                  <div className="space-y-4 mt-8">

                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <p className="text-gray-200">
                        Weekly & Monthly Tests
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <p className="text-gray-200">
                        Personal Mentorship
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <p className="text-gray-200">
                        Revision & Extra Lectures
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <p className="text-gray-200">
                        Study Materials & Notes
                      </p>
                    </div>

                  </div>

                  {/* CTA */}
                  <button className="mt-auto w-full py-4 rounded-full bg-white text-black font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">

                    Learn More

                    <ArrowRight className="w-5 h-5" />

                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  BookOpen,
  FileText,
  Users,
  Trophy,
} from "lucide-react";

const facilities = [
  {
    id: 1,
    title: "Weekly Tests & Exam Preparation",
    description:
      "Students regularly appear for weekly tests, monthly exams, prelims, and revision sessions to build confidence and improve performance.",
    features: [
      "Weekly & Monthly Tests",
      "Prelims & Final Revision",
      "Exam-Oriented Practice",
    ],
    image: "/home/banner.webp",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "Personal Attention & Guidance",
    description:
      "We focus on every student personally. Weak students receive extra support, motivation, and guidance to improve steadily.",
    features: [
      "Small Batch Size",
      "Personal Attention",
      "Doubt Solving Sessions",
    ],
    image: "/home/banner.webp",
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "Free Notes & Study Materials",
    description:
      "Students receive handwritten notes, practice papers, important questions, and study resources for better preparation.",
    features: [
      "Free Notes & PDFs",
      "Practice Worksheets",
      "Important Question Sets",
    ],
    image: "/home/banner.webp",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "Activities, Motivation & Career Guidance",
    description:
      "Beyond academics, we organize guidance lectures, motivational sessions, functions, and student activities for overall growth.",
    features: [
      "Career Guidance",
      "Motivational Sessions",
      "Functions & Activities",
    ],
    image: "/home/banner.webp",
    icon: <Trophy className="w-5 h-5" />,
  },
];

export default function FacilitiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFacility = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % facilities.length);
  };

  const prevFacility = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + facilities.length) % facilities.length
    );
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <p className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase mb-3">
            Student Experience
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            More Than Just Coaching Classes
          </h2>

          <p className="text-lg text-gray-600 mt-5 leading-relaxed">
            We focus on academics, discipline, motivation, testing,
            and student growth to create a complete learning environment.
          </p>

        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side Image */}
          <div className="relative">

            <div className="relative h-[500px] rounded-[36px] overflow-hidden border border-gray-200 shadow-xl">

              {/* <AnimatePresence mode="wait"> */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={facilities[currentIndex].image}
                  alt={facilities[currentIndex].title}
                  fill
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 p-8 text-white">

                  <div className="flex items-center gap-3 mb-4">

                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      {facilities[currentIndex].icon}
                    </div>

                    <p className="text-sm tracking-widest uppercase text-gray-200">
                      Facility {currentIndex + 1}
                    </p>

                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold leading-tight max-w-lg">
                    {facilities[currentIndex].title}
                  </h3>

                </div>
              </motion.div>
              {/* </AnimatePresence> */}

            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">

              <button
                onClick={prevFacility}
                className="w-14 h-14 rounded-full border border-black flex items-center justify-center bg-white text-black transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextFacility}
                className="w-14 h-14 rounded-full border border-black flex items-center justify-center bg-white text-black transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

            </div>

          </div>

          {/* Right Side Content */}
          <div>

            {/* <AnimatePresence mode="wait"> */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >

              <div className="inline-flex px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-700 mb-6">
                Trusted Learning Environment
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {facilities[currentIndex].title}
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                {facilities[currentIndex].description}
              </p>

              {/* Feature Points */}
              <div className="space-y-5">

                {facilities[currentIndex].features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4"
                  >

                    <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>

                    <div>
                      <p className="text-lg font-semibold text-gray-900">
                        {feature}
                      </p>

                      <p className="text-gray-500 text-sm mt-1">
                        Helping students stay consistent and confident.
                      </p>
                    </div>

                  </div>
                ))}

              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 mt-12">

                <button className="px-7 py-4 rounded-full bg-black text-white font-medium hover:bg-red-700 hover:text-white transition-all">
                  Book Free Demo
                </button>

                <button className="px-7 py-4 rounded-full border border-yellow-400 text-yellow-400   font-medium hover:bg-yellow-400 hover:text-white transition-all">
                  Explore Courses
                </button>

              </div>

            </motion.div>
            {/* </AnimatePresence> */}

          </div>

        </div>

      </div>
    </section>
  );
}
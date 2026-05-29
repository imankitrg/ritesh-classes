"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Users,
  HeartHandshake,
  FileText,
  MessageCircleQuestion,
  GraduationCap,
  MonitorSmartphone,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    id: 0,
    title: "Free Books & Study Materials",
    description:
      "Students receive notes, practice papers, important questions, and study resources for better preparation and revision.",
    icon: <BookOpen className="w-10 h-10 text-orange-500 mb-4" />,
    color: "bg-orange-50 border-orange-100",
  },

  {
    id: 1,
    title: "Weekly, Monthly & Prelim Tests",
    description:
      "Regular test system including weekly tests, monthly exams, prelims, and revision assessments to improve performance.",
    icon: <FileText className="w-10 h-10 text-blue-500 mb-4" />,
    color: "bg-blue-50 border-blue-100",
  },

  {
    id: 2,
    title: "Personal Attention For Weak Students",
    description:
      "Extra support and personalized guidance for students who need improvement in specific subjects or concepts.",
    icon: <HeartHandshake className="w-10 h-10 text-pink-500 mb-4" />,
    color: "bg-pink-50 border-pink-100",
  },

  {
    id: 3,
    title: "Extra Lectures During Exams",
    description:
      "Special holiday, Sunday, and exam-time lectures to help students revise better and stay fully prepared.",
    icon: <GraduationCap className="w-10 h-10 text-purple-500 mb-4" />,
    color: "bg-purple-50 border-purple-100",
  },

  {
    id: 4,
    title: "Guidance & Motivation Sessions",
    description:
      "Career guidance, motivational lectures, and mentoring sessions to keep students focused and confident.",
    icon: <Users className="w-10 h-10 text-emerald-500 mb-4" />,
    color: "bg-emerald-50 border-emerald-100",
  },

  {
    id: 5,
    title: "Functions, Activities & Picnic",
    description:
      "Fun activities, celebrations, student events, and picnic experiences that make learning more enjoyable.",
    icon: <MonitorSmartphone className="w-10 h-10 text-cyan-500 mb-4" />,
    color: "bg-cyan-50 border-cyan-100",
  },

  {
    id: 6,
    title: "Experienced Subject Teachers",
    description:
      "Dedicated teachers for different subjects focused on concept clarity, discipline, and academic growth.",
    icon: (
      <MessageCircleQuestion className="w-10 h-10 text-indigo-500 mb-4" />
    ),
    color: "bg-indigo-50 border-indigo-100",
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(3);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + features.length) % features.length
    );
  };

  const getCardPosition = (index) => {
    const diff = index - activeIndex;

    let normalizedDiff = diff;

    if (diff > features.length / 2)
      normalizedDiff = diff - features.length;

    if (diff < -features.length / 2)
      normalizedDiff = diff + features.length;

    return normalizedDiff;
  };

  return (
    <section className="py-24 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.2em] text-gray-500 font-medium mb-4"
          >
            Student Experience
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight"
          >
            More Than Just Coaching Classes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            We focus on academics, mentorship, discipline, motivation,
            testing, and student growth to create a complete learning
            experience for every student.
          </motion.p>

        </div>

        {/* COVERFLOW */}
        <div className="relative h-[450px] md:h-[520px] flex justify-center items-center">

          <AnimatePresence initial={false}>

            {features.map((feature, index) => {

              const position = getCardPosition(index);

              const absPosition = Math.abs(position);

              if (absPosition > 2) return null;

              return (
                <motion.div
                  key={feature.id}
                  className="absolute w-[290px] md:w-[460px] h-[360px] md:h-[430px] cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    x: position * 210,
                    scale: 1 - absPosition * 0.15,
                    zIndex: 10 - absPosition,
                    opacity: 1 - absPosition * 0.3,
                    rotateY: position * -15,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  onClick={() => setActiveIndex(index)}
                  style={{ perspective: 1000 }}
                >

                  <div
                    className={`w-full h-full rounded-[32px] p-8 border shadow-xl flex flex-col justify-center items-center text-center bg-red transition-all duration-500 ${position === 0
                      ? feature.color
                      : "border-yellow-400"
                      }`}
                  >

                    {/* ICON */}
                    <div
                      className={`transition-all duration-500 ${position !== 0 && "grayscale opacity-50"
                        }`}
                    >
                      {feature.icon}
                    </div>

                    {/* TITLE */}
                    <h3
                      className={`text-2xl font-semibold mb-5 leading-snug transition-colors duration-500 ${position === 0
                        ? "text-gray-900"
                        : "text-gray-500"
                        }`}
                    >
                      {feature.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className={`text-base leading-relaxed transition-all duration-500 ${position === 0
                        ? "text-gray-700"
                        : "text-gray-400 opacity-0"
                        }`}
                    >
                      {feature.description}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </AnimatePresence>

          {/* CONTROLS */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full max-w-5xl flex justify-between px-4 pointer-events-none z-20">

            <button
              onClick={handlePrev}
              className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:bg-gray-50 pointer-events-auto border border-gray-100 transition-all active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:bg-gray-50 pointer-events-auto border border-gray-100 transition-all active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>

        </div>

        {/* INDICATORS */}
        <div className="flex justify-center gap-2 mt-10">

          {features.map((_, idx) => (

            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${activeIndex === idx
                ? "w-10 bg-black"
                : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />

          ))}

        </div>

      </div>

    </section>
  );
}
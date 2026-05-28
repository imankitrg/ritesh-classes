"use client";
import { motion } from "framer-motion";
import { Clock, BookOpen, IndianRupee, ArrowRight, GraduationCap, Calculator, Globe, Laptop } from "lucide-react";
import Image from "next/image";

const courses = [
  {
    title: "Class 6-8 Foundation",
    icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
    duration: "1 Year",
    subjects: "Maths, Science, English",
    fees: "₹1,500/mo",
    color: "bg-blue-50 border-blue-100"
  },
  {
    title: "Class 9-10 CBSE/State Board",
    icon: <BookOpen className="w-8 h-8 text-emerald-500" />,
    duration: "1 Year",
    subjects: "All Subjects",
    fees: "₹2,000/mo",
    color: "bg-emerald-50 border-emerald-100"
  },
  {
    title: "Class 11-12 Science/Commerce",
    icon: <Calculator className="w-8 h-8 text-purple-500" />,
    duration: "2 Years",
    subjects: "PCM/PCB or Commerce Core",
    fees: "₹3,000/mo",
    color: "bg-purple-50 border-purple-100"
  },
  {
    title: "JEE Preparation",
    icon: <Calculator className="w-8 h-8 text-orange-500" />,
    duration: "1-2 Years",
    subjects: "Physics, Chemistry, Maths",
    fees: "₹4,000/mo",
    color: "bg-orange-50 border-orange-100"
  },
  {
    title: "NEET Preparation",
    icon: <BookOpen className="w-8 h-8 text-rose-500" />,
    duration: "1-2 Years",
    subjects: "Physics, Chemistry, Biology",
    fees: "₹4,000/mo",
    color: "bg-rose-50 border-rose-100"
  },
  {
    title: "Spoken English",
    icon: <Globe className="w-8 h-8 text-indigo-500" />,
    duration: "3 Months",
    subjects: "Grammar, Speaking, Vocabulary",
    fees: "₹3,500 (Full)",
    color: "bg-indigo-50 border-indigo-100"
  },
  {
    title: "Computer Classes",
    icon: <Laptop className="w-8 h-8 text-cyan-500" />,
    duration: "6 Months",
    subjects: "Basic IT, Coding Intro",
    fees: "₹5,000 (Full)",
    color: "bg-cyan-50 border-cyan-100"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

export default function CoursesSection() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Courses / Classes Offered
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Empowering students with foundational knowledge and advanced test preparation.
          </motion.p>
        </div>

        {/* Course Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col h-full"
            >
              {/* Card Header (Icon/Placeholder) */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border ${course.color}`}>
                {course.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{course.title}</h3>

              {/* Card Details */}
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-start text-gray-600 text-sm">
                  <Clock className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium text-gray-900">Duration:</span> {course.duration}</span>
                </div>
                <div className="flex items-start text-gray-600 text-sm">
                  <BookOpen className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium text-gray-900">Subjects:</span> {course.subjects}</span>
                </div>
                <div className="flex items-start text-gray-600 text-sm">
                  <IndianRupee className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium text-gray-900">Fees:</span> {course.fees}</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-full flex justify-center items-center group transition-colors mt-auto">
                Enroll Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

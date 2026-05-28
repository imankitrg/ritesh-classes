"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Briefcase, BookOpen } from "lucide-react";

const teachers = [
  {
    id: 1,
    name: "Ritesh Kumar",
    subject: "Mathematics",
    qualification: "M.Sc Maths, B.Ed",
    experience: "12 Years Experience",
  },
  {
    id: 2,
    name: "Anjali Sharma",
    subject: "Physics",
    qualification: "M.Tech, IIT Delhi",
    experience: "8 Years Experience",
  },
  {
    id: 3,
    name: "Vikram Singh",
    subject: "Chemistry",
    qualification: "Ph.D. in Chemistry",
    experience: "15 Years Experience",
  },
  {
    id: 4,
    name: "Pooja Verma",
    subject: "Biology",
    qualification: "M.Sc Zoology",
    experience: "10 Years Experience",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

export default function TeachersSection() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Expert Faculty
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Learn from the best. Our experienced educators are the major factor behind our students' trust and success.
          </motion.p>
        </div>

        {/* Teachers Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teachers.map((teacher) => (
            <motion.div 
              key={teacher.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              {/* Teacher Photo */}
              <div className="relative w-full h-64 bg-gray-200 overflow-hidden">
                <Image
                  src="/classes.webp"
                  alt={`Photo of ${teacher.name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{teacher.name}</h3>
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium">
                    {teacher.subject} Expert
                  </span>
                </div>
              </div>

              {/* Teacher Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-start text-gray-600">
                  <GraduationCap className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-indigo-500" />
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Qualification</p>
                    <p className="font-medium text-gray-900">{teacher.qualification}</p>
                  </div>
                </div>
                
                <div className="flex items-start text-gray-600">
                  <Briefcase className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-emerald-500" />
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Experience</p>
                    <p className="font-medium text-gray-900">{teacher.experience}</p>
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

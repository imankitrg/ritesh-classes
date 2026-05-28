"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Eye, BookOpen } from "lucide-react";

const studyMaterials = [
  {
    id: 1,
    title: "Class 10 Physics Master Guide",
    description: "Complete theory, chapter-wise MCQs, and previous year questions.",
    tag: "Board Exams",
  },
  {
    id: 2,
    title: "JEE Advanced Practice Papers",
    description: "15 full-length mock tests with detailed video solutions.",
    tag: "JEE Target",
  },
  {
    id: 3,
    title: "NEET Biology NCERT Extract",
    description: "Line-by-line NCERT highlights and assertion-reasoning questions.",
    tag: "NEET Target",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export default function StudyBooks() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center"
            >
              <BookOpen className="w-8 h-8 text-indigo-600 mr-3" />
              Premium Study Material
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              Get access to our meticulously crafted study resources designed by top educators to guarantee your success.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
             <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-full font-medium transition-colors shadow-sm flex items-center">
                View All Resources
             </button>
          </motion.div>
        </div>

        {/* Books Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {studyMaterials.map((book) => (
            <motion.div 
              key={book.id}
              variants={itemVariants}
              className="group relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
            >
              {/* Book Cover (Using provided image as placeholder) */}
              <div className="relative w-[80%] mx-auto aspect-[3/4] rounded-lg overflow-hidden shadow-lg group-hover:-translate-y-4 group-hover:shadow-2xl transition-all duration-500 mb-8 border border-gray-200">
                <Image
                  src="/classes.webp"
                  alt={book.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-l-full shadow-md z-10">
                  {book.tag}
                </div>
                
                {/* Decorative spine gradient */}
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
              </div>

              {/* Content */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-indigo-600 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {book.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                  <button className="flex-1 py-3 px-4 bg-gray-900 hover:bg-indigo-600 text-white font-medium rounded-full flex justify-center items-center transition-colors">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </button>
                  <button className="w-12 h-12 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-full flex justify-center items-center transition-colors flex-shrink-0">
                    <Download className="w-5 h-5" />
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

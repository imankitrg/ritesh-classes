"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sunita Verma",
    role: "Parent of Class 10 Student",
    text: "The dedication of the teachers here is unmatched. They don't just teach the syllabus, they ensure the concepts are crystal clear. My son's confidence in Mathematics has improved drastically.",
    rating: 5,
    color: "bg-blue-50"
  },
  {
    id: 2,
    name: "Karan Desai",
    role: "JEE Aspirant",
    text: "The doubt-solving sessions and the quality of the mock tests gave me the exact simulation of the final exam. The study material is incredibly structured and to the point.",
    rating: 5,
    color: "bg-emerald-50"
  },
  {
    id: 3,
    name: "Meera Iyer",
    role: "Parent of Class 12 Student",
    text: "I was worried about board exams and competitive exams simultaneously. The way they manage the schedule and guide students for both is highly commendable.",
    rating: 5,
    color: "bg-purple-50"
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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export default function Testimonials() {
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
            Voices of Trust
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Don't just take our word for it. Hear what our students and their parents have to say about their journey with us.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`relative ${testimonial.color} rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100/50`}
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-12 h-12 text-gray-900" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-base leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-bold text-gray-800 shadow-sm border border-gray-200">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm font-medium text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { TrendingUp, Quote, Award } from "lucide-react";
import Image from "next/image";

const results = [
  {
    id: 1,
    name: "Aarav Sharma",
    achievement: "95% in Boards",
    improvement: "Improved from 75% in Pre-boards",
    testimonial: "The teachers here made complex concepts so easy to understand. I couldn't have done it without them!",
    course: "Class 10 CBSE",
    color: "bg-amber-50"
  },
  {
    id: 2,
    name: "Priya Patel",
    achievement: "JEE Main 99.2 %ile",
    improvement: "First Attempt Clear",
    testimonial: "The mock tests and continuous feedback sessions were the game changer for my JEE preparation.",
    course: "JEE Target",
    color: "bg-blue-50"
  },
  {
    id: 3,
    name: "Rohan Singh",
    achievement: "98% in Commerce",
    improvement: "State Rank 15",
    testimonial: "The accountancy and economics faculties are simply the best. They focus on practical understanding.",
    course: "Class 12 Commerce",
    color: "bg-green-50"
  },
  {
    id: 4,
    name: "Ananya Gupta",
    achievement: "NEET 680/720",
    improvement: "Improved from 450 score",
    testimonial: "Personalized attention and rigorous practice sheets helped me achieve my dream medical college.",
    course: "NEET Target",
    color: "bg-rose-50"
  },
  {
    id: 5,
    name: "Vikram Reddy",
    achievement: "96% in Boards",
    improvement: "Perfect 100 in Maths",
    testimonial: "Maths used to be my weakest subject, but the foundation classes completely changed my perspective.",
    course: "Class 10 ICSE",
    color: "bg-purple-50"
  }
];

export default function ResultsSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center"
            >
              <Award className="w-8 h-8 text-yellow-500 mr-3" />
              Our Results & Toppers
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              Consistent excellence year after year. Here are some of our proudest success stories.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex gap-2"
          >
             {/* Decorative arrows mimicking the wireframe */}
             <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 cursor-not-allowed">
                &larr;
             </div>
             <div className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center text-gray-900 cursor-pointer hover:bg-gray-50">
                &rarr;
             </div>
          </motion.div>
        </div>

        {/* Carousel / Horizontal Scroll */}
        <div className="relative">
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}">
            {results.map((result, index) => (
              <motion.div 
                key={result.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className={`snap-start shrink-0 w-[300px] md:w-[350px] ${result.color} rounded-3xl p-8 relative overflow-hidden`}
              >
                {/* Profile Placeholder */}
                <div className="w-20 h-20 bg-white/60 backdrop-blur-sm rounded-full mb-6 border-4 border-white shadow-sm flex items-center justify-center">
                  <span className="text-2xl text-gray-400 font-medium">
                    {result.name.charAt(0)}
                  </span>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{result.name}</h3>
                <p className="text-sm font-medium text-gray-500 mb-4">{result.course}</p>
                
                <div className="bg-white/60 rounded-xl p-4 mb-4 backdrop-blur-sm shadow-sm">
                  <p className="font-bold text-gray-900 text-lg mb-1">{result.achievement}</p>
                  <div className="flex items-center text-emerald-600 text-sm font-medium">
                    <TrendingUp className="w-4 h-4 mr-1.5" />
                    {result.improvement}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="relative mt-6 pt-4 border-t border-black/5">
                  <Quote className="w-6 h-6 text-black/10 absolute top-2 left-0 -translate-x-2 -translate-y-2 transform" />
                  <p className="text-gray-700 text-sm leading-relaxed relative z-10 italic">
                    "{result.testimonial}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
      
      {/* Custom styles for hiding scrollbar but allowing scroll */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

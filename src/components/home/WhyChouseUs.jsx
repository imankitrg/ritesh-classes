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
  ChevronRight
} from "lucide-react";

const features = [
  {
    id: 0,
    title: "Small Batch Size",
    description: "Ensures no student is left behind with optimized student-to-teacher ratio.",
    icon: <Users className="w-10 h-10 text-indigo-500 mb-4" />,
    color: "bg-indigo-50 border-indigo-100"
  },
  {
    id: 1,
    title: "Personal Attention",
    description: "Every student gets customized focus to identify and improve weak areas.",
    icon: <HeartHandshake className="w-10 h-10 text-pink-500 mb-4" />,
    color: "bg-pink-50 border-pink-100"
  },
  {
    id: 2,
    title: "Weekly Tests",
    description: "Regular assessments to track progress and build exam temperament.",
    icon: <FileText className="w-10 h-10 text-orange-500 mb-4" />,
    color: "bg-orange-50 border-orange-100"
  },
  {
    id: 3,
    title: "Doubt Solving",
    description: "Dedicated sessions to ensure 100% conceptual clarity for every student.",
    icon: <MessageCircleQuestion className="w-10 h-10 text-cyan-500 mb-4" />,
    color: "bg-cyan-50 border-cyan-100"
  },
  {
    id: 4,
    title: "Experienced Teachers",
    description: "Learn from top educators who are experts in their respective fields.",
    icon: <GraduationCap className="w-10 h-10 text-purple-500 mb-4" />,
    color: "bg-purple-50 border-purple-100"
  },
  {
    id: 5,
    title: "Online + Offline",
    description: "Flexible learning modes adapting to your convenience and safety.",
    icon: <MonitorSmartphone className="w-10 h-10 text-emerald-500 mb-4" />,
    color: "bg-emerald-50 border-emerald-100"
  },
  {
    id: 6,
    title: "Study Materials",
    description: "Comprehensive, updated, and high-quality notes and practice sheets.",
    icon: <BookOpen className="w-10 h-10 text-blue-500 mb-4" />,
    color: "bg-blue-50 border-blue-100"
  }
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(3); // Start in middle

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  // Helper to calculate card position relative to active index
  const getCardPosition = (index) => {
    const diff = index - activeIndex;
    
    // Normalize difference for circular array wrap-around
    let normalizedDiff = diff;
    if (diff > features.length / 2) normalizedDiff = diff - features.length;
    if (diff < -features.length / 2) normalizedDiff = diff + features.length;
    
    return normalizedDiff;
  };

  return (
    <section className="py-24 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            What parents mostly look for. We provide everything you need to succeed.
          </motion.p>
        </div>

        {/* Coverflow Carousel */}
        <div className="relative h-[450px] md:h-[500px] flex justify-center items-center">
          <AnimatePresence initial={false}>
            {features.map((feature, index) => {
              const position = getCardPosition(index);
              const absPosition = Math.abs(position);
              
              // Only render items close to the active index to save DOM nodes and keep it clean
              if (absPosition > 2) return null;

              return (
                <motion.div
                  key={feature.id}
                  className="absolute w-[280px] md:w-[350px] h-[350px] md:h-[400px] cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    x: position * 180, // Horizontal spread
                    scale: 1 - absPosition * 0.15, // Scale down the further away
                    zIndex: 10 - absPosition, // Center is highest
                    opacity: 1 - absPosition * 0.3, // Fade out the further away
                    rotateY: position * -15, // Slight 3D rotation
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onClick={() => setActiveIndex(index)}
                  style={{ perspective: 1000 }}
                >
                  <div className={`w-full h-full rounded-3xl p-8 border shadow-xl flex flex-col justify-center items-center text-center bg-white ${position === 0 ? feature.color : 'border-gray-200'} transition-colors duration-500`}>
                    <div className={`${position !== 0 && 'grayscale opacity-50'} transition-all duration-500`}>
                      {feature.icon}
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 ${position === 0 ? 'text-gray-900' : 'text-gray-500'} transition-colors duration-500`}>
                      {feature.title}
                    </h3>
                    <p className={`text-base ${position === 0 ? 'text-gray-700' : 'text-gray-400 opacity-0'} transition-all duration-500`}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full max-w-4xl flex justify-between px-4 pointer-events-none z-20">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:bg-gray-50 pointer-events-auto border border-gray-100 transition-transform active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:bg-gray-50 pointer-events-auto border border-gray-100 transition-transform active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {features.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 bg-gray-800' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

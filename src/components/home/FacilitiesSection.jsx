"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const facilities = [
  {
    id: 1,
    title: "Smart AC Classrooms",
    description: "Experience learning in a comfortable, fully air-conditioned environment equipped with interactive smart boards for immersive digital learning.",
    features: ["Fully Air-Conditioned", "Interactive Smart Boards", "Ergonomic Seating"],
    image: "/classes.webp"
  },
  {
    id: 2,
    title: "Comprehensive Digital App",
    description: "Never miss a beat with our dedicated mobile application. Access recorded lectures, track your progress, and stay updated anytime, anywhere.",
    features: ["Recorded Video Lectures", "24/7 App Access", "Performance Tracking"],
    image: "/classes.webp"
  },
  {
    id: 3,
    title: "Extensive Library & Study Material",
    description: "Gain access to a vast collection of reference books, premium PDFs, and dedicated reading rooms for focused self-study sessions.",
    features: ["Rich Library Collection", "Premium PDF Notes", "Quiet Reading Rooms"],
    image: "/classes.webp"
  },
  {
    id: 4,
    title: "Safe & Secure Campus",
    description: "Your safety is our priority. Our campus is fully equipped with 24/7 CCTV surveillance and provides ample parking space for students.",
    features: ["24/7 CCTV Surveillance", "Secure Entry System", "Ample Parking Space"],
    image: "/classes.webp"
  }
];

export default function FacilitiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFacility = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % facilities.length);
  };

  const prevFacility = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + facilities.length) % facilities.length);
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            World-Class Facilities
          </h2>
          <p className="text-lg text-gray-600">
            Whether you choose offline or online coaching, we provide the best infrastructure to support your learning journey.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Image Carousel */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-gray-100 mb-8 border border-gray-200">
              <AnimatePresence mode="wait">
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
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-black/10"></div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 w-full lg:justify-end justify-center">
              <button 
                onClick={prevFacility}
                className="w-14 h-14 rounded-full border-2 border-gray-800 flex items-center justify-center text-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
                aria-label="Previous Facility"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextFacility}
                className="w-14 h-14 rounded-full border-2 border-gray-800 flex items-center justify-center text-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
                aria-label="Next Facility"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right Side: Information Text */}
          <div className="w-full lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-xl"
              >
                <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-2 block">
                  Facility {currentIndex + 1} of {facilities.length}
                </span>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {facilities[currentIndex].title}
                </h3>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
                  {facilities[currentIndex].description}
                </p>
                
                <div className="space-y-4">
                  {facilities[currentIndex].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-800">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                      <span className="text-lg font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                   <button className="px-8 py-4 bg-gray-900 hover:bg-indigo-600 text-white font-medium rounded-full transition-colors shadow-lg shadow-gray-900/20">
                     Learn More
                   </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

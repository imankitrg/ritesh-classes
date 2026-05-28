"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Send, User, Phone, Book } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-indigo-600/20 blur-[100px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-pink-600/20 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl">
          
          {/* Left Side: Text and Form */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Book Your Free Demo Class Today
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Take the first step towards academic excellence. Fill out the form below and our team will get in touch with you shortly.
              </p>

              {/* Form */}
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Student's Name" 
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400 transition-all"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Book className="h-5 w-5 text-gray-400" />
                  </div>
                  <select 
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white transition-all appearance-none [&>option]:text-gray-900"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled className="text-gray-500">Select Class</option>
                    <option value="6-8">Class 6-8 Foundation</option>
                    <option value="9-10">Class 9-10 Boards</option>
                    <option value="11-12">Class 11-12 Science/Commerce</option>
                    <option value="jee-neet">JEE / NEET</option>
                  </select>
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400 transition-all"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl flex justify-center items-center group transition-colors shadow-lg"
                >
                  Book Demo Now
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>

          {/* Right Side: Image Placeholder */}
          <div className="flex-1 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
            >
              <Image
                src="/classes.webp"
                alt="Students in a classroom"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

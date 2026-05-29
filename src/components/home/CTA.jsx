"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Send, User, Phone, Book, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[32px] border border-gray-200 bg-gray-50">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 lg:p-14 flex flex-col justify-center"
          >

            <div className="inline-flex w-fit px-4 py-2 rounded-full bg-black text-white text-sm font-medium mb-6">
              7 Days Free Demo
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Book Your Free Demo Class
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mt-5 max-w-xl">
              Experience quality teaching, expert guidance, and a focused
              learning environment designed for better academic performance.
            </p>

            {/* FEATURES */}
            <div className="flex flex-wrap gap-3 mt-8">

              <div className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700">
                SSC Board
              </div>

              <div className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700">
                HSC Classes
              </div>

              <div className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700">
                Degree Support
              </div>

            </div>

            {/* FORM */}
            <form
              className="space-y-5 mt-10"
              onSubmit={(e) => e.preventDefault()}
            >

              {/* NAME */}
              <div className="relative">

                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>

                <input
                  type="text"
                  placeholder="Student Name"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black text-gray-900 placeholder-gray-400 transition-all"
                  required
                />
              </div>

              {/* CLASS */}
              <div className="relative">

                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Book className="h-5 w-5 text-gray-400" />
                </div>

                <select
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black text-gray-900 transition-all appearance-none"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Class
                  </option>

                  <option value="ssc">
                    10th SSC Board
                  </option>

                  <option value="fyjc">
                    FYJC
                  </option>

                  <option value="syjc">
                    SYJC
                  </option>

                  <option value="degree">
                    Degree Section
                  </option>

                </select>
              </div>

              {/* PHONE */}
              <div className="relative">

                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black text-gray-900 placeholder-gray-400 transition-all"
                  required
                />
              </div>
              {/* email */}
              <div className="relative">

                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black text-gray-900 placeholder-gray-400 transition-all"
                  required
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full py-4 bg-black hover:bg-gray-800 text-white font-semibold rounded-2xl flex justify-center items-center group transition-all"
              >
                Book Demo Class

                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

            </form>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[400px] lg:min-h-full"
          >

            <Image
              src="/home/banner.webp"
              alt="Demo Class"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Floating Card */}
            {/* skip for now */}
            {/* <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-3xl p-6 border border-white/40">

              <h3 className="text-2xl font-semibold text-gray-900">
                Start Your Learning Journey
              </h3>

              <p className="text-gray-600 mt-2 leading-relaxed">
                Join thousands of students learning with expert teachers
                and structured guidance.
              </p>

            </div> */}

          </motion.div>

        </div>
      </div>
    </section>
  );
}
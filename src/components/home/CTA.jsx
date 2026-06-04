"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Send, User, Phone, Book, Mail, CheckCircle } from "lucide-react";

export default function CTA() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !course || !phone.trim() || !email.trim()) {
      setErrorMessage("All fields are required.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/demo`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            course,
            phone,
            email,
          }),
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setName("");
        setCourse("");
        setPhone("");
        setEmail("");
      } else {
        setErrorMessage(result.message || "Failed to submit demo request.");
      }
    } catch (err) {
      console.error("Demo submission error:", err);
      setErrorMessage("Unable to connect to the server. Please check if backend is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="demo-form" className="py-20 bg-white">
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

            {/* FORM / SUCCESS MESSAGE */}
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  className="space-y-5 mt-10"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* NAME */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Student Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black text-gray-900 transition-all appearance-none"
                      required
                    >
                      <option value="" disabled>
                        Select Class
                      </option>
                      <option value="10th SSC Board">
                        10th SSC Board
                      </option>
                      <option value="FYJC Class 11">
                        FYJC (Class 11th)
                      </option>
                      <option value="SYJC Class 12 Boards">
                        SYJC (Class 12th Boards)
                      </option>
                      <option value="Degree Section (BCom/BSc/BA)">
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
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black text-gray-900 placeholder-gray-400 transition-all"
                      required
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black text-gray-900 placeholder-gray-400 transition-all"
                      required
                    />
                  </div>

                  {/* Error Notification */}
                  {errorMessage && (
                    <p className="text-red-500 text-xs font-semibold mt-1 bg-red-50 border border-red-100 rounded-xl p-3 text-center">
                      {errorMessage}
                    </p>
                  )}

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-black hover:bg-indigo-600 text-white font-semibold rounded-2xl flex justify-center items-center group transition-all disabled:bg-gray-400 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Book Demo Class
                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-xs">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Demo Scheduled!</h3>
                    <p className="text-gray-600 text-sm mt-2 max-w-sm">
                      We have received your demo request details. Our counselor will contact you shortly to coordinate your trial schedule.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-white hover:bg-gray-50 text-gray-800 text-xs font-bold rounded-xl transition-colors cursor-pointer border border-gray-300"
                  >
                    Book Another Trial
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
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
          </motion.div>

        </div>
      </div>
    </section>
  );
}
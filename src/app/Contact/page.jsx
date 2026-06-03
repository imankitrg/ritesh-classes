"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Check,
  MessageSquare,
  Compass,
  ExternalLink,
  ChevronDown,
  Info,
  CheckCircle,
  HelpCircle
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

// Contact details cards configuration
const contactCards = [
  {
    title: "Call Direct",
    description: "Speak directly with Prof. Ritesh Singh for academic queries.",
    actionText: "+91 81048 37019",
    actionLink: "tel:+918104837019",
    icon: <Phone className="w-6 h-6 text-indigo-600" />,
    subtext: "Alternative: +91 98217 67980",
    bg: "bg-blue-50/50 hover:bg-blue-50 border-blue-100"
  },
  {
    title: "WhatsApp Chat",
    description: "Get instant replies for admission schedules and fee structures.",
    actionText: "Chat on WhatsApp",
    actionLink: "https://wa.me/918104837019",
    icon: <FaWhatsapp className="w-6 h-6 text-emerald-600" />,
    subtext: "Available 24x7 for quick support",
    bg: "bg-emerald-50/50 hover:bg-emerald-50 border-emerald-100"
  },
  {
    title: "Email Support",
    description: "Write to us for business inquiries, admissions, or test details.",
    actionText: "riteshacademy920@gmail.com",
    actionLink: "mailto:riteshacademy920@gmail.com",
    icon: <Mail className="w-6 h-6 text-indigo-600" />,
    subtext: "We respond within 24 hours",
    bg: "bg-purple-50/50 hover:bg-purple-50 border-purple-100"
  },
  {
    title: "Office Location",
    description: "Visit us at our central coaching institute in Andheri East.",
    actionText: "View on Google Maps",
    actionLink: "https://www.google.com/maps/place/Ritesh+Academy/@19.1333707,72.8732921,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b7671dff8d49:0xc07641e89050fa4c!8m2!3d19.1333707!4d72.8732921!16s%2Fg%2F11mst_hfxy?entry=ttu",
    icon: <MapPin className="w-6 h-6 text-rose-600" />,
    subtext: "Room No. 1, Mahakali Caves Road, Mumbai",
    bg: "bg-rose-50/50 hover:bg-rose-50 border-rose-100"
  }
];

// FAQs about admission queries
const contactFaqs = [
  {
    question: "What are the office timings at Ritesh Academy?",
    answer: "Our physical institute is open from Monday to Sunday from 8:00 AM to 9:00 PM. Parents are welcome to visit for demo class bookings and course counseling."
  },
  {
    question: "Do you offer demo classes before enrollment?",
    answer: "Yes, we provide 2 free demo classes for all streams (8th to 10th SSC/CBSE, Junior College, and Degree courses) so students can experience our teaching quality firsthand."
  },
  {
    question: "How do I reach the Andheri East branch?",
    answer: "We are located at Mahakali Caves Road, Andheri East, Mumbai, near the Bowlekar Ground and opposite the Sai Baba Mandir. It is easily accessible by auto or bus from Andheri East Railway Station (approx. 10-12 mins)."
  },
  {
    question: "Whom should I contact in case of doubts regarding fees?",
    answer: "You can call us directly at +91 81048 37019 or WhatsApp us. We will assist you with batch timings, fee packages, and available installment options."
  }
];

export default function Contact() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Select a Course",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ State
  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  // Validation
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required.";
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
    } else if (!/^\+?[0-9]{10,12}$/.test(formData.phone.trim())) {
      tempErrors.phone = "Enter a valid 10-digit phone number.";
    }
    if (formData.course === "Select a Course") {
      tempErrors.course = "Please select a course stream.";
    }
    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "Select a Course",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 pb-20">
      
      {/* HERO HEADER */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100 py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-white to-rose-50/40 -z-10" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 text-center relative">
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-full text-indigo-700 text-sm font-semibold mb-6 shadow-xs"
          >
            <Compass className="w-4 h-4 text-indigo-600" />
            <span>Open Admissions 2026-27</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Connect With <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-indigo-900 to-indigo-600">Ritesh Academy</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed"
          >
            Have questions about admission processes, mock test schedules, or syllabus breakdowns? Our staff is here to help you guide your child.
          </motion.p>
        </div>
      </section>

      {/* CORE CONTACT CARDS GRID */}
      <section className="py-12 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className={`border rounded-3xl p-6 flex flex-col justify-between transition-all shadow-xs hover:shadow-md ${card.bg}`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-xs mb-5">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-2 leading-relaxed">{card.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <a 
                  href={card.actionLink}
                  target={card.actionLink.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="text-sm font-extrabold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 transition-colors"
                >
                  {card.actionText}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <p className="text-[10px] text-gray-400 mt-1 font-semibold">{card.subtext}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ENQUIRY FORM & LOCATION SECTION */}
      <section className="py-12 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Enquiry Form */}
          <div className="lg:col-span-7 bg-white border border-gray-100 rounded-[32px] p-8 sm:p-10 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-indigo-600 uppercase">
                Student Enquiry
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
                Send Admission Inquiry
              </h2>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                Fill out the registration details below. Prof. Ritesh Singh or our counselors will get in touch with you shortly to schedule your demo class.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit} 
                  className="space-y-5 mt-8"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full bg-gray-50 border rounded-2xl py-3.5 px-4 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-indigo-500/20 ${
                          errors.name ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-gray-200 focus:border-indigo-500"
                        }`}
                      />
                      {errors.name && <p className="text-red-500 text-[10px] font-semibold mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 9821767980"
                        className={`w-full bg-gray-50 border rounded-2xl py-3.5 px-4 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-indigo-500/20 ${
                          errors.phone ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-gray-200 focus:border-indigo-500"
                        }`}
                      />
                      {errors.phone && <p className="text-red-500 text-[10px] font-semibold mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Email Address (Optional)</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Rahul.sharma@gmail.com"
                        className="w-full bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 rounded-2xl py-3.5 px-4 text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Course select */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Course / Stream</label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        className={`w-full bg-gray-50 border rounded-2xl py-3.5 px-4 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-indigo-500/20 ${
                          errors.course ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-gray-200 focus:border-indigo-500"
                        }`}
                      >
                        <option disabled value="Select a Course">Select a Course</option>
                        <option value="Class 8-10 SSC/CBSE">Class 8th - 10th Foundation</option>
                        <option value="FYJC Class 11 Science/Comm">FYJC Class 11th (Junior College)</option>
                        <option value="SYJC Class 12 Boards">SYJC Class 12th Boards</option>
                        <option value="JEE Main/Advanced Prep">JEE Target Prep</option>
                        <option value="NEET Medical Prep">NEET Medical Target</option>
                        <option value="Undergraduate/Postgraduate">Degree/Graduate Support</option>
                      </select>
                      {errors.course && <p className="text-red-500 text-[10px] font-semibold mt-1">{errors.course}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Your Message / Query</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your doubts, class timing preferences, or study requirements here..."
                      className={`w-full bg-gray-50 border rounded-2xl py-3.5 px-4 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-indigo-500/20 resize-none ${
                        errors.message ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-gray-200 focus:border-indigo-500"
                      }`}
                    />
                    {errors.message && <p className="text-red-500 text-[10px] font-semibold mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black hover:bg-indigo-600 text-white rounded-2xl py-4 font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:bg-gray-400"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Enquiry Details
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16 px-4 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-xs">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Enquiry Submitted!</h3>
                    <p className="text-gray-500 text-sm mt-1 max-w-sm">
                      Thank you for contacting Ritesh Academy. Prof. Ritesh Singh will contact you within the next few hours to discuss batch admissions.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    Send Another Enquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Location Panel */}
          <div className="lg:col-span-5 bg-white border border-gray-100 rounded-[32px] p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Visit Our Academy</span>
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900 mt-2">
                Physical Office & Location
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-3 leading-relaxed">
                Ritesh Academy is situated in Andheri East. It is very close to MMRDA Colony and Mahakali Caves.
              </p>

              {/* Timing details */}
              <div className="mt-6 space-y-3 text-xs sm:text-sm text-gray-700">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-semibold text-gray-500">Monday - Friday</span>
                  <span className="font-bold text-gray-900">8:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-semibold text-gray-500">Saturday</span>
                  <span className="font-bold text-gray-900">8:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="font-semibold text-gray-500">Sunday</span>
                  <span className="font-bold text-indigo-600 flex items-center gap-1">
                    <Info className="w-3.5 h-3.5" />
                    Open (Demo Batches)
                  </span>
                </div>
              </div>
            </div>

            {/* Map Preview image */}
            <div className="my-6 relative rounded-2xl overflow-hidden border border-gray-200 group">
              <a
                href="https://www.google.com/maps/place/Ritesh+Academy/@19.1333707,72.8732921,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b7671dff8d49:0xc07641e89050fa4c!8m2!3d19.1333707!4d72.8732921!16s%2Fg%2F11mst_hfxy?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-44 relative"
              >
                <Image
                  src="/ramap.webp"
                  alt="Ritesh Academy Map Locator"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
              </a>
            </div>

            <div>
              <a
                href="https://www.google.com/maps/place/Ritesh+Academy/@19.1333707,72.8732921,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b7671dff8d49:0xc07641e89050fa4c!8m2!3d19.1333707!4d72.8732921!16s%2Fg%2F11mst_hfxy?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-900 rounded-2xl py-3.5 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all shadow-xs"
              >
                Open Google Maps Navigation
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-[10px] text-gray-400 text-center mt-2 font-medium">
                Map location matches Room No. 1, Mahakali Caves Road, Andheri East.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* QUICK CONNECT HOTLINES */}
      <section className="py-12 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="bg-black text-white rounded-[32px] p-8 sm:p-12 relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-indigo-950 to-indigo-900 opacity-90 -z-10" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left space-y-2">
              <span className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-indigo-300 text-xs font-bold uppercase tracking-wider">
                Instant Response Hotlines
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight pt-1">
                Need Academic Mentorship Urgently?
              </h2>
              <p className="text-indigo-200 text-xs sm:text-sm leading-relaxed">
                Connect directly on WhatsApp or Call our active phone lines to discuss stream changes, exam dates, or personal coaching batches.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <a
                href="https://wa.me/918104837019"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2.5 shadow-sm"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp Message
              </a>
              <a
                href="tel:+918104837019"
                className="flex-1 sm:flex-none px-7 py-4 rounded-2xl bg-white hover:bg-indigo-50 text-black font-bold text-sm transition-colors flex items-center justify-center gap-2.5 shadow-sm"
              >
                <Phone className="w-5 h-5" />
                Call Prof. Ritesh
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS ACCORDIONS */}
      <section className="py-12 max-w-4xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="text-center mb-12">
          <HelpCircle className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
          <h2 className="text-3xl font-extrabold text-gray-900">
            Admissions & Booking FAQs
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Read common clarifications regarding demo availability, batch schedules, fees, and location maps.
          </p>
        </div>

        <div className="space-y-4">
          {contactFaqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div 
                key={idx}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 hover:bg-gray-50/50 transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden bg-gray-50/50"
                    >
                      <p className="p-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-200">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
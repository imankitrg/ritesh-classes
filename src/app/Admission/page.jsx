"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  Phone,
  Send,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  Info,
  Users,
  Award,
  FileText,
  Clock,
  ArrowRight,
  ShieldCheck,
  Check
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Step-by-step coaching registration process configuration
const admissionSteps = [
  {
    step: "01",
    title: "Fill Inquiry Form",
    desc: "Submit your basic academic details and select your course stream online.",
    color: "bg-indigo-50 border-indigo-100 text-indigo-700"
  },
  {
    step: "02",
    title: "Expert Counseling",
    desc: "Attend a guidance session with Prof. Ritesh Singh to discuss the curriculum and schedules.",
    color: "bg-blue-50 border-blue-100 text-blue-700"
  },
  {
    step: "03",
    title: "Free Demo Classes",
    desc: "Experience our teaching quality firsthand with 2 complimentary demo lectures.",
    color: "bg-purple-50 border-purple-100 text-purple-700"
  },
  {
    step: "04",
    title: "Confirm Admission",
    desc: "Select your batch timings, complete document submission, and secure your seat.",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700"
  }
];

// FAQs about admission queries
const admissionFaqs = [
  {
    question: "What courses are open for admission right now?",
    answer: "We are currently accepting admissions for the 2026-27 academic session for: 8th to 10th Foundation (SSC/CBSE), 10th SSC Board Intensive, FYJC & SYJC (11th & 12th Commerce & Science), and University Degree Courses."
  },
  {
    question: "Do you offer flexible batch timings for college students?",
    answer: "Yes, we run multiple batches (Morning, Afternoon, and Late Evening) to ensure that college lectures and coaching sessions do not overlap. Students can request batch adjustments based on their college timings."
  },
  {
    question: "Are there installment options available for the course fee?",
    answer: "Absolutely. Ritesh Classes offers flexible payment structures. Fees can be paid in easy monthly installments. Parents can discuss specific financial packages with our office team."
  },
  {
    question: "Can my child take a scholarship or merit discount test?",
    answer: "Yes, we conduct periodic Scholarship Cum Admission Tests (SCAT). Based on the score or their school/board exam performance, students can secure up to 30% scholarship on their annual tuition fees."
  },
  {
    question: "What is the student-to-teacher ratio at Ritesh Classes?",
    answer: "To ensure personal attention, we limit our batch sizes to 25-30 students. This allows our professors to monitor each student's progress and answer doubts individually."
  }
];

export default function Admission() {
  // Form State
  const [formData, setFormData] = useState({
    studentName: "",
    studentPhone: "",
    whatsappPhone: "",
    parentName: "",
    parentPhone: "",
    email: "",
    course: "Select a Course",
    board: "Select Board",
    batch: "Select Batch",
    mode: "Offline Classroom",
    message: ""
  });
  const [sameAsMobile, setSameAsMobile] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ State
  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  // Auto fill WhatsApp number if checkbox checked
  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setSameAsMobile(checked);
    if (checked) {
      setFormData((prev) => ({ ...prev, whatsappPhone: prev.studentPhone }));
      if (errors.whatsappPhone) {
        setErrors((prev) => ({ ...prev, whatsappPhone: "" }));
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === "studentPhone" && sameAsMobile) {
        updated.whatsappPhone = value;
      }
      return updated;
    });

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (name === "studentPhone" && errors.whatsappPhone && sameAsMobile) {
      setErrors((prev) => ({ ...prev, whatsappPhone: "" }));
    }
  };

  // Validation
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.studentName.trim()) tempErrors.studentName = "Student name is required.";
    if (!formData.studentPhone.trim()) {
      tempErrors.studentPhone = "Student phone number is required.";
    } else if (!/^\+?[0-9]{10,12}$/.test(formData.studentPhone.trim())) {
      tempErrors.studentPhone = "Enter a valid 10-digit phone number.";
    }

    if (!sameAsMobile) {
      if (!formData.whatsappPhone.trim()) {
        tempErrors.whatsappPhone = "WhatsApp number is required.";
      } else if (!/^\+?[0-9]{10,12}$/.test(formData.whatsappPhone.trim())) {
        tempErrors.whatsappPhone = "Enter a valid WhatsApp number.";
      }
    }

    if (!formData.parentName.trim()) tempErrors.parentName = "Parent name is required.";
    if (!formData.parentPhone.trim()) {
      tempErrors.parentPhone = "Parent contact number is required.";
    } else if (!/^\+?[0-9]{10,12}$/.test(formData.parentPhone.trim())) {
      tempErrors.parentPhone = "Enter a valid 10-digit phone number.";
    }

    if (formData.course === "Select a Course") {
      tempErrors.course = "Please select a target course.";
    }
    if (formData.board === "Select Board") {
      tempErrors.board = "Please select school board / university.";
    }
    if (formData.batch === "Select Batch") {
      tempErrors.batch = "Please select batch preference.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admissions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );


      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setFormData({
          studentName: "",
          studentPhone: "",
          whatsappPhone: "",
          parentName: "",
          parentPhone: "",
          email: "",
          course: "Select a Course",
          board: "Select Board",
          batch: "Select Batch",
          mode: "Offline Classroom",
          message: ""
        });
        setSameAsMobile(false);
      } else {
        setErrors({ submit: result.message || "Failed to submit admission form. Please try again." });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setErrors({ submit: "Unable to connect to the server. Please check if backend is running." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 pb-20">

      {/* HERO SECTION BANNER */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100 py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-white to-rose-50/40 -z-10" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 text-center relative">

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-full text-indigo-700 text-xs sm:text-sm font-semibold mb-6 shadow-xs"
          >
            <Clock className="w-4 h-4 text-indigo-600 animate-pulse" />
            <span>Admissions Open for Session 2026-27</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Enroll in Mumbai's Premier <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-indigo-900 to-indigo-600">Coaching Institute</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed"
          >
            Ritesh Classes guides school, college, and degree section students to top honors. Submit your application details below to lock in demo batches.
          </motion.p>
        </div>
      </section>

      {/* ADMISSION STEPS TRACKER */}
      <section className="py-12 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-indigo-600 uppercase">
            Simple 4-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
            How to Secure Admission
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {admissionSteps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-150 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all relative flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-lg border ${item.color} mb-5`}>
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-2 leading-relaxed">{item.desc}</p>
              </div>
              {idx < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 text-gray-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* FORM AND CHECKLIST SECTION */}
      <section className="py-12 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Main Registration Form */}
          <div className="lg:col-span-8 bg-white border border-gray-100 rounded-[32px] p-8 sm:p-10 shadow-xs">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-indigo-600 uppercase">
                Student Registration
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
                Online Admission Inquiry Form
              </h2>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                Provide correct information in the sections below. Our registration desk will contact you to book your demo schedule.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6 mt-8"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >

                  {/* SECTION 1: Student Details */}
                  <div>
                    <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                      1. Student Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Student Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Student's Full Name</label>
                        <input
                          type="text"
                          name="studentName"
                          value={formData.studentName}
                          onChange={handleInputChange}
                          placeholder="e.g. Amit Singh"
                          className={`w-full bg-gray-50 border rounded-2xl py-3.5 px-4 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-indigo-500/20 ${errors.studentName ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-gray-200 focus:border-indigo-500"
                            }`}
                        />
                        {errors.studentName && <p className="text-red-500 text-[10px] font-semibold mt-1">{errors.studentName}</p>}
                      </div>

                      {/* Student Mobile */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Student Contact Number</label>
                        <input
                          type="text"
                          name="studentPhone"
                          value={formData.studentPhone}
                          onChange={handleInputChange}
                          placeholder="e.g. 9812345678"
                          className={`w-full bg-gray-50 border rounded-2xl py-3.5 px-4 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-indigo-500/20 ${errors.studentPhone ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-gray-200 focus:border-indigo-500"
                            }`}
                        />
                        {errors.studentPhone && <p className="text-red-500 text-[10px] font-semibold mt-1">{errors.studentPhone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
                      {/* WhatsApp Mobile */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                          <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">WhatsApp Number</label>
                          <label className="flex items-center gap-1.5 text-xs text-gray-500 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={sameAsMobile}
                              onChange={handleCheckboxChange}
                              className="rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                            />
                            <span>Same as contact</span>
                          </label>
                        </div>
                        <input
                          type="text"
                          name="whatsappPhone"
                          value={formData.whatsappPhone}
                          onChange={handleInputChange}
                          disabled={sameAsMobile}
                          placeholder="e.g. 9812345678"
                          className={`w-full bg-gray-50 border rounded-2xl py-3.5 px-4 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-indigo-500/20 disabled:bg-gray-100 disabled:text-gray-500 ${errors.whatsappPhone ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-gray-200 focus:border-indigo-500"
                            }`}
                        />
                        {errors.whatsappPhone && <p className="text-red-500 text-[10px] font-semibold mt-1">{errors.whatsappPhone}</p>}
                      </div>

                      {/* Email Address */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Email Address (Optional)</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="student.name@gmail.com"
                          className="w-full bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 rounded-2xl py-3.5 px-4 text-sm outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* SECTION 2: Parent Details */}
                  <div className="pt-2">
                    <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                      2. Parent / Guardian Details
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Parent Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Parent's Name</label>
                        <input
                          type="text"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleInputChange}
                          placeholder="e.g. Rajkumar Singh"
                          className={`w-full bg-gray-50 border rounded-2xl py-3.5 px-4 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-indigo-500/20 ${errors.parentName ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-gray-200 focus:border-indigo-500"
                            }`}
                        />
                        {errors.parentName && <p className="text-red-500 text-[10px] font-semibold mt-1">{errors.parentName}</p>}
                      </div>

                      {/* Parent Phone */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Parent's Mobile Number</label>
                        <input
                          type="text"
                          name="parentPhone"
                          value={formData.parentPhone}
                          onChange={handleInputChange}
                          placeholder="e.g. 9821767980"
                          className={`w-full bg-gray-50 border rounded-2xl py-3.5 px-4 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-indigo-500/20 ${errors.parentPhone ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-gray-200 focus:border-indigo-500"
                            }`}
                        />
                        {errors.parentPhone && <p className="text-red-500 text-[10px] font-semibold mt-1">{errors.parentPhone}</p>}
                      </div>
                    </div>
                  </div>

                  {/* SECTION 3: Course & Preferences */}
                  <div className="pt-2">
                    <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                      3. Course Stream & Schedule Preferences
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      {/* Target Course Select */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Target Program</label>
                        <select
                          name="course"
                          value={formData.course}
                          onChange={handleInputChange}
                          className={`w-full bg-gray-50 border rounded-2xl py-3.5 px-4 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-indigo-500/20 ${errors.course ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-gray-200 focus:border-indigo-500"
                            }`}
                        >
                          <option disabled value="Select a Course">Select Course</option>
                          <option value="Class 8-10 Foundation">8th to 10th Foundation</option>
                          <option value="10th SSC Board">10th SSC Board</option>
                          <option value="FYJC Class 11">FYJC (Class 11th)</option>
                          <option value="SYJC Class 12 Boards">SYJC (Class 12th Boards)</option>
                          <option value="Degree Section (BCom/BSc/BA)">Degree College support</option>
                        </select>
                        {errors.course && <p className="text-red-500 text-[10px] font-semibold mt-1">{errors.course}</p>}
                      </div>

                      {/* Board Select */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Board / University</label>
                        <select
                          name="board"
                          value={formData.board}
                          onChange={handleInputChange}
                          className={`w-full bg-gray-50 border rounded-2xl py-3.5 px-4 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-indigo-500/20 ${errors.board ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-gray-200 focus:border-indigo-500"
                            }`}
                        >
                          <option disabled value="Select Board">Select Board</option>
                          <option value="SSC (Maharashtra State Board)">SSC (State Board)</option>
                          <option value="CBSE Board">CBSE Board</option>
                          <option value="ICSE Board">ICSE Board</option>
                          <option value="HSC (Maharashtra State College)">HSC College Board</option>
                          <option value="Mumbai University">Mumbai University</option>
                          <option value="Other Board / University">Other Board / University</option>
                        </select>
                        {errors.board && <p className="text-red-500 text-[10px] font-semibold mt-1">{errors.board}</p>}
                      </div>

                      {/* Batch Select */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Batch Timings</label>
                        <select
                          name="batch"
                          value={formData.batch}
                          onChange={handleInputChange}
                          className={`w-full bg-gray-50 border rounded-2xl py-3.5 px-4 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-indigo-500/20 ${errors.batch ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-gray-200 focus:border-indigo-500"
                            }`}
                        >
                          <option disabled value="Select Batch">Select Batch</option>
                          <option value="Morning Batch">Morning Batch (8:00 AM - 11:30 AM)</option>
                          <option value="Evening Batch">Evening Batch (4:30 PM - 8:00 PM)</option>
                          <option value="Weekend Batch">Weekend Batch (Saturday & Sunday)</option>
                          <option value="Flexible Timings">Flexible College Timings</option>
                        </select>
                        {errors.batch && <p className="text-red-500 text-[10px] font-semibold mt-1">{errors.batch}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
                      {/* Mode of Classes */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Mode of Classrooms</label>
                        <div className="flex gap-4">
                          <label className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-xl p-3 text-xs sm:text-sm font-semibold cursor-pointer bg-white hover:bg-gray-50 transition-colors">
                            <input
                              type="radio"
                              name="mode"
                              value="Offline Classroom"
                              checked={formData.mode === "Offline Classroom"}
                              onChange={handleInputChange}
                              className="text-indigo-600 focus:ring-indigo-500"
                            />
                            <span>Offline Classroom</span>
                          </label>
                          <label className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-xl p-3 text-xs sm:text-sm font-semibold cursor-pointer bg-white hover:bg-gray-50 transition-colors">
                            <input
                              type="radio"
                              name="mode"
                              value="Hybrid Lectures"
                              checked={formData.mode === "Hybrid Lectures"}
                              onChange={handleInputChange}
                              className="text-indigo-600 focus:ring-indigo-500"
                            />
                            <span>Hybrid Lectures</span>
                          </label>
                        </div>
                      </div>

                      {/* Additional queries */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Additional Message (Optional)</label>
                        <textarea
                          name="message"
                          rows={1}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="e.g. Looking for fee installments or specific demo timings..."
                          className="w-full bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 rounded-2xl py-3.5 px-4 text-sm outline-none transition-all resize-none"
                        />
                      </div>
                    </div>
                  </div>


                  {errors.submit && (
                    <p className="text-red-500 text-xs font-semibold mt-1 text-center bg-red-50 border border-red-100 rounded-xl p-3">
                      {errors.submit}
                    </p>
                  )}

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
                        Submit Admission Inquiry
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
                    <h3 className="text-xl font-bold text-gray-900">Application Submitted!</h3>
                    <p className="text-gray-500 text-sm mt-1 max-w-sm">
                      Your inquiry details have been saved. Counselor representative from Ritesh Classes will call you on your parents' phone within the next few working hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Coaching Policy & Document Checklists */}
          <div className="lg:col-span-4 space-y-6">

            {/* Enrollment checklist */}
            <div className="bg-white border border-gray-100 rounded-[32px] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-4">
                <FileText className="w-4.5 h-4.5" />
                <span>Admission Checklist</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Documents Required</h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-6 leading-relaxed">
                Parents are requested to submit copies of these documents during center visit for final enrollment validation:
              </p>

              <ul className="space-y-3.5">
                {[
                  "2 Passport size photographs of student",
                  "Copy of latest school / college marksheet",
                  "Copy of Student's Aadhaar Card / ID Proof",
                  "First installment fee receipt / Cheque copy"
                ].map((doc, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coaching Highlights */}
            <div className="bg-white border border-gray-100 rounded-[32px] p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-rose-600 text-xs font-bold uppercase tracking-wider mb-4">
                <Award className="w-4.5 h-4.5" />
                <span>Why Study Here?</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Classes Excellence</h3>

              <ul className="space-y-4">
                {[
                  {
                    title: "Experienced Faculty",
                    desc: "Interactive teaching by Prof. Ritesh Singh and expert subject teachers."
                  },
                  {
                    title: "Limited Batch Sizes",
                    desc: "Maximum 25-30 students per class to ensure personalized attention."
                  },
                  {
                    title: "Weekly Mock Tests",
                    desc: "Performance analysis maps shared with parents every Sunday."
                  },
                  {
                    title: "Rigorous Doubt Solving",
                    desc: "Daily post-class counseling and customized revision sessions."
                  }
                ].map((feat, index) => (
                  <li key={index} className="space-y-1">
                    <div className="flex items-center gap-2 font-bold text-gray-900 text-sm">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>{feat.title}</span>
                    </div>
                    <p className="text-gray-500 text-xs pl-6 leading-relaxed">{feat.desc}</p>
                  </li>
                ))}
              </ul>
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
                Have admission questions?
              </h2>
              <p className="text-indigo-200 text-xs sm:text-sm leading-relaxed">
                Connect directly with Prof. Ritesh Singh for quick fee breakdowns, batch schedules, or demo class bookings.
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
                WhatsApp Chat
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
            Admissions FAQs
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Find answers to commonly asked questions about academic schedules, fees structure, and syllabus policies.
          </p>
        </div>

        <div className="space-y-4">
          {admissionFaqs.map((faq, idx) => {
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
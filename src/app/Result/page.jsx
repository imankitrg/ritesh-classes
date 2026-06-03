"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Award,
    Search,
    Printer,
    TrendingUp,
    Quote,
    User,
    BookOpen,
    Calendar,
    CheckCircle2,
    HelpCircle,
    ArrowRight,
    Sparkles,
    ShieldCheck,
    Loader2,
    ChevronDown,
    X,
    Target
} from "lucide-react";
import Link from "next/link";

// Toppers mock database
const toppersData = [
    {
        rollNo: "RC2601",
        name: "Aarav Sharma",
        course: "Class 10 SSC Board",
        category: "Class 10 SSC/HSC",
        year: "2025-26",
        achievement: "95.2% Boards Score",
        improvement: "Improved from 75% in Pre-boards",
        testimonial: "The teachers here made complex concepts so easy to understand. I couldn't have done it without them!",
        marks: {
            "Mathematics": 98,
            "Science": 95,
            "Social Science": 96,
            "English": 92,
            "Hindi": 94
        },
        totalObtained: 475,
        maxMarks: 500,
        avatarColor: "from-amber-400 to-orange-500"
    },
    {
        rollNo: "RC2602",
        name: "Priya Patel",
        course: "JEE Target Batch",
        category: "JEE / NEET Prep",
        year: "2025-26",
        achievement: "JEE Main 99.2 Percentile",
        improvement: "Cleared in First Attempt",
        testimonial: "The mock tests and continuous feedback sessions were the game changer for my JEE preparation.",
        marks: {
            "Physics": 99,
            "Chemistry": 98,
            "Mathematics": 100
        },
        totalObtained: 297,
        maxMarks: 300,
        avatarColor: "from-blue-400 to-indigo-600"
    },
    {
        rollNo: "RC2603",
        name: "Rohan Singh",
        course: "Class 12 Commerce",
        category: "Class 12 Boards/HSC",
        year: "2025-26",
        achievement: "97.0% Score (State Rank 15)",
        improvement: "Perfect 100 in Accountancy",
        testimonial: "The accountancy and economics faculties are simply the best. They focus on practical understanding.",
        marks: {
            "Accountancy": 100,
            "Economics": 97,
            "Business Studies": 98,
            "English": 93,
            "Mathematics": 94
        },
        totalObtained: 482,
        maxMarks: 500,
        avatarColor: "from-emerald-400 to-teal-600"
    },
    {
        rollNo: "RC2604",
        name: "Ananya Gupta",
        course: "NEET Target Batch",
        category: "JEE / NEET Prep",
        year: "2025-26",
        achievement: "NEET Score 680/720",
        improvement: "Score increased by +230 marks",
        testimonial: "Personalized attention and rigorous practice sheets helped me achieve my dream medical college.",
        marks: {
            "Biology (Botany + Zoology)": 350,
            "Physics": 165,
            "Chemistry": 165
        },
        totalObtained: 680,
        maxMarks: 720,
        avatarColor: "from-rose-400 to-pink-600"
    },
    {
        rollNo: "RC2605",
        name: "Vikram Reddy",
        course: "Class 10 ICSE",
        category: "Class 10 SSC/CBSE",
        year: "2024-25",
        achievement: "96.0% Boards Score",
        improvement: "Perfect 100 in Mathematics",
        testimonial: "Maths used to be my weakest subject, but the foundation classes completely changed my perspective.",
        marks: {
            "Mathematics": 100,
            "Science (Phy/Chem/Bio)": 97,
            "History & Civics": 94,
            "Geography": 95,
            "English": 94
        },
        totalObtained: 480,
        maxMarks: 500,
        avatarColor: "from-purple-400 to-indigo-500"
    },
    {
        rollNo: "RC2606",
        name: "Meera Nair",
        course: "Class 12 HSC Science",
        category: "Class 12 Boards/HSC",
        year: "2024-25",
        achievement: "95.6% Boards Score",
        improvement: "Consistent topper in weekly tests",
        testimonial: "The teachers pushed me to strive for accuracy. The handwritten notes and cheat sheets were extremely helpful.",
        marks: {
            "Physics": 96,
            "Chemistry": 94,
            "Biology": 98,
            "English": 92,
            "Computer Science": 98
        },
        totalObtained: 478,
        maxMarks: 500,
        avatarColor: "from-cyan-400 to-blue-500"
    },
    {
        rollNo: "RC2607",
        name: "Kabir Malhotra",
        course: "Class 10 SSC Board",
        category: "Class 10 SSC/CBSE",
        year: "2024-25",
        achievement: "95.3% SSC Score",
        improvement: "Excellent 99 in Algebra",
        testimonial: "Regular test series solved all my fears about board exams. Standard board format papers helped a lot.",
        marks: {
            "Algebra": 99,
            "Geometry": 98,
            "Science & Technology": 96,
            "Social Science": 95,
            "English": 92,
            "Marathi": 92
        },
        totalObtained: 572,
        maxMarks: 600,
        avatarColor: "from-orange-400 to-amber-500"
    },
    {
        rollNo: "RC2608",
        name: "Sneha Patil",
        course: "Class 10 SSC Board",
        category: "Class 10 SSC/CBSE",
        year: "2025-26",
        achievement: "96.3% SSC Score",
        improvement: "State Top 50 Ranker",
        testimonial: "The guidance lectures helped me understand how to write papers to score full marks in board exams.",
        marks: {
            "Algebra": 98,
            "Geometry": 99,
            "Science & Technology": 97,
            "Social Science": 96,
            "English": 94,
            "Marathi": 94
        },
        totalObtained: 578,
        maxMarks: 600,
        avatarColor: "from-emerald-400 to-green-600"
    }
];

// Highlight Stats
const stats = [
    { value: "100%", label: "Board Passing Rate", desc: "For SSC & CBSE classes" },
    { value: "99.2%", label: "Highest Percentile", desc: "Scored in JEE Main exam" },
    { value: "680/720", label: "NEET Top Score", desc: "First attempt achievement" },
    { value: "97.0%", label: "Commerce Highest", desc: "Scored in 12th Board exam" }
];

// FAQS
const faqs = [
    {
        question: "How are the academic results of Ritesh Classes so consistent?",
        answer: "Our consistency is the result of structured study planning, highly focused weekly mock test series, small batch sizes for individual attention, and customized doubt-solving sessions targeted at weak areas."
    },
    {
        question: "Can we verify student results on this portal?",
        answer: "Yes! Using our interactive Result Verification Portal above, you can input a student's enrollment/roll number (e.g. RC2601 to RC2608) to fetch their detailed digital marksheet verified by Prof. Ritesh Singh."
    },
    {
        question: "Do you prepare students specifically for board exam paper writing?",
        answer: "Absolutely. We conduct guidance lectures focused on board answer sheet presentation, time management, and common scoring patterns. We also host 3 full-length prelim examinations before the finals."
    },
    {
        question: "What is the teaching methodology for weak students?",
        answer: "We offer special remedial sessions where core basic concepts are re-taught, along with simpler practice sheets. We believe in building confidence through incremental milestones and personalized mentorship."
    }
];

export default function Result() {
    // Toppers State
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Toppers");
    const [selectedYear, setSelectedYear] = useState("All Years");

    // Portal State
    const [rollInput, setRollInput] = useState("");
    const [searchingPortal, setSearchingPortal] = useState(false);
    const [searchedStudent, setSearchedStudent] = useState(null);
    const [portalError, setPortalError] = useState("");

    // FAQs State
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    // Auto scroll to Verification Portal if view marksheet clicked
    const handleViewMarksheet = (rollNo) => {
        setRollInput(rollNo);
        triggerSearch(rollNo);
        const element = document.getElementById("result-portal-section");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const triggerSearch = (rollToSearch) => {
        if (!rollToSearch.trim()) return;
        setSearchingPortal(true);
        setPortalError("");
        setSearchedStudent(null);

        // Simulate database delay for lookup
        setTimeout(() => {
            const student = toppersData.find(
                (s) => s.rollNo.toUpperCase() === rollToSearch.trim().toUpperCase()
            );
            if (student) {
                setSearchedStudent(student);
            } else {
                setPortalError("Enrollment number not found. Try RC2601 through RC2608.");
            }
            setSearchingPortal(false);
        }, 600);
    };

    const handlePortalSubmit = (e) => {
        e.preventDefault();
        triggerSearch(rollInput);
    };

    // Printing the marksheet
    const handlePrint = () => {
        window.print();
    };

    // Filter Toppers
    const filteredToppers = toppersData.filter((topper) => {
        const matchesSearch = topper.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            topper.course.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All Toppers" || topper.category === selectedCategory;
        const matchesYear = selectedYear === "All Years" || topper.year === selectedYear;
        return matchesSearch && matchesCategory && matchesYear;
    });

    return (
        <div className="bg-gray-50 min-h-screen text-gray-900 pb-20">
            {/* Custom Global CSS rules for printing */}
            <style jsx global>{`
        @media print {
          /* Hide everything */
          body * {
            visibility: hidden;
          }
          /* Show only the printed marksheet */
          #printable-marksheet, #printable-marksheet * {
            visibility: visible;
          }
          #printable-marksheet {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white !important;
            color: black !important;
            padding: 20px !important;
            border: 2px solid #ddd !important;
            border-radius: 12px !important;
            box-shadow: none !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-white border-b border-gray-100 py-20 lg:py-28">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 -z-10" />
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 text-center relative">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-full text-indigo-700 text-sm font-semibold mb-6 shadow-sm"
                    >
                        <Sparkles className="w-4 h-4 text-indigo-600" />
                        <span>Redefining Academic Achievements</span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl mx-auto"
                    >
                        Empowering Minds, <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-indigo-950 to-indigo-600">Celebrating Excellence</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed"
                    >
                        Consistent toppers, extraordinary score improvements, and 100% board dedication. Take a look at our proudest success milestones.
                    </motion.p>

                    {/* HIGHLIGHT STATS GRID */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + idx * 0.1 }}
                                className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-3xl sm:text-4xl font-extrabold text-indigo-600 tracking-tight">
                                    {stat.value}
                                </h3>
                                <p className="text-gray-900 font-semibold mt-2 text-sm sm:text-base">
                                    {stat.label}
                                </p>
                                <p className="text-gray-500 text-xs mt-1">
                                    {stat.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INTERACTIVE RESULT PORTAL SECTION */}
            <section id="result-portal-section" className="py-16 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
                <div className="bg-white border border-gray-100 rounded-[32px] p-8 lg:p-12 shadow-sm relative overflow-hidden">

                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -z-10 opacity-60" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* Form & Helper */}
                        <div className="lg:col-span-5 space-y-6">
                            <div>
                                <span className="text-xs font-bold tracking-[0.2em] text-indigo-600 uppercase">
                                    Technology Feature
                                </span>
                                <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
                                    Digital Result Verification Portal
                                </h2>
                                <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">
                                    Verify academic credentials instantly. Enter a student's roll number to fetch their detailed, verified transcript, containing subject-wise grades and percentage counters.
                                </p>
                            </div>

                            {/* Sample codes */}
                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4">
                                <p className="text-xs font-semibold text-gray-500 mb-2">Sample Roll Numbers to test:</p>
                                <div className="flex flex-wrap gap-2">
                                    {toppersData.map((topper) => (
                                        <button
                                            key={topper.rollNo}
                                            onClick={() => handleViewMarksheet(topper.rollNo)}
                                            className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 hover:border-indigo-500 hover:text-indigo-600 rounded-lg text-xs font-mono font-bold shadow-xs transition-colors"
                                        >
                                            {topper.rollNo} ({topper.name.split(" ")[0]})
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Form Input */}
                            <form onSubmit={handlePortalSubmit} className="space-y-3">
                                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                                    Enter Enrollment / Roll Number
                                </label>
                                <div className="relative flex items-center">
                                    <span className="absolute left-4 text-gray-400 font-mono font-bold">#</span>
                                    <input
                                        type="text"
                                        value={rollInput}
                                        onChange={(e) => setRollInput(e.target.value)}
                                        placeholder="e.g. RC2601"
                                        className="w-full bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 rounded-2xl py-4 pl-9 pr-24 font-mono font-bold text-gray-900 placeholder-gray-400 transition-all uppercase outline-none"
                                    />
                                    <button
                                        type="submit"
                                        disabled={searchingPortal}
                                        className="absolute right-2 px-5 py-2.5 bg-black hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
                                    >
                                        {searchingPortal ? (
                                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                        ) : (
                                            <Search className="w-3.5 h-3.5" />
                                        )}
                                        Verify
                                    </button>
                                </div>
                                {portalError && (
                                    <p className="text-red-500 text-xs font-semibold mt-1.5 flex items-center gap-1">
                                        <span>⚠</span> {portalError}
                                    </p>
                                )}
                            </form>

                            <div className="flex items-center gap-3 pt-2 text-xs text-emerald-600 font-semibold bg-emerald-50/50 border border-emerald-100/50 p-4 rounded-xl">
                                <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                                <span>Secure SSL encrypted transcript lookup. Results are synchronized with the regional board records.</span>
                            </div>
                        </div>

                        {/* Marksheet Display Area */}
                        <div className="lg:col-span-7 flex justify-center w-full min-h-[400px] border border-gray-100 bg-gray-50/50 rounded-3xl p-4 sm:p-6 lg:p-8 relative">
                            <AnimatePresence mode="wait">
                                {searchingPortal ? (
                                    <motion.div
                                        key="searching"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center justify-center space-y-3"
                                    >
                                        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
                                        <p className="text-gray-500 text-sm font-semibold">Querying verification index...</p>
                                    </motion.div>
                                ) : searchedStudent ? (
                                    <motion.div
                                        key="marksheet"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        id="printable-marksheet"
                                        className="w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8 flex flex-col justify-between relative"
                                    >
                                        {/* Marksheet Header */}
                                        <div>
                                            <div className="flex justify-between items-start border-b-2 border-double border-gray-200 pb-4 mb-6">
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-sm">
                                                            R
                                                        </div>
                                                        <div>
                                                            <h3 className="font-extrabold text-base text-gray-900 tracking-tight leading-none">RITESH ACADEMY</h3>
                                                            <span className="text-[10px] text-gray-400 font-semibold">ESTD 2022 • REGD NO. 429188</span>
                                                        </div>
                                                    </div>
                                                    <p className="text-[10px] text-gray-500 mt-1 max-w-[200px] sm:max-w-none">
                                                        Shop No. 1, Ritesh Classes Building, Mumbai, Maharashtra
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <span className="inline-block px-2.5 py-1 bg-emerald-50 border border-emerald-100 rounded-md text-[10px] font-bold text-emerald-700 tracking-wider uppercase">
                                                        VERIFIED DIGITAL TRANSCRIPT
                                                    </span>
                                                    <p className="text-[10px] text-gray-500 font-mono mt-1">Ref: {searchedStudent.rollNo}/2026/AC</p>
                                                </div>
                                            </div>

                                            {/* Student Details Grid */}
                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-gray-50 border border-gray-100 rounded-xl p-4 mb-6 text-xs text-gray-700">
                                                <div>
                                                    <p className="text-gray-400 font-medium">Student Name</p>
                                                    <p className="font-bold text-gray-900 mt-0.5">{searchedStudent.name}</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-400 font-medium">Roll / Enrollment</p>
                                                    <p className="font-mono font-bold text-gray-900 mt-0.5">{searchedStudent.rollNo}</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-400 font-medium">Course Stream</p>
                                                    <p className="font-bold text-gray-900 mt-0.5">{searchedStudent.course}</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-400 font-medium">Session Year</p>
                                                    <p className="font-bold text-gray-900 mt-0.5">{searchedStudent.year}</p>
                                                </div>
                                            </div>

                                            {/* Marks Table */}
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-left text-xs border-collapse">
                                                    <thead>
                                                        <tr className="border-b border-gray-200 text-gray-500 font-bold uppercase tracking-wider text-[10px]">
                                                            <th className="py-2.5">Subject Description</th>
                                                            <th className="py-2.5 text-center">Max Marks</th>
                                                            <th className="py-2.5 text-center">Obtained Marks</th>
                                                            <th className="py-2.5 text-center">Subject Grade</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-100 font-medium text-gray-900">
                                                        {Object.entries(searchedStudent.marks).map(([subject, score]) => {
                                                            // Grade boundaries helper
                                                            let grade = "A+";
                                                            if (score >= 98) grade = "O";
                                                            else if (score >= 90) grade = "A+";
                                                            else if (score >= 80) grade = "A";
                                                            else grade = "B";

                                                            // Custom max calculations for NEET (out of 180 / 360) or JEE
                                                            let maxVal = 100;
                                                            if (searchedStudent.rollNo === "RC2604") {
                                                                if (subject.includes("Biology")) maxVal = 360;
                                                                else maxVal = 180;
                                                            } else if (searchedStudent.rollNo === "RC2602") {
                                                                maxVal = 100; // JEE per subject
                                                            }

                                                            return (
                                                                <tr key={subject}>
                                                                    <td className="py-3 font-semibold text-gray-800">{subject}</td>
                                                                    <td className="py-3 text-center text-gray-500 font-mono">{maxVal}</td>
                                                                    <td className="py-3 text-center font-mono font-bold">{score}</td>
                                                                    <td className="py-3 text-center">
                                                                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${grade === "O" ? "bg-amber-50 text-amber-700 border border-amber-100" :
                                                                                grade === "A+" ? "bg-indigo-50 text-indigo-700 border border-indigo-100" :
                                                                                    "bg-emerald-50 text-emerald-700 border border-emerald-100"
                                                                            }`}>
                                                                            {grade}
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* Summary & Signatures */}
                                        <div className="mt-8 border-t border-gray-100 pt-6">
                                            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">

                                                {/* Result Score Widget */}
                                                <div className="flex items-center gap-4 bg-indigo-50 border border-indigo-100 rounded-xl p-3.5 w-full sm:w-auto">
                                                    <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-extrabold text-base shadow-sm">
                                                        {Math.round((searchedStudent.totalObtained / searchedStudent.maxMarks) * 100)}%
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">AGGREGATE RESULTS</p>
                                                        <p className="text-xs font-extrabold text-gray-900">
                                                            {searchedStudent.totalObtained} / {searchedStudent.maxMarks} Marks Obtained
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Signatures */}
                                                <div className="flex items-center gap-6 self-end sm:self-center">
                                                    <div className="text-center">
                                                        <div className="h-8 flex items-end justify-center">
                                                            <span className="font-mono text-gray-400 italic text-[11px] select-none pointer-events-none">Prof. Ritesh Singh</span>
                                                        </div>
                                                        <div className="w-28 border-t border-gray-200 mt-1" />
                                                        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">DIRECTOR SEAL</p>
                                                    </div>
                                                    <div className="w-10 h-10 border-2 border-emerald-600 rounded-full flex items-center justify-center text-emerald-600 font-bold text-[9px] select-none pointer-events-none transform -rotate-12 border-dashed">
                                                        APPROVED
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Print and Close controls (no-print helper) */}
                                            <div className="flex gap-3 justify-end mt-8 border-t border-gray-100 pt-4 no-print">
                                                <button
                                                    onClick={handlePrint}
                                                    className="px-4 py-2 bg-indigo-50 border border-indigo-100 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors"
                                                >
                                                    <Printer className="w-3.5 h-3.5" />
                                                    Print Marksheet
                                                </button>
                                                <button
                                                    onClick={() => setSearchedStudent(null)}
                                                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors"
                                                >
                                                    <X className="w-3.5 h-3.5" />
                                                    Clear Screen
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="empty"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center justify-center text-center space-y-4 max-w-sm"
                                    >
                                        <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-gray-400 shadow-xs">
                                            <Target className="w-8 h-8 text-indigo-500" />
                                        </div>
                                        <div>
                                            <h3 className="font-extrabold text-gray-900 text-lg">No Transcript Selected</h3>
                                            <p className="text-gray-500 text-sm mt-1">
                                                Use the search input or click a sample card on the left to review verified records instantly.
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                    </div>
                </div>
            </section>

            {/* FILTERABLE TOPPERS WALL SECTION */}
            <section className="py-16 bg-white border-t border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
                                Wall of Fame
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 flex items-center">
                                <Award className="w-8 h-8 text-yellow-500 mr-2" />
                                Our Academic Toppers
                            </h2>
                            <p className="text-gray-600 text-sm sm:text-base mt-2">
                                Honoring the hard work of our students. Filter by category, session year, or search by name.
                            </p>
                        </div>

                        {/* Search Input */}
                        <div className="relative w-full md:w-80">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <Search className="w-4 h-4" />
                            </span>
                            <input
                                type="text"
                                placeholder="Search toppers by name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 rounded-2xl py-3 pl-11 pr-4 text-sm text-gray-950 outline-none transition-all"
                            />
                        </div>
                    </div>

                    {/* Filters Bar */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center border-b border-gray-100 pb-6 mb-8">
                        {/* Category tabs */}
                        <div className="flex flex-wrap gap-2">
                            {["All Toppers", "Class 10 SSC/CBSE", "Class 12 Boards/HSC", "JEE / NEET Prep"].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedCategory === cat
                                            ? "bg-black text-white"
                                            : "bg-gray-50 border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-100"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Year selector */}
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Year:</span>
                            <select
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                                className="bg-gray-50 border border-gray-200 text-gray-700 text-xs font-bold rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="All Years">All Years</option>
                                <option value="2025-26">2025-2026</option>
                                <option value="2024-25">2024-2025</option>
                            </select>
                        </div>
                    </div>

                    {/* Toppers Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredToppers.map((topper) => (
                                <motion.div
                                    layout
                                    key={topper.rollNo}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between group overflow-hidden"
                                >
                                    <div>
                                        {/* Header */}
                                        <div className="flex justify-between items-start gap-4">
                                            {/* Avatar initials with dynamic gradients */}
                                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${topper.avatarColor} text-white flex items-center justify-center font-bold text-lg shadow-sm`}>
                                                {topper.name.charAt(0)}{topper.name.split(" ")[1]?.charAt(0)}
                                            </div>

                                            {/* Batch tag */}
                                            <span className="px-2.5 py-1 bg-gray-50 border border-gray-200 text-gray-500 rounded-lg text-[10px] font-bold">
                                                {topper.year}
                                            </span>
                                        </div>

                                        {/* Student details */}
                                        <div className="mt-4">
                                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                                {topper.name}
                                            </h3>
                                            <p className="text-xs font-semibold text-gray-400 mt-0.5">{topper.course}</p>
                                        </div>

                                        {/* Scores Widget */}
                                        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 mt-4 space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="text-xs font-bold text-gray-800">{topper.achievement}</span>
                                            </div>
                                            <div className="flex items-center text-emerald-600 text-[10px] font-bold uppercase tracking-wider">
                                                <TrendingUp className="w-3.5 h-3.5 mr-1" />
                                                {topper.improvement}
                                            </div>
                                        </div>

                                        {/* Testimonial */}
                                        <div className="mt-4 pt-3 border-t border-gray-100 relative">
                                            <Quote className="w-5 h-5 text-indigo-500/10 absolute -top-0.5 -left-1" />
                                            <p className="text-gray-500 italic text-xs leading-relaxed pl-4">
                                                "{topper.testimonial}"
                                            </p>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                                        <span className="text-[10px] font-mono text-gray-400 font-bold">ID: {topper.rollNo}</span>
                                        <button
                                            onClick={() => handleViewMarksheet(topper.rollNo)}
                                            className="px-3.5 py-1.5 bg-gray-50 hover:bg-black border border-gray-200 hover:border-black text-gray-800 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1"
                                        >
                                            Verify Marksheet
                                            <ArrowRight className="w-3 h-3" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {/* Empty filter message */}
                        {filteredToppers.length === 0 && (
                            <div className="col-span-full py-16 flex flex-col items-center justify-center text-center">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-3">
                                    <Search className="w-6 h-6" />
                                </div>
                                <p className="font-bold text-gray-700">No toppers found</p>
                                <p className="text-gray-500 text-xs mt-1">Try matching different categories or searching another name.</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* WHY RITESH CLASSES DELIVERS RESULTS */}
            <section className="py-16 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
                        Our Foundation
                    </span>
                    <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
                        Why Our Coaching Delivers Success
                    </h2>
                    <p className="text-gray-600 text-sm mt-3">
                        Academic achievements require structured mentorship, consistency, and active practice. Here is how we ensure each student excels.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Regular Board Pattern Tests",
                            description: "We host weekly topics tests and 3 full-length preliminary exams mimicking the board pattern, grading strictly to match actual final formats.",
                            icon: <BookOpen className="w-6 h-6 text-indigo-600" />
                        },
                        {
                            title: "Individual Doubt Cleansing",
                            description: "Custom sessions are held after every chapter to clear blockages, ensuring that weak conceptual gaps are plugged before the next topics start.",
                            icon: <User className="w-6 h-6 text-indigo-600" />
                        },
                        {
                            title: "Handwritten Master Notes",
                            description: "Students receive simplified, curated handwritten revision sheets, mathematical formulas, and chemistry reaction maps for memory retention.",
                            icon: <CheckCircle2 className="w-6 h-6 text-indigo-600" />
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xs">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQs SECTION */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8">

                    <div className="text-center mb-12">
                        <HelpCircle className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            Results & Grading FAQ
                        </h2>
                        <p className="text-gray-500 text-sm mt-2">
                            Have questions regarding scoring systems, results verifications, or board preparation? Find the answers here.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => {
                            const isOpen = openFaqIndex === idx;
                            return (
                                <div
                                    key={idx}
                                    className="border border-gray-200 rounded-2xl overflow-hidden transition-colors"
                                >
                                    <button
                                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                                        className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 hover:bg-gray-50/50 transition-colors"
                                    >
                                        <span>{faq.question}</span>
                                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
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
                                                <p className="p-5 text-sm text-gray-600 leading-relaxed border-t border-gray-200">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-16 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
                <div className="bg-black text-white rounded-[32px] p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-indigo-950 to-indigo-900 opacity-90 -z-10" />

                    <div className="max-w-2xl mx-auto space-y-6 relative">
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                            Be the Next Success Story on our Board!
                        </h2>
                        <p className="text-indigo-200 text-sm sm:text-base leading-relaxed">
                            Enroll today in Ritesh Academy to start building a robust foundation in algebra, science, commerce, or entrance preparation with verified professionals.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center pt-4">
                            <Link
                                href="/Admission"
                                className="px-7 py-3.5 bg-white text-black hover:bg-indigo-50 font-bold rounded-full text-sm transition-colors shadow-sm"
                            >
                                Apply for Admission
                            </Link>
                            <Link
                                href="/Contact"
                                className="px-7 py-3.5 bg-black/40 hover:bg-black/60 border border-white/20 hover:border-white/40 text-white font-bold rounded-full text-sm transition-all"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
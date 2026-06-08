"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Scale,
  Users,
  CreditCard,
  Award,
  FileSpreadsheet,
  AlertTriangle,
  Landmark,
  ChevronRight
} from "lucide-react";

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState("agreement");

  const sections = [
    {
      id: "agreement",
      title: "1. Agreement to Terms",
      icon: Scale,
      content: (
        <div className="space-y-4">
          <p>
            By accessing this website or enrolling in any foundation, board, or degree courses at <strong>Ritesh Classes</strong>, you agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between Ritesh Classes (Ritesh Academy) and the student, as well as their parent or guardian (who acts as the guarantor of the student's compliance).
          </p>
          <p>
            If you do not agree to these terms, you are advised not to submit inquiries, register for courses, or access classroom facilities.
          </p>
        </div>
      )
    },
    {
      id: "admissions",
      title: "2. Admissions & Eligibility",
      icon: Users,
      content: (
        <div className="space-y-4">
          <p>
            Admission to various course streams is based on academic history, availability of seats, and batch schedules.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-650">
            <li><strong>Inquiry and Counseling:</strong> Submitting an online inquiry form does not guarantee admission. Students and parents must attend a personal counseling session with Prof. Ritesh Singh or our senior counselors.</li>
            <li><strong>Demo Lectures:</strong> We offer a maximum of 2 complimentary demo lectures to help students evaluate teaching quality before final admission.</li>
            <li><strong>Seat Confirmation:</strong> Admission is only confirmed upon the receipt of the initial installment fee, completion of the official enrollment form, and submission of the mandatory document checklist (ID proof, academic marksheets, and passport photos).</li>
          </ul>
        </div>
      )
    },
    {
      id: "fees",
      title: "3. Fees & Refund Policy",
      icon: CreditCard,
      content: (
        <div className="space-y-4">
          <p>
            Ritesh Classes maintains transparent policies regarding course fees, payment timelines, and installment plans:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-650">
            <li><strong>Installment Plans:</strong> If opting for installment options, payments must be made on or before the due date agreed upon in the fee structure document.</li>
            <li><strong>Delay of Payments:</strong> Consistent delay in fee installments may result in a temporary suspension from batch lectures and weekly test series until outstanding balances are cleared.</li>
            <li><strong>Refund Policy:</strong> All fees paid to Ritesh Classes are strictly non-refundable and non-transferable after the formal commencement of batches, except in cases of administrative errors or cancellations by us.</li>
          </ul>
        </div>
      )
    },
    {
      id: "conduct",
      title: "4. Student Code of Conduct",
      icon: Award,
      content: (
        <div className="space-y-4">
          <p>
            We maintain a high academic standard and expect active cooperation from students and parents. Students are required to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-650">
            <li>Maintain a minimum attendance level of **85%** across all subjects. Parents will be notified of unauthorized absences.</li>
            <li>Compulsorily participate in the weekly Sunday Mock Test Series. Skipping tests without a valid medical reason is not permitted.</li>
            <li>Maintain classroom discipline and show respect to professors, administrative staff, and fellow students. Disruptive behavior may result in disciplinary action, up to expulsion without fee refund.</li>
          </ul>
        </div>
      )
    },
    {
      id: "intellectual",
      title: "5. Intellectual Property Rights",
      icon: FileSpreadsheet,
      content: (
        <div className="space-y-4">
          <p>
            All educational resources, study materials, mock test worksheets, textbooks, revision notes, and digital content distributed by Ritesh Classes are protected by intellectual property laws.
          </p>
          <p>
            Students and parents agree that these materials are provided **solely for personal educational use**. Any unauthorized replication, commercial resale, public distribution, or digital upload of Ritesh Classes material is strictly prohibited and may invite legal action.
          </p>
        </div>
      )
    },
    {
      id: "liability",
      title: "6. Limitation of Liability",
      icon: AlertTriangle,
      content: (
        <div className="space-y-4">
          <p>
            While Ritesh Classes guarantees highly experienced faculty, personalized counseling, and premium test modules to maximize success, final academic outcomes depend significantly on the student's self-study, homework completion, and regular attendance.
          </p>
          <p>
            Ritesh Classes is not liable for any specific score outcomes, nor are we liable for any technical issues that prevent access to hybrid lectures due to third-party network outages.
          </p>
        </div>
      )
    },
    {
      id: "law",
      title: "7. Governing Law & Dispute Resolution",
      icon: Landmark,
      content: (
        <div className="space-y-4">
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of India.
          </p>
          <p>
            Any disputes arising from admission, fees, or student conduct policies that cannot be resolved amicably shall be subject to the exclusive jurisdiction of the competent courts located in Mumbai, Maharashtra.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 pb-20">
      
      {/* Banner */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100 py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-white to-rose-50/40 -z-10" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-1.5 rounded-full text-indigo-700 text-xs font-semibold mb-4"
          >
            <Scale className="w-4 h-4 text-indigo-600" />
            <span>Academic Guidelines</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto mt-4"
          >
            Last Updated: June 8, 2026. Understand the terms, enrollment guidelines, and codes of conduct at our academy.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Navigation Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 self-start">
            <div className="bg-white border border-gray-150 rounded-3xl p-5 shadow-xs space-y-1.5">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 mb-3">
                Terms Table of Contents
              </h3>
              {sections.map((sec) => {
                const IconComponent = sec.icon;
                const isSelected = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => {
                      setActiveSection(sec.id);
                      document.getElementById(sec.id)?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-left text-sm font-bold transition-all ${
                      isSelected
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10 scale-[1.02]"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className={`w-4 h-4 shrink-0 ${isSelected ? "text-white" : "text-gray-400"}`} />
                      <span>{sec.title.substring(3)}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? "text-white rotate-90" : "text-gray-300"}`} />
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Right Column: Terms Content */}
          <div className="lg:col-span-8 space-y-6">
            {sections.map((sec) => {
              const IconComponent = sec.icon;
              return (
                <motion.div
                  key={sec.id}
                  id={sec.id}
                  viewport={{ once: true, margin: "-10%" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  onViewportEnter={() => setActiveSection(sec.id)}
                  className={`bg-white border rounded-3xl p-6 sm:p-8 shadow-xs transition-colors duration-300 ${
                    activeSection === sec.id ? "border-indigo-200 ring-2 ring-indigo-500/5" : "border-gray-150"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-extrabold text-gray-900">{sec.title}</h3>
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-4">
                    {sec.content}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}

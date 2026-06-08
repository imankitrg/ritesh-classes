"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  Lock,
  FileText,
  Globe,
  Key,
  UserCheck,
  Mail,
  Phone,
  MapPin,
  ChevronRight
} from "lucide-react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("intro");

  const sections = [
    {
      id: "intro",
      title: "1. Introduction",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p>
            Welcome to <strong>Ritesh Classes</strong> (referred to as "Ritesh Academy," "we," "us," or "our"). We operate a coaching institute offering foundation, board, and degree college courses based in Andheri East, Mumbai.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or fill out our online inquiry and admission forms. We respect your privacy and are committed to protecting the personal data of both students and parents/guardians.
          </p>
          <p>
            By accessing our website or submitting forms, you consent to the practices described in this Privacy Policy.
          </p>
        </div>
      )
    },
    {
      id: "collection",
      title: "2. Information We Collect",
      icon: Eye,
      content: (
        <div className="space-y-4">
          <p>
            We collect personal information that you voluntarily provide to us when registering interest, scheduling demo lectures, or submitting admission applications.
          </p>
          <div className="bg-indigo-50/50 border border-indigo-100/50 rounded-2xl p-5 space-y-3 mt-2">
            <h4 className="font-bold text-sm text-indigo-900 uppercase tracking-wider">
              Data Collected via Inquiry & Admission Forms:
            </h4>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
              <li><strong>Student Details:</strong> Full Name, Student Phone Number, WhatsApp Number, Email Address, Board/University (SSC, CBSE, ICSE, HSC, Mumbai University), Target Course/Program.</li>
              <li><strong>Parent/Guardian Details:</strong> Parent Name, Parent Contact Mobile Number.</li>
              <li><strong>Preferences:</strong> Preferred Batch Timings (Morning, Evening, Weekend, Flexible), Classroom Mode (Offline Classroom, Hybrid Lectures), and customized message requests.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "usage",
      title: "3. How We Use Your Information",
      icon: Lock,
      content: (
        <div className="space-y-4">
          <p>
            Ritesh Classes uses the collected information strictly for operational and academic purposes, including:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-650">
            <li>Processing your admission applications and scheduling the 2 complimentary demo lectures.</li>
            <li>Enabling expert academic counseling sessions with Prof. Ritesh Singh.</li>
            <li>Communicating batch schedules, exam dates, fee installment reminders, and syllabus updates.</li>
            <li>Sharing student weekly performance reports and Sunday mock test charts directly with parents.</li>
            <li>Maintaining database records for academic history tracking.</li>
          </ul>
        </div>
      )
    },
    {
      id: "security",
      title: "4. Data Protection & Security",
      icon: Key,
      content: (
        <div className="space-y-4">
          <p>
            We implement robust administrative, technical, and physical security measures to safeguard your personal credentials from unauthorized access, loss, misuse, or alteration.
          </p>
          <p>
            All submitted form data is encrypted during transmission and stored on secure servers with restricted administrative access. Despite our high security standards, no method of transmission over the Internet can be guaranteed 100% secure, and we cannot guarantee absolute security.
          </p>
        </div>
      )
    },
    {
      id: "thirdparty",
      title: "5. Third-Party Sharing",
      icon: Globe,
      content: (
        <div className="space-y-4">
          <p>
            We hold your privacy in high regard. Ritesh Classes **does not sell, trade, rent, or lease** student or parent contact details to third-party marketers or unrelated businesses.
          </p>
          <p>
            We may share details with third-party service providers only when necessary to execute services (e.g., SMS gateways for sending class updates, hosting platforms, or database backup services). These entities are contractually bound to maintain confidentiality and security protocols.
          </p>
        </div>
      )
    },
    {
      id: "rights",
      title: "6. Your Rights & Options",
      icon: UserCheck,
      content: (
        <div className="space-y-4">
          <p>
            As a student or parent, you have full control over the information you submit. You have the right to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-650">
            <li>Request a copy of the academic and personal details stored in our database records.</li>
            <li>Update or correct inaccurate contact numbers, WhatsApp handles, or email entries.</li>
            <li>Request the deletion of your inquiry details if you decide not to proceed with demo lectures.</li>
            <li>Opt out of receiving academic promotional calls or broadcast messages by contacting our office.</li>
          </ul>
        </div>
      )
    },
    {
      id: "contact",
      title: "7. Contact Privacy Team",
      icon: Mail,
      content: (
        <div className="space-y-6">
          <p>
            For any queries, concerns, or requests regarding this Privacy Policy, please feel free to reach out to our administration desk:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <Mail className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-sm text-gray-900">Email Address</h5>
                <a href="mailto:riteshacademy920@gmail.com" className="text-sm text-indigo-600 hover:underline">
                  riteshacademy920@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <Phone className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-sm text-gray-900">Contact Hotlines</h5>
                <p className="text-sm text-gray-600">
                  +91 81048 37019 <br />
                  +91 98217 67980
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 md:col-span-2">
              <MapPin className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-sm text-gray-900">Academy Address</h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Room No. 1, Mahakali Caves Road, Opp. Sai Baba Mandir, Near Bowlekar Ground, MMRDA Colony, Andheri East, Mumbai, Maharashtra 400093
                </p>
              </div>
            </div>
          </div>
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
            <Shield className="w-4 h-4 text-indigo-600" />
            <span>Privacy & Safety First</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto mt-4"
          >
            Last Updated: June 8, 2026. Learn about the policies we maintain to protect student records.
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
                Sections Table of Contents
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

          {/* Right Column: Policy Content */}
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

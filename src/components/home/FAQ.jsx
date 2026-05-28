"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What is the batch size for offline classes?",
    answer: "We strictly maintain a small batch size of 25-30 students to ensure every student gets personal attention and doubts are resolved effectively."
  },
  {
    question: "Do you provide free demo classes?",
    answer: "Yes! We offer a 2-day free demo class for all our courses. You can book it directly from our website using the form below."
  },
  {
    question: "Are study materials included in the fees?",
    answer: "Absolutely. Comprehensive study materials, including printed modules, DPPs (Daily Practice Problems), and premium PDF notes are included in the course fees."
  },
  {
    question: "How do you handle student doubts?",
    answer: "We have dedicated doubt-solving counters after every class. Additionally, students can ask doubts 24/7 through our dedicated mobile app."
  },
  {
    question: "Is there any refund policy?",
    answer: "We offer a flexible refund policy within the first week of joining if you feel our teaching methodology doesn't suit your learning style."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <div className="p-3 bg-indigo-100 rounded-2xl text-indigo-600">
              <MessageCircle className="w-8 h-8" />
            </div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Got questions? We've got answers. Here are some of the most common questions we get from parents and students.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white border ${openIndex === index ? 'border-indigo-500 shadow-md ring-1 ring-indigo-500' : 'border-gray-200 shadow-sm'} rounded-2xl overflow-hidden transition-all duration-300`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className={`text-lg font-bold pr-8 ${openIndex === index ? 'text-indigo-600' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-600 text-base leading-relaxed border-t border-gray-100 pt-4 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import Tag from "@/components/Tag";
import { faqs } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const Faq = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section className="py-24" id="faqs">
      <div className="container">
        <div className="flex justify-center">
          <Tag>FAQs</Tag>
        </div>
        <h2 className="text-6xl font-medium mt-6 text-center max-w-xl m-2 md:mx-auto">
          Questions? We got <span className="text-yellow-400">answers</span>
        </h2>
        <div className="mt-12 flex flex-col gap-6 max-w-2xl mx-auto">
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              className="bg-neutral-900 m-2 rounded-2xl border border-white/10 p-6 "
            >
              <div
                className="flex justify-between items-center"
                onClick={() => setSelectedIndex(faqIndex)}
              >
                <h3 className="font-medium">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={twMerge(
                    "feather feather-plus text-yellow-400 flex-shrink-0 transition duration-300",
                    selectedIndex === faqIndex && "rotate-45"
                  )}
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{ height: 0, marginTop: 0 }}
                    animate={{ height: "auto", marginTop: 24 }}
                    exit={{ height: 0, marginTop: 0 }}
                    className={twMerge("overflow-hidden")}
                  >
                    <p className="text-white/50">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

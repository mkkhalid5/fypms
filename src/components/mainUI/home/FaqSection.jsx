"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "@gravity-ui/icons";

// List of frequently asked questions and their answers
const FAQS = [
  {
    question: "What is FYPMS?",
    answer:
      "FYPMS is a shared academic workspace for managing final year project teams, supervisor selection, progress, presentations, defences, and reports.",
  },
  {
    question: "Who can use it?",
    answer:
      "Universities, department coordinators, project supervisors, and final year students can each access their own role-based workspace.",
  },
  {
    question: "How does team formation work?",
    answer:
      "Students register with their university email and create or join a three-member team before submitting project ideas.",
  },
  {
    question: "How are supervisors selected?",
    answer:
      "Teams submit three project titles along with four ranked supervisor preferences based on faculty expertise and availability.",
  },
  {
    question: "What if all preferred supervisors reject?",
    answer:
      "If a proposal is rejected four times, the system automatically escalates the case to the department coordinator for manual assignment.",
  },
];

const FaqSection = () => {
  // Tracks which FAQ item is currently open (0 means the first item starts open)
  const [openIndex, setOpenIndex] = useState(0);

  // Toggles the clicked FAQ item open or closed
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-[#F8FAFC]">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Left Column: Section Heading & Intro */}
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-[#18569c]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#0f1f38] sm:text-4xl">
              Helpful answers, without the guesswork
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600 sm:text-base">
              Learn how teams, supervisors, reviews, and access work in FYPMS.
            </p>
          </div>

          {/* Right Column: Accordion FAQ List */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {FAQS.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={item.question} className="py-5">
                    {/* Question Button */}
                    <button
                      type="button"
                      onClick={() => handleToggle(index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 text-left"
                    >
                      <span className="text-base font-semibold text-[#0f1f38] sm:text-lg">
                        {item.question}
                      </span>

                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#0f1f38] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Answer Text (shown only when open) */}
                    {isOpen && (
                      <p className="mt-3 pr-8 text-sm leading-relaxed text-slate-600 sm:text-base">
                        {item.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Link */}
            <div className="mt-8">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#18569c] transition-colors hover:text-[#134680] sm:text-base"
              >
                <span>View all questions</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default FaqSection;
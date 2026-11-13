import React from "react";
import Link from "next/link";
import { ArrowRight } from "@gravity-ui/icons";

// All 7 stages of the project lifecycle in order
const LIFECYCLE_STEPS = [
  { step: 1, title: "Register" },
  { step: 2, title: "Build team" },
  { step: 3, title: "Submit ideas" },
  { step: 4, title: "Get assigned" },
  { step: 5, title: "Develop" },
  { step: 6, title: "Defend" },
  { step: 7, title: "Complete" },
];

const LifecycleSection = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      {/* Section Header */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#18569c]">
          Complete Lifecycle
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0f1f38] sm:text-4xl">
          No stage gets lost between systems
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          Track the academic journey in sequence, from student registration
          through project completion.
        </p>
      </div>

      {/* 7-Step Timeline (2 columns on mobile, 4 on tablet, single row on desktop) */}
      <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:mt-16 lg:flex lg:items-start lg:justify-between lg:gap-0">
        {LIFECYCLE_STEPS.map((item, index) => {
          const isLastStep = index === LIFECYCLE_STEPS.length - 1;

          return (
            <div
              key={item.step}
              className="relative flex flex-col items-center text-center lg:flex-1"
            >
              {/* Horizontal connecting line between circles (desktop only) */}
              {!isLastStep && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute top-6 left-[calc(50%+32px)] right-[calc(-50%+32px)] h-px bg-slate-200"
                />
              )}

              {/* Step Number Circle */}
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-sm font-bold text-[#18569c] shadow-xs">
                {item.step}
              </div>

              {/* Step Label */}
              <p className="mt-3.5 text-sm font-semibold text-[#0f1f38]">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom Action Link */}
      <div className="mt-12 text-center">
        <Link
          href="/how-it-works"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#18569c] transition-colors hover:text-[#134680] sm:text-base"
        >
          <span>View detailed project workflow</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

export default LifecycleSection;
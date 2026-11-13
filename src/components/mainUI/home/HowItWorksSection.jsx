import React from "react";
import Link from "next/link";

// Data for the 4 main workflow steps
const STEPS = [
  {
    number: "01",
    title: "Student registration",
    description:
      "Students register with their university identity and verify their email.",
  },
  {
    number: "02",
    title: "Team formation",
    description:
      "Students create or join a three-member team before the published deadline.",
  },
  {
    number: "03",
    title: "Idea submission",
    description:
      "All three team members contribute project ideas for initial consideration.",
  },
  {
    number: "04",
    title: "Supervisor preferences",
    description:
      "The team submits four ranked preferences aligned with its proposed work.",
  },
];

const HowItWorksSection = () => {
  return (
    <section
      id="how-it-works"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8"
    >
      {/* Top Header Row: Title on left, Action button on right */}
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#18569c]">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0f1f38] sm:text-4xl">
            A guided path from idea to completion
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            FYPMS makes each stage visible, with responsibilities clearly assigned.
          </p>
        </div>

        {/* Right Action Button */}
        <div>
          <Link
            href="/how-it-works"
            variant="bordered"
            className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#0f1f38] shadow-xs transition-colors hover:bg-slate-50"
          >
            See the full process
          </Link>
        </div>
      </div>

      {/* 4-Step Responsive Grid (1 col mobile, 2 cols tablet, 4 cols desktop) */}
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {STEPS.map((item) => (
          <div key={item.number} className="flex flex-col">
            {/* Step Number Circle + Horizontal Connector Line (Desktop) */}
            <div className="flex items-center">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C8DDF7] bg-[#EAF2FC] text-xs font-bold text-[#18569c]">
                {item.number}
              </span>

              <div
                aria-hidden="true"
                className="ml-4 hidden h-px flex-1 bg-slate-200 lg:block"
              />
            </div>

            {/* Step Title */}
            <h3 className="mt-5 text-lg font-semibold text-[#0f1f38]">
              {item.title}
            </h3>

            {/* Step Description */}
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorksSection;
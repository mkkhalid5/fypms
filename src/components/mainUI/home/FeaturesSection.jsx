import React from "react";
import Link from "next/link";
import {
  PersonPlus,
  Bulb,
  ListCheck,
  SquareCheck,
  Calendar,
  CircleCheck,
  ArrowRight,
} from "@gravity-ui/icons";

// Data for the 6 core platform feature cards
const FEATURES = [
  {
    title: "Team formation",
    description:
      "Create or join a three-member project team using a clear, guided process.",
    Icon: PersonPlus,
  },
  {
    title: "Project idea submission",
    description:
      "Each team member contributes an idea for structured academic review.",
    Icon: Bulb,
  },
  {
    title: "Ranked supervisor preferences",
    description:
      "Teams rank four preferred supervisors based on expertise and availability.",
    Icon: ListCheck,
  },
  {
    title: "Supervisor assignment",
    description:
      "Coordinators manage decisions fairly while keeping every team informed.",
    Icon: SquareCheck,
  },
  {
    title: "Presentation scheduling",
    description:
      "Coordinate venues, panels, dates, and times from one shared schedule.",
    Icon: Calendar,
  },
  {
    title: "Project selection",
    description:
      "Record the selected proposal and establish a clear project direction.",
    Icon: CircleCheck,
  },
];

const FeaturesSection = () => {
  return (
    // Full-width light background matching the section design
    <section id="features" className="w-full bg-[#F8FAFC]">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#18569c]">
            Everything In One Place
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0f1f38] sm:text-4xl">
            A platform built around academic work
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Replace scattered messages and spreadsheets with a shared process that
            keeps everyone aligned.
          </p>
        </div>

        {/* 6-Card Responsive Grid (1 col mobile, 2 cols tablet, 3 cols desktop) */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const FeatureIcon = feature.Icon;

            return (
              <div
                key={feature.title}
                className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-7 shadow-xs transition-shadow hover:shadow-md"
              >
                {/* Soft Blue Icon Badge */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF2FC] text-[#18569c]">
                  <FeatureIcon className="h-5 w-5" />
                </div>

                {/* Feature Title */}
                <h3 className="mt-6 text-lg font-semibold text-[#0f1f38]">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Action Link */}
        <div className="mt-12 text-center">
          <Link
            href="/#how-it-works"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#18569c] transition-colors hover:text-[#134680] sm:text-base"
          >
            <span>Explore all platform features</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
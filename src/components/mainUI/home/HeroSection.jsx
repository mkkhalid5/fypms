import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { ArrowRight, CircleCheck } from "@gravity-ui/icons";

// 3 trust highlights shown below the CTA buttons
const TRUST_ITEMS = [
  "Role-based access",
  "Complete project lifecycle",
  "Academic oversight",
];

// Weekly activity bars for the dashboard preview chart
const ACTIVITY_BARS = [
  { week: "W1", height: "h-10", dark: false },
  { week: "W2", height: "h-14", dark: true },
  { week: "W3", height: "h-11", dark: false },
  { week: "W4", height: "h-16", dark: true },
  { week: "W5", height: "h-14", dark: false },
  { week: "W6", height: "h-20", dark: true },
  { week: "W7", height: "h-16", dark: false },
];

// Upcoming tasks shown inside the dashboard preview
const UPCOMING_ITEMS = [
  { title: "Research proposal", time: "Completed", done: true },
  { title: "Prototype review", time: "Fri 10:00", done: false },
  { title: "Progress report", time: "Next Monday", done: false },
];

// 3 value propositions at the bottom of the hero section
const VALUE_PILLARS = [
  {
    title: "One source of truth",
    description: "Every decision and deliverable, connected.",
  },
  {
    title: "Clear accountability",
    description: "The right actions for every academic role.",
  },
  {
    title: "Less administration",
    description: "Structured workflows reduce manual follow-up.",
  },
];

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b from-[#F4F8FD] via-white to-white">
      {/* Subtle light-blue decorative circle in the top-right background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#DCEAFB]/50"
      />

      {/* Main Hero Container */}
      <div className="relative mx-auto w-full max-w-7xl px-4 pt-12 pb-16 sm:px-6 md:pt-20 lg:px-8">
        
        {/* Top Centered Text & CTA */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF2FC] px-3.5 py-1.5 text-xs font-semibold text-[#18569c]">
            <span className="h-2 w-2 rounded-full bg-[#18569c]" />
            <span>Built for university project teams</span>
          </div>

          {/* Main Headline */}
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#0f1f38] sm:text-5xl lg:text-6xl">
            Manage final year projects{" "}
            <span className="text-[#18569c]">smarter.</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Bring team management, supervisor selection, project progress,
            presentations, defences and reports together in one academic platform.
          </p>

          {/* Primary & Secondary CTA Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/register/student"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#18569c] px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#134680] sm:w-auto sm:text-base"
            >
              <span>Get started</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/features"
              variant="bordered"
              className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-[#0f1f38] shadow-xs transition-colors hover:bg-slate-50 sm:w-auto sm:text-base"
            >
              Explore features
            </Link>
          </div>

          {/* 3 Trust Checkmarks */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-600 sm:text-sm">
            {TRUST_ITEMS.map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CircleCheck className="h-4 w-4 text-emerald-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Preview Card */}
        <div className="relative mx-auto mt-14 max-w-4xl">
          {/* Tilted soft-blue card behind the mockup */}
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-y-2 -rotate-1 rounded-3xl bg-[#DCE8F8]/70"
          />

          {/* Main White Mockup Window */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xl">
            
            {/* Mockup Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 sm:px-6">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#18569c] text-xs font-bold text-white">
                  F
                </span>
                <div className="hidden rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-400 sm:block sm:w-64">
                  Search projects...
                </div>
              </div>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EAF2FC] text-xs font-bold text-[#18569c]">
                AK
              </span>
            </div>

            {/* Mockup Body: Mini Sidebar + Workspace Content */}
            <div className="flex">
              {/* Left Mini Sidebar (hidden on small mobile) */}
              <div className="hidden w-14 flex-col items-center gap-3 border-r border-slate-100 bg-slate-50/50 py-5 sm:flex">
                <span className="h-4 w-4 rounded bg-[#18569c]" />
                <span className="h-4 w-4 rounded bg-slate-200" />
                <span className="h-4 w-4 rounded bg-slate-200" />
                <span className="h-4 w-4 rounded bg-slate-200" />
                <span className="h-4 w-4 rounded bg-slate-200" />
              </div>

              {/* Workspace Main Content */}
              <div className="flex-1 p-5 sm:p-7">
                {/* Greeting Row */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Student Workspace
                    </p>
                    <h3 className="mt-0.5 text-lg font-bold text-[#0f1f38]">
                      Good morning, Amina
                    </h3>
                  </div>
                  <span className="rounded-full bg-[#EAF2FC] px-3 py-1 text-xs font-semibold text-[#18569c]">
                    Team Orion
                  </span>
                </div>

                {/* 3 KPI Cards */}
                <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
                  {/* Overall Progress */}
                  <div className="rounded-xl border border-slate-100 bg-slate-50/40 p-4">
                    <p className="text-xs text-slate-500">Overall progress</p>
                    <p className="mt-1 text-base font-bold text-[#0f1f38]">68%</p>
                    <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-[68%] rounded-full bg-[#18569c]" />
                    </div>
                  </div>

                  {/* Next Milestone */}
                  <div className="rounded-xl border border-slate-100 bg-slate-50/40 p-4">
                    <p className="text-xs text-slate-500">Next milestone</p>
                    <p className="mt-1 text-sm font-bold text-[#0f1f38]">
                      Prototype review
                    </p>
                    <p className="mt-1 text-xs text-slate-400">Due in 5 days</p>
                  </div>

                  {/* Supervisor */}
                  <div className="rounded-xl border border-slate-100 bg-slate-50/40 p-4">
                    <p className="text-xs text-slate-500">Supervisor</p>
                    <p className="mt-1 text-sm font-bold text-[#0f1f38]">
                      Dr. Sara Ahmed
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Last feedback 2d ago
                    </p>
                  </div>
                </div>

                {/* Activity Chart & Upcoming List */}
                <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-12">
                  {/* Project Activity Bar Chart */}
                  <div className="rounded-xl border border-slate-100 p-4 lg:col-span-7">
                    <p className="text-xs font-bold text-[#0f1f38]">
                      Project activity
                    </p>
                    <div className="mt-6 flex h-24 items-end justify-between gap-2 border-b border-slate-100 pb-2">
                      {ACTIVITY_BARS.map((bar) => (
                        <div
                          key={bar.week}
                          className="flex flex-1 flex-col items-center gap-1.5"
                        >
                          <div
                            className={`w-3 rounded-t-md sm:w-4 ${bar.height} ${
                              bar.dark ? "bg-[#18569c]" : "bg-[#93C0F5]"
                            }`}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mt-1.5 flex justify-between text-[10px] text-slate-400">
                      {ACTIVITY_BARS.map((bar) => (
                        <span key={bar.week} className="flex-1 text-center">
                          {bar.week}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming Milestones */}
                  <div className="rounded-xl border border-slate-100 p-4 lg:col-span-5">
                    <p className="text-xs font-bold text-[#0f1f38]">Upcoming</p>
                    <div className="mt-3.5 space-y-3">
                      {UPCOMING_ITEMS.map((item) => (
                        <div key={item.title} className="flex items-start gap-2.5">
                          <span
                            className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                              item.done
                                ? "bg-emerald-600"
                                : "border border-slate-300 bg-white"
                            }`}
                          />
                          <div>
                            <p className="text-xs font-semibold text-[#0f1f38]">
                              {item.title}
                            </p>
                            <p className="text-[11px] text-slate-400">
                              {item.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom 3-Column Value Strip */}
      <div className="border-t border-slate-200/80 bg-white">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 divide-y divide-slate-200/80 px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
          {VALUE_PILLARS.map((pillar) => (
            <div key={pillar.title} className="py-6 md:px-8 md:first:pl-0">
              <h3 className="text-sm font-bold text-[#0f1f38]">
                {pillar.title}
              </h3>
              <p className="mt-1 text-sm text-slate-500">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
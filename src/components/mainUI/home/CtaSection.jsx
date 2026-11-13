import React from "react";
import Link from "next/link";
import { ArrowRight } from "@gravity-ui/icons";

export default function CtaSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      {/* Main dark navy CTA banner */}
      <div className="relative flex flex-col justify-between gap-10 overflow-hidden rounded-3xl bg-[#0B2547] px-6 py-12 sm:px-12 sm:py-14 lg:flex-row lg:items-center lg:px-20 lg:py-16">
        
        {/* Subtle decorative circle in the top-right corner */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-[#1a3e6e]/60"
        />

        {/* Left side: Heading and description */}
        <div className="relative z-10 max-w-xl text-white">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#83BFF8]">
            Bring clarity to every project
          </p>

          <h3 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
            Ready to organize your <br className="hidden sm:block" /> final year journey?
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-[#BDCCDC] sm:text-base">
            Students can create an account now.{" "}
            <br className="hidden sm:block" />
            University staff access is securely provisioned.
          </p>
        </div>

        {/* Right side: Action button and secondary link */}
        <div className="relative z-10 flex flex-col items-start lg:items-center">
          <Link
            href="/register/student"
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-[#0B2547] shadow-sm transition-colors hover:bg-slate-100 sm:text-base"
          >
            <span>Create student account</span>
            <ArrowRight />
          </Link>

          <Link
            href="/#contact"
            className="mt-3 text-sm text-[#BCD6F0] underline underline-offset-4 transition-colors hover:text-white"
          >
            Talk to your coordinator
          </Link>
        </div>
      </div>
    </section>
  );
}
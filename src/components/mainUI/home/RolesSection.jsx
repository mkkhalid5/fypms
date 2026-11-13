import React from "react";
import { GraduationCap, Person, BranchesRight, Gear } from "@gravity-ui/icons";

// Data for all 4 user roles in the system
const ROLES = [
  {
    eyebrow: "Plan and deliver",
    title: "Student",
    description:
      "Form a team, submit ideas and preferences, complete milestones, and respond to feedback.",
    Icon: GraduationCap,
  },
  {
    eyebrow: "Guide and review",
    title: "Supervisor",
    description:
      "Review requests, advise assigned teams, monitor progress, and provide academic feedback.",
    Icon: Person,
  },
  {
    eyebrow: "Coordinate the lifecycle",
    title: "Coordinator",
    description:
      "Oversee assignments, schedules, milestones, panels, and academic workflow decisions.",
    Icon: BranchesRight,
  },
  {
    eyebrow: "Govern the platform",
    title: "Admin",
    description:
      "Provision authorized accounts, maintain core settings, and support secure operation.",
    Icon: Gear,
  },
];

const RolesSection = () => {
  return (
    // Full-width dark navy background
    <section className="w-full bg-[#0B2547]">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#83BFF8]">
            Purpose-Built Access
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            The right workspace for every role
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#BDCCDC] sm:text-base">
            Each person sees the tools and decisions relevant to their responsibilities.
          </p>
        </div>

        {/* 4-Card Responsive Grid (1 col mobile, 2 cols tablet, 4 cols desktop) */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {ROLES.map((role) => {
            const RoleIcon = role.Icon;

            return (
              <div
                key={role.title}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/4 p-6 transition-colors hover:border-[#83BFF8]/40 hover:bg-white/[0.07] sm:p-7"
              >
                {/* Role Icon Box */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-[#83BFF8]">
                  <RoleIcon className="h-5 w-5" />
                </div>

                {/* Role Eyebrow */}
                <p className="mt-6 text-[11px] font-bold uppercase tracking-wider text-[#83BFF8]">
                  {role.eyebrow}
                </p>

                {/* Role Title */}
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {role.title}
                </h3>

                {/* Short Blue Accent Line */}
                <div className="my-4 h-0.5 w-7 rounded-full bg-[#3B82F6]" />

                {/* Role Description */}
                <p className="text-sm leading-relaxed text-[#BDCCDC]">
                  {role.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default RolesSection;
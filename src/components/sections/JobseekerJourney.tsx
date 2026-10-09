import React from "react";
import { Container } from "@/components/ui/Container";

const CANDIDATE_STEPS = [
  {
    step: "01",
    label: "PROFILE SETUP",
    title: "Create your profile or upload your resume",
    description:
      "Upload your existing resume or build your verified profile in minutes to highlight what you bring to the table.",
    accent: "bg-[#4F46E5]",
    labelColor: "text-[#4F46E5]",
    cardBg: "bg-[#F8F8FF]",
    border: "border-indigo-100",
    hoverBorder: "hover:border-indigo-300",
  },
  {
    step: "02",
    label: "SMART MATCHING",
    title: "Discover matching opportunities",
    description:
      "Review roles matched to your actual competencies and career goals, with zero keyword noise or spam applications.",
    accent: "bg-sky-500",
    labelColor: "text-sky-600",
    cardBg: "bg-[#F5FBFF]",
    border: "border-sky-100",
    hoverBorder: "hover:border-sky-300",
  },
  {
    step: "03",
    label: "ROLE CLARITY",
    title: "Explore roles that fit your experience",
    description:
      "Review transparent salary benchmarks, tech stack details, and team expectations — with complete clarity before you apply.",
    accent: "bg-violet-500",
    labelColor: "text-violet-600",
    cardBg: "bg-[#FAF8FF]",
    border: "border-violet-100",
    hoverBorder: "hover:border-violet-300",
  },
  {
    step: "04",
    label: "MOVE FORWARD",
    title: "Apply and move forward",
    description:
      "Submit verified applications directly to decision makers and track your interview rounds seamlessly from one place.",
    accent: "bg-emerald-500",
    labelColor: "text-emerald-600",
    cardBg: "bg-[#F4FAF6]",
    border: "border-emerald-100",
    hoverBorder: "hover:border-emerald-300",
  },
];

export function JobseekerJourney() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#FAF9F6] border-t border-slate-100">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.15] mb-4">
            From your profile to{" "}
            <span className="text-[#4F46E5]">moving forward.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-normal max-w-lg mx-auto leading-relaxed">
            A transparent 4-step journey to discovering roles that respect your
            time and expertise.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CANDIDATE_STEPS.map((item) => (
            <div
              key={item.step}
              className={`
                group relative flex flex-col justify-between
                ${item.cardBg} border ${item.border} ${item.hoverBorder}
                rounded-[24px] p-7
                hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1.5
                transition-all duration-300 ease-out cursor-default
              `}
            >
              <div>
                {/* Header row: label + step number */}
                <div className="flex items-start justify-between mb-8">
                  <span
                    className={`text-[10px] font-bold tracking-[0.15em] uppercase leading-none mt-0.5 ${item.labelColor}`}
                  >
                    {item.label}
                  </span>
                  <span className="text-[34px] font-bold text-slate-200/70 group-hover:text-slate-300 leading-none select-none -mt-1 transition-colors duration-300">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-[17px] font-semibold text-slate-900 tracking-tight leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Animated accent underline */}
              <div className="mt-8">
                <div
                  className={`h-[3px] w-10 rounded-full ${item.accent} group-hover:w-16 transition-all duration-300 ease-out`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom assurance note */}
        <div className="text-center mt-12">
          <p className="text-xs text-slate-400 font-normal tracking-wide">
            No resume black holes &nbsp;•&nbsp; Private profile options &nbsp;•&nbsp; Direct employer engagement
          </p>
        </div>
      </Container>
    </section>
  );
}

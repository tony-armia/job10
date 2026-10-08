import React from "react";
import { Container } from "@/components/ui/Container";
import { UserCheck, Sparkles, Compass, Send, ArrowRight } from "lucide-react";

const CANDIDATE_STEPS = [
  {
    step: 1,
    title: "Create your profile or upload your resume",
    description:
      "Upload your existing resume or build your verified profile in minutes to highlight what you bring.",
    icon: <UserCheck className="w-5 h-5 text-[#4F46E5]" />,
    badgeClass: "bg-indigo-50 text-indigo-700 border-indigo-150",
    cardBg: "bg-white hover:border-indigo-300",
  },
  {
    step: 2,
    title: "Discover matching opportunities",
    description:
      "Review roles matched to your actual competencies and career goals, with zero keyword spam.",
    icon: <Sparkles className="w-5 h-5 text-sky-600" />,
    badgeClass: "bg-sky-50 text-sky-700 border-sky-150",
    cardBg: "bg-white hover:border-sky-300",
  },
  {
    step: 3,
    title: "Explore roles that fit your experience",
    description:
      "Review transparent salary benchmarks, tech stack details, and team expectations with complete clarity.",
    icon: <Compass className="w-5 h-5 text-[#EA580C]" />,
    badgeClass: "bg-orange-50 text-orange-700 border-orange-150",
    cardBg: "bg-white hover:border-orange-300",
  },
  {
    step: 4,
    title: "Apply and move forward",
    description:
      "Submit verified applications directly to decision makers and track your interview rounds seamlessly.",
    icon: <Send className="w-5 h-5 text-emerald-600" />,
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-150",
    cardBg: "bg-white hover:border-emerald-300",
  },
];

export function JobseekerJourney() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#FAF9F6] border-t border-slate-100">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-4">
            From your profile to <span className="text-[#EA580C]">moving forward.</span>
          </h2>
          <p className="text-base text-slate-600 font-normal max-w-lg mx-auto">
            A concise, transparent 4-stage journey to discovering roles that respect your time and expertise.
          </p>
        </div>

        {/* 4 Connected Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-12">
          {CANDIDATE_STEPS.map((item, index) => (
            <div
              key={item.step}
              className={`rounded-3xl p-7 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group ${item.cardBg}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`inline-flex items-center text-xs font-bold px-3 py-1 rounded-full border ${item.badgeClass}`}
                  >
                    Step 0{item.step}
                  </span>
                  <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100 shadow-2xs">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Progress indicator */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>Phase {item.step} of 4</span>
                {index < 3 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-500 transition-colors hidden lg:block" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Assurance Note */}
        <div className="text-center">
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            No resume black holes • Private profile options • Direct employer engagement
          </p>
        </div>
      </Container>
    </section>
  );
}

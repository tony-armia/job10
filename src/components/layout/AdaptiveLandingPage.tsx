"use client";

import React, { useRef, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { RecruiterHero } from "@/components/sections/heroes/RecruiterHero";
import { JobseekerHero } from "@/components/sections/heroes/JobseekerHero";
import { GuestHero } from "@/components/sections/heroes/GuestHero";
import { RecruiterAdvantage } from "@/components/sections/RecruiterAdvantage";
import { JobseekerBenefits } from "@/components/sections/JobseekerBenefits";
import { PopularJobs } from "@/components/sections/PopularJobs";
import { RecruitmentFeatures } from "@/components/sections/RecruitmentFeatures";
import { HiringJourney } from "@/components/sections/HiringJourney";
import { JobseekerJourney } from "@/components/sections/JobseekerJourney";
import { AudienceCTA } from "@/components/sections/AudienceCTA";
import { ResumeUpload } from "@/components/sections/ResumeUpload";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/layout/Footer";
import { AudienceModal } from "@/components/audience/AudienceModal";
import { useAudience } from "@/context/AudienceContext";

export function AdaptiveLandingPage() {
  const { audience, setAudience, isModalOpen, closeModal, hasInitialized } = useAudience();
  const prevAudienceRef = useRef(audience);

  useEffect(() => {
    if (prevAudienceRef.current !== audience) {
      prevAudienceRef.current = audience;
      if (typeof window !== "undefined") {
        if (window.location.hash) {
          window.history.replaceState(null, "", window.location.pathname);
        }
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        });
      }
    }
  }, [audience]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-indigo-100 selection:text-[#4F46E5]">
      {/* 1. Dynamic Header with audience-tailored navigation & switch trigger */}
      <Header />

      <main className="flex-1">
        {/* RECRUITER EXPERIENCE */}
        {audience !== "jobseeker" && (
          <>
            <RecruiterHero />
            <RecruiterAdvantage />
            <RecruitmentFeatures />
            <HiringJourney />
            <FAQSection />
            <AudienceCTA role="recruiter" />
          </>
        )}

        {/* JOBSEEKER EXPERIENCE */}
        {audience === "jobseeker" && (
          <>
            <JobseekerHero />
            <ResumeUpload />
            <PopularJobs />
            <JobseekerBenefits />
            <JobseekerJourney />
            <FAQSection />
            <AudienceCTA role="jobseeker" />
          </>
        )}
      </main>

      {/* Dynamic Grounded Footer */}
      <Footer />

      {/* Audience Selection Popup / Modal */}
      {hasInitialized && (
        <AudienceModal
          isOpen={isModalOpen}
          onClose={() => closeModal(true)}
          onSelectRole={(role) => setAudience(role)}
        />
      )}
    </div>
  );
}

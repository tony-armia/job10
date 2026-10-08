"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { RecruiterHero } from "@/components/sections/heroes/RecruiterHero";
import { JobseekerHero } from "@/components/sections/heroes/JobseekerHero";
import { GuestHero } from "@/components/sections/heroes/GuestHero";
import { RecruiterAdvantage } from "@/components/sections/RecruiterAdvantage";
import { TalentVaultSpotlight } from "@/components/sections/TalentVaultSpotlight";
import { JobseekerBenefits } from "@/components/sections/JobseekerBenefits";
import { PopularJobs } from "@/components/sections/PopularJobs";
import { RecruitmentFeatures } from "@/components/sections/RecruitmentFeatures";
import { HiringJourney } from "@/components/sections/HiringJourney";
import { JobseekerJourney } from "@/components/sections/JobseekerJourney";
import { AudienceCTA } from "@/components/sections/AudienceCTA";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/layout/Footer";
import { AudienceModal } from "@/components/audience/AudienceModal";
import { useAudience } from "@/context/AudienceContext";

export function AdaptiveLandingPage() {
  const { audience, setAudience, isModalOpen, closeModal, hasInitialized } = useAudience();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-indigo-100 selection:text-[#4F46E5]">
      {/* 1. Dynamic Header with audience-tailored navigation & switch trigger */}
      <Header />

      <main className="flex-1">
        {/* RECRUITER EXPERIENCE */}
        {audience === "recruiter" && (
          <>
            <RecruiterHero />
            <RecruiterAdvantage />
            <RecruitmentFeatures />
            <HiringJourney />
            <TalentVaultSpotlight />
            <AudienceCTA role="recruiter" />
            <FAQSection />
          </>
        )}

        {/* JOBSEEKER EXPERIENCE */}
        {audience === "jobseeker" && (
          <>
            <JobseekerHero />
            <PopularJobs />
            <JobseekerBenefits />
            <JobseekerJourney />
            <AudienceCTA role="jobseeker" />
            <FAQSection />
          </>
        )}

        {/* GUEST EXPERIENCE (Balanced Complete Overview) */}
        {audience === "guest" && (
          <>
            <GuestHero />
            <PopularJobs />
            <JobseekerBenefits />
            <RecruitmentFeatures />
            <HiringJourney />
            <FAQSection />
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

import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { PopularJobs } from "@/components/sections/PopularJobs";
import { RecruitmentFeatures } from "@/components/sections/RecruitmentFeatures";
import { HiringJourney } from "@/components/sections/HiringJourney";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-indigo-100 selection:text-[#4F46E5]">
      {/* 1. Header / Navigation */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Popular Jobs */}
        <PopularJobs />

        {/* 4. Recruitment Solutions */}
        <RecruitmentFeatures />

        {/* 5. Hiring Journey */}
        <HiringJourney />

        {/* 6. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}

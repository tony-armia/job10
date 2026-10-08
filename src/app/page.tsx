import React from "react";
import { AudienceProvider } from "@/context/AudienceContext";
import { AdaptiveLandingPage } from "@/components/layout/AdaptiveLandingPage";

export default function Home() {
  return (
    <AudienceProvider>
      <AdaptiveLandingPage />
    </AudienceProvider>
  );
}

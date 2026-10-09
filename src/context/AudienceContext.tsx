"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Audience } from "@/types/audience";

interface AudienceContextValue {
  audience: Audience;
  setAudience: (newAudience: Audience) => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: (fallbackToGuest?: boolean) => void;
  hasInitialized: boolean;
}

const AudienceContext = createContext<AudienceContextValue | undefined>(undefined);

export function AudienceProvider({ children }: { children: React.ReactNode }) {
  const [audience, setAudienceState] = useState<Audience>("recruiter");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("job10_audience_role") as Audience | null;
      if (stored && (stored === "recruiter" || stored === "jobseeker")) {
        setAudienceState(stored);
        setIsModalOpen(false);
      } else {
        // First visit: open selection modal automatically
        setIsModalOpen(true);
      }
    } catch {
      setIsModalOpen(true);
    } finally {
      setHasInitialized(true);
    }
  }, []);

  // Scroll locking when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const setAudience = (newAudience: Audience) => {
    // Restrict to active roles
    const safeRole = newAudience === "guest" ? "recruiter" : newAudience;
    setAudienceState(safeRole);
    setIsModalOpen(false);
    try {
      localStorage.setItem("job10_audience_role", safeRole);
    } catch {}
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (fallbackToDefault = false) => {
    setIsModalOpen(false);
    if (fallbackToDefault && !localStorage.getItem("job10_audience_role")) {
      setAudience("recruiter");
    }
  };

  return (
    <AudienceContext.Provider
      value={{
        audience,
        setAudience,
        isModalOpen,
        openModal,
        closeModal,
        hasInitialized,
      }}
    >
      {children}
    </AudienceContext.Provider>
  );
}

export function useAudience() {
  const context = useContext(AudienceContext);
  if (!context) {
    throw new Error("useAudience must be used within an AudienceProvider");
  }
  return context;
}

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  Sparkles,
  Search,
  Filter,
  Database,
  Tag,
  UserCheck,
  FolderLock,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Clock,
  History,
  Layers,
} from "lucide-react";

export function TalentVaultSpotlight() {
  return (
    <section id="vault" className="py-24 md:py-32 bg-white border-t border-slate-100 relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15] mb-4">
            Great candidates deserve{" "}
            <span className="text-[#192CE7]">more than a spreadsheet.</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Keep your talent pool organized, searchable, and ready for future hiring opportunities — without letting promising contacts go cold.
          </p>
        </div>

        {/* Polished Product Visualization: The Private Talent Vault UI */}
        <div className="max-w-5xl mx-auto bg-[#FAF9FD] rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl shadow-indigo-950/5 mb-14">
          {/* Top Control Bar: Search & Tag Filter Simulation */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs mb-6">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              <div className="flex items-center gap-3 bg-slate-50 border border-slate-200/70 rounded-xl px-4 py-2.5 flex-1">
                <Search className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-500 font-normal">
                  Search by skill, previous interview stage, or domain experience...
                </span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-50 text-[#192CE7] border border-indigo-100">
                  <Tag className="w-3 h-3" />
                  <span>Role: Staff / Lead</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100">
                  <UserCheck className="w-3 h-3" />
                  <span>Open to Contact</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 border border-slate-200">
                  <Filter className="w-3 h-3 text-slate-500" />
                  <span>More Filters</span>
                </span>
              </div>
            </div>
          </div>

          {/* Database Candidate Records */}
          <div className="space-y-3.5 mb-6">
            {/* Record 1 */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:border-indigo-300 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                  AK
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-bold text-slate-900">
                      Alexandre Keller
                    </h4>
                    <span className="text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200/70 px-2 py-0.5 rounded-md">
                      Silver Medalist • Q1 Final Round
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-normal">
                    Principal Backend Architect • Distributed Systems, Go, Kafka
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>Interviewed 2 mos ago</span>
                </span>
                <button
                  type="button"
                  className="text-xs font-bold text-[#192CE7] bg-indigo-50 hover:bg-indigo-100 px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  Re-Engage Candidate
                </button>
              </div>
            </div>

            {/* Record 2 */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:border-indigo-300 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                  ML
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-bold text-slate-900">
                      Maya Lindqvist
                    </h4>
                    <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/70 px-2 py-0.5 rounded-md">
                      Available for Q3 Projects
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-normal">
                    Head of Product Design • Design Systems, B2B SaaS
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <Bookmark className="w-3 h-3 text-emerald-600" />
                  <span>Saved to &quot;Core Design&quot;</span>
                </span>
                <button
                  type="button"
                  className="text-xs font-bold text-[#192CE7] bg-indigo-50 hover:bg-indigo-100 px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  View Profile
                </button>
              </div>
            </div>

            {/* Record 3 */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:border-indigo-300 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 opacity-90">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                  RN
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-bold text-slate-900">
                      Rahul Nair
                    </h4>
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                      Archived for Senior Opening
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-normal">
                    Senior Data Platform Engineer • Snowflake, dbt, Python
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <History className="w-3 h-3 text-slate-400" />
                  <span>Screened in Dec</span>
                </span>
                <button
                  type="button"
                  className="text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  View Notes
                </button>
              </div>
            </div>
          </div>

          {/* Database Footer Status */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 pt-3 border-t border-slate-200/70">
            <div className="flex items-center gap-2 font-medium">
              <Database className="w-4 h-4 text-[#192CE7]" />
              <span>Private & confidential to your hiring organization only</span>
            </div>
            <span className="text-[11px] text-slate-400">
              Product interface mockup • Illustrative candidate records
            </span>
          </div>
        </div>

        {/* 3 Core Value Props of the Vault */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#192CE7] flex items-center justify-center font-bold mb-4">
              <History className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-2">
              Retain Past Silver Medalists
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              When an exceptional candidate comes second in a final round, keep their record tagged and accessible so you don&apos;t have to start from scratch when your next headcount opens.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center font-bold mb-4">
              <Search className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-2">
              Fast, Granular Filtering
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Find previously interviewed specialists by programming language, seniority, location, or interviewer notes in seconds rather than digging through spreadsheet tabs.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold mb-4">
              <FolderLock className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-2">
              Permanent Team Asset
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Your candidate database stays with your organization even as internal recruiters or hiring managers change, ensuring institutional recruitment knowledge is never lost.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FOOTER_DATA } from "@/data/landing";

export function Footer() {
  return (
    <footer className="bg-[#0b0f19] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 pr-0 lg:pr-8">
            <Link href="/" className="flex items-center gap-1.5 mb-4 group">
              <span className="text-2xl font-black tracking-tight text-[#6366F1]">
                Job
              </span>
              <span className="text-2xl font-black tracking-tight text-white">
                10
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] ml-0.5" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              {FOOTER_DATA.about}
            </p>
          </div>

          {/* Quick Links / Content */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Content
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_DATA.quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_DATA.contact.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Follow Us */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm mb-6">
              {FOOTER_DATA.legal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Follow Us
            </h4>
            <ul className="flex flex-wrap gap-3 text-sm">
              {FOOTER_DATA.socials.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-[#6366F1] transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Job10. All rights reserved.</p>
          <p>Designed for high-performance talent matching.</p>
        </div>
      </Container>
    </footer>
  );
}

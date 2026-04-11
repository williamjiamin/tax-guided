"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmailCaptureBanner } from "@/components/tools/EmailCaptureBanner";

interface StateInfo {
  name: string;
  requirement: string;
  deadline: string;
  fee: string;
  website: string;
  websiteLabel: string;
}

const STATE_DATA: Record<string, StateInfo> = {
  wyoming: {
    name: "Wyoming",
    requirement: "Annual report required",
    deadline: "First day of the anniversary month of formation",
    fee: "$60",
    website: "https://soswy.state.wy.us",
    websiteLabel: "soswy.state.wy.us",
  },
  delaware: {
    name: "Delaware",
    requirement: "Annual report required",
    deadline: "June 1",
    fee: "$300",
    website: "https://corp.delaware.gov",
    websiteLabel: "corp.delaware.gov",
  },
  "new-mexico": {
    name: "New Mexico",
    requirement: "No annual report required",
    deadline: "N/A",
    fee: "$0",
    website: "",
    websiteLabel: "",
  },
  florida: {
    name: "Florida",
    requirement: "Annual report required",
    deadline: "May 1",
    fee: "$138.75",
    website: "https://sunbiz.org",
    websiteLabel: "sunbiz.org",
  },
  texas: {
    name: "Texas",
    requirement: "No annual report, but franchise tax due",
    deadline: "May 15 (franchise tax)",
    fee: "Varies",
    website: "https://comptroller.texas.gov",
    websiteLabel: "comptroller.texas.gov",
  },
  nevada: {
    name: "Nevada",
    requirement: "Annual list required",
    deadline: "Anniversary month",
    fee: "$150",
    website: "https://nvsos.gov",
    websiteLabel: "nvsos.gov",
  },
  california: {
    name: "California",
    requirement: "Statement of Information required within 90 days of formation, then biennial",
    deadline: "Within 90 days, then every 2 years",
    fee: "$20",
    website: "https://bizfileonline.sos.ca.gov",
    websiteLabel: "bizfileOnline.sos.ca.gov",
  },
  colorado: {
    name: "Colorado",
    requirement: "Periodic report required",
    deadline: "Anniversary month",
    fee: "$10",
    website: "",
    websiteLabel: "",
  },
  washington: {
    name: "Washington",
    requirement: "Annual report required",
    deadline: "Anniversary of formation",
    fee: "$60",
    website: "",
    websiteLabel: "",
  },
  georgia: {
    name: "Georgia",
    requirement: "Annual registration required",
    deadline: "April 1",
    fee: "$50",
    website: "",
    websiteLabel: "",
  },
};

const STATE_OPTIONS = [
  { value: "", label: "Select a state..." },
  { value: "wyoming", label: "Wyoming" },
  { value: "delaware", label: "Delaware" },
  { value: "new-mexico", label: "New Mexico" },
  { value: "florida", label: "Florida" },
  { value: "texas", label: "Texas" },
  { value: "nevada", label: "Nevada" },
  { value: "california", label: "California" },
  { value: "colorado", label: "Colorado" },
  { value: "washington", label: "Washington" },
  { value: "georgia", label: "Georgia" },
];

export function StateReportGuideClient() {
  const [selectedState, setSelectedState] = useState("");

  const stateInfo = selectedState ? STATE_DATA[selectedState] : null;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="max-w-2xl mx-auto px-6 py-16">
          <div className="inline-flex items-center gap-2 bg-purple-100/80 text-purple-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
            FREE TOOL
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            State Annual Report Guide
          </h1>
          <p className="text-lg text-gray-500 mb-10">
            Find your state&apos;s annual report requirements, deadlines, fees, and filing instructions for foreign-owned LLCs.
          </p>

          {/* State Selector */}
          <div className="mb-8">
            <label
              htmlFor="state-select"
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              Select your state of formation
            </label>
            <select
              id="state-select"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            >
              {STATE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* State Info Card */}
          {stateInfo && (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
              <h2 className="text-xl font-extrabold text-gray-900 mb-4">
                {stateInfo.name}
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Requirement
                  </div>
                  <div className="text-sm text-gray-700">
                    {stateInfo.requirement}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Deadline
                  </div>
                  <div className="text-sm text-gray-700">
                    {stateInfo.deadline}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Fee
                  </div>
                  <div className="text-sm text-gray-700 font-semibold">
                    {stateInfo.fee}
                  </div>
                </div>
                {stateInfo.website && (
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Filing Website
                    </div>
                    <a
                      href={stateInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-purple-600 hover:text-purple-800 underline underline-offset-2"
                    >
                      {stateInfo.websiteLabel} &rarr;
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Consultation CTA */}
          <div className="bg-purple-50/50 rounded-2xl border border-purple-100 p-6 text-center">
            <p className="text-sm text-purple-700 font-medium mb-3">
              Need personalized help with your state filing?
            </p>
            <a
              href="/consultation"
              className="inline-flex items-center px-5 py-2.5 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors text-sm"
            >
              Book a Guidance Session &mdash; $50
            </a>
          </div>

          <EmailCaptureBanner />
        </div>
      </main>

      <Footer />
    </div>
  );
}

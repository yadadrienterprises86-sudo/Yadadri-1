"use client";

import Link from "next/link";
import { Hammer, ArrowLeft } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Link href="/" className="inline-flex items-center space-x-2 text-amber-400 hover:text-amber-500 font-bold transition-all text-sm mb-4">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center space-x-3 mb-6">
          <Hammer className="h-8 w-8 text-amber-400" />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Terms & Conditions</h1>
        </div>

        <p className="text-slate-400 text-xs font-semibold">Last Updated: July 3, 2026</p>

        <div className="space-y-6 text-sm text-slate-300 leading-relaxed font-medium">
          <p>
            Welcome to Sri Yadadri Enterprises website. By accessing or using this website, you agree to comply with and be bound by the following terms and conditions of use.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">1. Use of the Site</h2>
          <p>
            The content on the pages of this Site is for your general information and reference only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">2. Intellectual Property</h2>
          <p>
            All trademarks, logos, designs, text, and imagery displayed on this Site are the property of Sri Yadadri Enterprises or utilized under royalty-free licenses from third-party sites. Copying or redistribution of these assets is prohibited without written authorization.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">3. Quotations & Service Contracts</h2>
          <p>
            All proposals, estimations, and quotes provided via contact forms, phone calls, or emails are non-binding estimates. Final rates, machinery lease terms, operator shift allocations, and site liability conditions are governed strictly by the formal printed and signed contract agreements between Sri Yadadri Enterprises and the client.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">4. Liability Limitation</h2>
          <p>
            While we strive to ensure that all information on this Site is accurate and current, Sri Yadadri Enterprises makes no warranties of any kind regarding completeness, timeliness, or reliability. In no event shall we be liable for any loss or damage arising out of the use of this website.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">5. Governing Law</h2>
          <p>
            Your use of this Site and any dispute arising out of such use is subject to the laws of the State of Telangana and the jurisdiction of courts in Hyderabad, India.
          </p>
        </div>

      </div>
    </div>
  );
}

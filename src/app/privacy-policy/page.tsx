"use client";

import Link from "next/link";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Link href="/" className="inline-flex items-center space-x-2 text-amber-400 hover:text-amber-500 font-bold transition-all text-sm mb-4">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center space-x-3 mb-6">
          <ShieldAlert className="h-8 w-8 text-amber-400" />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Privacy Policy</h1>
        </div>

        <p className="text-slate-400 text-xs font-semibold">Last Updated: July 3, 2026</p>

        <div className="space-y-6 text-sm text-slate-300 leading-relaxed font-medium">
          <p>
            Welcome to Sri Yadadri Enterprises (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). We respect your privacy and are committed to protecting any personally identifiable information you may provide through our website <span className="text-amber-400 font-bold">www.yadadrienterprises.com</span> (the &ldquo;Site&rdquo;).
          </p>

          <h2 className="text-lg font-bold text-white pt-4">1. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our services, when submitting RFQs, contacting us via forms, or contacting us through WhatsApp link redirects.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-400">
            <li>Personal details: Name, Email address, Phone number, and Company designation.</li>
            <li>Enquiry details: Information regarding your quarry parameters, drilling yards, or logistics scope.</li>
          </ul>

          <h2 className="text-lg font-bold text-white pt-4">2. How We Use Your Information</h2>
          <p>
            We use the collected information primarily to respond to your business inquiries, prepare corporate estimates, coordinate rentals, and manage client relations. We do not sell or distribute your details to any third-party marketing companies.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">3. Security of Data</h2>
          <p>
            The security of your personal information is important to us. While we strive to use commercially acceptable means to protect your personal information (such as HTTPS/SSL encryption), no method of transmission over the Internet, or method of electronic storage, is 100% secure.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">4. Changes to This Privacy Policy</h2>
          <p>
            Sri Yadadri Enterprises reserves the right to update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the Last Updated timestamp.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">5. Contact Information</h2>
          <p>
            If you have any questions or concerns regarding our privacy policies, please contact our office desk at:
            <br />
            <span className="text-amber-400 block mt-2 font-bold">Email: yadadrienterprises86@gmail.com</span>
            <span className="text-amber-400 block font-bold">Address: Mariyala, Bommalaramaram, Yadadri Bhongir, Telangana - 508116</span>
          </p>
        </div>

      </div>
    </div>
  );
}

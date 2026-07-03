"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";

function ContactPageContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // Pre-fill fields if search query matches
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const machineParam = searchParams.get("machine");

    if (serviceParam) {
      setFormData((prev) => ({
        ...prev,
        service: serviceParam,
        message: `I would like to request a quote/consultation regarding: ${serviceParam.replace("-", " ")} services.`,
      }));
    } else if (machineParam) {
      setFormData((prev) => ({
        ...prev,
        service: "heavy-equipment-rental",
        message: `I would like to check availability and rental rates for the equipment: ${machineParam.replace("-", " ")}.`,
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate API submission
    setTimeout(() => {
      setFormStatus("success");
      // Clear fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <p className="text-sm font-extrabold text-amber-400 uppercase tracking-widest">
            GET IN TOUCH
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Connect With Our Desk
          </h1>
          <p className="text-slate-400 text-base">
            Reach out for tenders, commercial rental queries, blasting layouts, or site engineering consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Info Side (Col 5) */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-2xl font-extrabold text-white mb-6">Office Information</h2>

            <div className="bg-slate-900 border border-slate-850 p-6 rounded-2xl flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-amber-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white mb-2">Registered Address</h3>
                <p className="text-slate-350 text-sm leading-relaxed">
                  Mariyala, Bommalaramaram,
                  <br />
                  Yadadri Bhongir,
                  <br />
                  Telangana - 508116
                </p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-850 p-6 rounded-2xl flex items-start space-x-4">
              <Phone className="h-6 w-6 text-amber-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white mb-2">Direct Contact</h3>
                <p className="text-slate-350 text-sm">
                  <a href="tel:+918374276995" className="hover:text-amber-400 transition-colors block font-extrabold text-amber-400 mb-1 text-base">
                    +91 83742 76995
                  </a>
                  <span className="text-slate-500 font-semibold block text-xs">Direct Operations desk (8AM - 6PM)</span>
                </p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-850 p-6 rounded-2xl flex items-start space-x-4">
              <Mail className="h-6 w-6 text-amber-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white mb-2">Email Correspondence</h3>
                <p className="text-slate-350 text-sm">
                  <a href="mailto:yadadrienterprises86@gmail.com" className="hover:text-amber-400 transition-colors font-bold text-slate-300">
                    yadadrienterprises86@gmail.com
                  </a>
                  <span className="text-slate-500 font-semibold block text-xs">General / RFQ responses</span>
                </p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-850 p-6 rounded-2xl flex items-start space-x-4">
              <Clock className="h-6 w-6 text-amber-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white mb-2">Working Hours</h3>
                <p className="text-slate-350 text-xs font-semibold leading-relaxed">
                  Monday - Saturday: 8:00 AM - 6:00 PM
                  <br />
                  Sunday: Closed (Ops teams standby only)
                </p>
              </div>
            </div>
          </div>

          {/* Form Side (Col 7) */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-xl">
            <h2 className="text-2xl font-extrabold text-white mb-6">Submit RFQ / Enquiry</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm focus:border-amber-400 focus:outline-none transition-colors"
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm focus:border-amber-400 focus:outline-none transition-colors"
                    placeholder="e.g. +91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="e.g. mail@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                  Project Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-300 text-sm focus:border-amber-400 focus:outline-none transition-colors"
                >
                  <option value="">Select Service / Category</option>
                  <option value="construction-works">Construction Works</option>
                  <option value="granite-mining">Granite Mining & Quarry</option>
                  <option value="drilling-works">Drilling Works</option>
                  <option value="open-blasting">Open Blasting Operations</option>
                  <option value="loading-operations">Loading & Haulage</option>
                  <option value="heavy-equipment-rental">Heavy Equipment Rental</option>
                  <option value="general">General Enquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                  Requirements Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm focus:border-amber-400 focus:outline-none transition-colors resize-none"
                  placeholder="Describe dimensions, geology, equipment needed, or schedules..."
                />
              </div>

              {/* Form Status Messages */}
              {formStatus === "success" && (
                <div className="bg-emerald-950/50 border border-emerald-800 text-emerald-300 p-4 rounded-xl flex items-start space-x-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400 mt-0.5" />
                  <div>
                    <span className="font-bold">Form submitted successfully!</span>
                    <p className="text-xs text-emerald-450 mt-1">Our engineering team will review your specs and connect via phone/email shortly.</p>
                  </div>
                </div>
              )}

              {formStatus === "error" && (
                <div className="bg-rose-950/50 border border-rose-800 text-rose-300 p-4 rounded-xl flex items-start space-x-3 text-sm">
                  <AlertCircle className="h-5 w-5 shrink-0 text-rose-400 mt-0.5" />
                  <span>Something went wrong. Please check fields or email us directly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold py-4 rounded-xl transition-all shadow-md flex items-center justify-center space-x-3 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{formStatus === "submitting" ? "Sending Specs..." : "Submit Requirements"}</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>



      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="bg-slate-950 min-h-screen text-slate-100 flex items-center justify-center">Loading contact desk...</div>}>
      <ContactPageContent />
    </Suspense>
  );
}

import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Paperclip,
  Phone,
  X,
} from "lucide-react";
import { toast } from "sonner";

const initialQuoteData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
};

const services = [
  "Software Development",
  "Managed IT Services",
  "UI/UX Design",
  "SEO Optimization",
  "Consulting",
];

const GetAQuotePage: React.FC = () => {
  const [formData, setFormData] = useState(initialQuoteData);
  const [projectFile, setProjectFile] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = [
      formData.name,
      formData.email,
      formData.service,
      formData.message,
    ];

    if (requiredFields.some((field) => !field.trim())) {
      toast.error("Please fill all required fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      toast.error("Please enter a valid email.");
      return;
    }

    console.log("Quote request:", {
      ...formData,
      file: projectFile
        ? {
            name: projectFile.name,
            size: projectFile.size,
            type: projectFile.type,
          }
        : null,
    });
    toast.success("Quote request sent", {
      description: "We will review it shortly.",
    });
    setFormData(initialQuoteData);
    setProjectFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (!file) {
      setProjectFile(null);
      return;
    }

    const maxSize = 10 * 1024 * 1024;

    if (file.size > maxSize) {
      toast.error("File must be 10MB or less.");
      e.target.value = "";
      return;
    }

    setProjectFile(file);
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-blue-200 font-semibold uppercase tracking-wide text-sm">
              Free Project Estimate
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
              Get a clear quote for your next digital project
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Tell us what you need, and we will help you understand the best
              path, timeline, and budget range.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-100 shadow-lg p-6 sticky top-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                What happens next?
              </h2>
              <div className="space-y-5">
                {[
                  "We review your request.",
                  "We clarify the scope.",
                  "You receive next steps.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 mt-6 pt-6 space-y-3 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-600" />
                  emmatech307@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-600" />
                  +2348161770490
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-white border border-gray-100 shadow-xl p-6 sm:p-8 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name *"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address *"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                <option value="">Service needed *</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                <option value="">Budget range</option>
                <option value="below-1m">Below ₦1m</option>
                <option value="1m-3m">₦1m - ₦3m</option>
                <option value="3m-7m">₦3m - ₦7m</option>
                <option value="7m-plus">₦7m+</option>
              </select>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                <option value="">Timeline</option>
                <option value="asap">ASAP</option>
                <option value="1-2-months">1 - 2 months</option>
                <option value="3-6-months">3 - 6 months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="Tell us about the project *"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
            />

            <div className="border border-dashed border-gray-300 bg-gray-50 p-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-gray-900 font-semibold">
                    <Paperclip className="h-5 w-5 text-blue-600" />
                    Add a project file
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Upload a brief, screenshot, design, document, or reference
                    file for more clarity. Max 10MB.
                  </p>
                </div>

                <label className="inline-flex items-center justify-center bg-white border border-gray-300 hover:border-blue-500 text-gray-900 px-5 py-3 rounded-lg font-semibold cursor-pointer transition-colors">
                  Choose File
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="sr-only"
                    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.webp,.txt"
                  />
                </label>
              </div>

              {projectFile && (
                <div className="mt-4 flex items-center justify-between gap-3 bg-white border border-gray-200 px-4 py-3">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {projectFile.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(projectFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setProjectFile(null)}
                    className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-red-600"
                    aria-label="Remove selected file"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Send Quote Request
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default GetAQuotePage;

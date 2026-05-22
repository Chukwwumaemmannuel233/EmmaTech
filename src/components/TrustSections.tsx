import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Lightbulb,
  MessageSquare,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Clear technical guidance",
    text: "We help you understand what to build, what to improve, and what can wait.",
  },
  {
    icon: Clock,
    title: "Practical delivery",
    text: "Projects are planned around real timelines, usable milestones, and steady communication.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable support",
    text: "We stay useful after launch with updates, troubleshooting, and ongoing improvement.",
  },
];

const process = [
  "Understand your goal",
  "Plan the right solution",
  "Design and build clearly",
  "Launch, support, and improve",
];

const testimonials = [
  {
    quote:
      "EmmaTech helped us turn a rough idea into a clear product direction and working digital plan.",
    name: "Startup Founder",
    role: "Product Client",
  },
  {
    quote:
      "The process felt simple. We knew what was happening, what came next, and where the value was.",
    name: "Operations Lead",
    role: "Business Support Client",
  },
  {
    quote:
      "Good communication, practical suggestions, and a strong understanding of what small teams need.",
    name: "Business Owner",
    role: "Consulting Client",
  },
];

const caseStudies = [
  {
    title: "Business workflow platform",
    service: "Software Development",
    result: "Reduced manual tracking",
  },
  {
    title: "Service website refresh",
    service: "UI/UX + SEO",
    result: "Clearer customer journey",
  },
  {
    title: "IT support improvement",
    service: "Managed IT Services",
    result: "Faster issue response",
  },
];

const TrustSections: React.FC = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
            <div>
              <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                Why Choose EmmaTech
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-5">
                Built for businesses that need clarity before complexity
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We focus on useful technology work: clear advice, clean design,
                reliable development, and support that makes sense for your
                current stage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <article
                    key={reason.title}
                    className="border border-gray-100 bg-gray-50 p-6"
                  >
                    <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center mb-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                How We Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5">
                A simple process that keeps everyone aligned
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Whether it is a website, web app, IT support need, or SEO
                improvement, we keep the path understandable from the first
                conversation.
              </p>
              <Link
                to="/see-how-we-build"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                See how we build
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {process.map((step, index) => (
                <div
                  key={step}
                  className="bg-white border border-gray-100 p-6 shadow-sm"
                >
                  <div className="text-blue-600 font-bold text-sm mb-4">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                Proof Points
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                What clients should expect
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              View case studies
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="border border-gray-100 bg-gray-50 p-6"
              >
                <div className="flex gap-1 text-blue-600 mb-5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            {caseStudies.map((study) => (
              <article key={study.title} className="border border-gray-100 p-6">
                <MessageSquare className="h-6 w-6 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {study.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{study.service}</p>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  {study.result}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustSections;

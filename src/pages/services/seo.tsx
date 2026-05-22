import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileSearch,
  Gauge,
  Globe2,
  LineChart,
  Search,
  Settings,
} from "lucide-react";

const seoServices = [
  {
    icon: FileSearch,
    title: "SEO Audit",
    text: "Review your site structure, pages, metadata, speed, and visibility gaps.",
  },
  {
    icon: Settings,
    title: "Technical SEO",
    text: "Improve crawlability, mobile usability, page speed, indexing, and site health.",
  },
  {
    icon: Search,
    title: "Keyword Direction",
    text: "Identify search terms that match your audience, services, and business goals.",
  },
  {
    icon: Globe2,
    title: "On-Page Optimization",
    text: "Improve titles, descriptions, headings, internal links, and content structure.",
  },
];

const process = [
  {
    title: "Audit",
    text: "We inspect your current website and identify the biggest SEO blockers.",
  },
  {
    title: "Prioritize",
    text: "We rank fixes by impact so you know what matters first.",
  },
  {
    title: "Optimize",
    text: "We improve technical structure, content signals, and page clarity.",
  },
  {
    title: "Track",
    text: "We monitor progress and recommend ongoing improvements.",
  },
];

const benefits = [
  "Cleaner website structure",
  "Better search visibility",
  "More useful page content",
  "Improved mobile and speed signals",
];

const tools = [
  "Google Search Console",
  "Google Analytics",
  "PageSpeed Insights",
  "Keyword Research",
  "SEO Audits",
];

export default function SEOOptimizationPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      <section className="relative pt-32 pb-20 bg-gray-950 text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1600&q=80"
          alt="SEO strategy dashboard"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950/85 to-teal-900/75" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.75fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-300 font-semibold uppercase tracking-wide text-sm">
                SEO Optimization
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
                Make your website easier to find, read, and trust
              </h1>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl">
                We improve your website structure, search signals, content
                clarity, and technical health so the right people can discover
                your business online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  to="/get-a-quote"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get a Free Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Request an SEO Review
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 border border-white/10 p-6 backdrop-blur"
            >
              <p className="text-blue-200 font-semibold mb-5">
                SEO support for:
              </p>
              <div className="space-y-4">
                {[
                  "Business websites",
                  "Service pages",
                  "Landing pages",
                  "New or underperforming sites",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-300 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
              What We Improve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              SEO work that starts with the fundamentals
            </h2>
            <p className="text-lg text-gray-600">
              We focus on the search basics that help your website become more
              understandable to users and search engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {seoServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="bg-white border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
              alt="SEO analytics"
              className="w-full h-[420px] object-cover shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
              Why It Matters
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5">
              Better SEO makes your website work harder
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Search optimization is not magic. It is the careful improvement of
              structure, content, speed, and relevance so your website can earn
              better visibility over time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 border border-gray-100 bg-gray-50 p-4"
                >
                  <LineChart className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-12">
            <div>
              <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                Our SEO Flow
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                A practical path to stronger visibility
              </h2>
              <p className="text-lg text-gray-600">
                We make SEO easier to understand by showing what needs fixing,
                what matters first, and how progress should be tracked.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {process.map((step, index) => (
                <div key={step.title} className="bg-white border border-gray-100 p-6">
                  <div className="text-blue-600 font-bold text-sm mb-4">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                Tools & Checks
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                Measured with practical SEO tools
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-gray-100 text-gray-800 font-semibold text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

    </motion.main>
  );
}

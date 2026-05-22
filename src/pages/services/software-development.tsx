import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const solutions = [
  {
    icon: Code2,
    title: "Custom Web Applications",
    text: "Business-ready web apps built around your workflow, users, and goals.",
  },
  {
    icon: Settings,
    title: "Business Software",
    text: "Internal tools that reduce manual work and make everyday operations easier.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    text: "Clear dashboards for managing data, users, reports, and business activity.",
  },
  {
    icon: Database,
    title: "Database-Driven Systems",
    text: "Structured systems for storing, organizing, and accessing business data.",
  },
];

const process = [
  "Discovery and requirements",
  "UI planning and workflow mapping",
  "Development and testing",
  "Launch, support, and improvements",
];

const benefits = [
  "Built around your real business process",
  "Clean interface for your team and customers",
  "Scalable structure for future updates",
  "Frontend-ready now, backend-ready when needed",
];

const tools = ["React", "TypeScript", "Node.js", "APIs", "SQL", "Firebase"];

export default function SoftwareDevelopmentPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      <section className="relative pt-32 pb-20 bg-gray-950 text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80"
          alt="Software development workspace"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950/90 to-teal-900/80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.75fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-300 font-semibold uppercase tracking-wide text-sm">
                Software Development
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
                Custom software that fits how your business works
              </h1>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl">
                We design and build practical digital products, web apps,
                dashboards, and business tools that help teams move faster and
                serve customers better.
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
                  Talk to Us
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
                Good fit for:
              </p>
              <div className="space-y-4">
                {[
                  "Startups building MVPs",
                  "Businesses replacing manual processes",
                  "Teams improving internal operations",
                  "Companies upgrading old systems",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-300" />
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
              What We Build
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Practical software for daily business use
            </h2>
            <p className="text-lg text-gray-600">
              We focus on tools that solve real problems, not software that only
              looks good in a presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <motion.article
                  key={solution.title}
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
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {solution.text}
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
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
              alt="Team planning software"
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
              Why It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5">
              Built clearly, launched carefully, improved continuously
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We keep the development process understandable. You get clear
              planning, steady progress, tested features, and room to improve
              the product after launch.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 border border-gray-100 bg-gray-50 p-4"
                >
                  <ShieldCheck className="h-5 w-5 text-blue-600 mt-0.5" />
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
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                A simple path from idea to launch
              </h2>
              <p className="text-lg text-gray-600">
                Every build is guided by structure, communication, and practical
                delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {process.map((step, index) => (
                <div key={step} className="bg-white border border-gray-100 p-6">
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

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                Tools We Use
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                Modern tools, chosen for the project
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

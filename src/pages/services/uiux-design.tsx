import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Layout,
  MousePointerClick,
  Palette,
  PenTool,
  Sparkles,
  Users,
} from "lucide-react";

const deliverables = [
  {
    icon: Layout,
    title: "Interface Design",
    text: "Clean screens for websites, dashboards, portals, and product flows.",
  },
  {
    icon: MousePointerClick,
    title: "User Experience",
    text: "Simple journeys that help users understand, act, and complete tasks.",
  },
  {
    icon: PenTool,
    title: "Wireframes & Prototypes",
    text: "Early structure and clickable previews before development begins.",
  },
  {
    icon: Palette,
    title: "Visual Systems",
    text: "Consistent colors, typography, spacing, and reusable UI patterns.",
  },
];

const process = [
  {
    title: "Understand",
    text: "We clarify users, goals, content, and the problem the product must solve.",
  },
  {
    title: "Structure",
    text: "We map flows, pages, states, and the important actions users need.",
  },
  {
    title: "Design",
    text: "We create polished interfaces with clear hierarchy and responsive behavior.",
  },
  {
    title: "Refine",
    text: "We improve details, prepare handoff, and support implementation.",
  },
];

const benefits = [
  "Clearer user journeys",
  "Better mobile experience",
  "More professional product feel",
  "Designs developers can build from",
];

const tools = ["Figma", "Wireframes", "Prototypes", "Design Systems", "User Flows"];

export default function UIUXPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      <section className="relative pt-32 pb-20 bg-gray-950 text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1600&q=80"
          alt="UI UX design workspace"
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
                UI/UX Design
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
                Product designs that feel clear, useful, and easy to trust
              </h1>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl">
                We design websites, web apps, dashboards, and digital product
                interfaces that help users move with confidence.
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
                Design support for:
              </p>
              <div className="space-y-4">
                {[
                  "New websites and landing pages",
                  "Web applications and dashboards",
                  "Product redesigns and UX improvements",
                  "Developer-ready interface handoff",
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
              What We Design
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Interfaces that are simple to use and easy to build
            </h2>
            <p className="text-lg text-gray-600">
              Good design should reduce confusion, support business goals, and
              give developers a clear path to implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {deliverables.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
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
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
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
              src="https://images.unsplash.com/photo-1618788372246-79faff0c3742?auto=format&fit=crop&w=1200&q=80"
              alt="Design planning"
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
              Better design makes your product easier to understand
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A clear interface helps users know where they are, what they can
              do, and what to do next. That means less friction and more trust.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 border border-gray-100 bg-gray-50 p-4"
                >
                  <Eye className="h-5 w-5 text-blue-600 mt-0.5" />
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
                Design Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                A clear path from idea to usable interface
              </h2>
              <p className="text-lg text-gray-600">
                We design in a way that keeps business goals, user needs, and
                development handoff connected.
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
                Tools & Outputs
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                Design assets your team can use
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

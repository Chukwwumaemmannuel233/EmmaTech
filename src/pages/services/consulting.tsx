import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Compass,
  Lightbulb,
  Map,
  MessageSquare,
  SearchCheck,
  Users,
} from "lucide-react";

const consultingAreas = [
  {
    icon: Compass,
    title: "Digital Strategy",
    text: "Clarify what to build, why it matters, and how it supports your business goals.",
  },
  {
    icon: ClipboardList,
    title: "Project Planning",
    text: "Turn ideas into realistic scopes, milestones, priorities, and delivery plans.",
  },
  {
    icon: SearchCheck,
    title: "Product Review",
    text: "Review an existing website, app, or workflow and identify practical improvements.",
  },
  {
    icon: Lightbulb,
    title: "Technology Guidance",
    text: "Choose tools, features, and technical direction with more confidence.",
  },
];

const process = [
  {
    title: "Listen",
    text: "We understand your current challenge, business context, and target outcome.",
  },
  {
    title: "Assess",
    text: "We review options, risks, priorities, and what is practical for your stage.",
  },
  {
    title: "Recommend",
    text: "We give clear next steps, not vague advice or unnecessary complexity.",
  },
  {
    title: "Support",
    text: "We help you move from decision to action through planning or implementation.",
  },
];

const outcomes = [
  "Clearer project direction",
  "Better technology decisions",
  "Reduced build risk",
  "More realistic timelines and scope",
];

const goodFit = [
  "You have an idea but need direction",
  "Your project feels unclear or too broad",
  "You need help choosing a tech path",
  "You want to improve an existing product",
];

export default function ConsultationPageVisual() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      <section className="relative pt-32 pb-20 bg-gray-950 text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80"
          alt="Technology consulting meeting"
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
                Consulting
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
                Practical technology guidance before you build
              </h1>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl">
                We help you clarify ideas, plan projects, choose the right
                digital direction, and avoid costly mistakes before development
                begins.
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
                  Book a Consultation
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
                Good fit when:
              </p>
              <div className="space-y-4">
                {goodFit.map((item) => (
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
              What We Help With
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Better decisions for digital projects
            </h2>
            <p className="text-lg text-gray-600">
              Consulting gives you a clearer path before committing time, money,
              and development effort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {consultingAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.article
                  key={area.title}
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
                    {area.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{area.text}</p>
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
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
              alt="Project planning consultation"
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
              A clear plan saves time before development starts
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Many projects struggle because the scope, users, tools, or
              priorities were unclear at the beginning. We help you make those
              decisions earlier.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-start gap-3 border border-gray-100 bg-gray-50 p-4"
                >
                  <Map className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">{outcome}</span>
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
                Consulting Flow
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                From confusion to next steps
              </h2>
              <p className="text-lg text-gray-600">
                We keep consulting focused on decisions you can act on, not
                long reports that never get used.
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
          <div className="border border-gray-100 shadow-sm p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <MessageSquare className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Clear Advice</h3>
              <p className="text-sm text-gray-600">Plain direction you can act on.</p>
            </div>
            <div>
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Team Alignment</h3>
              <p className="text-sm text-gray-600">Better decisions across stakeholders.</p>
            </div>
            <div>
              <Lightbulb className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Practical Options</h3>
              <p className="text-sm text-gray-600">Recommendations that fit your stage.</p>
            </div>
          </div>
        </div>
      </section>

    </motion.main>
  );
}

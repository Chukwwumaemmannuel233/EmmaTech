import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  HelpCircle,
  Mail,
  MessageSquare,
  Phone,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const supportTypes = [
  {
    icon: Wrench,
    title: "Technical Issues",
    text: "Get help with website, app, dashboard, or system problems.",
  },
  {
    icon: Settings,
    title: "Maintenance Requests",
    text: "Request updates, small fixes, improvements, or support checks.",
  },
  {
    icon: ShieldCheck,
    title: "Access & Setup",
    text: "Support for accounts, devices, tools, and team access setup.",
  },
  {
    icon: MessageSquare,
    title: "Project Questions",
    text: "Ask about ongoing work, next steps, scope, or delivery details.",
  },
];

const supportSteps = [
  {
    title: "Send the issue",
    text: "Tell us what happened, where it happened, and what you expected.",
  },
  {
    title: "We review it",
    text: "We check the details and may ask for screenshots, links, or access.",
  },
  {
    title: "We respond",
    text: "You get a clear update with the next step or recommended fix.",
  },
];

const quickTips = [
  "Include screenshots if possible",
  "Share the affected page or feature",
  "Mention when the issue started",
  "Describe what you already tried",
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative pt-32 pb-20 bg-gray-950 text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80"
          alt="EmmaTech support"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950/90 to-teal-900/75" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-300 font-semibold uppercase tracking-wide text-sm">
                Support Center
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
                Get help with your project, website, or system
              </h1>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl">
                EmmaTech support is here for technical questions, maintenance
                requests, access issues, and project follow-up.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact Support
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/help"
                  className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Visit Help Center
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
                Direct support channels
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:emmatech307@gmail.com"
                  className="flex items-start gap-3 hover:text-blue-100 transition-colors"
                >
                  <Mail className="h-5 w-5 text-blue-300 mt-0.5" />
                  <span>emmatech307@gmail.com</span>
                </a>
                <a
                  href="tel:+2348161770490"
                  className="flex items-start gap-3 hover:text-blue-100 transition-colors"
                >
                  <Phone className="h-5 w-5 text-blue-300 mt-0.5" />
                  <span>+2348161770490</span>
                </a>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-300 mt-0.5" />
                  <span>Typical response within 24 hours</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
              What We Support
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Practical help for active clients and new inquiries
            </h2>
            <p className="text-lg text-gray-600">
              Use support when you need help keeping your digital tools clear,
              stable, and moving forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {supportTypes.map((support, index) => {
              const Icon = support.icon;

              return (
                <motion.article
                  key={support.title}
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
                    {support.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {support.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-12">
          <div>
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
              Support Flow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              What happens after you reach out
            </h2>
            <p className="text-lg text-gray-600">
              We keep the process clear so you know what to send and what to
              expect next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {supportSteps.map((step, index) => (
              <div key={step.title} className="bg-gray-50 border border-gray-100 p-6">
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
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white border border-gray-100 shadow-sm p-8">
            <HelpCircle className="h-9 w-9 text-blue-600 mb-5" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Before sending a support request
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {quickTips.map((tip) => (
                <div key={tip} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-100 shadow-sm p-8">
            <Mail className="h-9 w-9 text-blue-600 mb-5" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need direct help?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you cannot find the answer in the Help Center, contact us and
              describe the issue clearly. We will respond with the next step.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Send Support Message
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

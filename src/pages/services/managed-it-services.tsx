import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Headphones,
  Laptop,
  Monitor,
  RefreshCw,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const supportAreas = [
  {
    icon: Headphones,
    title: "Technical Support",
    text: "Friendly help for system issues, software questions, and day-to-day tech problems.",
  },
  {
    icon: Monitor,
    title: "System Maintenance",
    text: "Regular checks, updates, and cleanups to keep devices and tools running smoothly.",
  },
  {
    icon: Laptop,
    title: "Device & App Setup",
    text: "Setup support for workstations, business apps, accounts, and team access.",
  },
  {
    icon: ShieldCheck,
    title: "Basic Security Care",
    text: "Practical security guidance, updates, access reviews, and safer work habits.",
  },
];

const benefits = [
  "Less downtime for your team",
  "Faster response to tech issues",
  "Cleaner device and app setup",
  "Ongoing support as your business grows",
];

const process = [
  {
    title: "Review",
    text: "We understand your current tools, devices, issues, and support needs.",
  },
  {
    title: "Stabilize",
    text: "We fix urgent issues and organize the basics so work can continue smoothly.",
  },
  {
    title: "Maintain",
    text: "We provide updates, support, troubleshooting, and practical monitoring.",
  },
  {
    title: "Improve",
    text: "We recommend better tools, workflows, and setups as your business grows.",
  },
];

const serviceFit = [
  "Small businesses without an internal IT team",
  "Teams needing reliable support and maintenance",
  "Companies setting up new devices or work tools",
  "Businesses tired of recurring technical issues",
];

export default function ManagedITServicesPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      <section className="relative pt-32 pb-20 bg-gray-950 text-white overflow-hidden">
        <img
          src="https://media.istockphoto.com/id/2195093158/photo/data-center.webp?a=1&b=1&s=1200&w=0&k=20&c=xTB7b-o70b5LVdTG6aQ4YRULzkRwKEYvwWB3bI6imH4="
          alt="Managed IT support"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950/90 to-teal-900/75" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.75fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-300 font-semibold uppercase tracking-wide text-sm">
                Managed IT Services
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
                Reliable IT support that keeps your business moving
              </h1>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl">
                We help small teams and growing businesses handle everyday IT
                issues, system maintenance, setup, and technical support without
                unnecessary complexity.
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
                  Request Support
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
                Best fit for:
              </p>
              <div className="space-y-4">
                {serviceFit.map((item) => (
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
              What We Handle
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Practical IT help for daily operations
            </h2>
            <p className="text-lg text-gray-600">
              Support your team, reduce interruptions, and keep your basic
              technology environment organized.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {supportAreas.map((area, index) => {
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
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80"
              alt="IT support team"
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
              Why Managed IT
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5">
              Give your team fewer tech distractions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              When your tools, devices, and systems are easier to manage, your
              team can focus on serving customers and doing meaningful work.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 border border-gray-100 bg-gray-50 p-4"
                >
                  <RefreshCw className="h-5 w-5 text-blue-600 mt-0.5" />
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
                Our Support Flow
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                Clear support from first review to ongoing care
              </h2>
              <p className="text-lg text-gray-600">
                We keep support simple, visible, and focused on the issues that
                matter most to your daily work.
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
              <Clock3 className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Responsive Help</h3>
              <p className="text-sm text-gray-600">Support when your team needs it.</p>
            </div>
            <div>
              <Wrench className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Practical Fixes</h3>
              <p className="text-sm text-gray-600">Clear solutions, not confusion.</p>
            </div>
            <div>
              <ShieldCheck className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Safer Systems</h3>
              <p className="text-sm text-gray-600">Better habits, updates, and access.</p>
            </div>
          </div>
        </div>
      </section>

    </motion.main>
  );
}

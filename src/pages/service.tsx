import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Headphones,
  MessageSquare,
  Palette,
  Search,
} from "lucide-react";

const services = [
  {
    name: "Software Development",
    to: "/services/software-development",
    icon: Code2,
    description:
      "Custom software, web applications, and digital tools built around your workflow.",
    features: ["Web applications", "Custom business tools", "API integration"],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Managed IT Services",
    to: "/services/managed-it-services",
    icon: Headphones,
    description:
      "Reliable support and technical management for smoother business operations.",
    features: ["Technical support", "System maintenance", "Issue resolution"],
    image:
      "https://media.istockphoto.com/id/2195093158/photo/data-center.webp?a=1&b=1&s=612x612&w=0&k=20&c=xTB7b-o70b5LVdTG6aQ4YRULzkRwKEYvwWB3bI6imH4=",
  },
  {
    name: "UI/UX Design",
    to: "/services/uiux-design",
    icon: Palette,
    description:
      "Clean, user-friendly interfaces that make your product easier to use and trust.",
    features: ["Product design", "User experience", "Interface design"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "SEO Optimization",
    to: "/services/seo",
    icon: Search,
    description:
      "Search improvements that help your website become easier to find and understand.",
    features: ["Technical SEO", "On-page SEO", "Keyword optimization"],
    image:
      "https://plus.unsplash.com/premium_photo-1683578888262-22a112723a83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFNFTyUyME9wdGltaXphdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Consulting",
    to: "/services/consulting",
    icon: MessageSquare,
    description:
      "Practical technology guidance for planning, improving, and scaling digital products.",
    features: ["Project planning", "Tech advisory", "Digital strategy"],
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
  },
];

const process = [
  {
    title: "Understand",
    text: "We clarify your goal, users, budget, and current challenges.",
  },
  {
    title: "Plan",
    text: "We define the right scope, timeline, tools, and delivery path.",
  },
  {
    title: "Build",
    text: "We design, develop, review, and refine with clear communication.",
  },
  {
    title: "Support",
    text: "We help you improve, maintain, and move forward after launch.",
  },
];

export default function ServicesPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      <section className="relative pt-32 pb-20 bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-gray-950 to-teal-900/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-300 font-semibold uppercase tracking-wide text-sm">
                Services
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
                Digital services built for real business needs
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
                EmmaTech helps teams plan, design, build, improve, and support
                reliable digital solutions without unnecessary complexity.
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
                  className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact Us
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
                Main capabilities
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.to}
                    className="flex items-center gap-3 bg-white/8 hover:bg-white/14 border border-white/10 p-4 transition-colors"
                  >
                    <service.icon className="h-5 w-5 text-blue-300" />
                    <span className="font-semibold">{service.name}</span>
                  </Link>
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
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Focused services for growing teams
            </h2>
            <p className="text-lg text-gray-600">
              Choose the service that matches your current business priority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.article
                key={service.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group bg-white border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center mb-5 group-hover:bg-gray-950 transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle2 className="h-4 w-4 text-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.to}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold"
                  >
                    More Info
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
            <div>
              <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                Simple, clear, and collaborative
              </h2>
              <p className="text-lg text-gray-600">
                We keep delivery practical so you always know what is happening,
                why it matters, and what comes next.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {process.map((step, index) => (
                <div
                  key={step.title}
                  className="border border-gray-100 bg-gray-50 p-6"
                >
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

    </motion.main>
  );
}

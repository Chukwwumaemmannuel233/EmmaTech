// ServicesPage.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code,
  Cloud,
  Workflow,
  BarChart3,
  Monitor,
  Palette,
  ShieldCheck,
  Search,
  Users,
} from "lucide-react";

const services = [
  {
    name: "Software Development",
    to: "/services/software-development",
    icon: <Code className="w-10 h-10 text-blue-500" />,
    description:
      "Custom web and mobile applications built to meet your business goals. We use modern frameworks and agile practices to deliver reliable software.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Cloud Infrastructure",
    to: "/services/cloud",
    icon: <Cloud className="w-10 h-10 text-indigo-500" />,
    description:
      "Secure, scalable, and cost-efficient cloud solutions. We help businesses migrate, manage, and optimize cloud infrastructure.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Automation",
    to: "/services/automation",
    icon: <Workflow className="w-10 h-10 text-green-500" />,
    description:
      "Save time and reduce errors by automating workflows and repetitive processes with smart tools and integrations.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGF1dG9tYXRpb258ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Data Intelligence",
    to: "/services/data",
    icon: <BarChart3 className="w-10 h-10 text-orange-500" />,
    description:
      "Turn raw data into insights. From dashboards to predictive analytics, we help businesses make smarter decisions.",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Managed IT Services",
    to: "/services/it",
    icon: <Monitor className="w-10 h-10 text-purple-500" />,
    description:
      "End-to-end IT support including monitoring, troubleshooting, and system optimization — available 24/7.",
    image:
      "https://media.istockphoto.com/id/2195093158/photo/data-center.webp?a=1&b=1&s=612x612&w=0&k=20&c=xTB7b-o70b5LVdTG6aQ4YRULzkRwKEYvwWB3bI6imH4=",
  },
  {
    name: "UI/UX Design",
    to: "/services/uiux",
    icon: <Palette className="w-10 h-10 text-pink-500" />,
    description:
      "User-centered design that delivers engaging, intuitive, and consistent digital experiences across all platforms.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Cybersecurity",
    to: "/services/cybersecurity",
    icon: <ShieldCheck className="w-10 h-10 text-red-500" />,
    description:
      "Protect your organization from cyber threats with proactive monitoring, audits, and compliance solutions.",
    image:
      "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "SEO Optimization",
    to: "/services/seo",
    icon: <Search className="w-10 h-10 text-teal-500" />,
    description:
      "Increase your visibility and reach with data-driven SEO strategies designed to drive traffic and conversions.",
    image:
      "https://plus.unsplash.com/premium_photo-1683578888262-22a112723a83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFNFTyUyME9wdGltaXphdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Consulting",
    to: "/services/consulting",
    icon: <Users className="w-10 h-10 text-yellow-500" />,
    description:
      "Guidance and expertise to help you choose the right technologies and digital strategies for your business.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-500 text-white py-20">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg md:text-xl opacity-95 leading-relaxed"
          >
            At <span className="font-semibold">Your Company</span>, we don’t just
            deliver projects — we build long-term digital solutions. From software
            development to cloud optimization, every service is designed to help
            your business scale, adapt, and thrive.
          </motion.p>
        </motion.div>
      </section>

      {/* Featured Services with Overlay Text */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-8">
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
            alt="Software Development"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start p-6">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-2"
            >
              Software Development
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white text-lg opacity-90"
            >
              We build custom web and mobile applications that meet your business
              needs and enhance productivity.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGF1dG9tYXRpb258ZW58MHx8MHx8fDA%3D"
            alt="Automation & Cloud"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start p-6">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-2"
            >
              Automation & Cloud
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white text-lg opacity-90"
            >
              Streamline workflows, reduce errors, and scale your business with
              smart automation and cloud solutions.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col"
            >
              <motion.img
                src={service.image}
                alt={service.name}
                className="w-full h-44 object-cover rounded-xl mb-4"
                loading="lazy"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="flex items-center gap-3 mb-3">
                {service.icon}
                <motion.h2
                  className="text-xl font-semibold text-gray-900"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.name}
                </motion.h2>
              </div>
              <motion.p
                className="text-gray-600 flex-grow leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {service.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  to={service.to}
                  className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
                >
                  Learn More →
                </Link>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* How We Deliver Section */}
      <section className="py-20 max-w-5xl mx-auto text-center px-6">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How We Deliver Results
        </motion.h2>
        <motion.p
          className="text-gray-700 text-lg leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Every project follows a proven delivery model focused on reducing risk
          and delivering measurable outcomes. We combine discovery, iterative
          delivery, and operations to make sure your product performs in the
          real world.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-4 text-left">
          {["Discovery", "Planning", "Delivery", "Support"].map((title, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white rounded-2xl p-6 shadow"
            >
              <h3 className="font-semibold text-xl mb-2">{title}</h3>
              <p className="text-gray-600">
                {title === "Discovery" &&
                  "We align with stakeholders, map user journeys, and identify success metrics."}
                {title === "Planning" &&
                  "We define milestones, risks, and timelines — and create a roadmap built around delivering validated value quickly."}
                {title === "Delivery" &&
                  "We iterate in short cycles, ship incremental value, and keep close collaboration with your team for rapid feedback."}
                {title === "Support" &&
                  "After launch we provide monitoring, security hardening, and continuous improvements."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-500 text-white py-20">
        <motion.div
          className="max-w-3xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="max-w-2xl mx-auto text-lg mb-6 opacity-95"
          >
            Let’s work together to create powerful digital solutions that help you
            grow, scale, and succeed in today’s fast-changing world.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
}

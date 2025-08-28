// SEOOptimizationPage.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, BarChart2, Globe, TrendingUp, Settings } from "lucide-react";

export default function SEOOptimizationPage() {
  const services = [
    {
      icon: <Search className="w-10 h-10 text-blue-500" />,
      title: "Keyword Research",
      description:
        "Discover the most effective keywords to attract your target audience.",
    },
    {
      icon: <BarChart2 className="w-10 h-10 text-red-500" />,
      title: "SEO Audit",
      description:
        "Analyze your website for SEO issues and opportunities for improvement.",
    },
    {
      icon: <Globe className="w-10 h-10 text-green-500" />,
      title: "On-Page SEO",
      description:
        "Optimize meta tags, content, and structure for better search rankings.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-yellow-500" />,
      title: "Link Building",
      description:
        "Increase your website’s authority through high-quality backlinks.",
    },
    {
      icon: <Settings className="w-10 h-10 text-purple-500" />,
      title: "Technical SEO",
      description:
        "Optimize website speed, mobile usability, and structured data for search engines.",
    },
  ];

  const tools = [
    {
      icon: "https://cdn.worldvectorlogo.com/logos/ecrush.svg",
      name: "SEMrush",
    },
    {
      icon: "https://cdn.worldvectorlogo.com/logos/ahlers.svg",
      name: "Ahrefs",
    },
    { icon: "https://cdn.worldvectorlogo.com/logos/maz.svg", name: "Moz" },
    {
      icon: "https://cdn.worldvectorlogo.com/logos/google-analytics-2.svg",
      name: "Google Analytics",
    },
    {
      icon: "https://cdn.worldvectorlogo.com/logos/google-search-console.svg",
      name: "Search Console",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 via-green-700 to-black text-white py-24">
        <motion.div
          className="max-w-5xl mx-auto px-6 text-center relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            SEO Optimization Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl opacity-95 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Boost your website’s visibility and attract more traffic with our
            professional SEO strategies.
          </motion.p>
          <Link
            to="/contact"
            className="bg-white text-green-900 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </motion.div>
        <img
          src="https://media.istockphoto.com/id/843181596/photo/search-engine-optimization-concept.jpg?s=612x612&w=0&k=20&c=6BteE3kdIS5WVPPF0PdkKGhSN9DVynW0Rlr3Kj9svcs="
          alt="SEO Optimization"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      </section>

      {/* SEO Insights Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="https://media.istockphoto.com/id/1467057071/photo/chatbot-with-ai-search-engine-businessman-using-laptop-connection-to-ai-use-command-prompt.jpg?s=612x612&w=0&k=20&c=nBbt9CD8sO6JTSOKyBxN2NNqgx3erEfT8SbQIhlmM-8="
          alt="SEO Insights"
          className="w-full rounded-2xl shadow-lg object-cover h-96"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Actionable SEO Insights
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            We provide detailed SEO reports and insights so you understand how
            your website performs and where improvements are needed.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Website traffic analysis</li>
            <li>Keyword ranking reports</li>
            <li>Competitor benchmarking</li>
          </ul>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20">
        <motion.h2
          className="text-3xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our SEO Services
        </motion.h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20">
        <motion.h2
          className="text-3xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          SEO Tools We Use
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-lg font-semibold mt-4 mb-2">{tool.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="https://media.istockphoto.com/id/2206609624/photo/a-yellow-sticky-note-with-the-words-case-study-alongside-a-notebook.jpg?s=612x612&w=0&k=20&c=o_dhk_yDPEO05K54ntVlmPGMHT1te2Uk5nKKUuqNEd8="
          alt="SEO Case Study"
          className="w-full rounded-2xl shadow-lg object-cover h-96"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Real Results for Our Clients
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            We help websites rank higher, attract qualified traffic, and
            increase conversions with proven SEO strategies.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>On-page and off-page optimization</li>
            <li>Competitor analysis & benchmarking</li>
            <li>Continuous monitoring and improvements</li>
          </ul>
        </motion.div>
      </section>

      {/* Content Marketing Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Content Marketing & SEO
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Our SEO strategy includes high-quality content creation and
            optimization to drive organic traffic and improve search visibility.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Blog & article optimization</li>
            <li>Content strategy planning</li>
            <li>Conversion-focused content</li>
          </ul>
        </motion.div>
        <motion.img
          src="https://media.istockphoto.com/id/2204337769/photo/digital-marketing-development-and-goals-strategy-attract-organic-traffic-for-big-sales.jpg?s=612x612&w=0&k=20&c=Q7slUqI8wwrDCt-lnTJR7TW6tU5dx6huPSG3bEZE1BY="
          alt="Content Marketing"
          className="w-full rounded-2xl shadow-lg object-cover h-96"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-900 via-green-700 to-black text-white py-24">
        <motion.div
          className="max-w-3xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Boost Your Website Today
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-6 opacity-95">
            Partner with us to improve your search rankings, increase organic
            traffic, and grow your business online.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-green-900 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}

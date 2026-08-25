import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Clock,
  FileText,
  HelpCircle,
  Mail,
  Search,
  Settings,
  Sparkles,
} from "lucide-react";

const helpTopics = [
  {
    title: "Getting Started",
    icon: Sparkles,
    description: "Start a project, request a quote, or choose a service.",
    faqs: [
      {
        q: "How do I start a project with EmmaTech?",
        a: "Use the Get a Free Quote page or contact us with your idea. We will review your request and suggest the next step.",
      },
      {
        q: "What information should I send first?",
        a: "Share your goal, the service you need, your timeline, and any current website, app, or system you want us to review.",
      },
      {
        q: "Can I ask questions before requesting a quote?",
        a: "Yes. The contact page is best for general questions, while the quote page is best for project details.",
      },
    ],
  },
  {
    title: "Services",
    icon: Settings,
    description: "Understand what EmmaTech can help you with.",
    faqs: [
      {
        q: "What services do you offer?",
        a: "We offer Software Development, Managed IT Services, UI/UX Design, SEO Optimization, and Consulting.",
      },
      {
        q: "Do you build websites and web applications?",
        a: "Yes. We build practical websites, dashboards, web apps, business tools, and digital systems.",
      },
      {
        q: "Can you improve an existing product?",
        a: "Yes. We can review, redesign, improve, support, or extend an existing website, app, or internal tool.",
      },
    ],
  },
  {
    title: "Projects",
    icon: FileText,
    description: "Learn how project planning and delivery works.",
    faqs: [
      {
        q: "How long does a project take?",
        a: "It depends on the scope. Smaller websites may take a few weeks, while custom software can take longer after planning.",
      },
      {
        q: "Do I need a complete idea before contacting you?",
        a: "No. If your idea is not fully clear yet, consulting can help shape the scope, features, and direction.",
      },
      {
        q: "Will I get updates during the project?",
        a: "Yes. We keep communication clear so you understand what is being worked on and what comes next.",
      },
    ],
  },
  {
    title: "Support",
    icon: Clock,
    description: "Get help after launch or for technical issues.",
    faqs: [
      {
        q: "Do you provide support after launch?",
        a: "Yes. We can help with maintenance, updates, troubleshooting, and improvements after your project goes live.",
      },
      {
        q: "How fast do you respond?",
        a: "We aim to respond within 24 hours during business days.",
      },
      {
        q: "Where should I send support questions?",
        a: "Use the contact page or email example@gmail.com with a clear description of the issue.",
      },
    ],
  },
];

const quickLinks = [
  {
    title: "Request a Quote",
    text: "For project cost, scope, and timeline.",
    to: "/get-a-quote",
  },
  {
    title: "Contact EmmaTech",
    text: "For general questions and support.",
    to: "/contact",
  },
  {
    title: "Explore Services",
    text: "See what we can help you build.",
    to: "/service",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTopics = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return helpTopics;

    return helpTopics
      .map((topic) => ({
        ...topic,
        faqs: topic.faqs.filter(
          (faq) =>
            faq.q.toLowerCase().includes(query) ||
            faq.a.toLowerCase().includes(query) ||
            topic.title.toLowerCase().includes(query)
        ),
      }))
      .filter((topic) => topic.faqs.length > 0);
  }, [searchQuery]);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative pt-32 pb-20 bg-gray-950 text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80"
          alt="Help center"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950/90 to-teal-900/75" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-blue-300 font-semibold uppercase tracking-wide text-sm">
              Help Center
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
              How can we help?
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Find quick answers about services, projects, quotes, and support.
            </p>

            <div className="max-w-2xl mx-auto flex items-center bg-white text-gray-900 border border-white/20 shadow-xl">
              <Search className="ml-4 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search help topics..."
                className="flex-1 px-4 py-4 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <Link
                  to={link.to}
                  className="group block bg-white border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {link.title}
                  </h2>
                  <p className="text-gray-600 mb-5">{link.text}</p>
                  <span className="inline-flex items-center gap-2 text-blue-600 font-semibold">
                    Open
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12">
            <aside>
              <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                FAQs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                Answers before you reach out
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Browse by topic or use the search box above to narrow the list.
              </p>
              <div className="bg-gray-50 border border-gray-100 p-6">
                <HelpCircle className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">
                  Still unsure?
                </h3>
                <p className="text-gray-600 mb-5">
                  Send us a message and we will point you in the right
                  direction.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold"
                >
                  Contact us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>

            <div className="space-y-6">
              {filteredTopics.length === 0 ? (
                <div className="bg-gray-50 border border-gray-100 p-8 text-center">
                  <p className="text-gray-600">
                    No answers found. Try another search or contact us directly.
                  </p>
                </div>
              ) : (
                filteredTopics.map((topic, topicIndex) => {
                  const Icon = topic.icon;

                  return (
                    <div
                      key={topic.title}
                      className="bg-white border border-gray-100 shadow-sm"
                    >
                      <div className="p-6 border-b border-gray-100 flex items-start gap-4">
                        <div className="w-11 h-11 bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {topic.title}
                          </h3>
                          <p className="text-gray-600">{topic.description}</p>
                        </div>
                      </div>

                      <div className="divide-y divide-gray-100">
                        {topic.faqs.map((faq, faqIndex) => {
                          const id = `${topicIndex}-${faqIndex}`;
                          const isOpen = openIndex === id;

                          return (
                            <div key={faq.q}>
                              <button
                                type="button"
                                onClick={() => setOpenIndex(isOpen ? null : id)}
                                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                              >
                                <span className="font-semibold text-gray-900">
                                  {faq.q}
                                </span>
                                <ChevronDown
                                  className={`h-5 w-5 text-blue-600 transition-transform ${
                                    isOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                              {isOpen && (
                                <div className="px-6 pb-5 -mt-1">
                                  <p className="text-gray-600 leading-relaxed">
                                    {faq.a}
                                  </p>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 shadow-sm p-8 md:p-10 text-center">
            <Mail className="h-10 w-10 text-blue-600 mx-auto mb-5" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need direct support?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              If the answer is not here, send us a message and we will get back
              to you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Support
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

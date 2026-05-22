import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code,
  Headphones,
  MessageSquare,
  Palette,
  Search,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom web apps, internal tools, APIs, and software built around real business workflows.",
    link: "/services/software-development",
  },
  {
    icon: Headphones,
    title: "Managed IT Services",
    description:
      "Reliable IT support, maintenance, and technical assistance for growing teams.",
    link: "/services/managed-it-services",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Clean product interfaces that make websites, apps, and dashboards easier to use.",
    link: "/services/uiux-design",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Practical website improvements that help search engines and customers understand you.",
    link: "/services/seo",
  },
  {
    icon: MessageSquare,
    title: "Consulting",
    description:
      "Clear technology guidance for planning, improving, and launching digital systems.",
    link: "/services/consulting",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
              Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5">
              Practical digital support for serious growth
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              EmmaTech helps businesses design, build, improve, and support the
              systems they need to work better online.
            </p>
            <Link
              to="/service"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              View all services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isLastOdd = index === services.length - 1;

              return (
                <Link
                  key={service.title}
                  to={service.link}
                  className={`group bg-gray-50 border border-gray-100 p-6 shadow-sm hover:bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300 ${
                    isLastOdd ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center mb-6 group-hover:bg-slate-950 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                    Learn more
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

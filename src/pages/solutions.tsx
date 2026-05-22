import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Headphones,
  Lightbulb,
  Palette,
  Search,
} from "lucide-react";

const solutions = [
  {
    icon: Code2,
    title: "Build a Product",
    description: "Custom software and web apps for your workflow.",
    link: "/services/software-development",
  },
  {
    icon: Palette,
    title: "Improve UX",
    description: "Cleaner interfaces for better user experience.",
    link: "/services/uiux-design",
  },
  {
    icon: Headphones,
    title: "Support Operations",
    description: "Managed IT help for smoother daily systems.",
    link: "/services/managed-it-services",
  },
  {
    icon: Search,
    title: "Grow Visibility",
    description: "SEO improvements that help people find you.",
    link: "/services/seo",
  },
  {
    icon: Lightbulb,
    title: "Plan Smarter",
    description: "Technology consulting for confident decisions.",
    link: "/services/consulting",
  },
];

const SolutionsPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white pt-24">
      <section className="bg-gray-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-300 font-semibold uppercase tracking-wide text-sm">
            Explore Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Choose the right digital path for your business
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            From new products to better systems, EmmaTech helps you move from
            idea to practical execution.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <Link
                  key={solution.title}
                  to={solution.link}
                  className="group bg-white border border-gray-100 shadow-sm p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {solution.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-blue-600 font-semibold">
                    Learn more
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 bg-blue-600 text-white p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Need guidance before choosing?
              </h2>
              <p className="text-blue-100">
                Tell us what you want to achieve, and we will recommend the
                best next step.
              </p>
            </div>
            <Link
              to="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SolutionsPage;

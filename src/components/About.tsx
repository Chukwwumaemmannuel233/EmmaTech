import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const strengths = [
  "Clear planning before development starts",
  "Simple communication from idea to launch",
  "Support for websites, apps, IT, SEO, and design",
];

const stats = [
  { value: "5+", label: "Years of experience" },
  { value: "6+", label: "Core service areas" },
  { value: "24/7", label: "Support mindset" },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="EmmaTech team planning digital work"
              className="w-full h-[420px] object-cover shadow-xl"
            />
            <div className="absolute left-5 right-5 bottom-5 bg-white/95 backdrop-blur border border-white/70 shadow-lg p-5">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
              About EmmaTech
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5">
              Technology work that feels clear, useful, and dependable
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We help businesses turn ideas into reliable digital products and
              better systems. Our work covers software development, IT support,
              UI/UX design, SEO, and practical consulting.
            </p>

            <div className="space-y-4 mb-8">
              {strengths.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

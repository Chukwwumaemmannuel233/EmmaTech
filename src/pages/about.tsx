import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Lightbulb,
  Shield,
  Target,
  Users,
} from "lucide-react";

const stats = [
  {
    value: 5,
    suffix: "+",
    label: "Years of Experience",
    text: "Building and supporting digital solutions.",
  },
  {
    value: 6,
    suffix: "+",
    label: "Expert Team Members",
    text: "Focused on design, development, and support.",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Support Mindset",
    text: "Practical help when your systems need attention.",
  },
];

const values = [
  {
    icon: Target,
    title: "Purposeful Delivery",
    text: "We focus on useful solutions that solve real business problems.",
  },
  {
    icon: Lightbulb,
    title: "Practical Innovation",
    text: "We use modern ideas without adding unnecessary complexity.",
  },
  {
    icon: Users,
    title: "Client Alignment",
    text: "We listen closely, communicate clearly, and build around your goals.",
  },
  {
    icon: Shield,
    title: "Reliable Standards",
    text: "We care about quality, maintainability, and long-term trust.",
  },
];

const capabilities = [
  "Software development",
  "Managed IT services",
  "UI/UX design",
  "SEO optimization",
  "Technology consulting",
];

const flowItems = ["Strategy", "Design", "Build", "Support"];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const CountUp = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frameId = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default function About() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      <section className="relative pt-32 pb-20 bg-gray-950 text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
          alt="EmmaTech team planning digital products"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950/90 to-teal-900/75" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.span
                variants={fadeUp}
                className="text-blue-300 font-semibold uppercase tracking-wide text-sm"
              >
                About EmmaTech
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-6xl font-bold mt-4 mb-6"
              >
                We turn business ideas into useful digital solutions
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl"
              >
                EmmaTech helps growing businesses design, build, improve, and
                support digital products with clarity, care, and practical
                execution.
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-4 mt-8"
              >
                <Link
                  to="/get-a-quote"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get a Free Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/service"
                  className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Services
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative min-h-[420px]"
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
                alt="EmmaTech team discussing a digital project"
                className="absolute inset-0 w-full h-full object-cover shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/75 via-gray-950/20 to-transparent" />

              <motion.div
                className="absolute top-6 right-6 bg-white/95 text-gray-950 border border-white/70 shadow-xl p-4 w-48"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
                  Workflow
                </p>
                <p className="font-bold">Plan. Build. Improve.</p>
              </motion.div>

              <div className="absolute left-5 right-5 bottom-5 bg-gray-950/85 border border-white/10 backdrop-blur p-5">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {flowItems.map((item, index) => (
                    <motion.div
                      key={item}
                      className="bg-white/8 border border-white/10 p-3"
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.25,
                      }}
                    >
                      <p className="text-xs text-blue-200 mb-1">0{index + 1}</p>
                      <p className="text-sm font-semibold">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5">
                A technology team focused on practical business progress
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We work with clients who need websites, software, digital
                product design, IT support, SEO improvements, or technology
                guidance. Our goal is to make technology easier to understand,
                easier to use, and easier to maintain.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="flex items-center gap-3 bg-white border border-gray-100 p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-gray-800">
                      {capability}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Team collaboration"
                className="w-full h-[440px] object-cover shadow-xl"
              />
              <motion.div
                className="absolute -bottom-6 left-6 right-6 bg-white border border-gray-100 shadow-xl p-5"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <Code2 className="h-6 w-6 text-blue-600" />
                  <p className="font-semibold">
                    Built with strategy, design, development, and support in one
                    direction.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="border border-gray-100 bg-gray-50 p-8 text-center"
              >
                <div className="text-5xl font-bold text-blue-600 mb-3">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600">{stat.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-12">
            <div>
              <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                The standards behind our work
              </h2>
              <p className="text-lg text-gray-600">
                We keep our work grounded in clarity, trust, and useful
                execution.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    variants={fadeUp}
                    className="bg-white border border-gray-100 p-6"
                  >
                    <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center mb-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.text}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-gray-100 bg-gray-50 p-8"
          >
            <Users className="h-8 w-8 text-blue-600 mb-5" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To deliver reliable digital solutions that solve practical
              business problems and help clients work smarter.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-gray-100 bg-gray-50 p-8"
          >
            <Target className="h-8 w-8 text-blue-600 mb-5" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become a trusted technology partner for businesses that want
              thoughtful design, dependable systems, and clear execution.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

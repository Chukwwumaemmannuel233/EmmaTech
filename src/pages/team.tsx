import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Headphones,
  Lightbulb,
  Linkedin,
  Palette,
  Search,
  ShieldCheck,
  Twitter,
  Users,
} from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Software Development",
    text: "Building practical web apps, business tools, and digital systems.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    text: "Designing clean interfaces and user journeys that feel easy to use.",
  },
  {
    icon: Headphones,
    title: "Managed IT Support",
    text: "Helping teams resolve technical issues and maintain everyday systems.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    text: "Improving website structure, visibility, and search readiness.",
  },
];

const members = [
  {
    name: "Daniel Okafor",
    role: "Software Developer",
    specialty: "Web apps, APIs, and dashboards",
    image:
      "",
    bio: "Builds web applications, dashboards, APIs, and practical business tools.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Amara Nwosu",
    role: "UI/UX Designer",
    specialty: "Product flows and interface systems",
    image:
      "",
    bio: "Designs clear user journeys, interfaces, wireframes, and product screens.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Tobi Adewale",
    role: "IT Support Specialist",
    specialty: "Device setup and system support",
    image:
      "",
    bio: "Supports devices, systems, apps, and day-to-day technical operations.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Grace Eze",
    role: "SEO Specialist",
    specialty: "Technical SEO and content structure",
    image:
      "",
    bio: "Improves website structure, visibility, page quality, and search readiness.",
    linkedin: "#",
    twitter: "#",
  },
];

const principles = [
  "Clear communication",
  "Practical execution",
  "Client-focused thinking",
  "Reliable support",
];

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

const TeamPage: React.FC = () => {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      <section className="relative pt-32 pb-20 bg-gray-950 text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80"
          alt="EmmaTech team collaboration"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950/90 to-teal-900/75" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.span
                variants={fadeUp}
                className="text-blue-300 font-semibold uppercase tracking-wide text-sm"
              >
                Our Team
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-6xl font-bold mt-4 mb-6"
              >
                A focused team building useful digital solutions
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl"
              >
                EmmaTech brings together development, design, support, SEO, and
                consulting skills to help businesses move from idea to execution.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <img
                src="/images/ceo.jpeg"
                alt="Chukwuma Emmanuel"
                className="w-full h-[460px] object-cover shadow-2xl"
              />
              <div className="absolute left-5 right-5 bottom-5 bg-white text-gray-950 p-5 shadow-xl">
                <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide mb-1">
                  Founder
                </p>
                <h2 className="text-2xl font-bold">Chukwuma Emmanuel</h2>
                <p className="text-gray-600 mt-2">
                  Leading EmmaTech with a focus on practical innovation,
                  client outcomes, and dependable delivery.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Small, skilled, and built for close collaboration
            </h2>
            <p className="text-lg text-gray-600">
              Meet the people and roles behind EmmaTech. These placeholders are
              ready to swap with your real team names and photos.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-14"
          >
            {members.map((member) => (
              <motion.article
                key={member.role}
                variants={fadeUp}
                className="group bg-white border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.role} placeholder`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                  <div className="absolute left-5 right-5 bottom-5 text-white">
                    <p className="text-sm text-blue-200 font-semibold uppercase tracking-wide mb-1">
                      {member.role}
                    </p>
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-blue-600 font-semibold text-sm mb-3">
                    {member.specialty}
                  </p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  <div className="flex items-center gap-3 mt-5">
                    <a
                      href={member.linkedin}
                      aria-label={`${member.name} on LinkedIn`}
                      className="w-9 h-9 bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={member.twitter}
                      aria-label={`${member.name} on X`}
                      className="w-9 h-9 bg-gray-100 hover:bg-gray-950 text-gray-600 hover:text-white flex items-center justify-center transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
          >
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <motion.article
                  key={capability.title}
                  variants={fadeUp}
                  className="bg-white border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {capability.text}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
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
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
              alt="Team planning work"
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
              Team Culture
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5">
              We keep the work clear, useful, and accountable
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Every project needs more than technical skill. It needs listening,
              planning, communication, and the discipline to build what actually
              helps the client.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {principles.map((principle) => (
                <div
                  key={principle}
                  className="flex items-center gap-3 border border-gray-100 bg-gray-50 p-4"
                >
                  <ShieldCheck className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-gray-800">{principle}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 shadow-sm p-8 md:p-10 text-center">
            <Users className="h-10 w-10 text-blue-600 mx-auto mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Want to work with EmmaTech?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Whether you need a project built, a system supported, or a digital
              idea shaped, our team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/career"
                className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-blue-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Careers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeamPage;

// CloudInfrastructurePage.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Cloud,
  ShieldCheck,
  Server,
  Database,
  Globe,
  Activity,
  Lock,
  Cog,
  Rocket,
  BarChart3,
} from "lucide-react";

export default function CloudInfrastructurePage() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  const features = [
    {
      icon: <Cloud className="w-10 h-10 text-indigo-500" />,
      title: "Cloud Migrations",
      desc: "Move apps & data to AWS, Azure, or GCP with a proven, low-risk plan.",
    },
    {
      icon: <Server className="w-10 h-10 text-purple-500" />,
      title: "Scalable Compute",
      desc: "Autoscaling, spot instances, and container platforms tuned for cost & speed.",
    },
    {
      icon: <Database className="w-10 h-10 text-blue-500" />,
      title: "Managed Datastores",
      desc: "Highly available databases, backups, and disaster recovery strategies.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-emerald-500" />,
      title: "Security & Compliance",
      desc: "Identity, encryption, IAM hardening, and compliance guardrails.",
    },
    {
      icon: <Activity className="w-10 h-10 text-orange-500" />,
      title: "Monitoring & SRE",
      desc: "Metrics, logs, tracing, and SLOs to keep you fast and reliable.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-pink-500" />,
      title: "Cost Optimization",
      desc: "Reserved capacity, rightsizing, and continuous cost governance.",
    },
  ];

  const process = [
    {
      title: "Assess",
      desc: "Current-state review, readiness, and a prioritized migration roadmap.",
      img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
      align: "left",
    },
    {
      title: "Design",
      desc: "Well-Architected blueprints: networking, security, CI/CD, and data layers.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      align: "right",
    },
    {
      title: "Build",
      desc: "Infrastructure as Code, immutable deployments, and automated testing.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      align: "left",
    },
    {
      title: "Operate",
      desc: "24/7 monitoring, incident response, and continuous improvement.",
      img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80",
      align: "right",
    },
  ];

  const techLogos = [
    {
      name: "AWS",
      logo:
        "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
    },
    {
      name: "Azure",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      name: "Google Cloud",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    },
    {
      name: "Docker",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Kubernetes",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },
    {
      name: "Terraform",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    },
    {
      name: "Ansible",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
    },
    {
      name: "Pulumi",
      logo: "https://avatars.githubusercontent.com/u/25439761?s=200&v=4",
    },
    {
      name: "Linux",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
    {
      name: "Prometheus",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
    },
    {
      name: "Grafana",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
    },
    {
      name: "PostgreSQL",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Redis",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gray-50"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-500" />
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
          alt="Cloud Infrastructure"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="eager"
        />
        {/* Stronger contrast layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
        <motion.div
          variants={item}
          className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center"
        >
          {/* subtle glass card for readability */}
          <motion.div
            variants={item}
            className="mx-auto max-w-4xl rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20 px-6 py-8"
          >
            <motion.h1
              variants={item}
              className="text-white text-4xl md:text-6xl font-bold leading-tight drop-shadow"
            >
              Cloud Infrastructure
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-6 text-white/95 text-lg md:text-xl max-w-3xl mx-auto"
            >
              We design, migrate, and operate secure, scalable, and cost-efficient
              cloud platforms—so your teams can ship faster with confidence.
            </motion.p>
            <motion.div
              variants={item}
              className="mt-8 flex justify-center gap-4"
            >
              <Link
                to="/contact"
                className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow hover:shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                Talk to an Engineer
              </Link>
              <Link
                to="/see-how-we-build"
                className="bg-transparent border border-white/70 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                See How We Build
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Intro / Value */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={item}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Built for Scale, Security, and Speed
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Whether you’re modernizing legacy apps, moving to containers, or
            scaling a global platform, we align architecture with your business
            goals. Our approach blends reliability engineering, infrastructure
            as code, and strong security practices from day one.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li className="transition hover:text-indigo-700">
              Resilient multi-AZ and multi-region designs
            </li>
            <li className="transition hover:text-indigo-700">
              Zero-trust networking and least-privilege IAM
            </li>
            <li className="transition hover:text-indigo-700">
              Automated CI/CD with blue-green or canary deployments
            </li>
            <li className="transition hover:text-indigo-700">
              Observability baked in: metrics, logs, and tracing
            </li>
          </ul>
          <Link
            to="/contact"
            className="inline-block mt-6 bg-indigo-600 text-white px-7 py-3 rounded-full shadow hover:shadow-lg hover:-translate-y-0.5 transition font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            Start Your Cloud Journey
          </Link>
        </motion.div>
        <motion.img
          variants={item}
          whileHover={{ scale: 1.02 }}
          src="https://media.istockphoto.com/id/467537440/photo/cloud-migration.jpg?s=612x612&w=0&k=20&c=BBwpcRbYLegLIKI3fLfNfNB8ROyGGkV1ZAv9EVqbuJE="
          alt="Cloud architecture diagram"
          className="w-full h-96 object-cover rounded-2xl shadow-lg"
          loading="lazy"
        />
      </section>

      {/* Features */}
      <section className="py-16 px-6 md:px-20">
        <motion.h2
          variants={item}
          className="text-3xl font-bold text-gray-900 text-center mb-12"
        >
          What We Deliver
        </motion.h2>
        <motion.div
          variants={container}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f, i) => (
            <motion.article
              key={i}
              variants={item}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group bg-white rounded-2xl p-6 shadow transition hover:shadow-xl focus-within:shadow-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="transition-transform group-hover:-translate-y-0.5">
                  {f.icon}
                </span>
                <h3 className="text-xl font-semibold">{f.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Alternating process sections */}
      {process.map((block, idx) => (
        <section
          key={idx}
          className="py-16 max-w-6xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center"
        >
          {block.align === "left" && (
            <motion.img
              variants={item}
              whileHover={{ scale: 1.02 }}
              src={block.img}
              alt={block.title}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
          )}
          <motion.div
            variants={item}
            className="rounded-xl p-2 md:p-3 transition"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {block.title}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">{block.desc}</p>
            <div className="mt-6 flex items-center gap-3 text-gray-700">
              <Lock className="w-5 h-5 text-emerald-500" />
              <span>Security-first design</span>
            </div>
            <div className="mt-2 flex items-center gap-3 text-gray-700">
              <Cog className="w-5 h-5 text-indigo-500" />
              <span>Infrastructure as Code</span>
            </div>
            <div className="mt-2 flex items-center gap-3 text-gray-700">
              <Globe className="w-5 h-5 text-purple-500" />
              <span>Global performance & CDN</span>
            </div>
          </motion.div>
          {block.align === "right" && (
            <motion.img
              variants={item}
              whileHover={{ scale: 1.02 }}
              src={block.img}
              alt={block.title}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
          )}
        </section>
      ))}

      {/* Full-width image with overlay text */}
      <section className="relative py-28">
        <img
          src="https://media.istockphoto.com/id/2166193783/photo/data-analytics-team-meeting-at-night.jpg?s=612x612&w=0&k=20&c=MBhix9YGEH0JQ39j2K8Dp4mA-tZ4QMWFm6V90rJGRJg="
          alt="Global cloud network"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {/* darker overlay for stronger contrast */}
        <div className="absolute inset-0 bg-black/65" />
        <motion.div
          variants={item}
          className="relative z-10 max-w-4xl mx-auto text-center text-white px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5 drop-shadow-lg">
            Reliable. Secure. Globally Fast.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed drop-shadow">
            From edge delivery and private networking to airtight IAM and
            encryption, we build platforms you can trust—no matter where your
            users are.
          </p>
        </motion.div>
      </section>

      {/* Key Technologies — logo cards with hover */}
      <section className="py-16 px-6 md:px-20">
        <motion.h2
          variants={item}
          className="text-3xl font-bold text-gray-900 text-center mb-10"
        >
          Key Technologies We Use
        </motion.h2>
        <motion.div
          variants={container}
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {techLogos.map((tech, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.06, rotate: 0.25 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-xl bg-white p-6 shadow transition hover:shadow-2xl focus-within:shadow-2xl ring-1 ring-gray-100 hover:ring-indigo-100"
            >
              {/* subtle gradient accent on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-indigo-50 via-transparent to-purple-50" />
              <div className="relative z-10 flex flex-col items-center">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-12 h-12 mb-3 object-contain transition-transform group-hover:-translate-y-0.5"
                  loading="lazy"
                />
                <span className="text-gray-800 font-medium">{tech.name}</span>
              </div>
              {/* focus ring for a11y if tabbed */}
              <span className="absolute inset-0 rounded-xl ring-0 group-focus-within:ring-2 group-focus-within:ring-indigo-500 transition" />
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-6 text-center text-gray-600">
          …and many more, tailored to your needs and existing investments.
        </p>
      </section>

      {/* Benefits row */}
      <section className="py-16 max-w-6xl mx-auto px-6 md:px-20">
        <motion.h2
          variants={item}
          className="text-3xl font-bold text-gray-900 text-center mb-12"
        >
          Why Teams Choose Us
        </motion.h2>
        <motion.div
          variants={container}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              icon: <Rocket className="w-8 h-8" />,
              title: "Faster Time-to-Value",
              desc: "Accelerators and templates get you live sooner.",
            },
            {
              icon: <Lock className="w-8 h-8" />,
              title: "Security by Default",
              desc: "Guardrails and automation reduce risk & toil.",
            },
            {
              icon: <BarChart3 className="w-8 h-8" />,
              title: "Cost Visibility",
              desc: "Dashboards and alerts prevent surprises.",
            },
            {
              icon: <Globe className="w-8 h-8" />,
              title: "Global Scale",
              desc: "Edge, multi-region, and high availability.",
            },
          ].map((b, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-white rounded-2xl p-6 shadow transition hover:shadow-xl"
            >
              <div className="mb-3 text-indigo-600">{b.icon}</div>
              <h3 className="text-lg font-semibold mb-1">{b.title}</h3>
              <p className="text-gray-600">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 md:px-20 max-w-4xl mx-auto">
        <motion.h2
          variants={item}
          className="text-3xl font-bold text-gray-900 text-center mb-10"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {[
            {
              q: "Can you migrate us without downtime?",
              a: "We design for minimal downtime using blue-green or canary strategies, read-replicas, and reversible cutovers.",
            },
            {
              q: "Do you work with hybrid or multi-cloud?",
              a: "Yes. We support hybrid models and can standardize deployments across providers using IaC patterns.",
            },
            {
              q: "How do you manage security and compliance?",
              a: "We use least-privilege IAM, encryption, centralized secrets, and policy as code. We align with frameworks like SOC 2, ISO 27001, and HIPAA as needed.",
            },
          ].map((f, i) => (
            <motion.details
              key={i}
              variants={item}
              whileHover={{ scale: 1.002 }}
              className="group bg-white rounded-xl shadow p-5 open:shadow-md transition"
            >
              <summary className="cursor-pointer list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded">
                <span className="font-semibold text-gray-900">{f.q}</span>
              </summary>
              <p className="mt-3 text-gray-700">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </section>

      {/* Final CTA (single, high-contrast) */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-500 text-white py-20">
        <motion.div variants={item} className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Modernize Your Cloud?
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-6 opacity-95">
            Let’s design a platform that’s fast, secure, and cost-efficient—
            tuned to your roadmap and your team.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow hover:shadow-lg hover:-translate-y-0.5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            Get a Cloud Assessment
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}

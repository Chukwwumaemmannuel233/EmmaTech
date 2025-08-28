// ConsultationPageVisual.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  Calendar,
  CheckCircle,
  Clipboard,
  MessageCircle,
  Heart,
  Smile,
  Layers,
  Lightbulb,
} from "lucide-react";

export default function ConsultationPageVisual() {
  const services = [
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      title: "Business Consultation",
      description:
        "Get expert advice to grow and optimize your business operations.",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&w=400",
    },
    {
      icon: <Calendar className="w-10 h-10 text-green-500" />,
      title: "Strategy Planning",
      description:
        "Plan actionable strategies to reach your business goals effectively.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&w=400",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-red-500" />,
      title: "Problem Solving",
      description:
        "Identify and resolve challenges that are holding your business back.",
      image:
        "https://media.istockphoto.com/id/2177746077/photo/top-view-of-team-brainstorming-idea-and-writing-plan-at-notes-convocation.jpg?s=612x612&w=0&k=20&c=mwByYJINuvwX0WudgL1K_uPc5ZqCJamdAE6o9nSkPjU=",
    },
    {
      icon: <Clipboard className="w-10 h-10 text-yellow-500" />,
      title: "Market Analysis",
      description:
        "Analyze market trends and competitors to stay ahead in your industry.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&w=400",
    },
  ];

  const consultTopics = [
    "Business growth and strategy",
    "Digital marketing and SEO guidance",
    "Financial planning and investment insights",
    "Operational efficiency and productivity",
    "Technology adoption and innovation",
    "Startup planning and mentorship",
    "Project management solutions",
    "Leadership and team development",
  ];

  const approach = [
    {
      icon: <Layers className="w-10 h-10 text-purple-500" />,
      title: "Structured Methodology",
      description:
        "We follow a proven process to analyze, plan, and implement solutions effectively.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
      title: "Innovative Solutions",
      description:
        "We provide creative, out-of-the-box strategies to tackle complex business problems.",
    },
    {
      icon: <Heart className="w-10 h-10 text-red-500" />,
      title: "Client-Centered",
      description:
        "We focus on your specific goals and ensure all recommendations fit your business needs.",
    },
  ];

  const promises = [
    {
      icon: <MessageCircle className="w-10 h-10 text-blue-500" />,
      title: "Clear Communication",
      description:
        "We listen carefully and respond promptly to all your concerns.",
    },
    {
      icon: <Heart className="w-10 h-10 text-red-500" />,
      title: "Personalized Approach",
      description: "Our advice is tailored to your business goals and needs.",
    },
    {
      icon: <Smile className="w-10 h-10 text-green-500" />,
      title: "Customer Care",
      description:
        "We treat every client with respect, professionalism, and empathy.",
    },
  ];

  const caseStudies = [
    {
      title: "Startup Scaling",
      description:
        "Helped a tech startup increase revenue by 50% within 6 months using strategic planning and market analysis.",
      image:
        "https://media.istockphoto.com/id/1178859938/photo/office-atmosphere.jpg?s=612x612&w=0&k=20&c=p9Stu84RyeeovEp_vyM--X7a2hZK219K5rBxq7r_XLo=",
    },
    {
      title: "Operational Efficiency",
      description:
        "Optimized workflow for a logistics company, reducing operational costs by 30%.",
      image:
        "https://media.istockphoto.com/id/2212560594/photo/two-professionals-discussing-processes-on-manufacturing-floor-with-digital-interface.jpg?s=612x612&w=0&k=20&c=uOMSPOc6Nuem__8u0XcxOrV_EgsMQaqMUAod7JrCJ2U=",
    },
  ];

  const team = [
    {
      name: "Alice Johnson",
      role: "Senior Business Consultant",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&w=200",
    },
    {
      name: "Michael Lee",
      role: "Strategy Expert",
      image:
        "https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Sarah Williams",
      role: "Market Analyst",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fit=max&w=200",
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
      <section className="relative bg-gradient-to-r from-purple-900 via-purple-700 to-black text-white py-24">
        <motion.div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Consultation Services
          </motion.h1>
          <motion.p className="text-lg md:text-xl opacity-95 leading-relaxed mb-8">
            Get expert guidance to grow your business, solve challenges, and
            achieve your goals.
          </motion.p>
          <Link
            to="/contact"
            className="bg-white text-purple-900 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Book a Consultation
          </Link>
        </motion.div>
        <img
          src="https://plus.unsplash.com/premium_photo-1661346003883-9aa9ca94500e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJvZmVzc2lvbmFsJTIwQ29uc3VsdGF0aW9uJTIwU2VydmljZXN8ZW58MHx8MHx8fDA%3D"
          alt="Consultation"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      </section>

      {/* Services Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20">
        <motion.h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          What We Offer
        </motion.h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow flex flex-col md:flex-row overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
                rotate: 0.5,
              }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4, type: "spring", stiffness: 150 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full md:w-1/2 object-cover"
              />
              <div className="p-6 flex flex-col justify-center">
                <div className="flex items-center space-x-3 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Consultation Topics */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20">
        <motion.h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Consult Us For Anything
        </motion.h2>
        <motion.ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-gray-700">
          {consultTopics.map((topic, i) => (
            <motion.li
              key={i}
              className="bg-white rounded-2xl p-4 shadow flex items-center space-x-3 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
                rotate: 0.3,
              }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4, type: "spring", stiffness: 140 }}
            >
              <CheckCircle className="w-6 h-6 text-purple-500" />
              <span>{topic}</span>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Approach Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20 bg-gray-100 rounded-2xl">
        <motion.h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Approach
        </motion.h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          {approach.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow text-center cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
                rotate: 0.3,
              }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4, type: "spring", stiffness: 150 }}
            >
              {item.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20">
        <motion.h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Success Stories
        </motion.h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {caseStudies.map((caseItem, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
                rotate: 0.3,
              }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4, type: "spring", stiffness: 150 }}
            >
              <img
                src={caseItem.image}
                alt={caseItem.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{caseItem.title}</h3>
                <p className="text-gray-700">{caseItem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20 bg-gray-50 rounded-2xl">
        <motion.h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Meet Our Experts
        </motion.h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow text-center cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
                rotate: 0.3,
              }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4, type: "spring", stiffness: 150 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <span className="text-gray-500">{member.role}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Promises Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20 bg-gray-100 rounded-2xl">
        <motion.h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Commitment to You
        </motion.h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          {promises.map((promise, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow text-center cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
                rotate: 0.3,
              }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4, type: "spring", stiffness: 150 }}
            >
              {promise.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{promise.title}</h3>
              <p className="text-gray-600">{promise.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-900 via-purple-700 to-black text-white py-24">
        <motion.div
          className="max-w-3xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book Your Consultation Today
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-6 opacity-95">
            Partner with our experts to identify opportunities, solve problems,
            and grow your business efficiently.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-purple-900 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Schedule Now
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}

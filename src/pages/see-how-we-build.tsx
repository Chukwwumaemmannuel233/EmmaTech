import React from "react";
import { Server, Cloud, HardDrive, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const SeeHowWeBuildPage: React.FC = () => {
  const steps = [
    {
      icon: Cloud,
      title: "Consultation & Planning",
      description:
        "We analyze your current infrastructure and design a tailored cloud solution that fits your needs.",
      image: "https://images.unsplash.com/photo-1752650732799-6e81d5f4c398?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uc3VsdGF0aW9uJTIwYW5kJTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
      icon: Server,
      title: "Architecture Design",
      description:
        "Our engineers design scalable, secure, and efficient cloud architecture for your business.",
      image: "https://media.istockphoto.com/id/1351472483/photo/house-project-in-virtual-reality.jpg?s=612x612&w=0&k=20&c=WD5nBG2kzfNSUqvCOgbVL2E-pfDRzbukzp2pZMWxCjE=",
    },
    {
      icon: HardDrive,
      title: "Implementation & Deployment",
      description:
        "We set up your cloud infrastructure with best practices, ensuring reliability and performance.",
      image: "https://media.istockphoto.com/id/2217457581/photo/agile-software-development-or-project-management-using-kanban-or-scrum-method-boards.jpg?s=612x612&w=0&k=20&c=Pg3RdZTn_0S_Cdcmtv7MFQ1Z81pfby4STXhsL1tc8bI=",
    },
    {
      icon: Cpu,
      title: "Monitoring & Optimization",
      description:
        "Continuous monitoring, performance optimization, and updates to keep your cloud systems running smoothly.",
      image: "https://media.istockphoto.com/id/2167817620/photo/an-engineer-in-a-production-facility-makes-entries-in-a-journal.jpg?s=612x612&w=0&k=20&c=KLpPmrx4gqwrzSN8qtWznMaMmC9Eynhhaqs40vyTRPg=",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            See How We Build
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            Discover our process and approach to building robust Cloud
            Infrastructure solutions.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Cloud Infrastructure Process
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-start bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{step.description}</p>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-xl shadow-md w-full md:w-[400px] object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Our Cloud Solutions Stand Out
            </h2>
            <p className="text-gray-700 mb-4">
              We focus on scalability, security, and performance. Every project
              is designed with your growth in mind. Our cloud engineers follow
              best practices to ensure that your infrastructure is always
              optimized and reliable.
            </p>
            <p className="text-gray-700">
              With continuous monitoring, automated backups, and a dedicated
              support team, your systems are in safe hands.
            </p>
          </motion.div>
          <motion.img
            src="https://media.istockphoto.com/id/2114295998/photo/asian-and-indian-developer-devops-team-discussion-about-coding-promgram-with-software.jpg?s=612x612&w=0&k=20&c=LKwTqUnNPgasiwnhKSHfnwxZMxQdD5ziIZRrhGSOlu0="
            alt="Cloud team collaboration"
            className="rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-teal-900 text-white text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Build Your Cloud Infrastructure?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Connect with our team and let us bring your cloud solutions to life.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block bg-white text-blue-900 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-2xl transition"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Get in Touch
        </motion.a>
      </section>
    </div>
  );
};

export default SeeHowWeBuildPage;

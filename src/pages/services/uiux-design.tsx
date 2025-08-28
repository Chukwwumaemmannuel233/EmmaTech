// UIUXPage.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User, Layout, Monitor, Feather, Paintbrush, Target } from "lucide-react";

export default function UIUXPage() {
  const services = [
    { icon: <Layout className="w-10 h-10 text-blue-500" />, title: "User Interface Design", description: "Craft intuitive and visually appealing interfaces for web and mobile." },
    { icon: <User className="w-10 h-10 text-red-500" />, title: "User Experience Research", description: "Understand user needs with research, personas, and usability testing." },
    { icon: <Paintbrush className="w-10 h-10 text-green-500" />, title: "Visual Design", description: "Create consistent branding, typography, and visual identity for your product." },
    { icon: <Feather className="w-10 h-10 text-teal-500" />, title: "Prototyping & Wireframing", description: "Design interactive prototypes to validate concepts and flows quickly." },
  ];

  const processSteps = [
    { icon: <Target className="w-10 h-10 text-blue-500" />, title: "Research & Analysis", description: "Understand users, market, and business goals before designing." },
    { icon: <Monitor className="w-10 h-10 text-green-500" />, title: "Wireframing & Prototyping", description: "Create mockups and prototypes to visualize the user journey." },
    { icon: <Paintbrush className="w-10 h-10 text-red-500" />, title: "Visual Design", description: "Design high-fidelity UI with consistent branding and aesthetics." },
    { icon: <User className="w-10 h-10 text-yellow-500" />, title: "Testing & Iteration", description: "Validate designs with real users and iterate for improvements." },
  ];

  const technologies = [
    { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" className="w-16 h-16 object-contain" />, name: "Figma" },
    { icon: <img src="https://cdn.worldvectorlogo.com/logos/adobe-xd-1.svg" className="w-16 h-16 object-contain" />, name: "Adobe XD" },
    { icon: <img src="https://cdn.worldvectorlogo.com/logos/sketch-2.svg" className="w-16 h-16 object-contain" />, name: "Sketch" },
    { icon: <img src="https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg" className="w-16 h-16 object-contain" />, name: "Photoshop" },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white py-24">
        <motion.div className="max-w-5xl mx-auto px-6 text-center relative z-10" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-6" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }}>UI/UX Design Services</motion.h1>
          <motion.p className="text-lg md:text-xl opacity-95 leading-relaxed mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            We create intuitive, engaging, and user-friendly designs that enhance your digital products and delight your users.
          </motion.p>
          <Link to="/contact" className="bg-white text-pink-600 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition">Get Started</Link>
        </motion.div>
        <img src="https://media.istockphoto.com/id/1302423375/photo/close-up-ux-developer-and-ui-designer-use-augmented-reality-app-brainstorming-about-mobile.jpg?s=612x612&w=0&k=20&c=zTr--o-q1Sbq0rGMseiHKWg3JMtHb-SxY3EIjbJNkgE=" alt="UI UX Design" className="absolute inset-0 w-full h-full object-cover opacity-30"/>
      </section>

      {/* How We Design */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.img src="https://media.istockphoto.com/id/2161111602/photo/happy-multiracial-business-team-talking-on-a-meeting-in-the-office.jpg?s=612x612&w=0&k=20&c=UVzKdUInmPiMU4RVMq9Ws_ouXevRLX56nuq_AmVMT-U=" alt="Team Collaboration" className="w-full rounded-2xl shadow-lg object-cover h-96 relative" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} />
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Design Approach</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            We follow a structured design process to craft interfaces and experiences that are intuitive, visually appealing, and user-centered.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>User Research & Analysis</li>
            <li>Wireframing & Prototyping</li>
            <li>Visual Design & Branding</li>
            <li>User Testing & Iteration</li>
          </ul>
        </motion.div>
      </section>

      {/* Design Process */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20">
        <motion.h2 className="text-3xl font-bold text-gray-900 text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Our Process</motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {processSteps.map((step, i) => (
            <motion.div key={i} className="bg-white rounded-2xl p-6 shadow text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {step.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-20">
        <motion.h2 className="text-3xl font-bold text-gray-900 text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Our Services</motion.h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div key={i} className="bg-white rounded-2xl p-6 shadow flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Approach Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.img src="https://media.istockphoto.com/id/2094337676/photo/diverse-team-working-together-in-modern-co-working-space.jpg?s=612x612&w=0&k=20&c=EvWROZsfro1ghOVViXVj-tKS364-NeabwNNYkyvhxoY=" alt="Design Collaboration" className="w-full rounded-2xl shadow-lg object-cover h-96" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} />
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Collaborative & User-Centered</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">We collaborate closely with your team to ensure designs meet both business goals and user needs, creating experiences that resonate and engage.</p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Stakeholder Workshops & Brainstorming</li>
            <li>Iterative Design Reviews</li>
            <li>User Feedback Integration</li>
          </ul>
        </motion.div>
      </section>

      {/* Tools / Technologies */}
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-20">
        <motion.h2 className="text-3xl font-bold text-gray-900 text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Key Tools We Use</motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {technologies.map((tech, i) => (
            <motion.div key={i} className="bg-white rounded-2xl p-6 shadow flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {tech.icon}
              <h3 className="text-lg font-semibold mt-4 mb-2">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Full Image With Overlay */}
      <section className="relative py-32">
        <img src="https://media.istockphoto.com/id/2196235576/photo/marketing-team-analyzing-data-and-planning-new-strategy.jpg?s=612x612&w=0&k=20&c=MJJgesc4zdZDDIZc2chN1FiFMWBiW3uGSwU-xCDtJC4=" alt="Innovation in Design" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div className="relative z-10 max-w-4xl mx-auto text-center text-white px-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">We Create Designs That Inspire</h2>
          <p className="text-lg md:text-xl leading-relaxed drop-shadow-md">From wireframes to full user experiences, we help businesses deliver intuitive and beautiful digital products.</p>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white py-24">
        <motion.div className="max-w-3xl mx-auto px-6 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Enhance Your User Experience?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-6 opacity-95">Partner with us to create intuitive and engaging digital experiences for your users.</p>
          <Link to="/contact" className="inline-block bg-white text-pink-600 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition">Contact Us</Link>
        </motion.div>
      </section>

    </motion.div>
  );
}

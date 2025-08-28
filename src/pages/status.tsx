// import React from "react";
import { motion } from "framer-motion";
import { Server, Database, Code, Mail } from "lucide-react";

type Status = "operational" | "degraded" | "down";

const statusTexts: { [key in Status]: string } = {
  operational: "Everything is running smoothly.",
  degraded: "Some features may be slow or partially unavailable.",
  down: "Service is temporarily unavailable. We are working to fix it.",
};

const services = [
  {
    name: "API Server",
    status: "operational" as Status,
    description: "Handles all API requests for the system.",
    icon: Server,
    image: "https://media.istockphoto.com/id/2216175740/photo/businessman-analyzing-digital-screen-of-graph-data-and-integration-endpoints-authentication.jpg?s=612x612&w=0&k=20&c=wVPJQ40s1YS8XdPD17irbu2RGPcF61vpXu_6u7SafWw=",
  },
  {
    name: "Database",
    status: "degraded" as Status,
    description: "Stores all app data. Might be slow during high traffic.",
    icon: Database,
    image: "https://media.istockphoto.com/id/2148113350/photo/data-center-server-racks-it-modern-hardware-server-room-data-storage-center-database.jpg?s=612x612&w=0&k=20&c=6rMsjA_oGVjsSpFCed-Cg6h-9XPn8I3vPg8FWOQulos=",
  },
  {
    name: "Frontend Website",
    status: "operational" as Status,
    description: "Our public website, portfolio, and documentation pages.",
    icon: Code,
    image: "https://media.istockphoto.com/id/1407683268/photo/front-end-developer-working-on-laptop-internet-technologies-concept-business-programming.jpg?s=612x612&w=0&k=20&c=Vk6jBeXDtnmhIFRoqHattVHkLqSuSKcXYfqnknEntRU=",
  },
  {
    name: "Email Service",
    status: "down" as Status,
    description: "Sending system emails (like support notifications) is temporarily unavailable.",
    icon: Mail,
    image: "https://media.istockphoto.com/id/1297112490/photo/email-marketing-and-newsletter-concept-direct-email-sending-for-company.jpg?s=612x612&w=0&k=20&c=8-2N89tSOyUUpRmpOKwB73TGBx86A3_eURCxFbhOCKs=",
  },
];

const incidents = [
  {
    title: "Database outage",
    date: "2025-08-15 14:30",
    cause: "Unexpected high traffic caused database overload.",
    status: "Resolved",
    resolution: "Optimized queries and increased server capacity.",
  },
  {
    title: "Email service downtime",
    date: "2025-08-20 09:00",
    cause: "Third-party email provider experienced temporary outage.",
    status: "Resolved",
    resolution: "Switched to backup provider and emails are now delivering.",
  },
  {
    title: "Frontend website slow",
    date: "2025-08-22 11:00",
    cause: "Scheduled maintenance and server update.",
    status: "Resolved",
    resolution: "Maintenance completed, website performance back to normal.",
  },
];

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-500 text-white py-20 text-center">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          System Status
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl mx-auto opacity-90"
        >
          Check the current status of all our services, get updates on incidents, and learn about maintenance events.
        </motion.p>
        <motion.img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
          alt="System Illustration"
          className="mt-8 mx-auto rounded-xl shadow-lg w-96 opacity-80"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* Services Section */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-gray-900 text-center"
        >
          Service Status
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6"
            >
              <service.icon className="h-12 w-12 text-indigo-600" />
              <div className="flex-1">
                <h3 className="font-semibold text-xl flex items-center justify-between">
                  {service.name}
                  <span
                    className={`ml-2 px-2 py-1 rounded text-sm font-mono ${
                      service.status === "operational"
                        ? "bg-green-100 text-green-800"
                        : service.status === "degraded"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {service.status.toUpperCase()}
                  </span>
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <p className="text-gray-500 text-sm mt-1">{statusTexts[service.status]}</p>
              </div>
              <img
                src={service.image}
                alt={service.name}
                className="w-32 h-20 object-cover rounded-lg shadow-md"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Maintenance & Explanations */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6 text-gray-900"
        >
          Maintenance & Updates
        </motion.h2>
        <p className="text-gray-700 mb-4">
          Scheduled updates or emergency fixes may temporarily affect service availability. We always work quickly to restore full functionality.
        </p>
        <p className="text-gray-700 mb-4">
          Maintenance ensures system security, performance, and reliability for all users.
        </p>
        <img
          src="https://media.istockphoto.com/id/815594930/photo/computer-service-work-tool-icon.jpg?s=612x612&w=0&k=20&c=S6K0Pp9PenrrFf4irLzeR9KxSmdZ1j_x_hznz2u4b3M="
          alt="Maintenance Illustration"
          className="mt-6 mx-auto rounded-xl shadow-lg w-96"
        />
      </section>

      {/* Incident Timeline */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-gray-900 text-center"
        >
          Incident History
        </motion.h2>

        <div className="grid md:grid-cols-1 gap-8">
          {incidents.map((incident, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="font-semibold text-xl mb-2">{incident.title}</h3>
              <p className="text-gray-500 text-sm mb-2">Date/Time: {incident.date}</p>
              <p className="text-gray-600 mb-1"><strong>Cause:</strong> {incident.cause}</p>
              <p className="text-gray-600 mb-1"><strong>Status:</strong> {incident.status}</p>
              <p className="text-gray-600"><strong>Resolution:</strong> {incident.resolution}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

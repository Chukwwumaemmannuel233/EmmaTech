// import React from "react";
import { motion } from "framer-motion";
import { Lock, FileText, Shield, Info, Globe } from "lucide-react";

const privacySections = [
  {
    title: "Introduction",
    description: `We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information.`,
    icon: FileText,
    image: "https://media.istockphoto.com/id/2132572884/photo/business-team-celebrating-successful-project-in-boardroom.jpg?s=612x612&w=0&k=20&c=IJcWUi9HDZb_n2C7his-ymbREwQojDWXeOv6kpAmi-Q=",
  },
  {
    title: "Information Collection",
    description: `We collect information you provide directly, such as your name, email, and payment details. We also collect data automatically via cookies, logs, and analytics tools.`,
    icon: Lock,
    image: "https://media.istockphoto.com/id/1266858245/photo/anonymous-businesswoman-analyzing-statistical-business-reports-on-her-laptop-pc-at-the-office.jpg?s=612x612&w=0&k=20&c=yOtrzBrt_NrwHZr4w-UpZgRqTuLTfQPU8eOh2Pjg7pE=",
  },
  {
    title: "Use of Information",
    description: `Your data helps us provide, improve, and personalize our services. We use information for account management, customer support, product enhancements, and security purposes.`,
    icon: Shield,
    image: "https://media.istockphoto.com/id/2215035178/photo/smile-business-and-people-on-tablet-in-office-of-planning-finance-document-and-company-growth.jpg?s=612x612&w=0&k=20&c=PucxW_awvD2_v5D30oLisEDJnjJndtwFa8hg_phE28U=",
  },
  {
    title: "Data Sharing & Security",
    description: `We do not sell your personal information. Data is shared only with trusted partners under strict confidentiality agreements. All information is encrypted in transit and at rest.`,
    icon: Lock,
    image: "https://media.istockphoto.com/id/2157716288/photo/person-managing-secure-cloud-data-transfer-an-individual-uses-laptop-to-manage-secure-data.jpg?s=612x612&w=0&k=20&c=jFY_Ea_y6Pcu55C-jjTR_QB3c4yzyu5lpiANljFHyQM=",
  },
  {
    title: "User Rights",
    description: `You have the right to access, update, or delete your personal data. You may also restrict processing or object to marketing communications at any time.`,
    icon: FileText,
    image: "https://media.istockphoto.com/id/2163506576/photo/ai-laws-and-regulations-concept-hand-typing-on-laptop-with-digital-icons-representing.jpg?s=612x612&w=0&k=20&c=CwgK4rD0bxGCbMmzfvetAlQ7EQlxPpAxyQ5pTvPo4nM=",
  },
  {
    title: "Cookies & Tracking",
    description: `We use cookies and analytics to improve the user experience and understand website usage. You can manage your cookie preferences in your browser settings.`,
    icon: Globe,
    image: "https://media.istockphoto.com/id/179282797/photo/clear-internet-history.jpg?s=612x612&w=0&k=20&c=2t9NF2ztGtuxino0xkD5pM-ZsMAajwwAuCRnxYgKwQ8=",
  },
  {
    title: "Children's Privacy",
    description: `Our services are not intended for children under 13. We do not knowingly collect data from children. If we learn that data has been collected from children, it will be deleted immediately.`,
    icon: Info,
    image: "https://media.istockphoto.com/id/928388556/photo/little-girl-touching-the-security-button-on-the-digital-screen.jpg?s=612x612&w=0&k=20&c=9zB3OyWX3ErWlWQOJQXbADQRcJfAO_oIMHtxeZ6sGyg=",
  },
  {
    title: "Third-Party Services",
    description: `We may use third-party services for analytics, payments, hosting, or communication. These providers follow strict privacy standards and contractual obligations.`,
    icon: Shield,
    image: "https://media.istockphoto.com/id/680294956/photo/data-management-platform-concept-infographic-texts-and-icons-on-abstract-arrow-dart-point-to.jpg?s=612x612&w=0&k=20&c=mWI57yFkuNhatYtdLqEqPE6OpQef6A_gjL5YtTHD7v0=",
  },
  {
    title: "Legal Basis for Processing",
    description: `We process your personal data only when we have a legal basis, such as consent, contractual necessity, legal obligation, or legitimate interest.`,
    icon: Info,
    image: "https://media.istockphoto.com/id/1976499410/photo/image-of-judges-hammer-scales-lady-of-justice-law-book-laptop-computer-and-contract-documents.jpg?s=612x612&w=0&k=20&c=YqqtXpzWn3f-8i_0b_q61H-0pjS_9EExDkc8c6Y9SEw=",
  },
  {
    title: "Data Retention",
    description: `We retain your personal data only for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce agreements.`,
    icon: Lock,
    image: "https://media.istockphoto.com/id/2164542763/photo/businessman-touching-backup-icon-for-data-protection-and-global-network-accessibility.jpg?s=612x612&w=0&k=20&c=Mu3urxPV2Ib_onUjbRtJvk9oSP9KnCO1xeZGpyrCNWc=",
  },
  {
    title: "International Transfers",
    description: `Some of your information may be transferred and stored in countries outside your residence. We ensure appropriate safeguards are in place to protect your data.`,
    icon: Globe,
    image: "https://media.istockphoto.com/id/1327882500/photo/global-communication-network.jpg?s=612x612&w=0&k=20&c=rfZTdlF_2-BWoDGtVo_2EujVq74sGHzqBIxfcnkohok=0",
  },
  {
    title: "Marketing Communications",
    description: `With your consent, we may send marketing emails. You can unsubscribe anytime by clicking the “unsubscribe” link in emails or contacting support.`,
    icon: FileText,
    image: "https://media.istockphoto.com/id/1393812255/photo/theyre-innovators-of-business.jpg?s=612x612&w=0&k=20&c=k18btXPCNimiWq_rm07YZwNHXPWwDwY3QaHGhe_R_BA=",
  },
  {
    title: "Changes to This Policy",
    description: `We may update this Privacy Policy periodically. Review it regularly. Significant changes will be communicated via email or website notifications.`,
    icon: Lock,
    image: "https://media.istockphoto.com/id/1400928172/photo/low-angle-view-of-hands-of-multiracial-group-of-people-working-with-ideas-and-brainstorming.jpg?s=612x612&w=0&k=20&c=xS26BvEjVWwJYG4Q0p55YWqRsKn-vakK8rGvD5zzdaM=",
  },
];

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl mx-auto opacity-90"
        >
          Your privacy is our top priority. Learn how we collect, use, and protect your personal information.
        </motion.p>
      </section>

      {/* Privacy Sections */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {privacySections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-xl transition-shadow duration-300"
            >
              <section.icon className="h-12 w-12 text-indigo-600" />
              <div className="flex-1">
                <h3 className="font-semibold text-xl mb-2">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
              <img
                src={section.image}
                alt={section.title}
                className="w-32 h-20 object-cover rounded-lg shadow-md"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6 text-gray-900"
        >
          Your Trust Matters
        </motion.h2>
        <p className="text-gray-700 mb-4">
          We are committed to maintaining transparency and keeping your personal data safe. By using our services, you agree to the practices outlined in this Privacy Policy.
        </p>
        <img
          src="https://media.istockphoto.com/id/2151241381/photo/digital-security-and-safety-concept-blue-glossy-shield-icon-on-abstract-circuit-board-with.jpg?s=612x612&w=0&k=20&c=tswvDPrkdt-EjGP8SverskqC0Dbp6WN2en2gqkhL144="
          alt="Privacy Illustration"
          className="mt-6 mx-auto rounded-xl shadow-lg w-96"
        />
      </section>

      {/* Contact / Support Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-500 text-white text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6"
        >
          Have Questions?
        </motion.h2>
        <p className="mb-6 max-w-xl mx-auto">
          If you have any questions or concerns about your privacy or our policies, feel free to reach out to our support team. We're here to help you understand and manage your data.
        </p>
        <a
          href="/support"
          className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
        >
          Contact Support
        </a>
      </section>
    </div>
  );
}

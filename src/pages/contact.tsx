import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    service: "", // New property for service selection
    message: "",
    budget: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@emmatech.com",
      subtitle: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+234 (0) 800 123 4567",
      subtitle: "Mon–Fri from 8am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Innovation Drive, Abuja, Nigeria",
      subtitle: "Our main office location",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon–Fri: 8AM–6PM WAT",
      subtitle: "Weekend support available",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <img
          src="https://media.istockphoto.com/id/2185791629/photo/diverse-business-colleagues-shaking-hands-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=eYfZfzK0TG2LuW7nW9UtbztrefGjFtzh7pcwgK2kezI="
          alt="Contact background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg md:text-xl text-blue-100">
            Have questions, ideas, or a project in mind? Let’s connect and bring
            your vision to life.
          </p>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80"
            alt="Team support"
            className="rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Reach Out to Us?
            </h2>
            <p className="text-gray-700 mb-6">
              At <span className="font-semibold">EmmaTech</span>, we believe in
              building long-term partnerships. Whether you need technical
              expertise, project collaboration, or consultation, our team is
              ready to help. Expect a friendly response, quick turnaround, and
              genuine care for your success.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">
                  ✓
                </span>
                <span>Personalized support for your unique needs</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">
                  ✓
                </span>
                <span>Fast response time (within 24 hours)</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">
                  ✓
                </span>
                <span>Dedicated experts for each project</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-900 font-medium">
                        {info.details}
                      </p>
                      <p className="text-gray-600 text-sm">{info.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Map */}
            <div className="mt-8 h-64 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.04836858819!2d7.498221273608025!3d6.387760024728755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a170e4da3431%3A0x1b70056539bd4961!2sBest%20one%20gas%20station!5e0!3m2!1sen!2sng!4v1756287268030!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Company + Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-30k">$15,000 - $30,000</option>
                      <option value="30k-50k">$30,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Select Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">-- Choose a Service --</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App Development">
                      Mobile App Development
                    </option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Cloud & DevOps">Cloud & DevOps</option>
                    <option value="Technical Consultation">
                      Technical Consultation
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
                {/* Privacy & Terms Notice */}
                <p className="text-sm text-gray-600 text-center mt-4">
                  By sending us a message, you agree to our{" "}
                  <a
                    href="/privacy"
                    className="text-blue-600 hover:underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="/terms"
                    className="text-blue-600 hover:underline"
                  >
                    Terms of Service
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* New Section after Contact */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Let’s Build Something Amazing Together
            </h2>
            <p className="text-gray-700 mb-6">
              Your success is our success. At{" "}
              <span className="font-semibold">EmmaTech</span>, we bring
              creativity, innovation, and technical expertise to every project.
              When you reach out, you’re not just getting a team—you’re getting
              a partner dedicated to turning your vision into reality.
            </p>
            <p className="text-gray-700">
              Whether it’s a new app, a website redesign, or scaling your
              product, we’re here to support you every step of the way.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2glMjBjb2xhYm9yYXRpb258ZW58MHx8MHx8fDA%3D"
            alt="Collaboration"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

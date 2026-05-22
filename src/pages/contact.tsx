import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { toast } from "sonner";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = [
      formData.name,
      formData.email,
      formData.subject,
      formData.message,
    ];

    if (requiredFields.some((field) => !field.trim())) {
      toast.error("Please fill all required fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      toast.error("Please enter a valid email.");
      return;
    }

    console.log("Form submitted:", formData);
    toast.success("Message sent", {
      description: "We will get back to you soon.",
    });
    setFormData(initialFormData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "emmatech307@gmail.com",
      href: "mailto:emmatech307@gmail.com",
      subtitle: "Send us a message anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+2348161770490",
      href: "tel:+2348161770490",
      subtitle: "Call during business hours",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Garriki, Enugu",
      href: "https://www.google.com/maps/place/15+Umuogbodoene+Street,+Garriki,+Enugu,+Nigeria+400107",
      subtitle: "Available for remote collaboration",
    },
    {
      icon: Clock,
      title: "Response",
      details: "Within 24 hours",
      subtitle: "Monday to Friday",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <section className="relative pt-32 pb-20 bg-gray-950 text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
          alt="EmmaTech contact"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950/90 to-teal-900/75" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 items-center">
            <div>
              <span className="text-blue-300 font-semibold uppercase tracking-wide text-sm">
                Contact EmmaTech
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
                Let us talk about what you want to build or improve
              </h1>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl">
                Reach out for software development, UI/UX design, managed IT
                support, SEO, or technology consulting. We will help you find
                the right next step.
              </p>
            </div>

            <div className="bg-white/10 border border-white/10 p-6 backdrop-blur">
              <p className="text-blue-200 font-semibold mb-5">
                You can contact us for:
              </p>
              <div className="space-y-4">
                {[
                  "New project discussions",
                  "Support and maintenance needs",
                  "Website or product improvements",
                  "Consultation before you build",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-300 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10">
            <aside>
              <div className="bg-white border border-gray-100 shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Choose the channel that works best for you.
                </p>

                <div className="space-y-5">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    const content = (
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {info.title}
                          </h3>
                          <p className="text-gray-900 font-medium">
                            {info.details}
                          </p>
                          <p className="text-sm text-gray-500">
                            {info.subtitle}
                          </p>
                        </div>
                      </div>
                    );

                    return info.href ? (
                      <a
                        key={info.title}
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="block hover:bg-gray-50 transition-colors"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={info.title}>{content}</div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 h-72 overflow-hidden border border-gray-100 shadow-sm">
                <iframe
                  title="EmmaTech location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.04836858819!2d7.498221273608025!3d6.387760024728755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a170e4da3431%3A0x1b70056539bd4961!2sBest%20one%20gas%20station!5e0!3m2!1sen!2sng!4v1756287268030!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </aside>

            <section className="bg-white border border-gray-100 shadow-xl p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                <div>
                  <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
                    General Message
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mt-2">
                    Send us a quick message
                  </h2>
                </div>
                <p className="text-sm text-gray-500">
                  Required fields are marked with *
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Full Name *"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                  <FormField
                    label="Email Address *"
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>

                <FormField
                  label="Subject *"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                />

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                    placeholder="Tell us about your project, question, or support need..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>

                <p className="text-sm text-gray-600 text-center">
                  By sending us a message, you agree to our{" "}
                  <a href="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/terms" className="text-blue-600 hover:underline">
                    Terms of Service
                  </a>
                  .
                </p>
              </form>
            </section>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Clear project conversations",
              "Practical next-step guidance",
              "Friendly support response",
            ].map((item) => (
              <div key={item} className="border border-gray-100 bg-gray-50 p-6">
                <CheckCircle2 className="h-6 w-6 text-blue-600 mb-4" />
                <h3 className="font-bold text-gray-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

type FormFieldProps = {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  placeholder: string;
  type?: string;
};

const FormField = ({
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: FormFieldProps) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      placeholder={placeholder}
    />
  </div>
);

export default ContactPage;

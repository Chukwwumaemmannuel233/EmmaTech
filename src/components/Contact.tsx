import React, { useState } from "react";
import { ChevronDown, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { apiRequest } from "../lib/api";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

    setIsSubmitting(true);

    try {
      await apiRequest("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      toast.success("Message sent", {
        description: "We will get back to you soon.",
      });
      setFormData(initialFormData);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Request failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: (
        <a
          href="mailto:emmatech307@gmail.com"
          className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
        >
          emmatech307@gmail.com
        </a>
      ),
      subtitle: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: (
        <a
          href="tel:+2348161770490"
          className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
        >
          +2348161770490
        </a>
      ),
      subtitle: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: (
        <a
          href="https://www.google.com/maps/place/15+Umuogbodoene+Street,+Garriki,+Enugu,+Nigeria+400107"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
        >
          15 Umuogbodoene Street, Garriki, Enugu, Nigeria 400107
        </a>
      ),
      subtitle: "Our main office location",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon-Fri: 8AM-6PM",
      subtitle: "Weekend support available",
    },
  ];

  const faqs = [
    {
      question: "How fast can we start?",
      answer:
        "Most projects can begin with a discovery call, then a clear plan and timeline within a few business days.",
    },
    {
      question: "Do you work with existing projects?",
      answer:
        "Yes. We can review, improve, maintain, or extend an existing product without forcing a rebuild.",
    },
    {
      question: "Can you support us after launch?",
      answer:
        "Yes. We offer ongoing support, updates, monitoring, and improvements after launch.",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let's Talk
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question, idea, or support need? Send us a message and we
            will help you find the right next step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1 bg-white border border-gray-100 shadow-lg p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
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

            <div className="mt-8 h-64 overflow-hidden border border-gray-100 shadow-lg">
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
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-100 shadow-xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  Send us a Message
                </h3>
                <a
                  href="/get-a-quote"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800"
                >
                  Need a quote?
                </a>
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
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us what you need help with..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 font-semibold hover:from-blue-700 hover:to-teal-700 disabled:opacity-60 disabled:hover:from-blue-600 disabled:hover:to-teal-600 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 disabled:hover:scale-100"
                >
                  <Send className="h-5 w-5" />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>

                <p className="text-sm text-gray-600 text-center mt-4">
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
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-600 text-center mb-8">
            Quick answers before we talk.
          </p>
          <div className="bg-white shadow-lg border border-gray-100 divide-y divide-gray-100 overflow-hidden">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-blue-600 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 -mt-1">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

type FormFieldProps = {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
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
      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
      placeholder={placeholder}
    />
  </div>
);

export default Contact;

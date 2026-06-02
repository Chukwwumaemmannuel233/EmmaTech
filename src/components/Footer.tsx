import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { toast } from "sonner";
import { apiRequest } from "../lib/api";

type SocialIconProps = {
  className?: string;
};

const TikTokIcon = ({ className }: SocialIconProps) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M16.5 3c.35 2.25 1.72 3.86 4 4.24v3.42a8.4 8.4 0 0 1-4.04-1.14v5.55c0 3.7-2.45 5.93-5.75 5.93C7.63 21 5.5 19.02 5.5 16.15c0-3.05 2.33-5.18 5.67-5.18.34 0 .67.03 1 .09v3.47a3.2 3.2 0 0 0-1.05-.18c-1.27 0-2.12.72-2.12 1.78 0 1 .78 1.68 1.86 1.68 1.26 0 2.07-.77 2.07-2.45V3h3.57Z" />
  </svg>
);

const XIcon = ({ className }: SocialIconProps) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M17.9 3h3.05l-6.66 7.61L22.12 21h-6.13l-4.8-6.28L5.69 21H2.63l7.12-8.14L2.25 3h6.29l4.34 5.74L17.9 3Zm-1.07 16.17h1.69L7.62 4.73H5.8l11.03 14.44Z" />
  </svg>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const submitNewsletter = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!/^\S+@\S+\.\S+$/.test(newsletterEmail.trim())) {
      toast.error("Please enter a valid email.");
      return;
    }

    setIsSubscribing(true);

    try {
      await apiRequest("/api/newsletter/subscribe", {
        method: "POST",
        body: JSON.stringify({ email: newsletterEmail.trim() }),
      });

      toast.success("Subscribed", {
        description: "You are now on the EmmaTech update list.",
      });
      setNewsletterEmail("");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Request failed");
    } finally {
      setIsSubscribing(false);
    }
  };

  const footerLinks = {
    services: [
      { name: "Software Development", path: "/services/software-development" },
      { name: "Managed IT Services", path: "/services/managed-it-services" },
      { name: "UI/UX Design", path: "/services/uiux-design" },
      { name: "SEO Optimization", path: "/services/seo" },
      { name: "Consulting", path: "/services/consulting" },
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Team", path: "/team" },
      { name: "Careers", path: "/career" },
      { name: "Contact", path: "/contact" },
      { name: "Admin", path: "/admin" },
    ],
  };

  const socialLinks = [
    { icon: TikTokIcon, href: "https://tiktok.com", label: "TikTok" },
    { icon: XIcon, href: "https://x.com", label: "X" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  const contactLinks = [
    {
      icon: Mail,
      href: "mailto:emmatech307@gmail.com",
      text: "emmatech307@gmail.com",
    },
    {
      icon: Phone,
      href: "tel:+2348161770490",
      text: "+2348161770490",
    },
    {
      icon: MapPin,
      href: "https://www.google.com/maps/place/15+Umuogbodoene+Street,+Garriki,+Enugu,+Nigeria+400107",
      text: "Garriki, Enugu",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/images/logo.png"
                alt="EmmaTech"
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              />
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                EmmaTech
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming ideas into digital reality with software, design,
              IT support, SEO, and practical technology consulting.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group relative text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <span className="absolute -inset-2 bg-blue-500/0 blur-md transition-colors duration-200 group-hover:bg-blue-500/20" />
                    <IconComponent className="relative h-5 w-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              {contactLinks.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.text}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-start gap-3 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <IconComponent className="h-4 w-4 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="break-words">{item.text}</span>
                  </a>
                );
              })}
            </div>

            <form onSubmit={submitNewsletter} className="mt-7">
              <label
                htmlFor="newsletter-email"
                className="block text-sm font-semibold text-gray-200 mb-3"
              >
                Newsletter
              </label>
              <div className="flex gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  value={newsletterEmail}
                  onChange={(event) => setNewsletterEmail(event.target.value)}
                  placeholder="Email address"
                  className="min-w-0 flex-1 border border-gray-700 bg-gray-950 px-3 py-2 text-sm text-white outline-none focus:border-blue-400"
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:opacity-60 disabled:hover:bg-blue-600"
                >
                  {isSubscribing ? "..." : "Join"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <div className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} EmmaTech. All rights reserved.
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-gray-400">
                <Link
                  to="/privacy"
                  className="hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/cookies"
                  className="hover:text-blue-400 transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

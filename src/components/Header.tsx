import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";


interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const closeServicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const closeContactTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if exactly at top (only show header when completely at top)
      setIsAtTop(currentScrollY === 0);

      // Check scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsScrollingUp(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsScrollingUp(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { to: "/about", label: "About" },
    { to: "/team", label: "Team" },
  ];

  const services = [
    { name: "Software Development", to: "/services/software-development" },
    { name: "Cloud Infrastructure", to: "/services/cloud-infastructure" },
    { name: "Automation", to: "/services/automation" },
    { name: "Data Intelligence", to: "/services/data-intelligence" },
    { name: "Managed IT Services", to: "/services/managed-it-services" },
    { name: "UI/UX Design", to: "/services/uiux-design" },
    { name: "Cybersecurity", to: "/services/cybersecurity" },
    { name: "SEO Optimization", to: "/services/seo" },
    { name: "Consulting", to: "/services/consulting" },
  ];

  const contactLinks = [
    { name: "Contact", to: "/contact" },
    { name: "Help", to: "/help" },
    { name: "Support Center", to: "/support" },
  ];

  // Dropdown Hover Handlers
  const handleMouseEnter = (
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    ref: React.MutableRefObject<NodeJS.Timeout | null>
  ) => {
    if (ref.current) clearTimeout(ref.current);
    setOpen(true);
  };

  const handleMouseLeave = (
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    ref: React.MutableRefObject<NodeJS.Timeout | null>
  ) => {
    ref.current = setTimeout(() => setOpen(false), 300);
  };

  // Animation variants
  const headerVariants = {
    hidden: { y: -100 },
    visible: { y: 0 },
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      {/* Main Header */}
      <motion.header
        variants={headerVariants}
        initial="visible"
        animate={isAtTop ? "visible" : "hidden"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-2"
              >
                <img
                  src="/images/logo.png"
                  alt="Emma"
                  className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                />
                <span className="font-bold text-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  EmmaTech
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Home */}
              <motion.div
                variants={navItemVariants}
                initial="visible"
                animate={isAtTop ? "visible" : "hidden"}
                transition={{ duration: 0.3, delay: isAtTop ? 0.1 : 0 }}
              >
                <motion.a
                  href="/"
                  className={`relative text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer ${
                    activeSection === "" ? "font-semibold" : ""
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Home
                  {activeSection === "" && (
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"
                      layoutId="activeSection"
                    />
                  )}
                </motion.a>
              </motion.div>

              {/* Services Dropdown */}
              <motion.div
                variants={navItemVariants}
                initial="visible"
                animate={isAtTop ? "visible" : "hidden"}
                transition={{ duration: 0.3, delay: isAtTop ? 0.2 : 0 }}
                className="relative"
                onMouseEnter={() =>
                  handleMouseEnter(setIsServicesOpen, closeServicesTimeoutRef)
                }
                onMouseLeave={() =>
                  handleMouseLeave(setIsServicesOpen, closeServicesTimeoutRef)
                }
              >
                <motion.button
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Services
                  <motion.div
                    animate={{ rotate: isServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-black text-white rounded-lg shadow-xl p-4 z-50"
                    >
                      <ul className="space-y-2">
                        <li>
                          <motion.a
                            href="/service"
                            className="block hover:text-blue-400 transition-colors cursor-pointer"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            Services (Main)
                          </motion.a>
                        </li>
                        <hr className="border-gray-700" />
                        {services.map((service, index) => (
                          <motion.li
                            key={service.to}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <motion.a
                              href={service.to}
                              className="block hover:text-blue-400 transition-colors cursor-pointer"
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.2 }}
                            >
                              {service.name}
                            </motion.a>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Other Nav Items */}
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  variants={navItemVariants}
                  initial="visible"
                  animate={isAtTop ? "visible" : "hidden"}
                  transition={{
                    duration: 0.3,
                    delay: isAtTop ? 0.3 + index * 0.1 : 0,
                  }}
                >
                  <motion.a
                    href={item.to}
                    className={`relative text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer ${
                      activeSection === item.to.slice(1) ? "font-semibold" : ""
                    }`}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                    {activeSection === item.to.slice(1) && (
                      <motion.span
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"
                        layoutId="activeSection"
                      />
                    )}
                  </motion.a>
                </motion.div>
              ))}

              {/* Contact Dropdown */}
              <motion.div
                variants={navItemVariants}
                initial="visible"
                animate={isAtTop ? "visible" : "hidden"}
                transition={{ duration: 0.3, delay: isAtTop ? 0.5 : 0 }}
                className="relative"
                onMouseEnter={() =>
                  handleMouseEnter(setIsContactOpen, closeContactTimeoutRef)
                }
                onMouseLeave={() =>
                  handleMouseLeave(setIsContactOpen, closeContactTimeoutRef)
                }
              >
                <motion.button
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Contact
                  <motion.div
                    animate={{ rotate: isContactOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isContactOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-black text-white rounded-lg shadow-xl p-4 z-50"
                    >
                      <ul className="space-y-2">
                        {contactLinks.map((link, index) => (
                          <motion.li
                            key={link.to}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <motion.a
                              href={link.to}
                              className="block hover:text-blue-400 transition-colors cursor-pointer"
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.2 }}
                            >
                              {link.name}
                            </motion.a>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Get Started Button */}
              <motion.div
                variants={navItemVariants}
                initial="visible"
                animate={isAtTop ? "visible" : "hidden"}
                transition={{ duration: 0.3, delay: isAtTop ? 0.6 : 0 }}
              >
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors duration-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white border-t overflow-hidden"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {/* Services in mobile */}
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer px-2 py-2 text-gray-700 hover:text-blue-600">
                      Services
                      <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                    </summary>
                    <motion.div
                      className="pl-4 mt-2 space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <a
                        href="/services"
                        className="block text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        Services (Main)
                      </a>
                      {services.map((service) => (
                        <a
                          key={service.to}
                          href={service.to}
                          className="block text-gray-700 hover:text-blue-600 transition-colors"
                        >
                          {service.name}
                        </a>
                      ))}
                    </motion.div>
                  </details>

                  {/* Contact in mobile */}
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer px-2 py-2 text-gray-700 hover:text-blue-600">
                      Contact
                      <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                    </summary>
                    <motion.div
                      className="pl-4 mt-2 space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {contactLinks.map((link) => (
                        <a
                          key={link.to}
                          href={link.to}
                          className="block text-gray-700 hover:text-blue-600 transition-colors"
                        >
                          {link.name}
                        </a>
                      ))}
                    </motion.div>
                  </details>

                  {navItems.map((item) => (
                    <a
                      key={item.to}
                      href={item.to}
                      className={`relative block text-gray-700 hover:text-blue-600 transition-colors ${
                        activeSection === item.to.slice(1)
                          ? "font-semibold"
                          : ""
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}

                  <motion.button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full mt-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Floating Logo (appears when scrolling down) */}
      <AnimatePresence>
        {!isScrollingUp && !isAtTop && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-md shadow-lg rounded-full px-4 py-2 border border-gray-200"
          >
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="/images/logo.png"
                alt="Emma"
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              />
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                EmmaTech
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

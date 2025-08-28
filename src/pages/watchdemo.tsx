import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  ExternalLink, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Clock,
  Star,
  Globe,
  ShoppingCart,
  BarChart3
} from "lucide-react";

const WatchDemo = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const demoProjects = [
    {
      id: 1,
      title: "FinTech Startup Dashboard",
      category: "fintech",
      description: "Complete financial management platform for early-stage startups",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      metrics: {
        users: "10K+",
        growth: "150%",
        time: "8 weeks"
      },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      demoUrl: "#",
      liveUrl: "#",
      results: [
        "Reduced manual processes by 80%",
        "Increased user engagement by 150%",
        "Improved conversion rate by 45%"
      ]
    },
    {
      id: 2,
      title: "E-Commerce Mobile App",
      category: "ecommerce",
      description: "Full-stack mobile commerce solution with AI recommendations",
      technologies: ["React Native", "Python", "Redis", "AWS"],
      metrics: {
        users: "25K+",
        growth: "200%",
        time: "12 weeks"
      },
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      demoUrl: "#",
      liveUrl: "#",
      results: [
        "Boosted sales by 200%",
        "Reduced cart abandonment by 35%",
        "Achieved 4.8★ app store rating"
      ]
    },
    {
      id: 3,
      title: "SaaS Analytics Platform",
      category: "saas",
      description: "Real-time business intelligence dashboard for growing companies",
      technologies: ["Vue.js", "Django", "MongoDB", "Docker"],
      metrics: {
        users: "5K+",
        growth: "180%",
        time: "10 weeks"
      },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      demoUrl: "#",
      liveUrl: "#",
      results: [
        "Improved decision-making speed by 3x",
        "Reduced reporting time by 90%",
        "Increased data accuracy by 95%"
      ]
    },
    {
      id: 4,
      title: "HealthTech Patient Portal",
      category: "healthtech",
      description: "HIPAA-compliant telemedicine platform with appointment scheduling",
      technologies: ["Next.js", "Express", "MySQL", "WebRTC"],
      metrics: {
        users: "15K+",
        growth: "120%",
        time: "16 weeks"
      },
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      demoUrl: "#",
      liveUrl: "#",
      results: [
        "Reduced no-show rates by 60%",
        "Improved patient satisfaction to 96%",
        "Streamlined workflows by 70%"
      ]
    }
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: Globe },
    { id: "fintech", label: "FinTech", icon: TrendingUp },
    { id: "ecommerce", label: "E-Commerce", icon: ShoppingCart },
    { id: "saas", label: "SaaS", icon: BarChart3 },
    { id: "healthtech", label: "HealthTech", icon: Users }
  ];

  const filteredProjects = activeCategory === "all" 
    ? demoProjects 
    : demoProjects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Watch Our Work
              <span className="text-blue-600"> In Action</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Discover how we've transformed startups with cutting-edge web applications, 
              mobile solutions, and digital platforms that drive real business growth.
            </p>
            <motion.div
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="h-6 w-6" />
              Start Exploring
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={category.id}
                  variants={itemVariants}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                    activeCategory === category.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="h-5 w-5" />
                  {category.label}
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Demo Projects Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory}
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  {/* Project Image */}
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <motion.button
                        className="bg-white/90 hover:bg-white text-blue-600 p-4 rounded-full shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => console.log('Demo clicked:', project.title)}
                      >
                        <Play className="h-8 w-8" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center text-blue-600 mb-2">
                          <Users className="h-5 w-5" />
                        </div>
                        <div className="font-bold text-lg">{project.metrics.users}</div>
                        <div className="text-sm text-gray-500">Users</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center text-green-600 mb-2">
                          <TrendingUp className="h-5 w-5" />
                        </div>
                        <div className="font-bold text-lg">{project.metrics.growth}</div>
                        <div className="text-sm text-gray-500">Growth</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center text-orange-600 mb-2">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div className="font-bold text-lg">{project.metrics.time}</div>
                        <div className="text-sm text-gray-500">Timeline</div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <Star className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.button
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Play className="h-4 w-4" />
                        Watch Demo
                      </motion.button>
                      <motion.button
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Site
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your Success Story?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join the startups who've transformed their business with our proven development process.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WatchDemo;
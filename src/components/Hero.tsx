import { ArrowRight, Play } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start justify-center pt-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
        />
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-teal-400/20 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-orange-400/20 rounded-full animate-pulse delay-2000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Transforming Ideas Into
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
              Digital Reality
            </span>
          </h1>

          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            We craft innovative software solutions that drive business growth.
            From web applications to mobile apps, we turn your vision into
            powerful digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
            >
              <span className="font-semibold">Start Your Project</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/watchdemo"
              className="group border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full flex items-center space-x-2 transition-all duration-300 hover:bg-white/10"
            >
              <Play className="h-5 w-5" />
              <span className="font-semibold">Watch Demo</span>
            </a>
          </div>

          {/* <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-200">Client Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200">Support Available</div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

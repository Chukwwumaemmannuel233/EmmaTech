import React, { useState, useEffect } from "react";
import { Award, Users, Target, Lightbulb } from "lucide-react";

const About: React.FC = () => {
  const words = ["Vision", "Execution", "Strategy", "Innovation"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingTimeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      typingTimeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, 100);
    } else {
      typingTimeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, 150);
    }

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), 1000);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, wordIndex, words]);

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "We are committed to delivering solutions that make a real impact on your business success.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We stay ahead of technology trends to provide cutting-edge solutions for modern challenges.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description:
        "Your success is our priority. We work closely with you throughout every project phase.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description:
        "We maintain the highest standards through rigorous testing and code review processes.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🔥 Slide-In Fade Text */}
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Emmatech -{" "}
            <span className="text-blue-600 border-r-2 border-blue-600 pr-1 animate-pulse">
              {text}
            </span>
          </h2>
        </div> */}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
             {/* 🔥 Slide-In Fade Text */}
              <h2 className=" text-center text-4xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-gray-900">
                Emmatech -{" "}
                <span className="text-blue-600 border-r-2 border-blue-600 pr-1 animate-pulse">
                  {text}
                </span>
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              EmmaTech is a forward-thinking technology company specializing in
              custom software development, web applications, and digital
              transformation solutions. We combine technical expertise with
              creative problem-solving to deliver exceptional results.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">5+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Years of Experience
                  </h4>
                  <p className="text-gray-600">
                    Delivering innovative solutions across various industries
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <span className="text-teal-600 font-bold text-xl">6+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Expert Developers
                  </h4>
                  <p className="text-gray-600">
                    Skilled professionals with diverse technical backgrounds
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-xl">
                    24/7
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Support & Maintenance
                  </h4>
                  <p className="text-gray-600">
                    Round-the-clock support for your critical applications
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl transform rotate-6"></div>
            <img
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ✅ Learn More button at the bottom */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

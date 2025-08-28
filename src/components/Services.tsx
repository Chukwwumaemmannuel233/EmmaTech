import React from 'react';
import { Code, Smartphone, Cloud, Database, Shield, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs, including web, desktop, and API development using modern frameworks.',
      features: ['Scalable Applications', 'Cross-Platform Support', 'API Integration'],
      link: '/services/software-development'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Robust and scalable cloud solutions to deploy, manage, and scale your applications on AWS, Azure, or Google Cloud.',
      features: ['Auto Scaling', 'High Availability', 'Cost-Effective Deployment'],
      link: '/services/cloud-infastructure'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Streamlining workflows and processes with automation tools, CI/CD pipelines, and intelligent task management.',
      features: ['CI/CD Pipelines', 'Business Process Automation', 'Time-Saving Workflows'],
      link: '/services/automation'
    },
    {
      icon: Smartphone,
      title: 'SEO Optimization',
      description: 'Boost your online visibility with cutting-edge SEO techniques designed to improve rankings and attract organic traffic.',
      features: ['On-Page SEO', 'Technical SEO', 'Keyword Optimization'],
      link: '/services/seo'
    },
    {
      icon: Database,
      title: 'Data Intelligence',
      description: 'Transform raw data into valuable insights using advanced analytics, machine learning, and reporting tools.',
      features: ['Data Analytics', 'Predictive Insights', 'Business Dashboards'],
      link: '/services/data-intelligence'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business from digital threats with advanced security measures and compliance-driven practices.',
      features: ['Penetration Testing', 'Data Encryption', 'Threat Monitoring'],
      link: '/services/cybersecurity'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business thrive in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={service.link}
                  className="mt-6 inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

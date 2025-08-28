import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Team: React.FC = () => {
  const team = [
    {
      name: 'Chukwuma Emmanuel',
      role: 'CEO & Founder',
      image: '/images/ceo.jpeg',
      bio: 'Visionary leader with 10+ years in tech industry, passionate about innovation and team growth.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack architect specializing in scalable systems and modern web technologies.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in React, Node.js, and cloud platforms with a passion for clean, efficient code.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Emily Davis',
      role: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creative designer focused on user-centered design and creating beautiful, intuitive interfaces.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'David Kim',
      role: 'DevOps Engineer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Infrastructure expert specializing in AWS, Docker, and CI/CD pipeline optimization.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Lisa Thompson',
      role: 'Project Manager',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Agile project management expert ensuring smooth delivery and client satisfaction.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented team of experts is dedicated to delivering exceptional results and 
            driving your business forward with innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>

                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="p-2 rounded-full bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white transition-all duration-300"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="p-2 rounded-full bg-gray-100 hover:bg-blue-400 text-gray-600 hover:text-white transition-all duration-300"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href={member.social.github}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-800 text-gray-600 hover:text-white transition-all duration-300"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to Join Our Team?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for technology 
              and innovation. Check out our current openings.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
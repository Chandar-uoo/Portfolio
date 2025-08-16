import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMail, LuPhone, LuArrowUpRight, LuMapPin, LuServer, LuDatabase, LuCode } from "react-icons/lu";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setPopupMessage('Please fill in all fields before submitting.');
      setShowPopup(true);
      return;
    }

    setPopupMessage('Message sent successfully! I\'ll get back to you soon.');
    setShowPopup(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Build Something Great</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm <span className="font-semibold text-blue-600">Chandru V</span>, a passionate <span className="font-semibold text-blue-600">Full-Stack Developer (MERN Stack)</span> with a strong interest in backend development. Let's discuss your next project or opportunity!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready for New Opportunities</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  I'm a <span className="font-semibold text-gray-800">self-taught Full-Stack Developer</span> specializing in the <span className="font-semibold text-gray-800">MERN stack</span> with a passion for backend development. I've built and deployed complete applications including my featured project <span className="font-semibold text-blue-600">RetailX E-Commerce Platform</span>.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-blue-900 mb-2">My Technical Focus:</h4>
                  <ul className="text-blue-800 space-y-1 text-sm">
                    <li>• Node.js & Express.js backend development</li>
                    <li>• MongoDB database design & operations</li>
                    <li>• React.js & Redux for frontend</li>
                    <li>• JWT Authentication & API development</li>
                    <li>• Full-stack application deployment</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">Featured Project:</h4>
                  <p className="text-green-800 text-sm">
                    <span className="font-semibold">RetailX E-Commerce Platform</span> - Complete MERN stack application with user authentication, product management, shopping cart, and payment integration. 
                    <a href="https://retailx666.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-medium ml-1 underline">
                      View Live Demo →
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <LuMail size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">chandruofficial666@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <LuPhone size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 86675 86346</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                    <LuMapPin size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">Coimbatore, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Chandar-uoo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200 group"
                    title="GitHub - Check out my code"
                  >
                    <FaGithub size={24} className="text-gray-600 group-hover:text-gray-900 transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/chandru-v-9197712a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-blue-50 transition-all duration-200 group"
                    title="LinkedIn - Let's connect professionally"
                  >
                    <FaLinkedin size={24} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
                  </a>
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-green-800 font-medium">Actively Seeking Opportunities</p>
                </div>
                <p className="text-green-600 text-sm mt-2">
                  Open to internships, entry-level full-stack positions, and backend development roles. Currently a 5th semester B.Com student with strong self-taught programming skills.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Let's Start a Conversation</h4>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-colors"
                    placeholder="Tell me about job opportunities, internship programs, freelance projects, or collaboration ideas..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <LuArrowUpRight className="group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-gray-500 text-center">
                  * Required fields. I'll respond within 24 hours to discuss opportunities or projects.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Contact Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <LuServer size={24} className="text-blue-600" />
              </div>
              <h5 className="font-semibold text-gray-900 mb-2">Backend Development</h5>
              <p className="text-gray-600 text-sm mb-3">Node.js, Express, MongoDB, APIs</p>
              <a href="mailto:chandruofficial666@gmail.com?subject=Backend Development Opportunity" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Discuss Backend Roles
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <LuCode size={24} className="text-green-600" />
              </div>
              <h5 className="font-semibold text-gray-900 mb-2">Full-Stack Projects</h5>
              <p className="text-gray-600 text-sm mb-3">MERN stack applications like RetailX</p>
              <a href="tel:+918667586346" className="text-green-600 hover:text-green-700 font-medium text-sm">
                Quick Call
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FaGithub size={24} className="text-purple-600" />
              </div>
              <h5 className="font-semibold text-gray-900 mb-2">View My Work</h5>
              <p className="text-gray-600 text-sm mb-3">Check out my projects and code</p>
              <a href="https://github.com/Chandar-uoo" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                Browse GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Success/Error Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl">
              <div className="text-center">
                <div className={`w-16 h-16 ${popupMessage.includes('successfully') ? 'bg-green-100' : 'bg-red-100'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {popupMessage.includes('successfully') ? (
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                    </svg>
                  )}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {popupMessage.includes('successfully') ? 'Message Sent!' : 'Oops!'}
                </h4>
                <p className="text-gray-600 mb-6">{popupMessage}</p>
                <button
                  onClick={() => setShowPopup(false)}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
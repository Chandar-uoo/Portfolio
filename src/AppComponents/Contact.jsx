
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMail, LuPhone, LuMapPin, LuServer, LuCode } from "react-icons/lu";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Let's Build Something Great</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm <span className="font-semibold text-blue-600">Chandru V</span>, a passionate <span className="font-semibold text-blue-600">Full-Stack Developer (MERN Stack)</span> with a strong interest in backend development. Let's discuss your next project or opportunity!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - About */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready for New Opportunities</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                I'm a <span className="font-semibold text-gray-800">self-taught Full-Stack Developer</span> specializing in the <span className="font-semibold text-gray-800">MERN stack</span> with a passion for backend development. I've built and deployed complete applications including my featured project <span className="font-semibold text-blue-600">RetailX E-Commerce Platform</span>.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-blue-900 mb-4 text-lg">My Technical Focus:</h4>
                <ul className="text-blue-800 space-y-2">
                  <li>• Node.js & Express.js backend development</li>
                  <li>• MongoDB database design & operations</li>
                  <li>• React.js & Redux for frontend</li>
                  <li>• JWT Authentication & API development</li>
                  <li>• Full-stack application deployment</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-semibold text-green-900 mb-3 text-lg">Featured Project:</h4>
                <p className="text-green-800">
                  <span className="font-semibold">RetailX E-Commerce Platform</span> - Complete MERN stack application with user authentication, product management, shopping cart, and payment integration. 
                  <a href="https://retailx666.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-medium ml-1 underline inline-flex items-center">
                    View Live Demo →
                  </a>
                </p>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-green-800 font-semibold text-lg">Actively Seeking Opportunities</p>
              </div>
              <p className="text-green-700">
                Open to internships, entry-level full-stack positions, and backend development roles. Currently a 6th semester B.Com student with strong self-taught programming skills.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            
            <div className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-4 rounded-xl flex-shrink-0">
                <LuMail size={28} className="text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-lg mb-1">Email</p>
                <a href="mailto:chandruofficial666@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  chandruofficial666@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-4 rounded-xl flex-shrink-0">
                <LuPhone size={28} className="text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-lg mb-1">Phone</p>
                <a href="tel:+918667586346" className="text-gray-600 hover:text-green-600 transition-colors">
                  +91 86675 86346
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 p-4 rounded-xl flex-shrink-0">
                <LuMapPin size={28} className="text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-lg mb-1">Location</p>
                <p className="text-gray-600">Coimbatore, Tamil Nadu, India</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Chandar-uoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-200 group"
                  title="GitHub - Check out my code"
                >
                  <FaGithub size={28} className="text-gray-600 group-hover:text-gray-900 transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/chandru-v-9197712a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-200 group"
                  title="LinkedIn - Let's connect professionally"
                >
                  <FaLinkedin size={28} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
            <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <LuServer size={32} className="text-blue-600" />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 text-lg">Backend Development</h5>
            <p className="text-gray-600 mb-4">Node.js, Express, MongoDB, APIs</p>
            <a href="mailto:chandruofficial666@gmail.com?subject=Backend Development Opportunity" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
              Discuss Backend Roles →
            </a>
          </div>

          <div className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
            <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <LuCode size={32} className="text-green-600" />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 text-lg">Full-Stack Projects</h5>
            <p className="text-gray-600 mb-4">MERN stack applications like RetailX</p>
            <a href="tel:+918667586346" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
              Quick Call →
            </a>
          </div>

          <div className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
            <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaGithub size={32} className="text-purple-600" />
            </div>
            <h5 className="font-semibold text-gray-900 mb-2 text-lg">View My Work</h5>
            <p className="text-gray-600 mb-4">Check out my projects and code</p>
            <a href="https://github.com/Chandar-uoo" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center">
              Browse GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
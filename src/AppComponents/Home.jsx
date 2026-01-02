import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-6xl text-gray-600">
                👨‍💻
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-2">Hi, I am</p>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Chandru V
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              Software Developer
            </h2>

            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                MERN Stack
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Backend-Focused
              </span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                REST APIs
              </span>
            </div>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            I am a Software Developer with hands-on experience building web
            applications and backend services using the MERN stack. I work across
            the stack, with a strong focus on backend development—designing
            RESTful APIs, authentication flows, payment integrations, and
            database-driven features—while writing clean, maintainable code
            aligned with real-world application requirements.
          </p>

          {/* Project highlight */}
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto mb-10 border border-gray-200">
            <p className="text-gray-700 mb-2">
              <span className="font-semibold text-blue-600">
                Featured Project:
              </span>{" "}
              Retalix – E-Commerce Platform
            </p>
            <p className="text-sm text-gray-600">
              Full-stack MERN application with authentication, admin workflows,
              and secure payment integration
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Get In Touch
              <LuArrowUpRight size={16} />
            </Link>

            <Link
              to="/projects"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View Projects
            </Link>
          </div>

          {/* Quick stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1+</div>
              <p className="text-gray-600">Year of Hands-On Practice</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">8+</div>
              <p className="text-gray-600">Core Technologies</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">1</div>
              <p className="text-gray-600">Deployed Project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

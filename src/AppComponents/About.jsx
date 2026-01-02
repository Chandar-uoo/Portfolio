import { FaGithub, FaLinkedin } from "react-icons/fa";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiPostman
} from "react-icons/si";
import { LuMail, LuGraduationCap, LuCode, LuDatabase, LuServer } from "react-icons/lu";

const About = () => {
  const frontendSkills = [
    { icon: <SiHtml5 size={40} color="#E34F26" />, name: "HTML5" },
    { icon: <SiCss3 size={40} color="#1572B6" />, name: "CSS3" },
    { icon: <SiJavascript size={40} color="#F7DF1E" />, name: "JavaScript" },
    { icon: <SiReact size={40} color="#61DAFB" />, name: "React.js" },
    { icon: <SiRedux size={40} color="#764ABC" />, name: "Redux Toolkit" },
    { icon: <SiTailwindcss size={40} color="#06B6D4" />, name: "Tailwind CSS" },
  ];

  const backendSkills = [
    { icon: <SiNodedotjs size={40} color="#339933" />, name: "Node.js" },
    { icon: <SiExpress size={40} className="text-gray-700" />, name: "Express.js" },
    { icon: <SiMongodb size={40} color="#47A248" />, name: "MongoDB" },
    { icon: <LuDatabase size={40} className="text-blue-600" />, name: "PostgreSQL / Mongoose" },
  ];

  const tools = [
    { icon: <FaGithub size={40} className="text-gray-700" />, name: "Git & GitHub" },
    { icon: <SiPostman size={40} color="#FF6C37" />, name: "Postman" },
    { icon: <LuCode size={40} className="text-blue-600" />, name: "VS Code" },
    { icon: <LuServer size={40} className="text-green-600" />, name: "Deployment Platforms" },
  ];

  const highlights = [
    {
      title: "Backend-Focused Development",
      description: "Strong focus on designing RESTful APIs, authentication flows, database-driven features, and backend business logic."
    },
    {
      title: "System-Oriented Projects",
      description: "Built projects involving multi-tenant architecture, payment workflows, and real-world data validation."
    },
    {
      title: "End-to-End Ownership",
      description: "Experience building full-stack applications from backend APIs to frontend integration."
    },
    {
      title: "Clean & Maintainable Code",
      description: "Emphasis on modular design, clear structure, and maintainable codebases aligned with real-world needs."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        {/* About Content */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                <LuGraduationCap size={32} className="text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Background</h3>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Hello, I’m <span className="font-semibold text-gray-800">Chandru V</span>, 
                a <span className="font-semibold text-blue-600">Software Developer</span> 
                currently pursuing B.Com (Banking and Insurance) at Sri Ramakrishna College 
                of Arts and Science, Coimbatore. Alongside my academic background, I focus 
                on building web applications and backend services using the MERN stack.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I work across the stack with a strong inclination toward backend development, 
                including RESTful API design, authentication and authorization, payment 
                integrations, and database-driven features. My projects are built with 
                practical application requirements in mind rather than theoretical examples.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                I enjoy working on problems related to system design, data flow, and backend 
                logic, while ensuring the overall application remains clean, maintainable, 
                and easy to extend as requirements grow.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Technical Skills
          </h3>

          {/* Frontend */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <SiReact size={24} className="text-blue-500 mr-3" />
              Frontend Development
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
                  <div className="mb-3">{skill.icon}</div>
                  <span className="text-gray-700 font-medium text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <SiNodedotjs size={24} className="text-green-600 mr-3" />
              Backend Development
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {backendSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
                  <div className="mb-3">{skill.icon}</div>
                  <span className="text-gray-700 font-medium text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <LuCode size={24} className="text-purple-600 mr-3" />
              Tools & Practices
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
                  <div className="mb-3">{tool.icon}</div>
                  <span className="text-gray-700 font-medium text-center">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {highlights.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Let’s Connect</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:chandruofficial666@gmail.com" className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-lg">
              <LuMail size={20} className="mr-2" /> chandruofficial666@gmail.com
            </a>
            <a href="https://github.com/Chandar-uoo" target="_blank" rel="noreferrer" className="inline-flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-lg">
              <FaGithub size={20} className="mr-2" /> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">
              <FaLinkedin size={20} className="mr-2" /> LinkedIn
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;

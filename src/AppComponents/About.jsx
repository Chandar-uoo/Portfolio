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
import { LuMail, LuPhone, LuGraduationCap, LuCode, LuDatabase, LuServer } from "react-icons/lu";

const About = () => {
  const frontendSkills = [
    { icon: <SiHtml5 size={40} color="#E34F26" />, name: "HTML5" },
    { icon: <SiCss3 size={40} color="#1572B6" />, name: "CSS3" },
    { icon: <SiJavascript size={40} color="#F7DF1E" />, name: "JavaScript" },
    { icon: <SiReact size={40} color="#61DAFB" />, name: "React.js" },
    { icon: <SiRedux size={40} color="#764ABC" />, name: "Redux" },
    { icon: <SiTailwindcss size={40} color="#06B6D4" />, name: "Tailwind CSS" },
  ];

  const backendSkills = [
    { icon: <SiNodedotjs size={40} color="#339933" />, name: "Node.js" },
    { icon: <SiExpress size={40} className="text-gray-700" />, name: "Express.js" },
    { icon: <SiMongodb size={40} color="#47A248" />, name: "MongoDB" },
    { icon: <LuDatabase size={40} className="text-blue-600" />, name: "Mongoose" },
  ];

  const tools = [
    { icon: <FaGithub size={40} className="text-gray-700" />, name: "Git & GitHub" },
    { icon: <SiPostman size={40} color="#FF6C37" />, name: "Postman" },
    { icon: <LuCode size={40} className="text-blue-600" />, name: "VS Code" },
    { icon: <LuServer size={40} className="text-green-600" />, name: "Deployment" },
  ];

  const achievements = [
    {
      title: "Self-Taught Journey",
      description: "Successfully transitioned to full-stack development through dedicated self-learning and hands-on practice"
    },
    {
      title: "MERN Stack Mastery",
      description: "Built complete full-stack applications using MongoDB, Express.js, React.js, and Node.js"
    },
    {
      title: "Live Project Deployment",
      description: "Successfully deployed and maintained live applications on modern hosting platforms"
    },
    {
      title: "Problem Solver",
      description: "Experienced in debugging complex issues and implementing efficient solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        {/* About Me Section */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                <LuGraduationCap size={32} className="text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">My Story</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Hello! I'm <span className="font-semibold text-gray-800">Chandru V</span>, a passionate <span className="font-semibold text-blue-600">MERN Stack Developer</span> currently pursuing B.Com (Banking and Insurance) at Sri Ramakrishna College of Arts and Science, Coimbatore. My coding journey began with inspiration from my brother, starting with HTML and gradually mastering the complete MERN stack.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                As a <span className="font-semibold text-gray-800">self-taught developer</span>, I've learned through online resources, hands-on practice, and real-world problem-solving. I believe in learning by doing, which led me to build <span className="font-semibold text-purple-600">RetailX</span>, a comprehensive e-commerce platform that demonstrates my full-stack capabilities.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I specialize in creating <span className="font-semibold text-gray-800">scalable web applications</span> with modern technologies, focusing on user experience, performance optimization, and clean code architecture. Currently seeking opportunities to contribute to innovative projects while continuing to grow as a developer.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h3>
          
          {/* Frontend Skills */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <SiReact size={24} className="text-blue-500 mr-3" />
              Frontend Development
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {frontendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-3">{skill.icon}</div>
                  <span className="text-gray-700 font-medium text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <SiNodedotjs size={24} className="text-green-600 mr-3" />
              Backend Development
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {backendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
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
              Tools & Technologies
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-3">{tool.icon}</div>
                  <span className="text-gray-700 font-medium text-center">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{achievement.title}</h4>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Status */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">Current Status</h3>
          <p className="text-lg mb-2">🎓 6th Semester B.Com Student at Sri Ramakrishna College</p>
          <p className="text-lg mb-2">💻 Active MERN Stack Developer</p>
          <p className="text-lg">🚀 Open to Full-Stack Development Opportunities</p>
        </div>

        {/* Contact */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:chandruofficial666@gmail.com" 
              className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors"
            >
              <LuMail size={20} className="mr-2" /> chandruofficial666@gmail.com
            </a>
            <a 
              href="https://github.com/Chandar-uoo" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <FaGithub size={20} className="mr-2" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
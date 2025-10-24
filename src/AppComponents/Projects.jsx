import { LuArrowUpRight, LuGithub, LuExternalLink } from "react-icons/lu";

const Projects = () => {
const projects = [
  {
    title: "RetailX - E-Commerce Platform",
    description: "A full-stack MERN e-commerce platform with user authentication, shopping cart, Razorpay payment integration, admin dashboard, and order management. Features JWT authentication with refresh tokens, role-based access control, email OTP verification, and real-time cart synchronization.",
    image: "🛒",
    technologies: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Razorpay", "Nodemailer"],
    github: "https://github.com/Chandar-uoo/E-COMMERCE-FE",
    githubBackend: "https://github.com/Chandar-uoo/E-COMMERCE-",
    live: "https://retailx666.netlify.app/",
    featured: true,
    highlights: [
      "🖥️ Complete MERN Stack Architecture",
      "🔐 JWT Authentication & Refresh Tokens",
      "📧 Email OTP Verification for Signup",
      "🛠️ Admin Dashboard with CRUD Operations",
      "🛒 Real-time Cart Management",
      "💳 Razorpay Payment Integration",
      "📦 Order Tracking & Status Updates",
      "👤 Role-based Access Control (Admin/User)",
    ]
  }
  // Add more projects here when you build them
];


  // Placeholder for future projects
  const futureProjects = [
    {
      title: "Coming Soon...",
      description: "Currently working on new exciting projects to showcase different aspects of full-stack development.",
      image: "🚀",
      technologies: ["In Progress"],
      isPlaceholder: true
    },
    {
      title: "More Projects",
      description: "Stay tuned for more innovative web applications and development projects.",
      image: "💡",
      technologies: ["Coming Soon"],
      isPlaceholder: true
    }
  ];

  const allProjects = [...projects, ...futureProjects];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">My Projects</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Showcasing my journey in full-stack development through real-world applications. 
          Each project demonstrates different aspects of modern web development and problem-solving skills.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                project.featured ? 'lg:col-span-2 xl:col-span-2' : ''
              } ${project.isPlaceholder ? 'opacity-60' : ''}`}
            >
              <div className={`${
                project.featured 
                  ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800' 
                  : 'bg-gradient-to-r from-blue-400 to-purple-500'
              } ${project.featured ? 'h-64' : 'h-48'} flex items-center justify-center ${
                project.featured ? 'text-8xl' : 'text-6xl'
              } relative`}>
                {project.image}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                    ⭐ Featured
                  </div>
                )}
              </div>
              
              <div className={`p-6 ${project.featured ? 'p-8' : ''}`}>
                <h3 className={`${project.featured ? 'text-2xl' : 'text-xl'} font-bold text-gray-900 mb-3`}>
                  {project.title}
                </h3>
                <p className={`text-gray-600 mb-4 ${project.featured ? 'text-lg' : ''}`}>
                  {project.description}
                </p>
                
                {/* Project Highlights for Featured Project */}
                {project.featured && project.highlights && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="text-green-500 mr-2">✓</span>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`${
                        project.isPlaceholder 
                          ? 'bg-gray-100 text-gray-600' 
                          : project.featured 
                            ? 'bg-blue-100 text-blue-800 font-medium'
                            : 'bg-blue-100 text-blue-800'
                      } px-3 py-1 rounded-full text-sm`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                {!project.isPlaceholder && (
                  <div className="flex flex-wrap gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                      >
                        <LuGithub size={16} />
                        Frontend Code
                        <LuArrowUpRight size={14} />
                      </a>
                    )}
                    {project.githubBackend && (
                      <a
                        href={project.githubBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
                      >
                        <LuGithub size={16} />
                        Backend Code
                        <LuArrowUpRight size={14} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                      >
                        <LuExternalLink size={16} />
                        Live Demo
                        <LuArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                )}

                {/* Placeholder Message */}
                {project.isPlaceholder && (
                  <div className="text-center py-4">
                    <p className="text-gray-500 italic">New projects in development...</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Interested in collaborating or learning more about my work?</p>
          <a
            href="https://github.com/Chandar-uoo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            <LuGithub size={20} />
            View All Repositories
            <LuArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
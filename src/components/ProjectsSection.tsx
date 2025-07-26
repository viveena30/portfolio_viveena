import React, { useState } from 'react';
import { FolderOpen, ExternalLink, Github, Star, Eye } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

const projectsData: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React frontend, Node.js backend, and PostgreSQL database.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team collaboration features.',
    technologies: ['React', 'Socket.io', 'MongoDB', 'Express'],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard with location-based forecasts and interactive charts.',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind'],
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    liveUrl: '#',
    githubUrl: '#'
  }
];

export const ProjectsSection: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-6 animate-pulse-glow">
            <FolderOpen className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-600">Showcasing my best work and innovations</p>
          <div className="section-divider"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className={`glass-card rounded-xl overflow-hidden border border-gray-200 hover:border-indigo-300 hover-lift hover-tilt transition-all duration-500 group ${project.featured ? 'ring-2 ring-indigo-200' : ''}`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <Star className="h-3 w-3" />
                    <span>Featured</span>
                  </div>
                </div>
              )}
              
              <div className="relative h-48 bg-gradient-to-br from-indigo-100 to-purple-100 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {hoveredProject === index && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a href={project.liveUrl} className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors animate-bounce-in">
                        <Eye className="h-5 w-5 text-indigo-600" />
                      </a>
                      <a href={project.githubUrl} className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors animate-bounce-in" style={{ animationDelay: '0.1s' }}>
                        <Github className="h-5 w-5 text-gray-800" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-medium hover:from-indigo-200 hover:to-purple-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a href={project.liveUrl} className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-700 transition-colors font-medium">
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                    <a href={project.githubUrl} className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors font-medium">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </div>
                  
                  {hoveredProject === index && (
                    <div className="flex items-center space-x-1 text-gray-500 animate-slide-in-right">
                      <Eye className="h-4 w-4" />
                      <span className="text-sm">View Details</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View all projects button */}
        <div className="text-center mt-12">
          <button className="btn-primary text-white px-8 py-3 rounded-full font-medium hover-lift transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};
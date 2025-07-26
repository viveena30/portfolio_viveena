import React from 'react';
import { 
  User, 
  GraduationCap, 
  Code, 
  Briefcase, 
  FolderOpen, 
  Award, 
  BookOpen,
  Sparkles
} from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, scrollToSection }) => {
  const navItems = [
    { id: 'hero', label: 'Home', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    // { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'publications', label: 'Publications', icon: BookOpen }
  ];

  return (
    <nav className="fixed top-0 py-2 w-full glass-card z-50 shadow-sm border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center group">
            <div className="relative">
              <User className="h-8 w-8 text-indigo-600 group-hover:text-purple-600 transition-colors duration-300" />
              <Sparkles className="h-4 w-4 text-purple-400 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="ml-2 text-xl font-bold gradient-text">Viveena</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 hover-lift ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile menu indicator */}
          <div className="md:hidden">
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-indigo-600 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
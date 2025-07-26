import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-300 mb-4">
            Thank you for visiting my portfolio. Let's connect and create something amazing together!
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            © 2024 Viveena Rathi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
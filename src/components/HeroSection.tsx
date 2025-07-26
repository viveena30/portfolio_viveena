import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Github, Linkedin, Download, Code, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'DevOps Engineer and ML Enthusiast';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      {/* Floating decorative shapes */}
      <div className="floating-shape">
        <Code className="h-24 w-24 text-indigo-300 animate-float" />
      </div>
      <div className="floating-shape">
        <Sparkles className="h-16 w-16 text-purple-300 animate-float" style={{ animationDelay: '2s' }} />
      </div>
      <div className="floating-shape">
        <div className="w-20 h-20 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/30 to-purple-50/30"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow hover-lift">
            <User className="h-16 w-16 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 animate-bounce-in">
            <span className="gradient-text">Viveena Rathi</span>
          </h1>
          
          <div className="h-8 mb-8">
            <p className="text-xl md:text-2xl text-indigo-600 font-mono">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-in-left">
            Passionate about building innovative solutions with modern technologies. 
            Experienced in CI/CD pipelines, containerization, and cloud infrastructure.<br />
            Building context aware AI assistants using NLP, RAG and LLMs.
          </p>
        </div>
        
        {/* <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 animate-slide-in-right">
          <div className="flex items-center space-x-2 text-gray-600 glass-card px-4 py-2 rounded-full">
            <Mail className="h-5 w-5 text-indigo-500" />
            <span>john.doe@email.com</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 glass-card px-4 py-2 rounded-full">
            <Phone className="h-5 w-5 text-indigo-500" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 glass-card px-4 py-2 rounded-full">
            <MapPin className="h-5 w-5 text-indigo-500" />
            <span>San Francisco, CA</span>
          </div>
        </div> */}
        
        <div className="flex justify-center space-x-4 mb-8">
          <a href="https://github.com/viveena30/" className="btn-primary text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105 shadow-md hover-lift">
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/viveenarathi" className="btn-primary text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105 shadow-md hover-lift">
            <Linkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
          <a href="https://drive.google.com/file/d/1oBC7f5oCE8MpJRsyUQEMkKdTSVgHImLz/view?usp=sharing" className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105 shadow-md hover-lift">
            <Download className="h-5 w-5" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};
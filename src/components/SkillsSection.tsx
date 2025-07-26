import React, { useState } from 'react';
import { Code, Zap } from 'lucide-react';

// Simply add or remove skill names from this array
const skills = [
  'Python',
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Java',
  'C++',
  'PostgreSQL',
  'MongoDB',
  'MySQL',
  'REST APIs',
  'Azure',
  'Docker',
  'Kubernetes',
  'Git',
  'GitHub',
  'GitHub Actions',
  'Gitlab',
  'Prometheus',
  'Grafana',
  'AWS S3',
  'AWS Lambda',
  'AWS CDK',
  'AWS IAM',
  'AWS EC2',
  'AWS EBS',
  'AWS SNS',
  'AWS SQS',
  'Scikit-learn',
  'TensorFlow, Keras',
  'AWS CloudFormation',
  'PyTorch',
  'NLTK',
  'OpenAI API',
  'LangChain',
  'FAISS (for vector search)'
];

export const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 opacity-5">
        <Code className="h-32 w-32 text-indigo-600 animate-float" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-5">
        <Zap className="h-24 w-24 text-purple-600 animate-float" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-6 animate-pulse-glow">
            <Code className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-gray-600">Technical expertise and proficiencies</p>
          <div className="section-divider"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card glass-card rounded-xl p-4 border border-gray-200 hover:border-indigo-300 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 hover-lift transition-all duration-300 text-center group cursor-pointer"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <span className="text-gray-800 font-medium group-hover:text-indigo-700 transition-colors duration-300">
                  {skill}
                </span>
                {hoveredSkill === index && (
                  <div className="absolute -top-2 -right-2">
                    <div className="w-3 h-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full animate-bounce-in"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
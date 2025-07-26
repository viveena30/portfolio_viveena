import React from 'react';
import { Briefcase, Calendar, MapPin, Star } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

const experienceData: Experience[] = [
  {
    title: 'Devops Engineer',
    company: 'Tata Consultancy Services',
    period: ' August 2024 - July 2025',
    location: 'Gandhinagar, Gujarat, India',
    achievements: [
      'Automated the manual testing process for automotive models in ADAS, focusing on validation of software components using Gitlab, and Github Actions.',
      'Led the migration of GitLab infrastructure to GitHub, evaluating and executing multiple migration strategies to ensure 100% data integrity and zero downtime.',
      'Engineered a Jenkins master-slave architecture on AWS as part of a PoC, dynamically dispatching CI jobs based on environmental input; later replicated architecture in GitHub Actions, boosting CI job efficiency and reducing compute costs.',
      'Architected a cloud-agnostic serverless application simulating IoT data to AWS Lambda, with SNS alerting on threshold breaches and real-time frontend UI updates via API Gateway.',
      ' Designed UI interfaces for visualizing API data in real time, enabling interactive dashboards and faster debugging.',
      'Tools & Technologies: GitLab, GitHub Actions, Jenkins, AWS (EC2, Lambda, SNS, API Gateway), Docker, Kubernetes, Python, Bash, PowerShell, Prometheus, Grafana',
    ]
  },
  {
    title: 'Project Intern',
    company: 'Tata Consultancy Services',
    period: 'January 2024 - May 2024',
    location: 'Gandhinagar, Gujarat, India',
    achievements: [
      'Proactively learned DevOps tools and core concepts from scratch during internship, focusing on AWS, Kubernetes, Infrastructure as Code (IaC), CI/CD pipeline design, system monitoring, and cloud automation.',
      'Deployed Kubernetes clusters on AWS EC2 instances to monitor containerized workloads and CI/CD execution.',
      'Monitored and visualized cloud infrastructure (GitLab runners, EC2, Kubernetes clusters) using Prometheus, Grafana, and custom Exporters, improving runner system observability.',
      'Implemented proactive alerting for GitLab runners with low disk space using Prometheus and Grafana alert rules.'
    ]
  },
  {
    title: 'Business Analyst Intern',
    company: 'KultureHire',
    period: 'May 2023 - July 2023 ',
    location: 'Remote',
    achievements: [
      'Analyzed large datasets using SQL and Excel, identifying business trends ',
      'Built interactive dashboards in Power BI to visualize KPIs',
      'Developed data analysis scripts in Python (Pandas, NumPy) to clean, process, and extract insights from complex datasets, reducing analysis time by 50%.'
    ]
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Briefcase className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600">Career journey and professional achievements</p>
        </div>
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <p className="text-indigo-600 font-semibold text-lg">{exp.company}</p>
                  <p className="text-gray-500 flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <Calendar className="h-5 w-5" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-900">Key Achievements:</h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600 flex items-start space-x-2">
                      <Star className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
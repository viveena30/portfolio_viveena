import React from 'react';
import { Award } from 'lucide-react';
import { ExternalLink } from 'lucide-react';


interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  link: string;
}
// #8b5cf6
const certificationsData: Certification[] = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Dec 2022',
    credentialId: 'P5F2EXDD52V41CKN',
    link: 'https://aws.amazon.com/verification'
  },
];

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Award className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-xl text-gray-600">Professional credentials and achievements</p>
        </div>
        <div className="grid align-center justify-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">{cert.title}</h3>
                  <p className="text-indigo-600">{cert.issuer}</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600">Issued: {cert.date}</p>
                <p className="text-sm text-gray-500">ID: {cert.credentialId}</p>
                <a href={cert.link} className="mt-4 md:mt-0 flex items-center space-x-1 text-indigo-600 hover:text-indigo-700 transition-colors">
                  <ExternalLink className="h-4 w-4" />
                  <span>Validate Credentials</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
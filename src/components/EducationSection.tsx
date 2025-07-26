import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string[];
  achievements: string[];
}

const educationData: Education[] = [
  {
    degree: 'Bachelor of Engineering, Computer Engineering',
    institution: 'Government Engineering College, Gandhinagar, Gujarat',
    period: '2020 - 2024',
    description: ['Participated in the <b>International Experience Program (IEP)</b> in 2023 at Laurentian University, Sudbury, Ontario, Canada', `Won <b>Appreciation prize</b> in <b>Azadi ka Amrit Mahotsav Hackathon 2022</b> with Cash prize of Rs. 10,000`, 'Got shortlisted for the <b>top 10</b> and "Most Creative use of Twilio" (Hack SVIT 2022 - MLH OFFICIAL 2022 SEASON)', '<b>Secretary at Club IDE</b> (College’s technical club engrossed in cultivating coding culture)', '<b>Organizer</b> (Core team member 2022-23 and Volunteer 2021-22) of GDSC Gec Gandhinagar'],
    achievements: ['CGPA: 8.3']
  },
  {
    degree: 'Senior Secondary [class XII]',
    institution: 'Sabari Vidyalaya, Vadodara, Gujarat',
    period: '2020',
    description: ['GSEB Board'],
    achievements: ['Percentage: 83%']
  },
  {
      degree: 'Secondary Education [class X]',
      institution: 'St. Kabir School, Vadodara, Gujarat',
      period: '2018',
      description: ['GSEB Board'],
      achievements: ['Percentage: 92%']
  },
  // {
  //   degree: 'International Experience Program',
  //   institution: 'Laurentian University/Université Laurentienne, Canada',
  //   period: 'Jul-Aug 2023',
  //   description: [ `A Program was held in Canada for 45 days during my bachelor's.` , 'Studied 2 subjects of 7th sem - Machine Learning and Mobile Computing and Wireless Communication.', 'Wrote a review paper on Green Cloud Computing Diabetes Prediction using ML algorithms (project)', 'StudySphere - all-in-one study companion mobile application (project)'],
  //   achievements: ['GPA: 3.6/4.0']
  // }
];

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <GraduationCap className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600">Academic background and continuous learning</p>
        </div>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-indigo-600 font-semibold">{edu.institution}</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <Calendar className="h-5 w-5" />
                  <span>{edu.period}</span>
                </div>
              </div>
              {/* <p className="text-gray-600 mb-4">{edu.description}</p> */}
              <div className="flex flex-wrap gap-2">
                {edu.description.map((description, i) => (
                  // <p key={i} className="text-gray-600 mb-4">
                  //   🟣 {description}
                    <div className="text-gray-600 mb-2" key={i} dangerouslySetInnerHTML= {{ __html: '🟣 ' + description}} />
                  // </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {edu.achievements.map((achievement, i) => (
                  <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
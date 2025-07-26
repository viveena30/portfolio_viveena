import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

interface Publication {
  title: string;
  journal: string;
  date: string;
  authors: string;
  link: string;
}

const publicationsData: Publication[] = [

  {
    title: 'Health System Crisis in the Era of Conflicts, Climate Change, and Pandemics, Aug 2023.',
    journal: '',
    date: 'Aug 2023',
    authors: 'Suresh Rathi, Viveena Rathi',
    link: 'https://www.amazon.in/Health-system-conflicts-climate-pandemics/dp/B0CD7HH9DQ/ref=sr_1_1?qid=1692940033&refinements=p_27%3AViveena+Rathi&s=books&sr=1-1'
  }
];

export const PublicationsSection: React.FC = () => {
  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <BookOpen className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Publications</h2>
          <p className="text-xl text-gray-600">Books, articles, and thought leadership</p>
        </div>
        <div className="space-y-6">
          {publicationsData.map((pub, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pub.title}</h3>
                  <p className="text-indigo-600 mb-1">{pub.journal}</p>
                  <p className="text-gray-500 text-sm mb-2">Authors: {pub.authors}</p>
                  <p className="text-gray-500 text-sm">Published: {pub.date}</p>
                </div>
                <a href={pub.link} className="mt-4 md:mt-0 flex items-center space-x-1 text-indigo-600 hover:text-indigo-700 transition-colors">
                  <ExternalLink className="h-4 w-4" />
                  <span>Read Article</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
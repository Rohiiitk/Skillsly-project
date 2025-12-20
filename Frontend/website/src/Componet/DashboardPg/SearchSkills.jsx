import React from 'react';
import { Search } from 'lucide-react';

const skillRecommendations = [
  { title: "Python Language", iconBg: "bg-blue-600", iconUrl: "https://placehold.co/60x60/1E40AF/ffffff?text=P" },
  { title: "Figma Basics", iconBg: "bg-fuchsia-600", iconUrl: "https://placehold.co/60x60/9D174D/ffffff?text=F" },
  { title: "Guitar Lessons", iconBg: "bg-lime-500", iconUrl: "https://placehold.co/60x60/84CC16/000000?text=G" },
];

const SkillCard = ({ title, iconBg, iconUrl }) => (
  <div className="flex flex-col items-center text-center p-3">
    <div className={`w-20 h-20 rounded-xl mb-3 flex items-center justify-center p-3 ${iconBg} shadow-lg`}>
      <img src={iconUrl} alt={title} className="w-full h-full object-contain" />
    </div>
    <p className="text-sm font-medium text-white">{title}</p>
  </div>
);

const SearchSkills = () => (
  <div className="p-6 md:p-10 w-full h-full">
    <div className="flex justify-between items-center mb-10">
      <div className="relative w-full max-w-lg">
        <input type="text" placeholder="Search Skill category ..." className="w-full bg-black border border-gray-700 text-white py-3 pl-5 pr-12 rounded-full" />
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
      </div>
    </div>
    <h1 className="text-3xl md:text-5xl font-light text-white mb-3">Good Morning, User!</h1>
    <h2 className="text-xl md:text-2xl font-medium text-white mb-6">Top Recommendation</h2>
    <div className="flex flex-wrap gap-8">
      {skillRecommendations.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>
  </div>
);

export default SearchSkills;
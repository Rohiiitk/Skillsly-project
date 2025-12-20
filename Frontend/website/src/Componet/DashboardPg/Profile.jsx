
import React, { useState, useEffect, useCallback } from 'react';
import { User, ChevronLeft, ChevronRight } from 'lucide-react';

const userSkills = ["Python", "Editing", "Java", "Guitar"];
const userWork = [
  { id: 1, title: "Video Project Alpha", desc: "A cinematic short film.", imageUrl: "https://placehold.co/300x200/222222/ffffff?text=Work+1" },
  { id: 2, title: "Java Backend Microservice", desc: "A high-performance API.", imageUrl: "https://placehold.co/300x200/222222/ffffff?text=Work+2" },
  { id: 3, title: "UI/UX Case Study", desc: "Figma design for a new GroupSection.", imageUrl: "https://placehold.co/300x200/222222/ffffff?text=Work+3" },
  { id: 4, title: "Guitar Composition", desc: "Original song recording.", imageUrl: "https://placehold.co/300x200/222222/ffffff?text=Work+4" },
  { id: 5, title: "Data Analysis Report", desc: "Python data visualization.", imageUrl: "https://placehold.co/300x200/222222/ffffff?text=Work+5" },
  { id: 6, title: "Mobile GroupSection Wireframes", desc: "React Native prototype.", imageUrl: "https://placehold.co/300x200/222222/ffffff?text=Work+6" },
];

const WorkCarousel = ({ workItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const nextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % workItems.length);
  }, [workItems.length]);

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + workItems.length) % workItems.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const translateValue = -currentIndex * (100 / itemsPerView);

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold text-white mb-6">Work User Has Done</h2>
      <div className="flex items-center space-x-4">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-[#1a1a1a] text-white hover:bg-gray-700 transition-colors shadow-md"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="overflow-hidden flex-grow">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
                transform: `translateX(${translateValue}%)`, 
                width: `${workItems.length * (100 / itemsPerView)}%` 
            }}
          >
            {workItems.map((item) => (
              <div
                key={item.id}
                style={{ flexBasis: `${100 / itemsPerView}%`, minWidth: `${100 / itemsPerView}%` }}
                className="p-2 flex-shrink-0"
              >
                <div className="bg-black border border-[#1a1a1a] rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-auto object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x200/222222/ffffff?text=Work" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-[#1a1a1a] text-white hover:bg-gray-700 transition-colors shadow-md"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

const UserProfile = () => {
  return (
    <div className="p-6 md:p-10 w-full h-full">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10 mb-12">

        <div className="flex flex-col items-center md:items-start min-w-[150px]">
          <div className="relative w-32 h-32 rounded-full border-2 border-gray-700 overflow-hidden bg-gray-700 mb-6">
            <User className="absolute inset-0 m-auto w-24 h-24 text-white" />
          </div>

          <div className="grid grid-cols-2 gap-2 w-full max-w-[150px]">
            {userSkills.map((skill, index) => (
              <span
                key={index}
                className="text-xs text-center font-medium text-white bg-[#1a1a1a] py-2 px-3 rounded-md border border-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-grow">
          <h1 className="text-3xl font-semibold text-white mb-4">Rohit</h1>
          <p className="text-gray-300 leading-relaxed mb-6">
            Creative technologist with a passion for storytelling and automation. 
            Skilled in video editing and Python programming, blending visual artistry 
            with smart scripting to produce engaging content and efficient workflows.
          </p>

          <p className="text-sm text-teal-400 mb-8 truncate">
            https://www.figma.com/design/Q7hZykJTikcwal1sxcl/SkillSly-web-Design
          </p>

          <h2 className="text-xl font-medium text-white mb-4">Badges</h2>
          <div className="flex space-x-4">
            <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-white/30"></div>
            <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-white/30"></div>
            <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-white/30"></div>
          </div>
        </div>
      </div>

      <WorkCarousel workItems={userWork} />
    </div>
  );
};

export default UserProfile;
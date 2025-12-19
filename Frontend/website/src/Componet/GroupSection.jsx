import React, { useState, useEffect, useCallback } from 'react';
import { User, Search, Notebook, MessageSquare, LogOut, Users, Edit, Trash2, Check, X, Video, ChevronLeft, ChevronRight } from 'lucide-react';

// --- Placeholder Data ---
const groupItems = [
  { id: 1, name: "User1 & User2 Group" },
  { id: 2, name: "User1 & User2 Group" },
  { id: 3, name: "User1 & User2 Group" },
  { id: 4, name: "User1 & User2 Group" },
];

const noteItems = [
  { id: 1, title: "Note 1", date: "11/09/2025", content: "Create a short cinematic video using CapCut, GroupSectionlying transitions, filters," },
  { id: 2, title: "Note 1", date: "16/09/2025", content: "Compile clips from a recent trip using CapCut's auto-caption, speed ramping" },
  { id: 3, title: "Note 1", date: "28/09/2025", content: "Use CapCut to showcase a dramatic makeover or room renovation with split-screen effects." },
];

const skillRecommendations = [
  { title: "Python Language", iconBg: "bg-blue-600", iconUrl: "https://placehold.co/60x60/1E40AF/ffffff?text=P", iconAlt: "Python Logo" },
  { title: "Figma Basics", iconBg: "bg-fuchsia-600", iconUrl: "https://placehold.co/60x60/9D174D/ffffff?text=F", iconAlt: "Figma Logo" },
  { title: "Guitar Lessons", iconBg: "bg-lime-500", iconUrl: "https://placehold.co/60x60/84CC16/000000?text=G", iconAlt: "Guitar Icon" },
];

const messageInvitations = [
  { id: 1, user: "User1", role: "a learner", date: "27/08/25", time: "5:00 PM", accepted: true, canJoin: false },
  { id: 2, user: "User1", role: "a learner", date: "29/08/25", time: "5:00 PM", accepted: false, canJoin: false },
  { id: 3, user: "User2", role: "a learner", date: "27/08/25", time: "9:00 PM", accepted: false, canJoin: false },
];

const userSkills = ["Python", "Editing", "Java", "Guitar"];
const userWork = [
  { id: 1, title: "Video Project Alpha", desc: "A cinematic short film.", imageUrl: "https://placehold.co/300x200/222222/ffffff?text=Work+1" },
  { id: 2, title: "Java Backend Microservice", desc: "A high-performance API.", imageUrl: "https://placehold.co/300x200/222222/ffffff?text=Work+2" },
  { id: 3, title: "UI/UX Case Study", desc: "Figma design for a new GroupSection.", imageUrl: "https://placehold.co/300x200/222222/ffffff?text=Work+3" },
  { id: 4, title: "Guitar Composition", desc: "Original song recording.", imageUrl: "https://placehold.co/300x200/222222/ffffff?text=Work+4" },
  { id: 5, title: "Data Analysis Report", desc: "Python data visualization.", imageUrl: "https://placehold.co/300x200/222222/ffffff?text=Work+5" },
  { id: 6, title: "Mobile GroupSection Wireframes", desc: "React Native prototype.", imageUrl: "https://placehold.co/300x200/222222/ffffff?text=Work+6" },
];


// --- Custom Logo Component (Mimics the 'skillSly' logo style) ---
const SkillSlyLogo = () => (
  <div className="flex items-center space-x-2 p-4 text-xl font-bold text-white">
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* S-shape with a slight break, using a vibrant color */}

    </svg>
    <span>skillSly</span>
  </div>
);

// --- Navigation Item Component ---
const NavItem = ({ icon: Icon, text, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full px-8 py-3 text-sm font-medium transition-colors text-left
      ${isActive
        ? 'bg-[#1a1a1a] text-white border-l-4 border-teal-400'
        : 'text-gray-400 hover:bg-[#1a1a1a] hover:text-white'
      }`}
  >
    {Icon && <Icon className="w-5 h-5 mr-3" />}
    {text}
  </button>
);

// --- Sidebar Component ---
const Sidebar = ({ activeItem, setActiveItem }) => (
  <div className="flex flex-col w-3/5 min-w-[300px] max-w-xs h-full bg-[#0d0d0d] text-white">

    {/* Logo */}
    <SkillSlyLogo />

    {/* Profile Section */}
    <div className="flex flex-col items-center py-8 border-b border-gray-800">
      <div className="relative w-24 h-24 rounded-full border-2 border-gray-700 overflow-hidden bg-gray-700 mb-3">
        {/* Placeholder for Profile Image - Redirects to Profile view */}
        <button
          onClick={() => setActiveItem('profile')}
          className="w-full h-full flex items-center justify-center"
        >
          <User className="w-16 h-16 text-gray-300 opacity-70" />
        </button>
      </div>
      <p className="text-lg font-semibold mb-3">User Name</p>
      <button
        onClick={() => setActiveItem('profile')}
        className={`text-sm rounded-full px-4 py-1 transition-colors
          ${activeItem === 'profile'
            ? 'bg-teal-600 border border-teal-600 text-white'
            : 'border border-gray-600 text-gray-300 hover:bg-gray-700'
          }`}
      >
        Profile
      </button>
    </div>

    {/* Navigation Links */}
    <div className="flex flex-col justify-between flex-grow mt-6">
      <nav className="space-y-1">
        <NavItem text="Search skills" icon={Search} isActive={activeItem === 'search'} onClick={() => setActiveItem('search')} />
        <NavItem text="Groups" icon={Users} isActive={activeItem === 'groups'} onClick={() => setActiveItem('groups')} />
        <NavItem text="Saved Notes" icon={Notebook} isActive={activeItem === 'notes'} onClick={() => setActiveItem('notes')} />
        <NavItem text="Messages" icon={MessageSquare} isActive={activeItem === 'messages'} onClick={() => setActiveItem('messages')} />
      </nav>

      {/* Log out */}
      <div className="p-8">
        <NavItem text="Log out" icon={LogOut} isActive={false} onClick={() => console.log('Log out clicked')} />
      </div>
    </div>
  </div>
);

// --- Group Item Component ---
const GroupItem = ({ name }) => (
  <div className="flex items-center justify-between bg-black p-4 md:p-6 rounded-xl shadow-lg border border-[#1a1a1a]">
    <span className="text-white text-base md:text-lg font-medium">{name}</span>
    <div className="flex space-x-3 text-gray-400">
      <button className="p-2 rounded-full hover:bg-[#1a1a1a] hover:text-teal-400 transition-colors">
        <Edit className="w-5 h-5" />
      </button>
      <button className="p-2 rounded-full hover:bg-[#1a1a1a] hover:text-red-500 transition-colors">
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  </div>
);

// --- Main Content: Groups List Component ---
const GroupsList = () => (
  <div className="p-6 md:p-10 w-full h-full">
    <h1 className="text-3xl md:text-4xl font-light text-white mb-8">Groups</h1>

    <div className="space-y-4">
      {groupItems.map(group => (
        <GroupItem key={group.id} name={group.name} />
      ))}
    </div>
  </div>
);

// --- Note Item Component ---
const NoteItem = ({ title, date, content }) => (
  <div className="bg-black p-5 rounded-xl shadow-lg border border-[#1a1a1a] h-44 flex flex-col justify-between">
    <div>
      <div className="flex justify-between items-start mb-2">
        <span className="text-white text-lg font-medium">{title}</span>
        <span className="text-gray-400 text-sm">{date}</span>
      </div>
      <p className="text-gray-300 text-sm line-clamp-3">
        {content}
      </p>
    </div>
    {/* Optionally add edit/delete actions here if needed */}
  </div>
);


// --- Main Content: Notes List Component ---
const NotesList = () => (
  <div className="p-6 md:p-10 w-full h-full">
    <h1 className="text-3xl md:text-4xl font-light text-white mb-8">All Saved Notes</h1>

    {/* Responsive Grid for Notes: 2 columns on medium screens and up, 1 column on mobile */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {noteItems.map(note => (
        <NoteItem
          key={note.id}
          title={note.title}
          date={note.date}
          content={note.content}
        />
      ))}
    </div>
  </div>
);

// --- Skill Card Component ---
const SkillCard = ({ title, iconBg, iconUrl, iconAlt }) => (
  <div className="flex flex-col items-center text-center p-3">
    <div
      className={`w-20 h-20 rounded-xl mb-3 flex items-center justify-center p-3 ${iconBg} shadow-lg`}
    >
      <img
        src={iconUrl}
        alt={iconAlt}
        className="w-full h-full object-contain"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/60x60/374151/ffffff?text=?" }}
      />
    </div>
    <p className="text-sm font-medium text-white">{title}</p>
  </div>
);

// --- Main Content: Search Skills/Recommendations Component ---
const SearchSkills = () => (
  <div className="p-6 md:p-10 w-full h-full">
    {/* Search Bar and Avatar/Menu Icon */}
    <div className="flex justify-between items-center mb-10">
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          placeholder="Search Skill category ..."
          className="w-full bg-black border border-gray-700 text-white py-3 pl-5 pr-12 rounded-full focus:ring-teal-400 focus:border-teal-400"
        />
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
      </div>
      <button className="p-3 bg-black border border-gray-700 rounded-full text-white hover:bg-[#1a1a1a]">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    {/* Welcome Message */}
    <h1 className="text-3xl md:text-5xl font-light text-white mb-3">Good Moring, User!</h1>
    <p className="text-gray-400 mb-10">
      welcome to our website search skill you want to learn or help other to skill Up
    </p>

    {/* Top Recommendation */}
    <h2 className="text-xl md:text-2xl font-medium text-white mb-6">Top Recommendation</h2>

    {/* Skill Cards Grid */}
    <div className="flex flex-wrap gap-8 justify-start">
      {skillRecommendations.map((skill, index) => (
        <SkillCard
          key={index}
          title={skill.title}
          iconBg={skill.iconBg}
          iconUrl={skill.iconUrl}
          iconAlt={skill.iconAlt}
        />
      ))}
    </div>
  </div>
);


// --- Message Invitation Item Component ---
const MessageInvitation = ({ user, role, date, time }) => (
  <div className={`relative p-4 md:p-5 rounded-xl text-sm max-w-sm ml-auto mr-auto 
                     bg-gray-700`}>
    <p className="text-white font-medium">{user}</p>
    <p className="text-gray-300 mb-2">as {role}</p>
    <p className="text-gray-400 text-xs">Date: {date} / Time: {time}</p>

    {/* Accept/Reject Buttons */}
    <div className="absolute right-3 top-3 flex space-x-2 text-gray-400">
      <button className="p-1 rounded-full hover:bg-black/50 hover:text-teal-400 transition-colors">
        <Check className="w-5 h-5" />
      </button>
      <button className="p-1 rounded-full hover:bg-black/50 hover:text-red-500 transition-colors">
        <X className="w-5 h-5" />
      </button>
    </div>
  </div>
);


// --- Main Content: Messages List Component ---
const MessagesList = () => (
  <div className="p-6 md:p-10 w-full h-full flex flex-col">
    {/* Messages/Invitations Area */}
    <div className="flex-grow space-y-4 mb-8">
      {messageInvitations.map(msg => (
        <MessageInvitation
          key={msg.id}
          user={msg.user}
          role={msg.role}
          date={msg.date}
          time={msg.time}
        />
      ))}

      {/* Join Session Block - Styled to look like it's sent from the other side */}
      <div className="flex justify-end pr-0 md:pr-10">
        <div className="w-56 p-2 bg-[#1a1a1a] rounded-xl flex flex-col items-end">
          <p className="text-gray-300 text-sm mb-2">Join Session</p>
          <button className="flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors shadow-lg">
            <Video className="w-5 h-5 mr-2" />
            Join
          </button>
        </div>
      </div>
    </div>

    {/* Action Buttons at the bottom */}
    <div className="flex justify-center space-x-4 pt-4 border-t border-gray-800">
      <button className="bg-[#1a1a1a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-700 transition-colors shadow-xl">
        Real Time Chat
      </button>
      <button className="bg-[#1a1a1a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-700 transition-colors shadow-xl">
        Schedule session
      </button>
    </div>
  </div>
);

// --- Work Carousel Component with Sliding Animation ---
const WorkCarousel = ({ workItems }) => {
  // Current index of the item that is far left (0 to workItems.length - 1)
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  // Moves the carousel one step to the right
  const nextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % workItems.length);
  }, [workItems.length]);

  // Moves the carousel one step to the left
  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + workItems.length) % workItems.length);
  };

  // Auto-scrolling effect: interval cleanup is crucial
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Swap every 3000ms (3 seconds)
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [nextSlide]);

  // Calculates the required translation in %
  // We display 3 items, so each item takes 1/3 = 33.33% of the container space.
  // The translation shifts the entire track to show the item at currentIndex at the far left.
  const translateValue = -currentIndex * (100 / itemsPerView);

  // Create a duplicated list for infinite look, showing all items twice
  const extendedItems = [...workItems, ...workItems];

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold text-white mb-6">Work User Has Done</h2>
      <div className="flex items-center space-x-4">

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-[#1a1a1a] text-white hover:bg-gray-700 transition-colors shadow-md"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Carousel Window (Overflow Hidden) */}
        <div className="overflow-hidden flex-grow">
          {/* Carousel Track (The moving part) */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${translateValue}%)`, width: `${workItems.length * (100 / itemsPerView)}%` }}
          >
            {/* Iterate over all items in the dataset */}
            {workItems.map((item) => (
              <div
                key={item.id}
                // Each item takes 1/3 of the carousel window width
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

        {/* Right Arrow */}
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


// --- Main Content: User Profile Component ---
const UserProfile = () => (
  <div className="p-6 md:p-10 w-full h-full">
    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10 mb-12">

      {/* Left Column: Avatar & Skills */}
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

      {/* Right Column: Details & Badges */}
      <div className="flex-grow">
        <h1 className="text-3xl font-semibold text-white mb-4">Rohit</h1>
        <p className="text-gray-300 leading-relaxed mb-6">
          Creative technologist with a passion for storytelling and automation. Skilled in video editing and Python programming, blending visual artistry with smart scripting to produce engaging content and efficient workflows. Would you like a version tailored for LinkedIn, a portfolio site, or a resume? I can tweak the tone and format to fit.
        </p>

        {/* Placeholder Link/URL */}
        <p className="text-sm text-teal-400 mb-8 truncate">
          https://www.figma.com/design/Q7hZykJTikcwal1sxcl/SkillSly-web-Design?node-id=0-1&p=&t=JfDfJdvbxhNDNmkw-0
        </p>

        {/* Badges */}
        <h2 className="text-xl font-medium text-white mb-4">Badges</h2>
        <div className="flex space-x-4">
          <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-white/30"></div>
          <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-white/30"></div>
          <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-white/30"></div>
        </div>
      </div>
    </div>

    {/* Work Carousel Section */}
    <WorkCarousel workItems={userWork} />
  </div>
);


// --- Main GroupSection Component ---
const GroupSection = () => {
  // Initialize with 'profile' to show the new view first
  const [activeItem, setActiveItem] = useState('profile');

  // Function to render the correct content based on the active item
  const renderContent = () => {
    switch (activeItem) {
      case 'profile':
        return <UserProfile />;
      case 'search':
        return <SearchSkills />;
      case 'groups':
        return <GroupsList />;
      case 'notes':
        return <NotesList />;
      case 'messages':
        return <MessagesList />;
      default:
        return <UserProfile />;
    }
  };

  return (
    <div className="flex h-screen bg-black font-sans">

      {/* Sidebar - Fixed width on desktop, full height */}
      <div className="w-1/4 min-w-[250px] max-w-xs hidden lg:block border-r border-[#1a1a1a]">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      </div>

      {/* Main Content Area - Takes remaining space */}
      <main className="flex-grow overflow-y-auto">
        {renderContent()}
      </main>

    </div>
  );
};

export default GroupSection;

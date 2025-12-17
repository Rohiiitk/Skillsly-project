import React, { useState } from 'react';
import { User, Search, Notebook, MessageSquare, LogOut, Users, Edit, Trash2 } from 'lucide-react';

// --- Placeholder Data ---
const groupItems = [
  { id: 1, name: "User1 & User2 Group" },
  { id: 2, name: "User1 & User2 Group" },
  { id: 3, name: "User1 & User2 Group" },
  { id: 4, name: "User1 & User2 Group" },
];

const noteItems = [
  { id: 1, title: "Note 1", date: "11/09/2025", content: "Create a short cinematic video using CapCut, NoteSectionlying transitions, filters," },
  { id: 2, title: "Note 1", date: "16/09/2025", content: "Compile clips from a recent trip using CapCut's auto-caption, speed ramping" },
  { id: 3, title: "Note 1", date: "28/09/2025", content: "Use CapCut to showcase a dramatic makeover or room renovation with split-screen effects." },
];

// --- Custom Logo Component (Mimics the 'skillSly' logo style) ---
const SkillSlyLogo = () => (
  <div className="flex items-center space-x-2 p-4 text-xl font-bold text-white">
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* S-shape with a slight break, using a vibrant color */}
      <path d="M5 4H10C12.7614 4 15 6.23858 15 9V15C15 17.7614 12.7614 20 10 20H5" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 4H14C11.2386 4 9 6.23858 9 9V15C9 17.7614 11.2386 20 14 20H19" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
  <div className="flex flex-col w-full h-full bg-[#0d0d0d] text-white">
    
    {/* Logo */}
    <SkillSlyLogo />

    {/* Profile Section */}
    <div className="flex flex-col items-center py-8 border-b border-gray-800">
      <div className="relative w-24 h-24 rounded-full border-2 border-gray-700 overflow-hidden bg-gray-700 mb-3">
        {/* Placeholder for Profile Image - Adjust width/height as needed */}
        <img
          src="profile.PNG" // Replace with actual image path or base64
          alt="User Avatar"
          className="object-cover w-full h-full"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/96x96/1f2937/ffffff?text=U" }}
        />
        <User className="absolute inset-0 m-auto w-16 h-16 text-gray-300 opacity-70" />
      </div>
      <p className="text-lg font-semibold mb-3">User Name</p>
      <button className="text-sm border border-gray-600 rounded-full px-4 py-1 text-gray-300 hover:bg-gray-700 transition-colors">
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

// --- Main NoteSection Component ---
const NoteSection = () => {
  // Initialize with 'notes' to show the newly coded view first, as requested.
  const [activeItem, setActiveItem] = useState('notes'); 

  // Function to render the correct content based on the active item
  const renderContent = () => {
    switch (activeItem) {
      case 'groups':
        return <GroupsList />;
      case 'notes':
        return <NotesList />;
      case 'search':
        return <div className="p-10 text-white">Search Skills Content Placeholder</div>;
      case 'messages':
        return <div className="p-10 text-white">Messages Content Placeholder</div>;
      default:
        return <GroupsList />;
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
      
      {/* Note: Added overflow-y-auto to the main content area so you can scroll 
          if the content (notes/groups) exceeds the screen height. */}
    </div>
  );
};

export default NoteSection;

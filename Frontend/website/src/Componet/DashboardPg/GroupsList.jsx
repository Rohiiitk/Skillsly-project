import React from 'react';
import { Edit, Trash2 } from 'lucide-react';

const groupItems = [
  { id: 1, name: "User1 & User2 Group" },
  { id: 2, name: "User1 & User2 Group" },
  { id: 3, name: "User1 & User2 Group" },
  { id: 4, name: "User1 & User2 Group" },
];

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

export default GroupsList;
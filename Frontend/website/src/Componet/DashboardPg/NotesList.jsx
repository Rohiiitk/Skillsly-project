import React from 'react';

const noteItems = [
  { id: 1, title: "Note 1", date: "11/09/2025", content: "Create a short cinematic video using CapCut, GroupSectionlying transitions, filters," },
  { id: 2, title: "Note 1", date: "16/09/2025", content: "Compile clips from a recent trip using CapCut's auto-caption, speed ramping" },
  { id: 3, title: "Note 1", date: "28/09/2025", content: "Use CapCut to showcase a dramatic makeover or room renovation with split-screen effects." },
];

const NoteItem = ({ title, date, content }) => (
  <div className="bg-black p-5 rounded-xl shadow-lg border border-[#1a1a1a] h-44 flex flex-col justify-between">
    <div>
      <div className="flex justify-between items-start mb-2">
        <span className="text-white text-lg font-medium">{title}</span>
        <span className="text-gray-400 text-sm">{date}</span>
      </div>
      <p className="text-gray-300 text-sm line-clamp-3">{content}</p>
    </div>
  </div>
);

const NotesList = () => (
  <div className="p-6 md:p-10 w-full h-full">
    <h1 className="text-3xl md:text-4xl font-light text-white mb-8">All Saved Notes</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {noteItems.map(note => (
        <NoteItem key={note.id} title={note.title} date={note.date} content={note.content} />
      ))}
    </div>
  </div>
);

export default NotesList;
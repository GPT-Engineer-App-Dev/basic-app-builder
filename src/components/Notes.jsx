import React from 'react';

const notesData = [
  {
    title: 'lorem ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tristique augue, ut egestas velit. Mauris condimentum sed ante at sagittis. Suspendisse vitae lacinia purus. Donec a tristique augue, ut egestas velit.',
    lastOpened: 'yesterday 16:03',
    bgColor: 'bg-lime-100',
  },
  {
    title: 'lorem ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tristique augue, ut egestas velit.',
    lastOpened: 'yesterday 9:03',
    bgColor: 'bg-pink-100',
  },
  {
    title: 'lorem ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tristique augue, ut egestas velit. Sed venenatis, nunc ut fermentum interdum, quam eros sollicitudin enim, eu porttitor risus enim ut felis. Nunc tellus libero, fringilla eu commodo sit amet, maximus a mauris. Mauris aliquam.',
    lastOpened: 'august 20',
    bgColor: 'bg-amber-100',
  },
  {
    title: 'lorem ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    lastOpened: 'friday',
    bgColor: 'bg-lime-100',
  },
];

const Notes = () => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <img src="/images/notes-icon.png" alt="Notes Icon" className="w-12 h-12 mr-4" />
          <h1 className="text-4xl font-bold text-purple-600">Notes</h1>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search notes"
            className="border rounded-full py-2 px-4 w-80"
          />
          <div className="flex items-center ml-4">
            <img src="/images/profile-pic.png" alt="Profile" className="w-10 h-10 rounded-full mr-2" />
            <span className="font-semibold">Puneet Shakya</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {notesData.map((note, index) => (
          <div key={index} className={`p-6 rounded-lg shadow-md ${note.bgColor}`}>
            <h2 className="text-xl font-bold mb-2">{note.title}</h2>
            <p className="text-gray-700 mb-4">{note.content}</p>
            <p className="text-gray-500 text-sm">last opened {note.lastOpened}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
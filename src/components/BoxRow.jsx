import React from 'react';

export default function BoxRow({ count = 10, value = [], onChange }) {
  const toggleBox = (i) => {
    const newValue = [...value];
    newValue[i] = (newValue[i] === 'L') ? 'A' : (newValue[i] === 'A') ? '' : 'L';
    onChange(newValue);
  };

  const handleKey = (i, e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleBox(i);
    }
  };

  return (
    <div className="flex space-x-1">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          onClick={() => toggleBox(i)}
          onKeyDown={(e) => handleKey(i, e)}
          tabIndex={0}
          className={`w-5 h-5 border text-xs font-bold rounded focus:outline-none focus:ring-2 ${
            value[i] === 'L' ? 'bg-yellow-400'
            : value[i] === 'A' ? 'bg-red-600 text-white'
            : 'bg-white'
          } border-black`}
        >
          {value[i]}
        </button>
      ))}
    </div>
  );
}

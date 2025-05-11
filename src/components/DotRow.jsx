import React from 'react';

export default function DotRow({ count = 5, value = 0, onChange }) {
  const handleKey = (i, e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onChange(i + 1);
    }
  };

  return (
    <div className="flex space-x-1">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          role="slider"
          aria-valuemin={0}
          aria-valuemax={count}
          aria-valuenow={value}
          title={`${i + 1} dots`}
          onClick={() => onChange(i + 1)}
          onKeyDown={(e) => handleKey(i, e)}
          tabIndex={0}
          className={`w-5 h-5 rounded-full border-2 ${
            i < value ? 'bg-black' : 'bg-white'
          } border-black focus:outline-none focus:ring-2`}
        />
      ))}
    </div>
  );
}

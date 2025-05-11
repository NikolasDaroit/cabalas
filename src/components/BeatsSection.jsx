// src/components/BeatsSection.jsx

import React from 'react';

export default function BeatsSection({ state, dispatch }) {
  const items = [
    { label: 'Beats', field: 'beats' },
    { label: 'Arcane Beats', field: 'arcaneBeats' },
    { label: 'Experience', field: 'experience' },
    { label: 'Arcane Experience', field: 'arcaneExperience' },
  ];

  return (
    <section>
      <h3 className="text-lg font-semibold">Beats &amp; Experience</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
        {items.map(({ label, field }) => (
          <div key={field} className="flex items-center space-x-2">
            <span className="font-medium">{label}:</span>
            <button
              onClick={() => dispatch({ type: 'decrement', field })}
              className="px-2 py-1 bg-gray-200 rounded dark:bg-gray-700"
            >
              −
            </button>
            <span className="w-6 text-center">{state[field]}</span>
            <button
              onClick={() => dispatch({ type: 'increment', field })}
              className="px-2 py-1 bg-gray-200 rounded dark:bg-gray-700"
            >
              +
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

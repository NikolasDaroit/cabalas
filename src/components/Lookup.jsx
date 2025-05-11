// src/components/Lookup.jsx
import React, { useState, useEffect } from 'react';

export default function Lookup({ items = [], onSelect, placeholder = 'Search…' }) {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(items);

  useEffect(() => {
    const q = query.toLowerCase();
    setFiltered(
      items.filter(item => item.name.toLowerCase().includes(q))
    );
  }, [query, items]);

  return (
    <div className="w-64 bg-white dark:bg-gray-800 p-2 border rounded shadow-lg">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full p-1 mb-2 border rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
      />
      <ul className="max-h-48 overflow-auto">
        {filtered.map(item => (
          <li key={item.name}>
            <button
              onClick={() => onSelect(item)}
              className="w-full text-left px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <div className="flex justify-between">
                <span>{item.name}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{item.source}</span>
              </div>
            </button>
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="px-2 py-1 text-sm text-gray-500">No matches</li>
        )}
      </ul>
    </div>
  );
}

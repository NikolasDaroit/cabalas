// src/components/CharacterSelector.jsx

import React from 'react';

export default function CharacterSelector({ characterList, selectedKey, loadCharacter }) {
  return (
    <select
      className="p-1 border rounded bg-white dark:bg-gray-700"
      value={selectedKey}
      onChange={e => loadCharacter(e.target.value)}
    >
      <option value="">Select Character</option>
      {characterList.map(key => (
        <option key={key} value={key}>
          {key.replace('mageCharacter_', '')}
        </option>
      ))}
    </select>
  );
}

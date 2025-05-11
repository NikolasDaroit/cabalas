// src/components/CharacterActions.jsx

import React from 'react';

export default function CharacterActions({
  createNewCharacter,
  saveCharacter,
  exportCharacter,
  character
}) {
  return (
    <div className="flex gap-2">
      <button
        onClick={createNewCharacter}
        className="bg-yellow-500 text-white px-2 py-1 rounded"
      >
        New
      </button>
      <button
        onClick={saveCharacter}
        className="bg-blue-500 text-white px-2 py-1 rounded"
        disabled={!character}
      >
        Save
      </button>
      <button
        onClick={exportCharacter}
        className="bg-gray-700 text-white px-2 py-1 rounded"
        disabled={!character}
      >
        Export
      </button>
    </div>
  );
}

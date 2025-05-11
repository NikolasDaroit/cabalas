// src/components/Header.jsx

import React from 'react';
import CharacterSelector from './CharacterSelector';
import CharacterActions from './CharacterActions';

export default function Header({
  characterList,
  selectedKey,
  loadCharacter,
  createNewCharacter,
  saveCharacter,
  exportCharacter,
  importCharacter,
  character
}) {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-between">
      <CharacterSelector
        characterList={characterList}
        selectedKey={selectedKey}
        loadCharacter={loadCharacter}
      />
      <CharacterActions
        createNewCharacter={createNewCharacter}
        saveCharacter={saveCharacter}
        exportCharacter={exportCharacter}
        importCharacter={importCharacter}
        character={character}
      />
    </div>
  );
}

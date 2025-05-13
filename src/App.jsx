// src/App.js

import React, { useReducer, useEffect, useCallback, useState } from 'react';
import { reducer } from './state/reducer'
import { initialState } from './state/initialState';
import {
  listCharacters,
  loadCharacter as loadFromStorage,
  saveCharacter as saveToStorage,
  importCharacter,
  exportCharacter as exportToFile
} from './utils/storage';
import Header from './components/Header';
import CharacterForm from './components/CharacterForm';
import './styles/tailwind.css';
// Adicione isso no topo (depois dos imports)
const generateDefaultName = () => `Mage ${Math.floor(Math.random() * 1000)}`;

// Dentro do componente App:
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [characterList, setCharacterList] = useState([]);
  const [selectedKey, setSelectedKey] = useState('');
  const [hasCharacter, setHasCharacter] = useState(false); // � controle de exibição

  const refreshCharacterList = useCallback(() => {
    setCharacterList(listCharacters());
  }, []);

  useEffect(() => {
    refreshCharacterList();
  }, [refreshCharacterList]);

  useEffect(() => {
    if (!hasCharacter || !state.info.Name) return;

    const timeout = setTimeout(() => {
      try {
        const key = saveToStorage(state);
        setSelectedKey(key);
        refreshCharacterList();
      } catch (err) {
        alert(err.message);
      }
    }, 300);
    return () => clearTimeout(timeout);
  }, [state, hasCharacter, refreshCharacterList]);

  const handleLoad = (key) => {
    const character = loadFromStorage(key);
    if (character) {
      dispatch({ type: 'load', character });
      setSelectedKey(key);
      setHasCharacter(true); // � agora há personagem
    }
  };

  const handleNew = () => {
    const newCharacter = {
      ...initialState,
      info: {
        ...initialState.info,
        Name: generateDefaultName()
      }
    };
    dispatch({ type: 'load', character: newCharacter });
    setSelectedKey('');
    setHasCharacter(true); // � agora há personagem
  };

  const handleExport = () => exportToFile(state);

  const handleImport = async (file) => {
    try {
      const { key, character } = await importCharacter(file);
      dispatch({ type: 'load', character });
      setSelectedKey(key);
      setHasCharacter(true); // � agora há personagem
      refreshCharacterList();
    } catch (err) {
      console.error(err);
      alert('Failed to import character.');
    }
  };
  window.state = state; // Para depuração
  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6 dark:bg-gray-800 dark:text-white">
      <Header
        characterList={characterList}
        selectedKey={selectedKey}
        loadCharacter={handleLoad}
        createNewCharacter={handleNew}
        saveCharacter={() => saveToStorage(state)}
        exportCharacter={handleExport}
        importCharacter={handleImport}
        character={state}
      />

      {hasCharacter && (
        <CharacterForm state={state} dispatch={dispatch} />
      )}
    </div>
  );
}

// src/utils/storage.js

export const LOCAL_STORAGE_PREFIX = 'mageCharacter_';

/**
 * List all saved character keys in localStorage.
 * @returns {string[]} Array of localStorage keys for saved characters.
 */
export function listCharacters() {
  return Object.keys(localStorage)
    .filter(key => key.startsWith(LOCAL_STORAGE_PREFIX));
}

/**
 * Save a character to localStorage.
 * @param {object} character - The character object; must have info.Name.
 * @returns {string} The storage key used.
 */
export function saveCharacter(character) {
  if (!character?.info?.Name?.trim()) {
    throw new Error('Character must have a valid name to save.');
  }
  const key = `${LOCAL_STORAGE_PREFIX}${character.info.Name}`;
  localStorage.setItem(key, JSON.stringify(character));
  return key;
}

/**
 * Load a character from localStorage.
 * @param {string} key - The storage key (including prefix).
 * @returns {object|null} Parsed character object, or null if not found.
 */
export function loadCharacter(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

/**
 * Delete a character from localStorage.
 * @param {string} key - The storage key to remove.
 */
export function deleteCharacter(key) {
  localStorage.removeItem(key);
}

/**
 * Export a character as a downloadable JSON file.
 * @param {object} character - The character object to export.
 */
export function exportCharacter(character) {
  const blob = new Blob([JSON.stringify(character, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `${character.info.Name || 'character'}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

/**
 * Import a character from a File object (e.g., from an <input type="file">).
 * Saves it to localStorage and returns the new key and object.
 * @param {File} file - JSON file containing the character data.
 * @returns {Promise<{ key: string, character: object }>}
 */
export function importCharacter(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const character = JSON.parse(reader.result);
        const key = saveCharacter(character);
        resolve({ key, character });
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}

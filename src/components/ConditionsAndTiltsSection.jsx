// src/components/ConditionsAndTiltsSection.jsx
import React, { useState } from 'react';
import Lookup from './Lookup';
import { CONDITIONS } from '../constants/conditions';
import { TILTS } from '../constants/tilts';

export default function ConditionsAndTiltsSection({ state, dispatch }) {
  const [lookupItems, setLookupItems] = useState([]);
  const [showLookup, setShowLookup] = useState(false);

  const openLookup = type => {
    setLookupItems(type === 'tilt' ? TILTS : CONDITIONS);
    setShowLookup(type);
  };

  const handleSelect = item => {
    if (!item) {
      setShowLookup(false);
      return;
    }
    const action = showLookup === 'tilt' ? 'addTilt' : 'addCondition';
    dispatch({ type: action, item: item.name });
    setShowLookup(false);
  };

  return (
    <section className="relative">
      <h3 className="text-lg font-semibold">Conditions &amp; Tilts</h3>
      <div className="flex gap-2 mb-2">
        <button
          className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded"
          onClick={() => openLookup('condition')}
        >
          + Condition
        </button>
        <button
          className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded"
          onClick={() => openLookup('tilt')}
        >
          + Tilt
        </button>
      </div>

      {showLookup && (
        <Lookup
          items={lookupItems}
          onSelect={handleSelect}
          placeholder={`Search ${showLookup}s…`}
        />
      )}

      <div className="flex flex-wrap gap-2">
        {state.conditions.map((c, i) => (
          <span key={`cond-${i}`} className="bg-blue-200 dark:bg-blue-700 px-2 py-1 rounded inline-flex items-center">
            {c}
            <button
              className="ml-1 text-red-500"
              onClick={() => dispatch({ type: 'removeCondition', index: i })}
            >
              ×
            </button>
          </span>
        ))}
        {state.tilts.map((t, i) => (
          <span key={`tilt-${i}`} className="bg-yellow-200 dark:bg-yellow-700 px-2 py-1 rounded inline-flex items-center">
            {t}
            <button
              className="ml-1 text-red-500"
              onClick={() => dispatch({ type: 'removeTilt', index: i })}
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </section>
  );
}

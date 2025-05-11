// src/components/ConditionsSection.jsx
import React, { useState } from 'react';
import LookupModal from './LookupModal';
import InfoModal from './InfoModal';
import { CONDITIONS } from '../constants/conditions';

export default function ConditionsSection({ state, dispatch }) {
  const [showLookup, setShowLookup] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [infoItem, setInfoItem] = useState(null);

  const handleSelect = item => {
    dispatch({ type: 'addCondition', condition: item.name });
    setShowLookup(false);
  };

  return (
    <section>
      <h3 className="text-lg font-semibold">Conditions</h3>
      <button
        onClick={() => setShowLookup(true)}
        className="bg-gray-700 text-white px-2 py-1 rounded"
      >
        ＋ Condition
      </button>

      <div className="flex flex-wrap gap-2 mt-2">
        {state.conditions.map((c, i) => {
          const item = CONDITIONS.find(x => x.name === c);
          return (
            <span
              key={i}
              className="bg-gray-700 text-white px-2 py-1 rounded flex items-center"
            >
              <button
                onClick={() => { setInfoItem(item); setShowInfo(true); }}
                className="px-2"
              >
                ℹ️
              </button>
              <span className="mx-1">{c}</span>
              <button
                onClick={() => dispatch({ type: 'removeCondition', index: i })}
                className="px-2"
              >
                ×
              </button>
            </span>
          );
        })}
      </div>

      <LookupModal
        open={showLookup}
        onClose={() => setShowLookup(false)}
        items={CONDITIONS}
        onSelect={handleSelect}
      />

      <InfoModal
        open={showInfo}
        onClose={() => setShowInfo(false)}
        item={infoItem}
      />
    </section>
  );
}

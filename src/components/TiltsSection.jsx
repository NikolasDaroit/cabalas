// src/components/TiltsSection.jsx
import React, { useState } from 'react';
import LookupModal from './LookupModal';
import InfoModal from './InfoModal';
import { TILTS } from '../constants/tilts';

export default function TiltsSection({ state, dispatch }) {
  const [showLookup, setShowLookup] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [infoItem, setInfoItem] = useState(null);

  const handleSelect = item => {
    dispatch({ type: 'addTilt', tilt: item.name });
    setShowLookup(false);
  };

  return (
    <section>
      <h3 className="text-lg font-semibold">Tilts</h3>
      <button
        onClick={() => setShowLookup(true)}
        className="bg-gray-700 text-white px-2 py-1 rounded"
      >
        ＋ Tilt
      </button>

      <div className="flex flex-wrap gap-2 mt-2">
        {state.tilts.map((t, i) => {
          const item = TILTS.find(x => x.name === t);
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
              <span className="mx-1">{t}</span>
              <button
                onClick={() => dispatch({ type: 'removeTilt', index: i })}
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
        items={TILTS}
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

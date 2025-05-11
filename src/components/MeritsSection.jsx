// src/components/MeritsSection.jsx
import React, { useState } from 'react';
import DotRow from './DotRow';
import LookupModal from './LookupModal';
import InfoModal from './InfoModal';
import MERITS_UNIVERSAL from '../constants/merits_universal';
import MERITS_MAGE from '../constants/merits_mage';

export default function MeritsSection({ state, dispatch }) {
  const [showLookup, setShowLookup] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [infoItem, setInfoItem] = useState(null);

  const available = [
    ...MERITS_UNIVERSAL.map(m => ({ ...m, source: 'Universal' })),
    ...MERITS_MAGE.map(m => ({ ...m, source: 'Mage' }))
  ];

  const handleSelect = item => {
    dispatch({ type: 'addMerit', merit: item.name });
    setShowLookup(false);
  };

  return (
    <section>
      <h3 className="text-lg font-semibold">Merits</h3>
      <button
        onClick={() => setShowLookup(true)}
        className="bg-gray-700 text-white px-2 py-1 rounded"
      >
        ＋ Merit
      </button>

      <div className="mt-2">
        {state.merits.map((m, i) => {
          const item = available.find(x => x.name === m.name);
          return (
            <div key={i} className="flex items-center gap-2 mb-2">
              <span className="bg-gray-700 text-white px-2 py-1 rounded flex items-center">
                <button
                  onClick={() => { setInfoItem(item); setShowInfo(true); }}
                  className="px-2"
                >
                  ℹ️
                </button>
                <span className="mx-1">{m.name}</span>
              </span>
              <DotRow
                value={m.dots}
                onChange={val =>
                  dispatch({ type: 'updateMerit', index: i, entry: { ...m, dots: val } })
                }
              />
              <button
                onClick={() => dispatch({ type: 'removeMerit', index: i })}
                className="px-2"
              >
                ×
              </button>
            </div>
          );
        })}
      </div>

      <LookupModal
        open={showLookup}
        onClose={() => setShowLookup(false)}
        items={available}
        onSelect={handleSelect}
        groupBy="source"
      />

      <InfoModal
        open={showInfo}
        onClose={() => setShowInfo(false)}
        item={infoItem}
      />
    </section>
  );
}

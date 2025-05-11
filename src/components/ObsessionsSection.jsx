// src/components/ObsessionsSection.jsx

import React from 'react';
import { OBSESSIONS_ALLOWED } from '../constants/mana';

export default function ObsessionsSection({ state, dispatch }) {
  const { gnosis, obsessions = [] } = state;
  const maxObsessions = OBSESSIONS_ALLOWED[gnosis - 1] || 1;

  return (
    <section>
      <h3 className="text-lg font-semibold">Obsessions</h3>
      <div className="space-y-2">
        {Array.from({ length: maxObsessions }).map((_, idx) => (
          <input
            key={idx}
            type="text"
            className="w-full p-2 border rounded bg-white dark:bg-gray-700"
            placeholder={`Obsession ${idx + 1}`}
            value={obsessions[idx] || ''}
            onChange={e =>
              dispatch({
                type: 'updateObsession',
                index: idx,
                value: e.target.value
              })
            }
          />
        ))}
      </div>
    </section>
  );
}

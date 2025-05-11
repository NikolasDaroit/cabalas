// src/components/ManaSection.jsx

import React from 'react';
import DotRow from './DotRow';
import { MAX_MANA_BY_GNOSIS, MANA_PER_TURN } from '../constants/mana';

export default function ManaSection({ state, dispatch }) {
  const { gnosis, mana } = state;
  const maxMana = MAX_MANA_BY_GNOSIS[gnosis - 1] || 0;
  const perTurn = MANA_PER_TURN[gnosis - 1] || 0;

  return (
    <section>
      <h3 className="text-lg font-semibold">Gnosis & Mana</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium">Gnosis</label>
          <DotRow
            count={10}
            value={gnosis}
            onChange={val => dispatch({ type: 'updateGnosis', value: val })}
          />
          <div className="text-sm mt-1">Max Active Spells: {gnosis}</div>
        </div>

        <div>
          <label className="block text-sm font-medium">Current Mana</label>
          <input
            type="number"
            min={0}
            max={maxMana}
            className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700"
            value={mana}
            onChange={e =>
              dispatch({
                type: 'updateMana',
                value: parseInt(e.target.value, 10) || 0
              })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Max Mana</label>
          <input
            readOnly
            className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700"
            value={maxMana}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Mana / Turn</label>
          <input
            readOnly
            className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700"
            value={perTurn}
          />
        </div>
      </div>
    </section>
  );
}

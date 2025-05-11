// src/components/HealthWillSection.jsx

import React from 'react';
import BoxRow from './BoxRow';

export default function HealthWillSection({ state, dispatch }) {
  const { healthBoxes, willpowerBoxes } = state;

  return (
    <section>
      <h3 className="text-lg font-semibold">Health &amp; Willpower</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Health</label>
          <BoxRow
            value={healthBoxes}
            onChange={newBoxes =>
              dispatch({ type: 'updateHealthBoxes', healthBoxes: newBoxes })
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Willpower</label>
          <BoxRow
            value={willpowerBoxes}
            onChange={newBoxes =>
              dispatch({ type: 'updateWillpowerBoxes', willpowerBoxes: newBoxes })
            }
          />
        </div>
      </div>
    </section>
  );
}

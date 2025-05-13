import React from 'react';
import BoxRow from './BoxRow';
import DotRow from './DotRow';

export default function HealthWillSection({ state, dispatch }) {
  const { healthBoxes, willpowerBoxes, attributes = {}, size = 5 } = state;
  const { stamina, resolve, composure } = attributes;

  const calculatedHealth = size + stamina;
  const calculatedWillpower = resolve + composure;

  return (
    <section>
      <h3 className="text-lg font-semibold">Health &amp; Willpower</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-sm font-medium text-gray-400 dark:text-gray-300 mb-1">
            Calculated {calculatedHealth}
          </div>
          <DotRow value={calculatedHealth} count={10} disabled />

          <label className="block text-sm font-medium mt-4">Health</label>
          <BoxRow
            value={healthBoxes}
            onChange={newBoxes =>
              dispatch({ type: 'updateHealthBoxes', healthBoxes: newBoxes })
            }
          />
        </div>

        <div>
          <div className="text-sm font-medium text-gray-400 dark:text-gray-300 mb-1">
            Calculated {calculatedWillpower}
          </div>
          <DotRow value={calculatedWillpower} count={10} disabled />

          <label className="block text-sm font-medium mt-4">Willpower</label>
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

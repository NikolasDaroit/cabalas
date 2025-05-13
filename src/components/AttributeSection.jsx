// src/components/AttributesSection.jsx

import React from 'react';
import DotRow from './DotRow';
import ATTRIBUTES from '../constants/attributes';

export default function AttributesSection({ state, dispatch }) {
  return (
    <section>
      <h3 className="text-lg font-semibold">Attributes</h3>
      <div className="grid grid-cols-3 gap-4">
        {ATTRIBUTES.map(attr => (
          <div key={attr}>
            <label className="block text-sm font-medium">{attr}</label>
            <DotRow
              value={state.attributes[attr.toLowerCase()] || 1}
              onChange={val =>
                dispatch({ type: 'updateAttribute', attribute: attr, value: val })
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
}

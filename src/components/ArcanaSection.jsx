// src/components/ArcanaSection.jsx

import React from 'react';
import DotRow from './DotRow';
import ARCANA from '../constants/arcana';

export default function ArcanaSection({ state, dispatch }) {
  return (
    <section>
      <h3 className="text-lg font-semibold">Arcana</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {ARCANA.map(ar => (
          <div key={ar}>
            <label className="block text-sm font-medium">{ar}</label>
            <DotRow
              count={5}
              value={state.arcana[ar] || 0}
              onChange={val =>
                dispatch({ type: 'updateArcana', arc: ar, value: val })
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
}

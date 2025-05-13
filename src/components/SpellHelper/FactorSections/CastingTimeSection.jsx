// src/components/SpellHelper/FactorSections/CastingTimeSection.jsx
import React from 'react';
import { CASTING_TIME_LEVELS, FACTOR_ICONS } from '../constants/spellFactors';

export const CastingTimeSection = ({ 
  factors, 
  updateFactor,
  isPrimary,
  availableReach
}) => {
  const handleCastingTimeChange = (e) => {
    const newLevel = CASTING_TIME_LEVELS.find(
      level => level.value === parseInt(e.target.value)
    );
    
    updateFactor('castingTime', { 
      level: newLevel.value,
      ...(newLevel.requires && { requires: newLevel.requires })
    });
  };

  const handleYantrasChange = (e) => {
    const yantras = Math.max(0, parseInt(e.target.value) || 0);
    updateFactor('castingTime', { yantras });
  };

  return (
    <div className="border p-4 rounded mb-4">
      <h3 className="font-bold mb-2 text-lg">
        {FACTOR_ICONS.CastingTime} Casting Time {isPrimary && '(Primary)'}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Casting Time Type
          </label>
          <select
            value={factors.castingTime.level}
            onChange={handleCastingTimeChange}
            className="w-full p-2 border rounded bg-white dark:bg-gray-700"
          >
            {CASTING_TIME_LEVELS.map((level) => (
              <option 
                key={level.value} 
                value={level.value}
                disabled={level.requires?.reach > availableReach}
              >
                {level.label} {level.penalty !== 0 && `(${level.penalty} dice)`}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Yantras/High Speech Used
          </label>
          <input
            type="number"
            min="0"
            value={factors.castingTime.yantras}
            onChange={handleYantrasChange}
            className="w-full p-2 border rounded bg-white dark:bg-gray-700"
          />
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Each yantra adds +1 die (max {gnosis})
          </span>
        </div>
      </div>

      {factors.castingTime.requires?.reach > 0 && (
        <div className="mt-2 text-sm text-blue-600 dark:text-blue-400">
          Requires {factors.castingTime.requires.reach} Reach
        </div>
      )}

      <div className="mt-3 text-sm">
        <p className="font-medium">Time Increments:</p>
        <ul className="list-disc pl-5">
          <li>1 Turn = 3 seconds</li>
          <li>1 Action = 1 turn per Yantra</li>
          <li>Ritual = 1 hour base +30mins/Yantra</li>
        </ul>
      </div>
    </div>
  );
};
// src/components/SpellHelper/FactorSections/DurationSection.jsx
import React from 'react';
import { DURATION_LEVELS, FACTOR_ICONS } from '../constants/spellFactors';

export const DurationSection = ({ 
  primaryArcanumDots,
  factors,
  updateFactor,
  isPrimary,
  availableMana
}) => {
  const handleDurationChange = (e) => {
    const newLevel = DURATION_LEVELS.find(
      l => l.value === parseInt(e.target.value)
    );
    
    updateFactor('duration', { 
      level: newLevel.value,
      ...(newLevel.requires && { requires: newLevel.requires })
    });
  };

  const handleAdvancedToggle = (e) => {
    updateFactor('duration', { advanced: e.target.checked });
  };

  const currentDuration = DURATION_LEVELS.find(l => l.value === factors.duration.level);
  const isIndefinite = currentDuration?.label === 'Indefinite';

  return (
    <div className="border p-4 rounded mb-4">
      <h3 className="font-bold mb-2 text-lg">
        {FACTOR_ICONS.Duration} Duration {isPrimary && '(Primary)'}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Duration Level
          </label>
          <select
            value={factors.duration.level}
            onChange={handleDurationChange}
            className="w-full p-2 border rounded bg-white dark:bg-gray-700"
          >
            {DURATION_LEVELS.map((level) => {
              const isBase = isPrimary && level.value <= primaryArcanumDots;
              const penaltyText = !isBase ? `(-${level.penalty} dice)` : '';
              
              return (
                <option 
                  key={level.value} 
                  value={level.value}
                  disabled={level.requires?.mana > availableMana}
                >
                  {level.label} {penaltyText}
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <input
            type="checkbox"
            id="advancedDuration"
            checked={factors.duration.advanced}
            onChange={handleAdvancedToggle}
            className="h-4 w-4"
          />
          <label htmlFor="advancedDuration" className="text-sm">
            Advanced Duration (Reach +1)
          </label>
        </div>
      </div>

      {isIndefinite && (
        <div className="mt-2 p-2 bg-yellow-100 dark:bg-yellow-900 rounded">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            ⚠️ Indefinite duration requires:
            <br/>
            - 1 Reach
            <br/>
            - 1 Mana spent
          </p>
        </div>
      )}

      {isPrimary && (
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Base duration: {primaryArcanumDots} {primaryArcanumDots > 1 ? 'scenes' : 'scene'}
        </div>
      )}

      <div className="mt-3 text-sm">
        <p className="font-medium">Duration Guidelines:</p>
        <ul className="list-disc pl-5">
          <li>1 Scene ≈ 15-30 minutes</li>
          <li>Advanced doubles base duration</li>
          <li>Rituals can extend beyond normal limits</li>
        </ul>
      </div>
    </div>
  );
};
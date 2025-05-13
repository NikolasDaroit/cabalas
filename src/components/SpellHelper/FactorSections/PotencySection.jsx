// src/components/SpellHelper/FactorSections/PotencySection.jsx
import React from 'react';
import { POTENCY_LEVELS, FACTOR_ICONS } from '../constants/spellFactors';

export const PotencySection = ({ 
  primaryArcanumDots,
  factors,
  updateFactor,
  isPrimary,
  availableReach
}) => {
  const handlePotencyChange = (e) => {
    const newValue = parseInt(e.target.value);
    updateFactor('potency', { level: newValue });
  };

  const handleAdvancedToggle = (e) => {
    updateFactor('potency', { advanced: e.target.checked });
  };

  return (
    <div className="border p-4 rounded mb-4">
      <h3 className="font-bold mb-2 text-lg">
        {FACTOR_ICONS.Potency} Potency {isPrimary && '(Primary)'}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Potency Level
          </label>
          <select
            value={factors.potency.level}
            onChange={handlePotencyChange}
            className="w-full p-2 border rounded bg-white dark:bg-gray-700"
          >
            {POTENCY_LEVELS.map((level) => {
              const isBase = isPrimary && level.value <= primaryArcanumDots;
              const penaltyText = !isBase ? `(-${level.penalty} dice)` : '';
              
              return (
                <option 
                  key={level.value} 
                  value={level.value}
                  disabled={level.requires?.reach > availableReach}
                >
                  {level.value} {penaltyText}
                </option>
              );
            })}
          </select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              id="advancedPotency"
              checked={factors.potency.advanced}
              onChange={handleAdvancedToggle}
              className="h-4 w-4"
            />
            <label htmlFor="advancedPotency" className="text-sm">
              Advanced Potency (+2 vs Withstand)
            </label>
          </div>
          
          {isPrimary && (
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Base potency: {primaryArcanumDots}
            </div>
          )}
        </div>
      </div>

      {factors.potency.advanced && (
        <div className="mt-2 p-2 bg-blue-100 dark:bg-blue-900 rounded">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            ⚡ Advanced Potency Effects:
            <br/>
            - +2 bonus to overcome Withstand
            <br/>
            - Can affect supernatural resilience
          </p>
        </div>
      )}

      <div className="mt-3 text-sm">
        <p className="font-medium">Potency Guidelines:</p>
        <ul className="list-disc pl-5">
          <li>Minimum 1 for any effect</li>
          <li>Must exceed target's Withstand to affect them</li>
          <li>Advanced requires Prime 2 or relevant Arcanum</li>
        </ul>
      </div>
    </div>
  );
};
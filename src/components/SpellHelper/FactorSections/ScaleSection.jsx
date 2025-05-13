// src/components/SpellHelper/FactorSections/ScaleSection.jsx
import React from 'react';
import { SCALE_LEVELS, FACTOR_ICONS } from '../constants/spellFactors';

export const ScaleSection = ({ 
  factors,
  updateFactor,
  availableMana,
  casterArcana
}) => {
  const handleScaleChange = (e) => {
    const newLevel = SCALE_LEVELS.standard.find(
      l => l.subjects === parseInt(e.target.value)
    );
    updateFactor('scale', {
      level: newLevel.subjects,
      penalty: newLevel.penalty
    });
  };

  const handleAdvancedToggle = (e) => {
    updateFactor('scale', {
      advanced: e.target.checked,
      ...(e.target.checked && { manaSpent: factors.scale.manaSpent + 1 })
    });
  };

  const currentScale = SCALE_LEVELS.standard.find(l => l.subjects === factors.scale.level);
  const hasSpaceArcana = casterArcana?.Space >= 3;

  return (
    <div className="border p-4 rounded mb-4">
      <h3 className="font-bold mb-2 text-lg">
        {FACTOR_ICONS.Scale} Scale
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Scale Level
          </label>
          <select
            value={factors.scale.level}
            onChange={handleScaleChange}
            className="w-full p-2 border rounded bg-white dark:bg-gray-700"
          >
            {SCALE_LEVELS.standard.map((level) => (
              <option 
                key={level.subjects} 
                value={level.subjects}
              >
                {level.area} (-{level.penalty * SCALE_LEVELS.advanced.penaltyMultiplier} dice)
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={factors.scale.advanced}
              onChange={handleAdvancedToggle}
              disabled={!hasSpaceArcana || availableMana < 1}
              className="h-4 w-4"
            />
            <label className="text-sm">
              Everywhere (Space ●●●)
            </label>
          </div>
          
          {factors.scale.advanced && (
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">Additional Scale:</span>
              <br/>
              +{currentScale.subjects * 2} subjects
              <br/>
              +5 size per -4 dice
            </div>
          )}
        </div>
      </div>

      {factors.scale.advanced && (
        <div className="mt-2 p-2 bg-green-100 dark:bg-green-900 rounded">
          <p className="text-sm text-green-800 dark:text-green-200">
            ⚠️ Advanced Scale Requirements:
            <br/>
            - 1 Mana
            <br/>
            - Space ●●●
            <br/>
            - Base scale penalty doubled
          </p>
        </div>
      )}

      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
        <div>
          <p className="font-medium">Current Scale:</p>
          <ul className="list-disc pl-5">
            <li>Subjects: {currentScale.subjects}</li>
            <li>Size: {currentScale.size}</li>
            <li>Area: {currentScale.area}</li>
          </ul>
        </div>
        <div>
          <p className="font-medium">Penalties:</p>
          <ul className="list-disc pl-5">
            <li>Base: -{currentScale.penalty * SCALE_LEVELS.advanced.penaltyMultiplier} dice</li>
            {factors.scale.advanced && <li>Everywhere: -{SCALE_LEVELS.advanced.everywhere.penalty} dice</li>}
          </ul>
        </div>
      </div>

      <div className="mt-3 text-sm">
        <p className="font-medium">Scale Guidelines:</p>
        <ul className="list-disc pl-5">
          <li>Each additional scale doubles subjects</li>
          <li>+5 size per -4 dice penalty</li>
          <li>Everywhere affects all valid targets in realm</li>
        </ul>
      </div>
    </div>
  );
};
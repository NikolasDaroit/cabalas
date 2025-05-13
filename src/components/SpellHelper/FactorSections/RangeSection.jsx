// src/components/SpellHelper/FactorSections/RangeSection.jsx
import React from 'react';
import { RANGE_LEVELS, FACTOR_ICONS } from '../constants/spellFactors';

export const RangeSection = ({ 
  primaryArcanumDots,
  factors,
  updateFactor,
  isPrimary,
  availableMana,
  casterArcana
}) => {
  const handleRangeChange = (e) => {
    const newLevel = RANGE_LEVELS.standard.find(
      l => l.subjects === parseInt(e.target.value)
    );
    
    updateFactor('range', { 
      level: newLevel.subjects,
      penalty: newLevel.penalty
    });
  };

  const handleSympathyToggle = (e) => {
    updateFactor('range', { 
      sympathy: e.target.checked,
      ...(e.target.checked && { manaSpent: factors.range.manaSpent + 1 })
    });
  };

  const handleTemporalToggle = (e) => {
    updateFactor('range', { 
      temporal: e.target.checked,
      ...(e.target.checked && { manaSpent: factors.range.manaSpent + 1 })
    });
  };

  const hasTimeArcana = casterArcana?.Time >= 2;
  const currentRange = RANGE_LEVELS.standard.find(l => l.subjects === factors.range.level);

  return (
    <div className="border p-4 rounded mb-4">
      <h3 className="font-bold mb-2 text-lg">
        {FACTOR_ICONS.Range} Range {isPrimary && '(Primary)'}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Range Scale
          </label>
          <select
            value={factors.range.level}
            onChange={handleRangeChange}
            className="w-full p-2 border rounded bg-white dark:bg-gray-700"
          >
            {RANGE_LEVELS.standard.map((level) => {
              const isBase = isPrimary && level.subjects <= primaryArcanumDots;
              const penaltyText = !isBase ? `(-${level.penalty} dice)` : '';
              
              return (
                <option 
                  key={level.subjects} 
                  value={level.subjects}
                >
                  {level.area} {penaltyText}
                </option>
              );
            })}
          </select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={factors.range.sympathy}
              onChange={handleSympathyToggle}
              disabled={availableMana < 1}
              className="h-4 w-4"
            />
            <label className="text-sm">
              Sympathetic Range (Space ●●)
            </label>
          </div>
          
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={factors.range.temporal}
              onChange={handleTemporalToggle}
              disabled={!hasTimeArcana || availableMana < 1}
              className="h-4 w-4"
            />
            <label className="text-sm">
              Temporal Sympathy (Time ●●)
            </label>
          </div>
        </div>
      </div>

      {(factors.range.sympathy || factors.range.temporal) && (
        <div className="mt-2 p-2 bg-purple-100 dark:bg-purple-900 rounded">
          <p className="text-sm text-purple-800 dark:text-purple-200">
            ⚠️ Advanced Range Requirements:
            <br/>
            {factors.range.sympathy && "- 1 Mana for Sympathetic Range"}
            <br/>
            {factors.range.temporal && "- 1 Mana + Time ●● for Temporal Sympathy"}
          </p>
        </div>
      )}

      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
        <div>
          <p className="font-medium">Current Range:</p>
          <ul className="list-disc pl-5">
            <li>Subjects: {currentRange.subjects}</li>
            <li>Size: {currentRange.size}</li>
            <li>Area: {currentRange.area}</li>
          </ul>
        </div>
        <div>
          <p className="font-medium">Penalties:</p>
          <ul className="list-disc pl-5">
            <li>Base: -{currentRange.penalty} dice</li>
            {factors.range.sympathy && <li>Sympathy: -2 dice</li>}
            {factors.range.temporal && <li>Temporal: -2 dice</li>}
          </ul>
        </div>
      </div>

      <div className="mt-3 text-sm">
        <p className="font-medium">Range Guidelines:</p>
        <ul className="list-disc pl-5">
          <li>Standard range: Touch or line of sight</li>
          <li>Sympathetic range requires a yantra</li>
          <li>Temporal range limited to Time spells</li>
        </ul>
      </div>
    </div>
  );
};
// src/components/SpellHelper/Step2SpellFactors.jsx
import React from 'react';
import { PotencySection } from './FactorSections/PotencySection';
import { DurationSection } from './FactorSections/DurationSection';
import { RangeSection } from './FactorSections/RangeSection';
import { ScaleSection } from './FactorSections/ScaleSection';
import { CastingTimeSection } from './FactorSections/CastingTimeSection';
import { PRIMARY_FACTORS } from './constants/spellFactors';

export const Step2SpellFactors = ({
  primaryFactor,
  setPrimaryFactor,
  factors,
  updateFactor,
  totalPenalty,
  totalCost,
  dicePool,
  casterData,
  primaryArcanumDots,
  availableMana,
  onPrev,
  onCast
}) => {
  const { arcana, mana, hasArcana } = casterData;

  return (
    <div className="space-y-6">
      {/* Primary Factor Selection */}
      <div className="border p-4 rounded">
        <h3 className="font-bold mb-2 text-lg">Primary Factor Selection</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Primary Factor</label>
            <select
              value={primaryFactor}
              onChange={(e) => setPrimaryFactor(e.target.value)}
              className="w-full p-2 border rounded bg-white dark:bg-gray-700"
            >
              {PRIMARY_FACTORS.map(factor => (
                <option key={factor} value={factor}>{factor}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-sm">
              {primaryFactor} is your primary spell factor
            </span>
          </div>
        </div>
      </div>

      {/* Factor Sections */}
      <PotencySection
        primaryArcanumDots={primaryArcanumDots}
        factors={factors.potency}
        updateFactor={updateFactor}
        isPrimary={primaryFactor === 'Potency'}
        availableReach={totalCost.reach}
      />

      <DurationSection
        primaryArcanumDots={primaryArcanumDots}
        factors={factors.duration}
        updateFactor={updateFactor}
        isPrimary={primaryFactor === 'Duration'}
        availableMana={availableMana}
      />

      <RangeSection
        factors={factors.range}
        updateFactor={updateFactor}
        availableMana={availableMana}
        casterArcana={arcana}
      />

      <ScaleSection
        factors={factors.scale}
        updateFactor={updateFactor}
        availableMana={availableMana}
        casterArcana={arcana}
      />

      <CastingTimeSection
        factors={factors.castingTime}
        updateFactor={updateFactor}
        availableReach={totalCost.reach}
      />

      {/* Calculation Summary */}
      <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm font-medium">Total Penalties</div>
            <div className="text-2xl font-bold text-red-600">-{totalPenalty} dice</div>
            <div className="text-sm mt-2">
              <span className="block">Mana Available: {mana}</span>
              <span className="block">Reach Used: {totalCost.reach}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium">Final Dice Pool</div>
            <div className="text-4xl font-bold text-green-600">{dicePool}</div>
            <div className="text-sm mt-2">
              {hasArcana('Prime', 2) && '+ Prime Arcana bonuses'}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={onPrev}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition-colors"
        >
          ← Previous
        </button>
        <button
          onClick={onCast}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
        >
          Cast Spell
        </button>
      </div>
    </div>
  );
};
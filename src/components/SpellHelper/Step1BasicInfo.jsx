import React, { useEffect } from 'react';
import { ARCANA_LIST } from './constants/spellFactors';

export const Step1BasicInfo = ({
  casterData,
  gnosis,
  setGnosis,
  willpower,
  setWillpower,
  primaryArcanum,
  setPrimaryArcanum,
  primaryArcanumDots,
  setPrimaryArcanumDots,
  activeSpells,
  setActiveSpells,
  roteOrPraxis,
  setRoteOrPraxis,
  spendWillpower,
  setSpendWillpower,
  bonusDice,
  setBonusDice,
  isRulingArcanum,
  isHighestArcanum,
  onNext
}) => {
  // Sync primary arcanum dots with casterData when it changes
  useEffect(() => {
    if (casterData?.arcana && primaryArcanum) {
      const availableDots = casterData.arcana[primaryArcanum] || 1;
      if (primaryArcanumDots !== availableDots) {
        setPrimaryArcanumDots(availableDots);
      }
    }
  }, [casterData, primaryArcanum, primaryArcanumDots, setPrimaryArcanumDots]);

  const handlePrimaryArcanumChange = (e) => {
    const selected = e.target.value;
    // Upon change, update dots from casterData (or default to 1)
    const dots = casterData?.arcana?.[selected] || 1;
    setPrimaryArcanum(selected);
    setPrimaryArcanumDots(dots);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Gnosis Input */}
      <div>
        <label className="block text-sm font-medium mb-1">Gnosis</label>
        <input
          type="number"
          min="1"
          max="10"
          value={gnosis}
          onChange={(e) => setGnosis(Math.max(1, +e.target.value))}
          className="w-full p-2 border rounded bg-white dark:bg-gray-700"
        />
      </div>

      {/* Willpower Input */}
      <div>
        <label className="block text-sm font-medium mb-1">Willpower</label>
        <input
          type="number"
          min="1"
          max="10"
          value={willpower}
          onChange={(e) => setWillpower(Math.max(1, +e.target.value))}
          className="w-full p-2 border rounded bg-white dark:bg-gray-700"
        />
      </div>

      {/* Primary Arcanum Selection */}
      <div>
        <label className="block text-sm font-medium mb-1">Primary Arcanum</label>
        <select
          value={primaryArcanum}
          onChange={handlePrimaryArcanumChange}
          className="w-full p-2 border rounded bg-white dark:bg-gray-700"
        >
          {ARCANA_LIST.map(ar => (
            <option key={ar} value={ar}>
              {ar}
            </option>
          ))}
        </select>
      </div>

      {/* Arcanum Details */}
      <div className="space-y-2">
        <div>
          <label className="block text-sm font-medium">
            Dots in {primaryArcanum}
          </label>
          <input
            type="number"
            min="1"
            max="5"
            value={primaryArcanumDots}
            onChange={(e) =>
              setPrimaryArcanumDots(Math.max(1, +e.target.value))
            }
            className="w-full p-2 border rounded bg-white dark:bg-gray-700"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Is Ruling Arcanum?
          </label>
          <div className="text-sm">
            {isRulingArcanum ? 'Yes' : 'No'}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">
            Is Highest Arcanum?
          </label>
          <div className="text-sm">
            {isHighestArcanum ? 'Yes' : 'No'}
          </div>
        </div>
      </div>

      {/* Active Spells */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Active Spells
        </label>
        <input
          type="number"
          min="0"
          value={activeSpells}
          onChange={(e) =>
            setActiveSpells(Math.max(0, +e.target.value))
          }
          className="w-full p-2 border rounded bg-white dark:bg-gray-700"
        />
      </div>

      {/* Rote/Praxis Selection */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Spell Type
        </label>
        <select
          value={roteOrPraxis}
          onChange={(e) => setRoteOrPraxis(e.target.value)}
          className="w-full p-2 border rounded bg-white dark:bg-gray-700"
        >
          <option value="none">None</option>
          <option value="praxis">Praxis</option>
          <option value="rote">Rote</option>
        </select>
      </div>

      {/* Willpower Spending */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={spendWillpower}
          onChange={(e) => setSpendWillpower(e.target.checked)}
          className="h-5 w-5"
        />
        <label className="block text-sm font-medium">
          Spend Willpower
        </label>
      </div>

      {/* Bonus Dice */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Bonus Dice
        </label>
        <input
          type="number"
          min="0"
          value={bonusDice}
          onChange={(e) =>
            setBonusDice(Math.max(0, +e.target.value))
          }
          className="w-full p-2 border rounded bg-white dark:bg-gray-700"
        />
      </div>

      {/* Next Button */}
      <div className="md:col-span-2 flex justify-end">
        <button
          onClick={onNext}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  );
};
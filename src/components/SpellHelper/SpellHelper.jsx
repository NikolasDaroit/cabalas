// src/components/SpellHelper/SpellHelper.jsx
import React, { useState, useEffect } from 'react';
import { useCasterData } from './hooks/useCasterData';
import { useSpellFactors } from './hooks/useSpellFactors';
import { Step1BasicInfo } from './Step1BasicInfo';
import { Step2SpellFactors } from './Step2SpellFactors';
import { calculateDicePool } from './utils/calculations';

export default function SpellHelper({ casterData = null, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [primaryFactor, setPrimaryFactor] = useState('Potency');
  
  // Caster data and derived values
  const {
    arcana,
    path,
    gnosis,
    mana,
    willpower,
    primaryArcanum,
    primaryArcanumDots,
    isRulingArcana,
    hasArcana
  } = useCasterData(casterData);

  // Spell factors and calculations
  const {
    factors,
    updateFactor,
    totalPenalty,
    totalCost,
    getBaseValue
  } = useSpellFactors(primaryArcanumDots, primaryFactor);

  // Step 1 state
  const [activeSpells, setActiveSpells] = useState(0);
  const [roteOrPraxis, setRoteOrPraxis] = useState('none');
  const [spendWillpower, setSpendWillpower] = useState(false);
  const [bonusDice, setBonusDice] = useState(0);

  // Calculate final dice pool
  const dicePool = calculateDicePool({
    gnosis,
    primaryArcanumDots,
    isRulingArcana: isRulingArcana(primaryArcanum),
    spendWillpower,
    roteOrPraxis,
    isHighestArcana: primaryArcanumDots === Math.max(...Object.values(arcana)),
    activeSpells,
    totalPenalty,
    bonusDice
  });

  const handleCast = () => {
    // Implement spell casting logic here
    console.log('Casting spell with:', {
      factors,
      dicePool,
      manaCost: totalCost.mana,
      reachCost: totalCost.reach
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-3xl overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold mb-4">Spell Helper</h2>

        {currentStep === 1 && (
          <Step1BasicInfo
            casterData={casterData}
            gnosis={gnosis}
            setGnosis={(val) => setGnosis(val)}
            willpower={willpower}
            setWillpower={(val) => setWillpower(val)}
            primaryArcanum={primaryArcanum}
            // setPrimaryArcanum={setPrimaryArcanum}
            primaryArcanumDots={primaryArcanumDots}
            // setPrimaryArcanumDots={setPrimaryArcanumDots}
            activeSpells={activeSpells}
            setActiveSpells={setActiveSpells}
            roteOrPraxis={roteOrPraxis}
            setRoteOrPraxis={setRoteOrPraxis}
            spendWillpower={spendWillpower}
            setSpendWillpower={setSpendWillpower}
            bonusDice={bonusDice}
            setBonusDice={setBonusDice}
            isRulingArcana={isRulingArcana(primaryArcanum)}
            isHighestArcana={primaryArcanumDots === Math.max(...Object.values(arcana))}
            onNext={() => setCurrentStep(2)}
          />
        )}

        {currentStep === 2 && (
          <Step2SpellFactors
            primaryFactor={primaryFactor}
            setPrimaryFactor={setPrimaryFactor}
            factors={factors}
            updateFactor={updateFactor}
            totalPenalty={totalPenalty}
            totalCost={totalCost}
            dicePool={dicePool}
            casterData={{
              arcana,
              mana,
              path,
              hasArcana
            }}
            primaryArcanumDots={primaryArcanumDots}
            availableMana={mana - totalCost.mana}
            onPrev={() => setCurrentStep(1)}
            onCast={handleCast}
          />
        )}

        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
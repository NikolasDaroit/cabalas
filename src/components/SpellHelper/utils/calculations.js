// src/components/SpellHelper/utils/calculations.js
export const calculateDicePool = ({
  gnosis,
  primaryArcanumDots,
  isRulingArcana,
  spendWillpower,
  roteOrPraxis,
  isHighestArcana,
  activeSpells,
  totalPenalty,
  bonusDice
}) => {
  // Base dice pool formula
  let pool = gnosis + primaryArcanumDots;

  // Add positive modifiers
  pool += (isRulingArcana ? 1 : 0);
  pool += (spendWillpower ? 3 : 0);
  pool += (roteOrPraxis === 'rote' ? 2 : 0);
  pool += (isHighestArcana ? 1 : 0);
  pool += bonusDice;

  // Subtract penalties
  pool -= activeSpells;
  pool -= totalPenalty;

  // Ensure non-negative pool
  return Math.max(pool, 0);
};

export const calculateWithstand = (targetResistance, spellPotency) => {
  return targetResistance > spellPotency ? targetResistance : 0;
};

export const calculateEffectivePotency = (
  basePotency,
  advancedPotency,
  withstanding
) => {
  let effective = basePotency;
  if (advancedPotency) effective += 2;
  return Math.max(effective - withstanding, 0);
};

export const calculateManaCost = (
  baseCost,
  factors,
  { sympathyRange, temporalSympathy, everywhereScale }
) => {
  let total = baseCost;
  if (sympathyRange) total += 1;
  if (temporalSympathy) total += 1;
  if (everywhereScale) total += 1;
  return total;
};

export const calculateReachCost = (
  baseReach,
  factors,
  { advancedPotency, advancedDuration }
) => {
  let total = baseReach;
  if (advancedPotency) total += 1;
  if (advancedDuration) total += 1;
  return total;
};

// Helper for determining if spell beats Withstand
export const checkWithstand = (spellPotency, targetResistance) => {
  return spellPotency > targetResistance;
};

// Ritual time calculation (minutes)
export const calculateRitualTime = (yantrasUsed, baseTime = 60) => {
  return baseTime + (yantrasUsed * 30);
};
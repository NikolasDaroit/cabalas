import { useState, useCallback, useEffect } from 'react';
import { 
  POTENCY_LEVELS,
  DURATION_LEVELS,
  RANGE_LEVELS,
  SCALE_LEVELS,
  CASTING_TIME_LEVELS,
  ADVANCED_FACTOR_COSTS
} from '../constants/spellFactors';

const getInitialFactors = (primaryArcanumDots, primaryFactor) => ({
  potency: {
    level: primaryFactor === 'Potency' ? primaryArcanumDots : 1,
    advanced: false,
    penalty: 0
  },
  duration: {
    level: primaryFactor === 'Duration' ? primaryArcanumDots : 0,
    advanced: false,
    penalty: 0
  },
  range: {
    level: 0,
    sympathy: false,
    temporal: false,
    penalty: 0
  },
  scale: {
    level: 0,
    advanced: false,
    penalty: 0
  },
  castingTime: {
    level: 0,
    yantras: 0,
    penalty: 0
  }
});

export const useSpellFactors = (primaryArcanumDots, primaryFactor) => {
  const [factors, setFactors] = useState(() => 
    getInitialFactors(primaryArcanumDots, primaryFactor)
  );

  // Reinitialize factors whenever primaryArcanumDots or primaryFactor changes
  useEffect(() => {
    setFactors(getInitialFactors(primaryArcanumDots, primaryFactor));
  }, [primaryArcanumDots, primaryFactor]);

  const calculateFactorPenalty = useCallback((factor, state) => {
    switch(factor) {
      case 'potency':
        return POTENCY_LEVELS.find(l => l.value === state.level)?.penalty || 0;
      case 'duration':
        return DURATION_LEVELS[state.level]?.penalty || 0;
      case 'range':
        return RANGE_LEVELS.standard[state.level]?.penalty || 0;
      case 'scale':
        return SCALE_LEVELS.standard[state.level]?.penalty * 
               SCALE_LEVELS.advanced.penaltyMultiplier || 0;
      case 'castingTime':
        return CASTING_TIME_LEVELS[state.level]?.penalty || 0;
      default:
        return 0;
    }
  }, []);

  const updateFactor = useCallback((factor, updates) => {
    setFactors(prev => ({
      ...prev,
      [factor]: {
        ...prev[factor],
        ...updates,
        penalty: calculateFactorPenalty(factor, {
          ...prev[factor],
          ...updates
        })
      }
    }));
  }, [calculateFactorPenalty]);

  const calculateTotalPenalty = useCallback(() => {
    let total = 0;
    total += factors.potency.penalty;
    total += factors.duration.penalty;
    total += factors.range.penalty;
    total += factors.scale.penalty;
    total += factors.castingTime.penalty;

    if (factors.range.sympathy) total += RANGE_LEVELS.advanced.sympathy.penalty;
    if (factors.range.temporal) total += RANGE_LEVELS.advanced.temporal.penalty;
    if (factors.scale.advanced) total += SCALE_LEVELS.advanced.everywhere.penalty;

    if (primaryFactor === 'Potency') total -= factors.potency.penalty;
    if (primaryFactor === 'Duration') total -= factors.duration.penalty;

    return total;
  }, [factors, primaryFactor]);

  const calculateTotalCost = useCallback(() => ({
    reach: Object.values(ADVANCED_FACTOR_COSTS).reduce(
      (sum, cost) => sum + (cost.reach || 0), 0
    ),
    mana: Object.values(ADVANCED_FACTOR_COSTS).reduce(
      (sum, cost) => sum + (cost.mana || 0), 0
    )
  }), []);

  return {
    factors,
    updateFactor,
    totalPenalty: calculateTotalPenalty(),
    totalCost: calculateTotalCost(),
    getBaseValue: (factor) => factor === primaryFactor ? primaryArcanumDots : 1
  };
};
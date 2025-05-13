// src/components/SpellHelper/constants/spellFactors.js
export const ARCANA_LIST = [
  'Death', 'Fate', 'Forces', 'Life', 'Matter',
  'Mind', 'Prime', 'Spirit', 'Space', 'Time'
];

export const PRIMARY_FACTORS = ['Potency', 'Duration'];

export const RULING_ARCANA_BY_PATH = {
  Acanthus: ['Time', 'Fate'],
  Mastigos: ['Mind', 'Space'],
  Moros: ['Death', 'Matter'],
  Obrimos: ['Forces', 'Prime'],
  Thyrsus: ['Life', 'Spirit']
};

export const POTENCY_LEVELS = [
  { value: 1, penalty: 0, label: '1 (Basic)' },
  { value: 2, penalty: 2, label: '2' },
  { value: 3, penalty: 4, label: '3' },
  { value: 4, penalty: 6, label: '4' },
  { value: 5, penalty: 8, label: '5' },
  { value: 6, penalty: 10, label: '6' },
  { value: 7, penalty: 12, label: '7' },
  { value: 8, penalty: 14, label: '8' },
  { value: 9, penalty: 16, label: '9' },
  { value: 10, penalty: 18, label: '10' },
  { value: 11, penalty: 20, label: '11' }
];

export const DURATION_LEVELS = [
  { value: 1, label: '1 scene/hour', penalty: 0 },
  { value: 2, label: '1 day', penalty: 2 },
  { value: 3, label: '1 week', penalty: 4 },
  { value: 4, label: '1 month', penalty: 6 },
  { value: 5, label: '1 year', penalty: 8 },
  { 
    value: 6, 
    label: 'Indefinite', 
    penalty: 10,
    requires: { reach: 1, mana: 1 } 
  }
];

export const RANGE_LEVELS = {
  standard: [
    { 
      subjects: 1, 
      size: 5, 
      area: "Arm's reach", 
      penalty: 0 
    },
    { 
      subjects: 2, 
      size: 6, 
      area: "Small room", 
      penalty: 2 
    },
    { 
      subjects: 4, 
      size: 7, 
      area: "Large room", 
      penalty: 4 
    },
    { 
      subjects: 8, 
      size: 8, 
      area: "Several rooms", 
      penalty: 6 
    },
    { 
      subjects: 16, 
      size: 9, 
      area: "Small house", 
      penalty: 8 
    }
  ],
  advanced: {
    sympathy: {
      penalty: 2,
      requires: { mana: 1 }
    },
    temporal: {
      penalty: 4,
      requires: { mana: 1, arcana: 'Time' }
    }
  }
};

export const SCALE_LEVELS = {
  standard: [
    { 
      subjects: 5, 
      size: 5, 
      area: "Large house", 
      penalty: 0 
    },
    { 
      subjects: 10, 
      size: 10, 
      area: "Warehouse", 
      penalty: 2 
    },
    { 
      subjects: 20, 
      size: 15, 
      area: "Supermarket", 
      penalty: 4 
    },
    { 
      subjects: 40, 
      size: 20, 
      area: "Shopping mall", 
      penalty: 6 
    }
  ],
  advanced: {
    penaltyMultiplier: 2,
    everywhere: {
      penalty: 8,
      requires: { mana: 1 }
    }
  }
};

export const CASTING_TIME_LEVELS = [
  { 
    label: '1 Turn (Standard)', 
    value: 1, 
    penalty: 0 
  },
  { 
    label: '1 Action (Advanced)', 
    value: 2, 
    penalty: 2,
    requires: { reach: 1 } 
  },
  { 
    label: 'Ritual (Extended)', 
    value: 3, 
    penalty: -4,
    requires: { yantras: 1 } 
  }
];

export const ADVANCED_FACTOR_COSTS = {
  potency: { whitened: 2 },
  duration: { reach: 1 },
  range: { mana: 1 },
  scale: { mana: 1 },
  castingTime: { mana: 1 }
};

export const FACTOR_ICONS = {
  Potency: '⚡',
  Duration: '⏳',
  Range: '�',
  Scale: '�',
  CastingTime: '�'
};
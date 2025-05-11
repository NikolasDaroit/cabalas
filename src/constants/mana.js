// src/constants/mana.js

/**
 * Maximum Mana pools for each Gnosis level (1 through 10) in Mage: The Awakening 2nd Edition.
 */
export const MAX_MANA_BY_GNOSIS = [
  10, // Gnosis 1
  11, // Gnosis 2
  12, // Gnosis 3
  13, // Gnosis 4
  15, // Gnosis 5
  20, // Gnosis 6
  25, // Gnosis 7
  30, // Gnosis 8
  50, // Gnosis 9
  75  // Gnosis 10
];

/**
 * Maximum mana that can be spent per turn by Gnosis rating (1–10).
 * Index 0 corresponds to Gnosis 1, index 9 to Gnosis 10.
 */
export const MANA_PER_TURN = [
  1,  // Gnosis 1
  2,  // Gnosis 2
  3,  // Gnosis 3
  4,  // Gnosis 4
  5,  // Gnosis 5
  6,  // Gnosis 6
  7,  // Gnosis 7
  8,  // Gnosis 8
  10, // Gnosis 9
  15, // Gnosis 10
];

/**
 * Number of obsessions allowed by Gnosis rating (1–10).
 * Index 0 corresponds to Gnosis 1, index 9 to Gnosis 10.
 */
export const OBSESSIONS_ALLOWED = [
  1, // Gnosis 1
  1, // Gnosis 2
  2, // Gnosis 3
  2, // Gnosis 4
  2, // Gnosis 5
  3, // Gnosis 6
  3, // Gnosis 7
  3, // Gnosis 8
  4, // Gnosis 9
  4, // Gnosis 10
];
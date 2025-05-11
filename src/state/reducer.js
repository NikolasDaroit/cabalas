// src/state/reducer.js

import { MAX_MANA_BY_GNOSIS } from "../constants/mana";

export function reducer(state, action) {
  switch (action.type) {
    case "load":
      return { ...action.character };

    case "updateInfo":
      return {
        ...state,
        info: { ...state.info, [action.field]: action.value },
      };

    case "updateAttribute":
      return {
        ...state,
        attributes: { ...state.attributes, [action.attr]: action.value },
      };

    case "updateArcana":
      return {
        ...state,
        arcana: { ...state.arcana, [action.arc]: action.value },
      };

    case "updateSkill":
      return {
        ...state,
        skills: { ...state.skills, [action.skill]: action.entry },
      };

    case "addMerit":
      if (state.merits.some((m) => m.name === action.merit)) return state;
      return {
        ...state,
        merits: [...state.merits, { name: action.merit, dots: 1 }],
      };

    case "updateMerit": {
      const merits = [...state.merits];
      merits[action.index] = action.entry;
      return { ...state, merits };
    }

    case "removeMerit":
      return {
        ...state,
        merits: state.merits.filter((_, i) => i !== action.index),
      };

    case 'addCondition':
      return {
        ...state,
        conditions: [...state.conditions, action.condition],
      };

    case 'removeCondition':
      return {
        ...state,
        conditions: state.conditions.filter((_, i) => i !== action.index),
      };

    case 'addTilt':
      return {
        ...state,
        tilts: [...state.tilts, action.tilt],
      };

    case 'removeTilt':
      return {
        ...state,
        tilts: state.tilts.filter((_, i) => i !== action.index),
      };
    case "updateGnosis":
      return {
        ...state,
        gnosis: action.value,
        mana: Math.min(state.mana, MAX_MANA_BY_GNOSIS[action.value - 1]),
      };

    case "updateMana":
      return {
        ...state,
        mana: Math.max(
          0,
          Math.min(action.value, MAX_MANA_BY_GNOSIS[state.gnosis - 1])
        ),
      };

    case "updateObsession": {
      const obs = [...state.obsessions];
      obs[action.index] = action.value;
      return { ...state, obsessions: obs };
    }

    case "updateHealthBoxes":
      return { ...state, healthBoxes: action.healthBoxes };

    case "updateWillpowerBoxes":
      return { ...state, willpowerBoxes: action.willpowerBoxes };

    case "increment":
      return { ...state, [action.field]: state[action.field] + 1 };

    case "decrement":
      return {
        ...state,
        [action.field]: Math.max(0, state[action.field] - 1),
      };

    case "updateSize":
      return { ...state, size: action.value };

    default:
      return state;
  }
}

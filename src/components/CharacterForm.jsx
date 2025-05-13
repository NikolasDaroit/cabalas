// src/components/CharacterForm.jsx

import React from 'react';
import InfoSection from './InfoSection';
import AttributesSection from './AttributeSection';
import SkillsSection from './SkillsSection';
import ArcanaSection from './ArcanaSection';
import MeritsSection from './MeritsSection';
import ConditionsSection from './ConditionsSection';
import TiltsSection from './TiltsSection';
import ManaSection from './ManaSection';
import ObsessionsSection from './ObsessionsSection';
import HealthWillSection from './HealthWillSection';
import BeatsSection from './BeatsSection';
import Grimoire from './Grimoire';

export default function CharacterForm({ state, dispatch }) {
  // Read current praxes and rotes from state (initialize if undefined)
  const praxes = state.magic?.praxes || [];
  const rotes = state.magic?.rotes || [];

  // Dispatch helpers
  const handlePraxesChange = (newPraxes) =>
    dispatch({ type: 'SET_MAGIC_PRAXES', payload: newPraxes });
  const handleRotesChange = (newRotes) =>
    dispatch({ type: 'SET_MAGIC_ROTES', payload: newRotes });

  return (
    <div className="space-y-6">
      <AttributesSection state={state} dispatch={dispatch} />
      <InfoSection state={state} dispatch={dispatch} />
      <SkillsSection state={state} dispatch={dispatch} />
      <ArcanaSection state={state} dispatch={dispatch} />
      <MeritsSection state={state} dispatch={dispatch} />
      <ConditionsSection state={state} dispatch={dispatch} />
      <TiltsSection state={state} dispatch={dispatch} />
      <ManaSection state={state} dispatch={dispatch} />
      <ObsessionsSection state={state} dispatch={dispatch} />
      <HealthWillSection state={state} dispatch={dispatch} />
      <BeatsSection state={state} dispatch={dispatch} />

      {/* Magic spells selection with sliding modal */}
      <div className="pt-6">
        <h3 className="text-xl font-semibold mb-2">Magias (Praxes & Rotes)</h3>
        <Grimoire
          praxes={praxes}
          rotes={rotes}
          onChangePraxes={handlePraxesChange}
          onChangeRotes={handleRotesChange}
        />
      </div>
    </div>
  );
}

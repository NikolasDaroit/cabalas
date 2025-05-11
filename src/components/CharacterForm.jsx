// src/components/CharacterForm.jsx

import React from 'react';
import InfoSection from './InfoSection';
import AttributesSection from './AttributeSection';
import SkillsSection from './SkillsSection';
import ArcanaSection from './ArcanaSection';
import MeritsSection from './MeritsSection';
import ConditionsAndTiltsSection from './ConditionsAndTiltsSection';
import ConditionsSection from './ConditionsSection';
import TiltsSection from './TiltsSection';
import ManaSection from './ManaSection';
import ObsessionsSection from './ObsessionsSection';
import HealthWillSection from './HealthWillSection';
import BeatsSection from './BeatsSection';

export default function CharacterForm({ state, dispatch }) {
  return (
    <div className="space-y-6">
      <AttributesSection state={state} dispatch={dispatch} />
      <InfoSection state={state} dispatch={dispatch} />
      <SkillsSection state={state} dispatch={dispatch} />
      <ArcanaSection state={state} dispatch={dispatch} />
      <MeritsSection state={state} dispatch={dispatch} />
      {/* <ConditionsAndTiltsSection state={state} dispatch={dispatch} /> */}
      <ConditionsSection state={state} dispatch={dispatch} />
      <TiltsSection state={state} dispatch={dispatch} />
      <ManaSection state={state} dispatch={dispatch} />
      <ObsessionsSection state={state} dispatch={dispatch} />
      <HealthWillSection state={state} dispatch={dispatch} />
      <BeatsSection state={state} dispatch={dispatch} />
    </div>
  );
}

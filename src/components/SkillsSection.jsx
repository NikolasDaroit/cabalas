// src/components/SkillsSection.jsx

import React from 'react';
import DotRow from './DotRow';
import SKILLS from '../constants/skills';

export default function SkillsSection({ state = {}, dispatch }) {
  const skills = state.skills || {};

  return (
    <section>
      <h3 className="text-lg font-semibold">Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {SKILLS.map(skill => {
          const entry = skills[skill] || {};
          return (
            <div key={skill}>
              <label className="block text-sm font-medium">{skill}</label>
              <DotRow
                value={entry.dots || 0}
                onChange={val =>
                  dispatch({
                    type: 'updateSkill',
                    skill,
                    entry: {
                      dots: val,
                      specialty: entry.specialty || ''
                    }
                  })
                }
              />
              <input
                type="text"
                className="w-full mt-1 p-1 border rounded text-xs bg-white dark:bg-gray-700"
                placeholder="Specialty"
                value={entry.specialty || ''}
                onChange={e =>
                  dispatch({
                    type: 'updateSkill',
                    skill,
                    entry: {
                      dots: entry.dots || 0,
                      specialty: e.target.value
                    }
                  })
                }
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

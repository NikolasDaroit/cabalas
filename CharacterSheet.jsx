import React, { useState, useEffect } from 'react';

function DotRow({ count = 5, value = 0, onChange }) {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          onClick={() => onChange(i + 1 === value ? 0 : i + 1)}
          className={`w-5 h-5 rounded-full border-2 ${i < value ? 'bg-black' : 'bg-white'} border-black`}
        />
      ))}
    </div>
  );
}

function BoxRow({ count = 10, value = [], onChange }) {
  const toggleBox = (i) => {
    const newValue = [...value];
    newValue[i] = (newValue[i] === 'L') ? 'A' : (newValue[i] === 'A') ? '' : 'L';
    onChange(newValue);
  };
  return (
    <div className="flex space-x-1">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          onClick={() => toggleBox(i)}
          className={`w-5 h-5 border text-xs font-bold rounded ${value[i] === 'L' ? 'bg-yellow-400' : value[i] === 'A' ? 'bg-red-600 text-white' : 'bg-white'} border-black`}
        >{value[i]}</button>
      ))}
    </div>
  );
}

function App() {
  const [character, setCharacter] = useState(null);
  const [characterList, setCharacterList] = useState([]);
  const [selectedKey, setSelectedKey] = useState('');

  useEffect(() => {
    const keys = Object.keys(localStorage).filter(k => k.startsWith('mageCharacter_'));
    setCharacterList(keys);
  }, []);

  const refreshCharacterList = () => {
    const keys = Object.keys(localStorage).filter(k => k.startsWith('mageCharacter_'));
    setCharacterList(keys);
  };

  const saveCharacter = () => {
    if (!character || !character.info?.Name?.trim()) {
      alert("Character must have a valid name.");
      return;
    }
    localStorage.setItem(`mageCharacter_${character.info.Name}`, JSON.stringify(character));
    refreshCharacterList();
  };

  const loadCharacter = (key) => {
    const data = localStorage.getItem(key);
    if (data) {
      setCharacter(JSON.parse(data));
      setSelectedKey(key);
    }
  };

  const exportCharacter = () => {
    if (!character) return;
    const blob = new Blob([JSON.stringify(character, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${character.info?.Name || 'character'}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const createNewCharacter = () => {
    const name = "Untitled " + Math.floor(Math.random() * 1000);
    setCharacter({
      info: { Name: name, Path: '', Order: '', Legacy: '', Virtue: '', Vice: '' },
      attributes: {},
      arcana: {},
      skills: {},
      merits: [],
      conditions: [],
      aspirations: ['', '', ''],
      obsession: '',
      healthBoxes: Array(10).fill(''),
      willpowerBoxes: Array(10).fill(''),
      mana: 0,
      wisdom: 0,
      gnosis: 1,
      beats: 0,
      arcaneBeats: 0,
      experience: 0,
      arcaneExperience: 0,
      size: 5
    });
    setSelectedKey('');
  };

  const updateCharacter = (key, value) => setCharacter(prev => ({ ...prev, [key]: value }));

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-4">
      <div className="flex gap-2">
        <select value={selectedKey} onChange={e => loadCharacter(e.target.value)} className="p-1 border rounded">
          <option value="">Select character</option>
          {characterList.map(key => (
            <option key={key} value={key}>{key.replace('mageCharacter_', '')}</option>
          ))}
        </select>
        <button onClick={createNewCharacter} className="bg-yellow-500 text-white px-2 py-1 rounded">New</button>
        <button onClick={saveCharacter} className="bg-blue-500 text-white px-2 py-1 rounded">Save</button>
        <button onClick={exportCharacter} className="bg-gray-700 text-white px-2 py-1 rounded">Export</button>
      </div>

      {character && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">{character.info.Name}</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(character.info).map(([k, v]) => (
              <input
                key={k}
                className="p-2 border rounded"
                value={v}
                onChange={e => updateCharacter('info', { ...character.info, [k]: e.target.value })}
                placeholder={k}
              />
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {["Intelligence", "Wits", "Resolve", "Strength", "Dexterity", "Stamina", "Presence", "Manipulation", "Composure"].map(attr => (
              <div key={attr}>
                <label className="text-sm font-medium">{attr}</label>
                <DotRow
                  value={character.attributes[attr] || 0}
                  onChange={val => updateCharacter('attributes', { ...character.attributes, [attr]: val })}
                />
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-semibold">Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Academics", "Computer", "Crafts", "Investigation", "Medicine", "Occult", "Politics", "Science", "Athletics", "Brawl", "Drive", "Firearms", "Larceny", "Stealth", "Survival", "Weaponry", "Animal Ken", "Empathy", "Expression", "Intimidation", "Persuasion", "Socialize", "Streetwise", "Subterfuge"].map(skill => (
                <div key={skill}>
                  <label className="text-sm font-medium">{skill}</label>
                  <DotRow
                    value={character.skills[skill]?.dots || 0}
                    onChange={val => updateCharacter('skills', {
                      ...character.skills,
                      [skill]: { ...(character.skills[skill] || {}), dots: val }
                    })}
                  />
                  <input
                    type="text"
                    className="w-full text-xs mt-1 p-1 border rounded"
                    placeholder="Specialty"
                    value={character.skills[skill]?.specialty || ''}
                    onChange={e => updateCharacter('skills', {
                      ...character.skills,
                      [skill]: { ...(character.skills[skill] || {}), specialty: e.target.value }
                    })}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Arcana</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Death", "Fate", "Forces", "Life", "Matter", "Mind", "Prime", "Space", "Spirit", "Time"].map(arc => (
                <div key={arc}>
                  <label>{arc}</label>
                  <DotRow
                    count={5}
                    value={character.arcana[arc] || 0}
                    onChange={val => updateCharacter('arcana', { ...character.arcana, [arc]: val })}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Merits</h3>
            {character.merits.map((m, i) => (
              <div key={i} className="flex items-center gap-2">
                <input
                  type="text"
                  className="flex-1 p-2 border rounded"
                  placeholder="Merit"
                  value={m.name}
                  onChange={e => {
                    const merits = [...character.merits];
                    merits[i].name = e.target.value;
                    updateCharacter('merits', merits);
                  }}
                />
                <DotRow
                  value={m.dots || 0}
                  onChange={val => {
                    const merits = [...character.merits];
                    merits[i].dots = val;
                    updateCharacter('merits', merits);
                  }}
                />
                <button onClick={() => updateCharacter('merits', character.merits.filter((_, j) => j !== i))} className="text-red-500">×</button>
              </div>
            ))}
            <button onClick={() => updateCharacter('merits', [...character.merits, { name: '', dots: 0 }])} className="mt-1 text-sm bg-green-600 text-white px-2 py-1 rounded">Add Merit</button>
          </div>

          <div>
            <h3 className="font-semibold">Conditions & Tilts</h3>
            <input
              type="text"
              placeholder="Add condition or tilt"
              className="p-2 border rounded"
              onKeyDown={e => {
                if (e.key === 'Enter' && e.target.value.trim()) {
                  updateCharacter('conditions', [...character.conditions, e.target.value.trim()]);
                  e.target.value = '';
                }
              }}
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {character.conditions.map((c, i) => (
                <span key={i} className="bg-blue-200 px-2 py-1 rounded-full">
                  {c}
                  <button onClick={() => updateCharacter('conditions', character.conditions.filter((_, j) => j !== i))} className="ml-2 text-red-500">×</button>
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Max Mana (based on Gnosis)</label>
              <input type="number" readOnly className="w-full p-2 border rounded bg-gray-100" value={(character.gnosis >= 1 && character.gnosis <= 10) ? [10,11,12,13,15,20,25,30,50,75][character.gnosis - 1] : 10} />
              <div className="text-sm text-gray-500 mt-1">{(() => {
                const gnosis = character.gnosis;
                const lookup = {1:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'10',10:'15'};
                return `You can spend up to ${lookup[gnosis] || '1'} mana/turn`; })()}</div>
            </div>
<div>
  <label>Trait Max</label>
  <input readOnly type="number" className="w-full p-2 border rounded bg-gray-100" value={(character.gnosis >= 1 && character.gnosis <= 10) ? [5,5,5,5,5,6,7,8,9,10][character.gnosis - 1] : 5} />
</div>
<div>
  <label>Yantras Max</label>
  <input readOnly type="number" className="w-full p-2 border rounded bg-gray-100" value={(character.gnosis >= 1 && character.gnosis <= 10) ? [2,2,3,3,4,4,5,5,6,6][character.gnosis - 1] : 2} />
</div>
<div>
  <label>Paradox Risk</label>
  <input readOnly type="number" className="w-full p-2 border rounded bg-gray-100" value={(character.gnosis >= 1 && character.gnosis <= 10) ? [1,1,2,2,3,3,4,4,5,5][character.gnosis - 1] : 1} />
</div>
<div>
  <label>Combined Spells</label>
  <input readOnly type="number" className="w-full p-2 border rounded bg-gray-100" value={(character.gnosis >= 1 && character.gnosis <= 10) ? [1,1,2,2,2,3,3,3,4,4][character.gnosis - 1] : 1} />
</div>
<div>
  <label>Obsessions</label>
  <input readOnly type="number" className="w-full p-2 border rounded bg-gray-100" value={(character.gnosis >= 1 && character.gnosis <= 10) ? [1,1,2,2,2,3,3,3,4,4][character.gnosis - 1] : 1} />
</div>
<div>
  <label>Current Mana</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={character.mana}
                onChange={e => updateCharacter('mana', parseInt(e.target.value))}
              />
            </div>
            
            <div>
              <label>Wisdom</label>
              <DotRow count={10} value={character.wisdom} onChange={val => updateCharacter('wisdom', val)} />
            </div>
            <div>
              <label>Gnosis</label>
              <DotRow count={10} value={character.gnosis} onChange={val => updateCharacter('gnosis', val)} />
              <div className="text-sm mt-1">Max Active Spells: {character.gnosis}</div>
            </div>
            <div>
              <label>Health</label>
              <BoxRow value={character.healthBoxes} onChange={val => updateCharacter('healthBoxes', val)} />
            </div>
            <div>
              <label>Willpower</label>
              <BoxRow value={character.willpowerBoxes} onChange={val => updateCharacter('willpowerBoxes', val)} />
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Aspirations</h3>
            {character.aspirations.map((asp, i) => (
              <input
                key={i}
                className="w-full p-2 border rounded mb-1"
                value={asp}
                onChange={e => {
                  const aspirations = [...character.aspirations];
                  aspirations[i] = e.target.value;
                  updateCharacter('aspirations', aspirations);
                }}
              />
            ))}
          </div>

          <div>
            <label>Obsession</label>
            <input className="w-full p-2 border rounded" value={character.obsession} onChange={e => updateCharacter('obsession', e.target.value)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

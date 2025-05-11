import React, { useReducer, useEffect, useCallback, ChangeEvent, useState } from 'react';

// --- Types ---
interface InfoSection {
  Name: string;
  Path: string;
  Order: string;
  Legacy: string;
  Virtue: string;
  Vice: string;
}

type DotCount = 0 | 1 | 2 | 3 | 4 | 5;

type SkillEntry = { dots: DotCount; specialty: string };

type MeritEntry = { name: string; dots: DotCount };

type Character = {
  info: InfoSection;
  attributes: Record<string, DotCount>;
  arcana: Record<string, DotCount>;
  skills: Record<string, SkillEntry>;
  merits: MeritEntry[];
  conditions: string[];
  aspirations: string[];
  obsessions: string[];
  healthBoxes: string[];
  willpowerBoxes: string[];
  mana: number;
  gnosis: number;
  wisdom: number;
  beats: number;
  arcaneBeats: number;
  experience: number;
  arcaneExperience: number;
  size: number;
};

// --- Constants ---
const ALL_ATTRIBUTES = [
  'Intelligence','Wits','Resolve','Strength','Dexterity','Stamina','Presence','Manipulation','Composure'
];
const ALL_ARCANA = ['Death','Fate','Forces','Life','Matter','Mind','Prime','Space','Spirit','Time'];
const ALL_SKILLS = [
  'Academics','Computer','Crafts','Investigation','Medicine','Occult','Politics','Science',
  'Athletics','Brawl','Drive','Firearms','Larceny','Stealth','Survival','Weaponry',
  'Animal Ken','Empathy','Expression','Intimidation','Persuasion','Socialize','Streetwise','Subterfuge'
];
const ALL_MERITS = [
  'Allies','Ambidextrous','Common Sense','Danger Sense','Eidetic Memory','Fast Reflexes',
  'Resources','Status','Striking Looks','Mentor'
];
const MERIT_DESCRIPTIONS: Record<string, string> = {
  Allies: 'You have associates who can help in specific fields.',
  Ambidextrous: 'Ignore off-hand penalties.',
  'Common Sense': 'Ask the ST for guidance once per chapter.',
  'Danger Sense': '+2 bonus to detect ambushes.',
  'Eidetic Memory': 'Perfect recall of details.',
  'Fast Reflexes': 'Add dots to Initiative.',
  Resources: 'Represents disposable income or wealth.',
  Status: 'Influence within an organization or group.',
  'Striking Looks': 'Bonuses to social rolls based on appearance.',
  Mentor: 'A guide or teacher who provides help.'
};
const MAX_MANA_BY_GNOSIS = [10,11,12,13,15,20,25,30,50,75];
const OBSESSIONS_ALLOWED = [1,1,2,2,2,3,3,3,4,4];

// --- Actions ---
type Action =
  | { type: 'load'; character: Character }
  | { type: 'updateInfo'; field: keyof InfoSection; value: string }
  | { type: 'updateAttribute'; attr: string; value: DotCount }
  | { type: 'updateArcana'; arc: string; value: DotCount }
  | { type: 'updateSkill'; skill: string; entry: SkillEntry }
  | { type: 'addMerit'; merit: string }
  | { type: 'updateMerit'; index: number; entry: MeritEntry }
  | { type: 'removeMerit'; index: number }
  | { type: 'addCondition'; condition: string }
  | { type: 'removeCondition'; index: number }
  | { type: 'updateGnosis'; value: number }
  | { type: 'updateMana'; value: number }
  | { type: 'updateObsession'; index: number; value: string }
  | { type: 'updateHealthBoxes'; healthBoxes: string[] }
  | { type: 'updateWillpowerBoxes'; willpowerBoxes: string[] }
  | { type: 'increment'; field: 'beats' | 'arcaneBeats' | 'experience' | 'arcaneExperience' }
  | { type: 'decrement'; field: 'beats' | 'arcaneBeats' | 'experience' | 'arcaneExperience' }
  | { type: 'updateSize'; value: number };

// --- Reducer ---
function reducer(state: Character, action: Action): Character {
  switch (action.type) {
    case 'load': return { ...action.character };
    case 'updateInfo':
      return { ...state, info: { ...state.info, [action.field]: action.value } };
    case 'updateAttribute':
      return { ...state, attributes: { ...state.attributes, [action.attr]: action.value } };
    case 'updateArcana':
      return { ...state, arcana: { ...state.arcana, [action.arc]: action.value } };
    case 'updateSkill':
      return { ...state, skills: { ...state.skills, [action.skill]: action.entry } };
    case 'addMerit': {
      if (state.merits.some(m => m.name === action.merit)) return state;
      return { ...state, merits: [...state.merits, { name: action.merit, dots: 1 }] };
    }
    case 'updateMerit': {
      const m = [...state.merits]; m[action.index] = action.entry;
      return { ...state, merits: m };
    }
    case 'removeMerit':
      return { ...state, merits: state.merits.filter((_, i) => i !== action.index) };
    case 'addCondition':
      if (!action.condition.trim()) return state;
      return { ...state, conditions: [...state.conditions, action.condition.trim()] };
    case 'removeCondition':
      return { ...state, conditions: state.conditions.filter((_, i) => i !== action.index) };
    case 'updateGnosis':
      return { ...state, gnosis: action.value, mana: Math.min(state.mana, MAX_MANA_BY_GNOSIS[action.value-1] ?? state.mana) };
    case 'updateMana':
      return { ...state, mana: Math.max(0, Math.min(action.value, MAX_MANA_BY_GNOSIS[state.gnosis-1] || state.mana)) };
    case 'updateObsession': {
      const obs = [...state.obsessions]; obs[action.index] = action.value;
      return { ...state, obsessions: obs };
    }
    case 'updateHealthBoxes':
      return { ...state, healthBoxes: action.healthBoxes };
    case 'updateWillpowerBoxes':
      return { ...state, willpowerBoxes: action.willpowerBoxes };
    case 'increment':
      return { ...state, [action.field]: state[action.field] + 1 } as Character;
    case 'decrement':
      return { ...state, [action.field]: Math.max(0, state[action.field] - 1) } as Character;
    case 'updateSize':
      return { ...state, size: action.value };
    default:
      return state;
  }
}

// --- Components ---
function DotRow({ count = 5, value = 0, onChange }: { count?: number; value: DotCount; onChange: (val: DotCount) => void }) {
  const handleKey = (i: number, e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); onChange((i+1) as DotCount);
    }
  };
  return (
    <div className="flex space-x-1">
      {Array.from({ length: count }, (_, i) => (
        <button key={i}
          role="slider"
          aria-valuemin={0}
          aria-valuemax={count}
          aria-valuenow={value}
          title={`${i+1} dots`}
          onClick={() => onChange((i+1) as DotCount)}
          onKeyDown={e => handleKey(i, e)}
          tabIndex={0}
          className={`w-5 h-5 rounded-full border-2 ${i < value ? 'bg-black' : 'bg-white'} border-black focus:outline-none focus:ring-2`}
        />
      ))}
    </div>
  );
}

function BoxRow({ count = 10, value = [], onChange }: { count?: number; value: string[]; onChange: (val: string[]) => void }) {
  const toggle = (i: number) => {
    const v = value[i] === 'L' ? 'A' : value[i] === 'A' ? '' : 'L';
    const arr = [...value]; arr[i] = v; onChange(arr);
  };
  const handleKey = (i: number, e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(i); }
  };
  return (
    <div className="flex space-x-1">
      {Array.from({ length: count }, (_, i) => (
        <button key={i}
          title="Health/Willpower box"
          onClick={() => toggle(i)}
          onKeyDown={e => handleKey(i, e)}
          tabIndex={0}
          className={`w-5 h-5 border text-xs font-bold rounded focus:outline-none focus:ring-2 ${
            value[i] === 'L' ? 'bg-yellow-400' : value[i] === 'A' ? 'bg-red-600 text-white' : 'bg-white'} border-black`}
        >{value[i]}</button>
      ))}
    </div>
  );
}

// --- Main App ---
export default function App() {
  // initial state factory
  const initial: Character = {
    info: { Name:'', Path:'', Order:'', Legacy:'', Virtue:'', Vice:'' },
    attributes: {}, arcana: {}, skills: {}, merits: [], conditions: [], aspirations: ['','',''], obsessions: [],
    healthBoxes: Array(10).fill(''), willpowerBoxes: Array(10).fill(''), mana: 0, gnosis: 1, wisdom: 0,
    beats: 0, arcaneBeats: 0, experience: 0, arcaneExperience: 0, size: 5
  };
  const [state, dispatch] = useReducer(reducer, initial);

  // dropdown & list
  const [list, setList] = useState<string[]>([]);
  const [selectedKey, setSelectedKey] = useState<string>('');

  const refreshList = useCallback(() => {
    const keys = Object.keys(localStorage).filter(k => k.startsWith('mageCharacter_'));
    setList(keys);
  }, []);

  useEffect(() => { refreshList(); }, [refreshList]);

  const storageKey = `mageCharacter_${state.info.Name}`;

  // autosave
  useEffect(() => {
    if (!state.info.Name) return;
    const handle = setTimeout(() => {
      localStorage.setItem(storageKey, JSON.stringify(state));
    }, 500);
    return () => clearTimeout(handle);
  }, [state, storageKey]);

  // load existing
  const loadCharacter = (key: string) => {
    const raw = localStorage.getItem(key);
    if (!raw) return;
    const char: Character = JSON.parse(raw);
    dispatch({ type: 'load', character: char });
    setSelectedKey(key);
  };


  // import JSON
  const handleImport = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; if (!file) return;
    const fr = new FileReader();
    fr.onload = () => {
      const char: Character = JSON.parse(fr.result as string);
      dispatch({ type: 'load', character: char });
      const key = `mageCharacter_${char.info.Name}`;
      localStorage.setItem(key, JSON.stringify(char));
      refreshList();
      setSelectedKey(key);
    };
    fr.readAsText(file);
  };

  // export JSON
  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(state, null,2)], { type:'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href=url; a.download=`${state.info.Name||'character'}.json`;
    a.click(); URL.revokeObjectURL(url);
  };

  // save button
  const saveCharacter = () => {
    if (!state.info.Name.trim()) { alert('Name required'); return; }
    localStorage.setItem(storageKey, JSON.stringify(state));
    refreshList();
    setSelectedKey(storageKey);
    alert('Character saved');
  };

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6 dark:bg-gray-800 dark:text-white">
      <div className="flex gap-2">
        <select value={selectedKey} onChange={e => loadCharacter(e.target.value)}
          className="p-1 border rounded bg-white dark:bg-gray-700">
          <option value="">Select Character</option>
          {list.map(k => <option key={k} value={k}>{k.replace('mageCharacter_','')}</option>)}
        </select>
        <button onClick={() => dispatch({ type:'load', character: initial })}
          className="bg-yellow-500 text-white px-2 py-1 rounded">New</button>
        <button onClick={saveCharacter}
          className="bg-blue-500 text-white px-2 py-1 rounded">Save</button>
        <button onClick={exportJSON} className="bg-gray-700 text-white px-2 py-1 rounded">Export</button>
        <label className="bg-green-500 text-white px-2 py-1 rounded cursor-pointer">
          Import<input type="file" accept="application/json" onChange={handleImport} className="hidden" />
        </label>
      </div>

      {/* Info Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Object.entries(state.info).map(([k,v]) => (
          <input key={k} value={v} placeholder={k}
            onChange={e => dispatch({ type:'updateInfo', field: k as keyof InfoSection, value: e.target.value })}
            className="p-2 border rounded bg-white dark:bg-gray-700" />
        ))}
      </div>

      {/* Attributes */}
      <div className="grid grid-cols-3 gap-4">
        {ALL_ATTRIBUTES.map(attr => (
          <div key={attr}><label>{attr}</label>
            <DotRow value={state.attributes[attr]||0}
              onChange={val => dispatch({ type:'updateAttribute', attr, value: val })} />
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <h3>Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {ALL_SKILLS.map(skill => (
          <div key={skill}>
            <label>{skill}</label>
            <DotRow value={state.skills[skill]?.dots||0}
              onChange={val => dispatch({ type:'updateSkill', skill, entry:{ dots: val, specialty: state.skills[skill]?.specialty||'' } })} />
            <input placeholder="Specialty" value={state.skills[skill]?.specialty||''}
              onChange={e => dispatch({ type:'updateSkill', skill, entry:{ dots: state.skills[skill]?.dots||0, specialty: e.target.value } })}
              className="w-full text-xs mt-1 p-1 border rounded bg-white dark:bg-gray-700" />
          </div>
        ))}
      </div>

      {/* Arcana Section */}
      <h3>Arcana</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {ALL_ARCANA.map(arc => (
          <div key={arc}><label>{arc}</label>
            <DotRow value={state.arcana[arc]||0} onChange={val => dispatch({ type:'updateArcana', arc, value: val })} />
          </div>
        ))}
      </div>

      {/* Merits Section */}
      <h3>Merits</h3>
      <select onChange={e => dispatch({ type:'addMerit', merit: e.target.value })}
        className="w-full p-2 border rounded mb-2 bg-white dark:bg-gray-700">
        <option value="">Add Merit</option>
        {ALL_MERITS.map(m => <option key={m} value={m} title={MERIT_DESCRIPTIONS[m]}>{m}</option>)}
      </select>
      {state.merits.map((m,i) => (
        <div key={i} className="flex items-center gap-2">
          <input value={m.name} title={MERIT_DESCRIPTIONS[m.name]||''}
            onChange={e => dispatch({ type:'updateMerit', index: i, entry: { ...m, name: e.target.value } })}
            className="flex-1 p-2 border rounded bg-white dark:bg-gray-700" />
          <DotRow value={m.dots} onChange={val => dispatch({ type:'updateMerit', index: i, entry: { ...m, dots: val } })} />
          <button onClick={() => dispatch({ type:'removeMerit', index: i })} className="text-red-500">×</button>
        </div>
      ))}

      {/* Conditions Section */}
      <h3>Conditions</h3>
      <input placeholder="Add condition" onKeyDown={e => { if (e.key==='Enter') { dispatch({ type:'addCondition', condition: e.currentTarget.value }); e.currentTarget.value=''; } }}
        className="p-2 border rounded w-full bg-white dark:bg-gray-700" />
      <div className="flex flex-wrap gap-2 mt-2">
        {state.conditions.map((c,i) => (
          <span key={i} className="bg-blue-200 dark:bg-blue-700 px-2 py-1 rounded-full">
            {c}<button onClick={() => dispatch({ type:'removeCondition', index: i })} className="ml-2 text-red-500">×</button>
          </span>
        ))}
      </div>

      {/* Gnosis & Mana Section */}
      <h3>Gnosis & Mana</h3>
      <DotRow count={10} value={state.gnosis as DotCount} onChange={val => dispatch({ type:'updateGnosis', value: val })} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div><label>Mana</label>
          <input type="number" value={state.mana} onChange={e => dispatch({ type:'updateMana', value: parseInt(e.target.value)||0 })}
            className="w-full p-2 border rounded bg-white dark:bg-gray-700" />
        </div>
        <div><label>Max Mana</label>
          <input readOnly value={MAX_MANA_BY_GNOSIS[state.gnosis-1]||0} className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-600" />
        </div>
        <div><label>Obsessions</label>
          <input readOnly value={OBSESSIONS_ALLOWED[state.gnosis-1]||1} className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-600" />
        </div>
      </div>

      {/* Obsessions Section */}
      <h3>Obsessions</h3>
      {Array.from({ length: OBSESSIONS_ALLOWED[state.gnosis-1]||1 }).map((_, i) => (
        <input key={i} placeholder={`Obsession ${i+1}`} value={state.obsessions[i]||''}
          onChange={e => dispatch({ type:'updateObsession', index: i, value: e.target.value })}
          className="w-full p-2 border rounded mb-1 bg-white dark:bg-gray-700" />
      ))}

      {/* Health & Willpower Section */}
      <h3>Health & Willpower</h3>
      <div className="grid grid-cols-2 gap-4">
        <BoxRow value={state.healthBoxes} onChange={v => dispatch({ type:'updateHealthBoxes', healthBoxes: v })} />
        <BoxRow value={state.willpowerBoxes} onChange={v => dispatch({ type:'updateWillpowerBoxes', willpowerBoxes: v })} />
      </div>

      {/* Beats & XP Section */}
      <h3>Beats & XP</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {(['beats','arcaneBeats','experience','arcaneExperience'] as const).map(field => (
          <div key={field} className="space-x-2">
            <label className="capitalize">{field}</label>
            <button onClick={() => dispatch({ type: 'decrement', field })} className="px-2">−</button>
            <span>{state[field]}</span>
            <button onClick={() => dispatch({ type: 'increment', field })} className="px-2">＋</button>
          </div>
        ))}
      </div>
    </div>
  );
}

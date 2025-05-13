import React, { useState } from 'react';
import { SPELLS_BY_ARCANUM } from '../constants/spells';
import DotRow from './DotRow';
import LookupModal from './LookupModal';

const ARCANA_KEYS = Object.keys(SPELLS_BY_ARCANUM);
const FLAT_SPELLS = ARCANA_KEYS.flatMap(arc =>
  Object.entries(SPELLS_BY_ARCANUM[arc]).flatMap(([lvl, spells]) =>
    spells.map(spell => ({ ...spell, arcano: arc, nivel: parseInt(lvl, 10) }))
  )
);
const LEVELS = Array.from(new Set(FLAT_SPELLS.map(spell => spell.nivel))).sort((a, b) => a - b);

export default function SlidingModal({ praxes, rotes, onChangePraxes, onChangeRotes }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selector, setSelector] = useState({ open: false, listKey: null, idx: null });
  const [filterArc, setFilterArc] = useState('');
  const [filterLevel, setFilterLevel] = useState('');
  const [searchText, setSearchText] = useState('');

  const addItem = (list, setter) => setter([...list, { arcano: '', nivel: 0, spell: null }]);
  const updateItem = (list, setter, idx, field, value) => {
    const copy = list.slice();
    copy[idx][field] = value;
    if (field === 'arcano' || field === 'nivel') copy[idx].spell = null;
    setter(copy);
  };
  const openSelector = (listKey, idx) => setSelector({ open: true, listKey, idx });
  const closeSelector = () => setSelector({ open: false, listKey: null, idx: null });

  const handleSelect = spell => {
    const { listKey, idx } = selector;
    const list = listKey === 'praxes' ? praxes : rotes;
    const setter = listKey === 'praxes' ? onChangePraxes : onChangeRotes;
    updateItem(list, setter, idx, 'arcano', spell.arcano);
    updateItem(list, setter, idx, 'nivel', spell.nivel);
    updateItem(list, setter, idx, 'spell', spell);
    closeSelector();
  };

  const filteredSpells = FLAT_SPELLS.filter(spell =>
    (!filterArc || spell.arcano === filterArc) &&
    (!filterLevel || spell.nivel === Number(filterLevel)) &&
    (!searchText || spell.name.toLowerCase().includes(searchText.toLowerCase()))
  );

  const renderRows = (list, setter, key) =>
    list.map((item, idx) => (
      <div key={idx} className="grid grid-cols-4 gap-2 items-center mb-2">
        <button
          onClick={() => openSelector(key, idx)}
          className="col-span-2 text-left border rounded px-2 py-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
        >
          {item.spell ? item.spell.name : 'Selecionar magia'}
        </button>
        <select
          value={item.arcano}
          onChange={e => updateItem(list, setter, idx, 'arcano', e.target.value)}
          className="border rounded px-2 py-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-indigo-600 focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-900"
        >
          <option value="">Arcano</option>
          {ARCANA_KEYS.map(a => (
            <option key={a} value={a} className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
              {a}
            </option>
          ))}
        </select>
        <DotRow
          value={item.nivel}
          onChange={val => updateItem(list, setter, idx, 'nivel', val)}
          maxDots={5}
        />
      </div>
    ));

  const filterHeader = (
    <div className="mb-4">
      <div className="flex flex-wrap gap-2 mb-2">
        <span className="font-medium text-gray-900 dark:text-gray-100">Arcano:</span>
        {ARCANA_KEYS.map(a => (
          <button
            key={a}
            onClick={() => setFilterArc(a)}
            className={`px-2 py-1 rounded transition ${
              filterArc === a
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
            }`}
          >
            {a}
          </button>
        ))}
        <button
          onClick={() => setFilterArc('')}
          className={`px-2 py-1 rounded transition ${
            !filterArc
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
          }`}
        >
          Todos
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mb-2">
        <span className="font-medium text-gray-900 dark:text-gray-100">Nível:</span>
        {LEVELS.map(level => (
          <button
            key={level}
            onClick={() => setFilterLevel(level)}
            className={`px-2 py-1 rounded transition ${
              String(filterLevel) === String(level)
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
            }`}
          >
            {level}
          </button>
        ))}
        <button
          onClick={() => setFilterLevel('')}
          className={`px-2 py-1 rounded transition ${
            !filterLevel
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
          }`}
        >
          Todos
        </button>
      </div>
      <input
        type="text"
        placeholder="Buscar magia"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        className="w-full border rounded px-2 py-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-indigo-600 focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-900"
      />
    </div>
  );

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition text-2xl z-20"
        aria-label="Abrir menu de magia"
      >
        �‍♀️ Grimório
      </button>

      {/* Sliding Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-25 flex justify-end"
          onClick={() => setIsOpen(false)}
        >
          <div
            onClick={e => e.stopPropagation()}
            className="h-full w-96 bg-white dark:bg-gray-800 shadow-xl"
          >
            <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Magia</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-4 overflow-y-auto h-[calc(100%-4rem)]">
              <section className="mb-6">
                <div className="flex justify-between mb-2">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Praxes</h3>
                  <button
                    onClick={() => addItem(praxes, onChangePraxes)}
                    className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    + Adicionar
                  </button>
                </div>
                {renderRows(praxes, onChangePraxes, 'praxes')}
              </section>
              <section>
                <div className="flex justify-between mb-2">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Rotes</h3>
                  <button
                    onClick={() => addItem(rotes, onChangeRotes)}
                    className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    + Adicionar
                  </button>
                </div>
                {renderRows(rotes, onChangeRotes, 'rotes')}
              </section>
            </div>
          </div>
        </div>
      )}

      {/* Spell Selector Modal */}
      {selector.open && (
        <LookupModal
          items={filteredSpells}
          header={filterHeader}
          onSelect={handleSelect}
          onClose={closeSelector}
          modalClassName="bg-white dark:bg-gray-800"
          renderItem={spell => (
            <div className="border rounded-lg p-4 shadow hover:shadow-lg cursor-pointer bg-white dark:bg-gray-700">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">{spell.name}</h4>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Arcano:</strong> {spell.arcano} {spell.nivel}
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Practice:</strong> {spell.practice}
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Primary:</strong> {spell.primaryFactor}
              </p>
              {spell.withstand && (
                <p className="text-gray-800 dark:text-gray-200">
                  <strong>Withstand:</strong> {spell.withstand}
                </p>
              )}
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{spell.description}</p>
            </div>
          )}
        />
      )}
    </>
  );
}
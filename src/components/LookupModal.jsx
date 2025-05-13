import { useState, useEffect } from 'react';

export default function LookupModal({
  items = [],
  open = true,
  onClose,
  onSelect,
  header, // New: custom header (e.g., filter buttons, search)
  renderItem, // New: custom render function for each item
}) {
  const [filterText, setFilterText] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    const ft = filterText.toLowerCase();
    setFilteredItems(
      items.filter(item =>
        item.name.toLowerCase().includes(ft) ||
        (item.description && item.description.toLowerCase().includes(ft)) ||
        (item.prerequisites && item.prerequisites.toLowerCase().includes(ft))
      )
    );
  }, [filterText, items]);

  // Reset filter text when modal opens/closes
  useEffect(() => {
    if (!open) setFilterText('');
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-5xl p-4"
        onClick={e => e.stopPropagation()}
      >
        {/* Custom header (e.g., arcana filter, search) */}
        {header}

        {/* Fallback search input if no header is provided */}
        {!header && (
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search…"
              value={filterText}
              onChange={e => setFilterText(e.target.value)}
              className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 focus:outline-none"
            />
          </div>
        )}

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto max-h-[70vh]">
          {filteredItems.map((item, index) => (
            <div
              key={item.name + index}
              onClick={() => { onSelect(item); onClose(); }}
              className="cursor-pointer"
            >
              {renderItem ? renderItem(item) : (
                <div className="border rounded-lg p-4 bg-white dark:bg-gray-700 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">{item.name}</h4>
                    {item.rating && (
                      <p className="text-sm">
                        <strong>Rating:</strong> {item.rating}
                      </p>
                    )}
                    {item.prerequisites && (
                      <p className="text-sm">
                        <strong>Prerequisites:</strong> {item.prerequisites}
                      </p>
                    )}
                    {item.persistent !== undefined && (
                      <p className="text-sm">
                        <strong>Persistent:</strong> {item.persistent ? 'Yes' : 'No'}
                      </p>
                    )}
                    {item.type && (
                      <p className="text-sm">
                        <strong>Type:</strong> {item.type}
                      </p>
                    )}
                    {item.description && (
                      <p className="mt-2 text-sm">{item.description}</p>
                    )}
                  </div>
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      onSelect(item);
                      onClose();
                    }}
                    className="mt-4 self-start bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 focus:outline-none"
                  >
                    Add
                  </button>
                </div>
              )}
            </div>
          ))}
          {filteredItems.length === 0 && (
            <p className="col-span-full text-center text-gray-500">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
// src/components/InfoModal.jsx
import React from 'react';

export default function InfoModal({ open, onClose, item }) {
  if (!open || !item) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded shadow-lg max-w-md w-full"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">{item.name}</h2>
        {item.rating && <p><strong>Rating:</strong> {item.rating}</p>}
        {item.prerequisites && <p><strong>Prerequisites:</strong> {item.prerequisites}</p>}
        {item.description && <p className="mt-2">{item.description}</p>}
        <button
          onClick={onClose}
          className="mt-4 bg-gray-300 text-gray-800 px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}

import React from 'react';
import {
  PATHS,
  ORDERS,
  LEGACIES,
  VIRTUES,
  VICES
} from '../constants/infoOptions';

const DATAS = {
  Path: PATHS,
  Order: ORDERS,
  Legacy: LEGACIES,
  Virtue: VIRTUES,
  Vice: VICES
};

export default function InfoSection({ state, dispatch }) {
  return (
    <section>
      <h3 className="text-lg font-semibold">Info</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Object.entries(state.info).map(([field, value]) => {
          const list = DATAS[field];
          return (
            <div key={field}>
              <label className="block text-sm font-medium">{field}</label>

              {list ? (
                <>
                  <input
                    type="text"
                    list={field + "List"}
                    className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    value={value}
                    onChange={e =>
                      dispatch({ type: 'updateInfo', field, value: e.target.value })
                    }
                  />
                  <datalist id={field + "List"}>
                    {list.map(option => (
                      <option key={option} value={option} />
                    ))}
                  </datalist>
                </>
              ) : (
                <input
                  type="text"
                  className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  value={value}
                  onChange={e =>
                    dispatch({ type: 'updateInfo', field, value: e.target.value })
                  }
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

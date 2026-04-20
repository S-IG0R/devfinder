import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

function useLocalStorage<T>(key: string, initState: T): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const data = localStorage.getItem(key);
    try {
      return data ? JSON.parse(data) : initState;
    } catch (error) {
      console.error('Error read or parse Local storage', error);
    }
  });

  useEffect(
    function saveValue() {
      if (!value || !key) return;
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key],
  );

  return [value, setValue];
}

export default useLocalStorage;

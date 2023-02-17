import { useState } from 'react';

// No ANY!
export function useLocalStorage(key: string, initialValue: string) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      // Puntos y comas
      return item ? item : initialValue;
    } catch (error) {
      // Puntos y comas
      return initialValue;
    }
  });

  const setValue = (value: string) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, value);
    } catch (error) {
      console.error(error);
    }
  };
  return [storedValue, setValue];
}
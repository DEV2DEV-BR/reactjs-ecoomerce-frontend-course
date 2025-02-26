import { useState } from "react";

export function useCustomLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: string) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  const removeValue = () => {
    setStoredValue(initialValue);
    window.localStorage.removeItem(key);
  };

  return [storedValue, setValue, removeValue];
}

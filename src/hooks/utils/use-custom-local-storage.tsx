import { useState } from "react";

export function useCustomLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  const removeValue = () => {
    setStoredValue(initialValue);
    window.localStorage.removeItem(key);
  };

  return [storedValue, setValue, removeValue] as const;
}

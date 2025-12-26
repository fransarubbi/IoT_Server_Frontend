// src/lib/stores/theme.ts
import { writable } from 'svelte/store';
import type { Theme } from '../types';

// Detectar preferencia del sistema
const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme') as Theme;
    if (stored) return stored;
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? 'dark' 
      : 'light';
  }
  return 'light';
};

const createThemeStore = () => {
  const { subscribe, set, update } = writable<Theme>(getInitialTheme());

  return {
    subscribe,
    set: (value: Theme) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', value);
      }
      set(value);
    },
    update: (fn: (value: Theme) => Theme) => {
      update((current) => {
        const newValue = fn(current);
        if (typeof window !== 'undefined') {
          localStorage.setItem('theme', newValue);
        }
        return newValue;
      });
    }
  };
};

export const theme = createThemeStore();
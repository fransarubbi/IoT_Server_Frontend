import { writable } from "svelte/store"

type Theme = "light" | "dark"

// Simple browser detection for non-SvelteKit environments
const isBrowser = typeof window !== "undefined"

function createThemeStore() {
  const defaultTheme: Theme = isBrowser ? (localStorage.getItem("theme") as Theme) || "dark" : "dark"

  const { subscribe, set, update } = writable<Theme>(defaultTheme)

  return {
    subscribe,
    toggle: () => {
      update((current) => {
        const newTheme = current === "dark" ? "light" : "dark"
        if (isBrowser) {
          localStorage.setItem("theme", newTheme)
          document.documentElement.classList.toggle("dark", newTheme === "dark")
        }
        return newTheme
      })
    },
    set: (theme: Theme) => {
      if (isBrowser) {
        localStorage.setItem("theme", theme)
        document.documentElement.classList.toggle("dark", theme === "dark")
      }
      set(theme)
    },
    init: () => {
      if (isBrowser) {
        const saved = localStorage.getItem("theme") as Theme
        const theme = saved || "dark"
        document.documentElement.classList.toggle("dark", theme === "dark")
        set(theme)
      }
    },
  }
}

export const theme = createThemeStore()

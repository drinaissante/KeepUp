import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
        projects: [],

        addProject: (project) =>
            set((state) => ({
                projects: [...state.projects, project],
            })),

        updateProject: (id, updates) =>
            set((state) => ({
                projects: state.projects.map((p) => p.id === id ? { ...p, ...updates } : p)
            })),

        removeProject: (id) =>
            set((state) => ({
                projects: state.projects.filter((p) => p.id !== id),
            })),

        clearProjects: () => set({ projects: [] }),
        
    }),
    {
      name: "ku-storage",
    }
  )
);

export default useStore;
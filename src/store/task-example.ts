import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Task {
  id: string
  title: string
  done: boolean
}

interface TaskStore {
  tasks: Task[]
  addTask: (title: string) => void
  updateTask: (id: string, title: string) => void
  toggleTask: (id: string) => void
  removeTask: (id: string) => void
  clearTasks: () => void
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (title) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            { id: crypto.randomUUID(), title, done: false },
          ],
        })),
      updateTask: (id, title) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, title } : task,
          ),
        })),
      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, done: !task.done } : task,
          ),
        })),
      removeTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      clearTasks: () => set({ tasks: [] }),
    }),
    {
      name: 'task-storage',
    },
  ),
)

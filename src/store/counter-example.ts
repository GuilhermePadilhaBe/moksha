import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface CounterStore {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

interface PersistCounterStore {
  count: number
  increment: () => void
}

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}))

export const usePersistCounterStore = create<PersistCounterStore>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
      }),
      { name: 'counter-storage' },
    ),
  ),
)

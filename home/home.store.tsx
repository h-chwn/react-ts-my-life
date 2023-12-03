import { create } from 'zustand';
import { combine } from 'zustand/middleware';

export const useHomeStore = create(
  combine(
    {
      count: 0,
    },
    (set, get) => ({
      incrementCount: () => {
        set({ count: get().count + 1 });
      },
    })
  )
);

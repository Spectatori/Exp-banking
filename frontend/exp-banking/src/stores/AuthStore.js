import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

export const useUserStore = create(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => set({ user }),
            clearUser: () => set({ user: null }),
        }),
        {
            name: 'userStorage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
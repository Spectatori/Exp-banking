import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

export const useUserStore = create(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => set({ user }),
            clearUser: () => {
                document.cookie = 'UserToken=; Max-Age=0; path=/;'; 
                set({ user: null })
            }
        }),
        {
            name: 'userStorage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
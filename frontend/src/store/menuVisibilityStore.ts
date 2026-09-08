import { create } from 'zustand'

interface MenuVisibilityState {
  hiddenMenuKeys: string[]
  isExeMode: boolean
  adsEnabled: boolean
  setHiddenMenuKeys: (keys: string[]) => void
  setIsExeMode: (value: boolean) => void
  setAdsEnabled: (value: boolean) => void
}

export const useMenuVisibilityStore = create<MenuVisibilityState>((set) => ({
  hiddenMenuKeys: [],
  isExeMode: false,
  adsEnabled: false,
  setHiddenMenuKeys: (keys) => {
    const uniqueKeys = Array.from(new Set(keys.filter(Boolean)))
    set({ hiddenMenuKeys: uniqueKeys })
  },
  setIsExeMode: (value) => set({ isExeMode: Boolean(value) }),
  setAdsEnabled: (value) => set({ adsEnabled: Boolean(value) }),
}))

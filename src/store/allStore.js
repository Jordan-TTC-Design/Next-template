import { create } from 'zustand'

const allStore = create((set) => ({
  windowWidth: 0,
  setWindowWidth: (width) => set({ windowWidth: width })
}))

export default allStore
import { create } from "zustand";

type Store = {
  language: "ka" | "en";
  setLanguage: (language: "ka" | "en") => void;
};

const useStore = create<Store>((set) => ({
  language: "ka",
  setLanguage: (language) => set({ language }),
}));

export default useStore;

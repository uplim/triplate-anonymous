import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type State = {
  name: string;
  password: string;
  isLoading: boolean;
};

export type Actions = {
  setName: (name: string) => void;
  setPassword: (password: string) => void;
  setIsLoading: (isLoading: boolean) => void;
};

export const usePageStore = create<State & Actions>()(
  immer((set) => ({
    name: '',
    password: '',
    isLoading: false,

    setName: (name: string) => {
      set((state: State) => {
        state.name = name;
      });
    },

    setPassword: (password: string) => {
      set((state: State) => {
        state.password = password;
      });
    },

    setIsLoading: (isLoading: boolean) => {
      set((state: State) => {
        state.isLoading = isLoading;
      });
    },
  }))
);

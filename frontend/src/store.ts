import create, { StateCreator } from "zustand";

interface BearSlice {
  bears: number;
  addBear: () => void;
  eatFish: () => void;
}

interface FishSlice {
  fishes: number;
  addFish: () => void;
}

interface UserInfoSlice {
  name: string;
  setName: (name: string) => void;
}

const createUserSlice: StateCreator<UserInfoSlice, [], [], UserInfoSlice> = (
  set,
) => ({
  name: "",
  setName: (name: string) => set(() => ({ name: name })),
});

const createBearSlice: StateCreator<BearSlice & FishSlice, [], [], BearSlice> =
  (set) => ({
    bears: 0,
    addBear: () => set((state) => ({ bears: state.bears + 1 })),
    eatFish: () => set((state) => ({ fishes: state.fishes - 1 })),
  });

const createFishSlice: StateCreator<FishSlice, [], [], FishSlice> = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
});

export const useBoundStore = create<BearSlice & FishSlice & UserInfoSlice>()((
  ...a
) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
  ...createUserSlice(...a),
}));

import { create } from 'zustand';

export type Goal = 'stable glucose' | 'more energy' | 'better sleep';

type OnboardingState = {
  goal?: Goal;
  flags: {
    diabetes: boolean;
    cholesterol: boolean;
    bloodPressure: boolean;
  };
  units: 'mg/dL' | 'mmol/L';
};

type UserState = {
  onboarding: OnboardingState;
  streak: number;
  badges: string[];
};

type Actions = {
  setGoal: (goal: Goal) => void;
  toggleFlag: (key: keyof OnboardingState['flags']) => void;
  setUnits: (units: OnboardingState['units']) => void;
  incrementStreak: () => void;
};

const defaultState: UserState = {
  onboarding: {
    goal: 'stable glucose',
    flags: {
      diabetes: true,
      cholesterol: false,
      bloodPressure: false
    },
    units: 'mg/dL'
  },
  streak: 3,
  badges: ['Fresh Start', 'Hydration Hero']
};

export const useAppStore = create<UserState & Actions>((set) => ({
  ...defaultState,
  setGoal: (goal) => set((state) => ({ onboarding: { ...state.onboarding, goal } })),
  toggleFlag: (key) =>
    set((state) => ({
      onboarding: { ...state.onboarding, flags: { ...state.onboarding.flags, [key]: !state.onboarding.flags[key] } }
    })),
  setUnits: (units) => set((state) => ({ onboarding: { ...state.onboarding, units } })),
  incrementStreak: () => set((state) => ({ streak: state.streak + 1 }))
}));

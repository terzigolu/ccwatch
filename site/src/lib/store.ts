import { create } from 'zustand';
import type { CellKey, SessionMock } from '@/types';

const MIN_BREAKPOINT = 80;
const MAX_BREAKPOINT = 160;

const DEFAULT_ENABLED: ReadonlyArray<CellKey> = ['5h', '7d', 'session', 'ctxbar'];
const DEFAULT_BREAKPOINT = 113;

const DEFAULT_SESSION_MOCK: SessionMock = {
  cost: 0.42,
  burnRatePerHour: 1.4,
  contextPct: 36,
  quota5hUsedPct: 28,
  quota7dUsedPct: 64,
  durationSec: 18 * 60,
};

export interface WizardStore {
  enabledCells: Set<CellKey>;
  breakpoint: number;
  sessionMock: SessionMock;

  toggleCell: (key: CellKey) => void;
  setBreakpoint: (n: number) => void;
  reset: () => void;
}

export const useWizardStore = create<WizardStore>((set) => ({
  enabledCells: new Set(DEFAULT_ENABLED),
  breakpoint: DEFAULT_BREAKPOINT,
  sessionMock: { ...DEFAULT_SESSION_MOCK },

  toggleCell: (key) =>
    set((state) => {
      const next = new Set(state.enabledCells);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return { enabledCells: next };
    }),

  setBreakpoint: (n) =>
    set({
      breakpoint: Math.max(
        MIN_BREAKPOINT,
        Math.min(MAX_BREAKPOINT, Math.round(n)),
      ),
    }),

  reset: () =>
    set({
      enabledCells: new Set(DEFAULT_ENABLED),
      breakpoint: DEFAULT_BREAKPOINT,
      sessionMock: { ...DEFAULT_SESSION_MOCK },
    }),
}));

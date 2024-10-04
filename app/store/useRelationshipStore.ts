import { create } from 'zustand';

interface RelationshipState {
  name1: string;
  name2: string;
  relationshipStart: Date | null;
  relationshipDuration: string | null
  message: string;
  setName1: (name: string) => void;
  setName2: (name: string) => void;
  setRelationshipStart: (date: Date) => void;
  setRelationshipDuration: (relationshipDurationString: string) => void;
  setMessage: (message: string) => void;
}

export const useRelationshipStore = create<RelationshipState>((set) => ({
  name1: '',
  name2: '',
  relationshipStart: null,
  relationshipDuration: null,
  message: '',
  setName1: (name1) => set(() => ({ name1 })),
  setName2: (name2) => set(() => ({ name2 })),
  setRelationshipStart: (relationshipStart) => set(() => ({ relationshipStart })),
  setMessage: (message) => set(() => ({ message })),
  setRelationshipDuration: (relationshipDuration) => set(() => ({ relationshipDuration })),
}));

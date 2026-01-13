import { Candidate } from "../types/candidate";

const STORAGE_KEY = "candidates";

export const getCandidatesFromStorage = (): Candidate[] => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveCandidatesToStorage = (candidates: Candidate[]): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(candidates));
};

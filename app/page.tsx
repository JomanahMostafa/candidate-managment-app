"use client";

import { useState, useEffect } from "react";
import { Candidate } from "../types/candidate";
import {
  getCandidatesFromStorage,
  saveCandidatesToStorage,
} from "../utils/storage";
import CandidateList from "../components/CandidateList";
import AddCandidateForm from "../components/AddCandidateForm";
import LoadingSpinner from "../components/LoadingSpinner";
import DarkModeToggle from "../components/DarkModeToggle";

export default function Home() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedCandidates = getCandidatesFromStorage();
    setCandidates(storedCandidates);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      saveCandidatesToStorage(candidates);
    }
  }, [candidates, isLoading]);

  const handleAddCandidate = (newCandidate: Omit<Candidate, "id">) => {
    const candidate: Candidate = {
      ...newCandidate,
      id: Date.now().toString(), // simple id generation
    };
    setCandidates([...candidates, candidate]);
  };

  const handleDeleteCandidate = (id: string) => {
    setCandidates(candidates.filter((c) => c.id !== id));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="text-center">
          <LoadingSpinner />
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Loading candidates...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-4 sm:py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Candidate Management
          </h1>
          <DarkModeToggle />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          <div className="order-2 xl:order-1">
            <AddCandidateForm onAdd={handleAddCandidate} />
          </div>
          <div className="order-1 xl:order-2">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground">
              Candidates ({candidates.length})
            </h2>
            <CandidateList
              candidates={candidates}
              onDelete={handleDeleteCandidate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

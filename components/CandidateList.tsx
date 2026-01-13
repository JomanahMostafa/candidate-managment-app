import { useState, useMemo } from "react";
import { Candidate } from "../types/candidate";
import CandidateItem from "./CandidateItem";
import Card from "./Card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface CandidateListProps {
  candidates: Candidate[];
  onDelete: (id: string) => void;
}

type SortOption = "name" | "role";

export default function CandidateList({
  candidates,
  onDelete,
}: CandidateListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("name");

  const filteredAndSortedCandidates = useMemo(() => {
    let filtered = candidates.filter(
      (candidate) =>
        candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filtered.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else {
        return a.role.localeCompare(b.role);
      }
    });

    return filtered;
  }, [candidates, searchTerm, sortBy]);

  if (candidates.length === 0) {
    return (
      <Card className="text-center py-8 sm:py-12">
        <div className="mb-4 sm:mb-6">
          <svg
            className="mx-auto h-16 w-16 sm:h-24 sm:w-24 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg sm:text-xl font-medium mb-2">
          No candidates yet
        </h3>
        <p className="text-muted-foreground text-sm sm:text-base px-4">
          Get started by adding your first candidate using the form.
        </p>
      </Card>
    );
  }

  return (
    <div>
      <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4">
        <Input
          type="text"
          placeholder="Search candidates..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
          <Button
            onClick={() => setSortBy("name")}
            variant={sortBy === "name" ? "default" : "outline"}
            size="sm"
            className="flex-1 sm:flex-none"
          >
            Sort by Name
          </Button>
          <Button
            onClick={() => setSortBy("role")}
            variant={sortBy === "role" ? "default" : "outline"}
            size="sm"
            className="flex-1 sm:flex-none"
          >
            Sort by Role
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredAndSortedCandidates.length === 0 ? (
          <Card className="text-center py-6 sm:py-8">
            <p className="text-muted-foreground text-sm sm:text-base">
              No candidates match your search criteria.
            </p>
          </Card>
        ) : (
          filteredAndSortedCandidates.map((candidate) => (
            <div key={candidate.id} className="animate-fade-in">
              <CandidateItem candidate={candidate} onDelete={onDelete} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

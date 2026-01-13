import { useState } from "react";
import { Candidate } from "../types/candidate";
import Card from "./Card";
import Modal from "./Modal";
import { Button } from "@/components/ui/button";

interface CandidateItemProps {
  candidate: Candidate;
  onDelete: (id: string) => void;
}

export default function CandidateItem({
  candidate,
  onDelete,
}: CandidateItemProps) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirm(true);
  };

  const handleConfirmDelete = () => {
    onDelete(candidate.id);
    setShowConfirm(false);
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
  };

  return (
    <>
      <Card className="hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-base sm:text-lg mr-3 flex-shrink-0">
                {candidate.name.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl font-semibold truncate">
                  {candidate.name}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base truncate">
                  {candidate.role}
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base break-all sm:mb-0">
              {candidate.email}
            </p>
          </div>
          <Button
            onClick={handleDeleteClick}
            variant="destructive"
            size="sm"
            className="w-full sm:w-auto self-end sm:self-start flex-shrink-0"
          >
            Delete
          </Button>
        </div>
      </Card>

      <Modal
        isOpen={showConfirm}
        onClose={handleCancelDelete}
        title="Delete Candidate"
        footer={
          <>
            <Button onClick={handleCancelDelete} variant="outline">
              Cancel
            </Button>
            <Button onClick={handleConfirmDelete} variant="destructive">
              Delete
            </Button>
          </>
        }
      >
        <p>
          Are you sure you want to delete <strong>{candidate.name}</strong>?
          This action cannot be undone.
        </p>
      </Modal>
    </>
  );
}

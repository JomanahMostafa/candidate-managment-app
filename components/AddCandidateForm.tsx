import { useState } from "react";
import { Candidate } from "../types/candidate";
import Input from "./Input";
import Card from "./Card";
import { Button } from "@/components/ui/button";

interface AddCandidateFormProps {
  onAdd: (candidate: Omit<Candidate, "id">) => void;
}

export default function AddCandidateForm({ onAdd }: AddCandidateFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.role.trim()) newErrors.role = "Role is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onAdd(formData);
      setFormData({ name: "", email: "", role: "" });
      setErrors({});
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Card title="Add Candidate" className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <Input
          label="Name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Enter candidate name"
        />
        <Input
          label="Email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Enter candidate email"
        />
        <Input
          label="Role"
          type="text"
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          error={errors.role}
          placeholder="Enter candidate role"
        />
        <Button type="submit" className="w-full" size="lg">
          Add Candidate
        </Button>
      </form>
    </Card>
  );
}

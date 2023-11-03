import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";

export const handleBreedFilters = () => {
  const [selectedBreed, setSelectedBreed] = useState<string>('');
  const [selectedSubBreed, setSelectedSubBreed] = useState<string>('');


  const handleBreedChange = (event: SelectChangeEvent) => {
    setSelectedBreed(event.target.value as string);
    setSelectedSubBreed('');
  };

  const handleSubBreedChange = (event: SelectChangeEvent) => {
    setSelectedSubBreed(event.target.value as string);
  };

  const clearFilters = () => {
    setSelectedBreed('');
    setSelectedSubBreed('');
  }

  return {
    selectedBreed,
    selectedSubBreed,
    handleBreedChange,
    handleSubBreedChange,
    clearFilters
  }
}

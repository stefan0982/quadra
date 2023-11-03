import React from "react";
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { getOnlyBreeds, useGetBreeds } from "@/services/useGetBreeds";
import { useGetSubBreeds } from "@/services/useGetSubBreeds";

interface BreedFiltersProps {
  selectedBreed: string
  selectedSubBreed: string
  handleBreedChange: (event: SelectChangeEvent) => void
  handleSubBreedChange: (event: SelectChangeEvent) => void
  clearFilters: () => void;
}

export const BreedFilters = ({
  selectedBreed,
  selectedSubBreed,
  handleSubBreedChange,
  handleBreedChange,
  clearFilters
}: BreedFiltersProps) => {
  const {data} = useGetBreeds();

  const breeds = getOnlyBreeds(data)

  const {data: subBreeds} = useGetSubBreeds(selectedBreed);

  return (
    <>
      <FormControl sx={{m: 3, width: 200}}>
        <InputLabel id="breed" size="small">Breed</InputLabel>
        <Select
          id="breed"
          value={selectedBreed}
          label="Breed"
          onChange={handleBreedChange}
          size="small"
        >
          {breeds.map(breed => (
            <MenuItem key={breed} value={breed}>{breed}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {
        subBreeds?.message.length ? <FormControl sx={{m: 3, width: 200}}>
          <InputLabel size="small" id="subBreed">SubBreed</InputLabel>
          <Select
            id="subBreed"
            value={selectedSubBreed}
            label="SubBreed"
            onChange={handleSubBreedChange}
            size="small"
          >
            {subBreeds.message.map(subBreed => (
              <MenuItem key={subBreed} value={subBreed}>{subBreed}</MenuItem>
            ))}
          </Select>
        </FormControl> : null
      }

      <Button sx={{mt: 3, width: 200}} onClick={clearFilters} disabled={!selectedBreed} variant="outlined" color="error">Clear Filters</Button>
    </>
  )
}

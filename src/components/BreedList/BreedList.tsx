import React from 'react'
import { unifyAllBreeds, useGetBreeds } from "@/services/useGetBreeds";
import { ImageList } from "@mui/material";
import { BreedCard } from "@/components/BreedCard/BreedCard";
import { BreedFilters } from "@/components/BreedFilters/BreedFilters";
import { ImageItem } from "@/components/BreedCard/ImageListItem";
import { handleBreedFilters } from "@/hooks/handleBreedFilters";

export const BreedList = () => {
  const {selectedBreed, selectedSubBreed, handleSubBreedChange, handleBreedChange, clearFilters} = handleBreedFilters()

  const {data} = useGetBreeds(`${selectedBreed}${selectedSubBreed && '/'}${selectedSubBreed}`)

  return (
    <section>
      <BreedFilters
        selectedBreed={selectedBreed}
        selectedSubBreed={selectedSubBreed}
        handleBreedChange={handleBreedChange}
        handleSubBreedChange={handleSubBreedChange}
        clearFilters={clearFilters}
      />
      <ImageList variant="masonry" sx={{maxWidth: 1000}} gap={8}>
        {selectedBreed
          ?
          data?.message.map((image: string) => (
            <ImageItem key={image} imgUrl={image} title={`${selectedBreed} ${selectedSubBreed}`}/>
          ))
          :
          unifyAllBreeds(data).map((breed: string) => (
            <BreedCard key={breed} breed={breed}/>
          ))}
      </ImageList>
    </section>
  )
}

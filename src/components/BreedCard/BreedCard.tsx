import React from "react";
import { useGetBreedImage } from "@/services/useGetBreedImage";
import { ImageItem } from "@/components/BreedCard/ImageListItem";

interface BreedCardProps {
  breed: string
}

export const BreedCard = ({breed}: BreedCardProps) => {

  const {data} = useGetBreedImage(breed);

  return (
    <ImageItem imgUrl={data?.message} title={breed}/>
  )
}

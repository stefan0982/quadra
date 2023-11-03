import { dogClient } from "@/utils/dogClient";
import { useQuery } from "@tanstack/react-query";
import { serviceKeys } from "@/utils/query-key-generator";

export interface BreedImage {
  status: string;
  message: string;
}

export const getBreedImage = async (breed: string): Promise<BreedImage> => {
  const splitBreed = breed.split(' ');
  const response = await dogClient.get(`/breed/${splitBreed.length ? splitBreed.join('/') : breed}/images/random`)
  return response.data;
}

export const useGetBreedImage = (breed: string) => {
  return useQuery({
    queryKey: serviceKeys.breedImage(breed),
    queryFn: () => getBreedImage(breed),
    enabled: !!breed,
  })
}

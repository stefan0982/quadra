import { dogClient } from "@/utils/dogClient";
import { useQuery } from "@tanstack/react-query";
import { serviceKeys } from "@/utils/query-key-generator";

export interface SubBreeds {
  status: string;
  message: string[];
}

const getSubBreedsByBreed = async (breed: string): Promise<SubBreeds> => {
  const response = await dogClient.get(`/breed/${breed}/list`)
  return response.data;
}

export const useGetSubBreeds = (breed: string) => {
  return useQuery({
    queryKey: serviceKeys.subBreedsList(breed),
    queryFn: () => getSubBreedsByBreed(breed),
    enabled: !!breed,
  })
}

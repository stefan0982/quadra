import { useQuery } from '@tanstack/react-query'
import { dogClient } from "@/utils/dogClient";
import { serviceKeys } from "@/utils/query-key-generator";

export interface Breeds {
  message: ({
    [key: string]: string | string[]
  } | string)[]
}

const getAllBreeds = async (breed?: string): Promise<Breeds> => {
  let response;
  if (breed) {
    response = await dogClient.get(`/breed/${breed}/images`)
  } else {
    response = await dogClient.get('/breeds/list/all')
  }
  return response.data;
}

export const unifyAllBreeds = (breeds: Breeds) => {
  return Object.entries(breeds?.message || {}).flatMap(([breed, subBreeds]) => {
    if (subBreeds.length) {
      return subBreeds.map((subBreed) => `${breed} ${subBreed}`)
    }
    return breed
  })
}

export const getOnlyBreeds = (breeds: Breeds) => {
  return Object.keys(breeds?.message || {})
}

export const useGetBreeds = (breed?: string) => {
  const {data, ...queryProps} = useQuery({
    queryKey: serviceKeys.allBreedsImgList(breed),
    queryFn: () => getAllBreeds(breed)
  })

  return {data, ...queryProps}
}


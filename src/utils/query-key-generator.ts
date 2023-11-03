export const serviceKeys = {
  breeds: ['breeds'] as const,
  subBreeds: ['sub-breeds'] as const,
  breedImage: (breed: string) => ['breed-img', breed] as const,
  subBreedsList: (breed: string) => [...serviceKeys.subBreeds, breed] as const,
  allBreedsImgList: (breed?: string) => [...serviceKeys.breeds, breed || 'all'] as const
}

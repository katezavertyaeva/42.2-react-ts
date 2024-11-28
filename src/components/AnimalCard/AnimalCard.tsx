import "./styles.ts";
import { AnimalCardProps } from './types';
import {AnimalCardWrapper, AnimalName, AnimalSpecies, AnimalImage} from './styles';

// interface Animal {
//   name: string
//   species: string
//   role: string
//   skills: string[]
//   image: string
// }

// interface AnimalCardProps {
//   animalData: Animal
// }

function AnimalCard({ animalData }: AnimalCardProps) {
  return (
    <AnimalCardWrapper>
      <AnimalName>{animalData.name}</AnimalName>
      <AnimalSpecies>{animalData.species}</AnimalSpecies>
      <AnimalImage src={animalData.image} />
    </AnimalCardWrapper>
  );
}

export default AnimalCard;

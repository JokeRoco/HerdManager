import React, { createContext, useContext, useState } from 'react';
import { Herd, Animal } from '../types';

interface HerdContextType {
  herds: Herd[];
  addHerd: (herd: Herd) => void;
  updateHerd: (herd: Herd) => void;
  deleteHerd: (id: string) => void;
  addAnimal: (herdId: string, animal: Animal) => void;
  updateAnimal: (herdId: string, animal: Animal) => void;
  deleteAnimal: (herdId: string, animalId: string) => void;
}

const HerdContext = createContext<HerdContextType | undefined>(undefined);

export const HerdProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [herds, setHerds] = useState<Herd[]>([]);

  const addHerd = (herd: Herd) => {
    setHerds([...herds, herd]);
  };

  const updateHerd = (herd: Herd) => {
    setHerds(herds.map(h => h.id === herd.id ? herd : h));
  };

  const deleteHerd = (id: string) => {
    setHerds(herds.filter(h => h.id !== id));
  };

  const addAnimal = (herdId: string, animal: Animal) => {
    setHerds(herds.map(herd => 
      herd.id === herdId 
        ? { ...herd, animals: [...herd.animals, animal] }
        : herd
    ));
  };

  const updateAnimal = (herdId: string, animal: Animal) => {
    setHerds(herds.map(herd => 
      herd.id === herdId
        ? { ...herd, animals: herd.animals.map(a => a.id === animal.id ? animal : a) }
        : herd
    ));
  };

  const deleteAnimal = (herdId: string, animalId: string) => {
    setHerds(herds.map(herd => 
      herd.id === herdId
        ? { ...herd, animals: herd.animals.filter(a => a.id !== animalId) }
        : herd
    ));
  };

  return (
    <HerdContext.Provider value={{
      herds,
      addHerd,
      updateHerd,
      deleteHerd,
      addAnimal,
      updateAnimal,
      deleteAnimal
    }}>
      {children}
    </HerdContext.Provider>
  );
};

export const useHerd = () => {
  const context = useContext(HerdContext);
  if (context === undefined) {
    throw new Error('useHerd must be used within a HerdProvider');
  }
  return context;
}; 
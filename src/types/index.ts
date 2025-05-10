export interface Animal {
  id: string;
  name: string;
  birthdate: Date;
  sex: 'male' | 'female';
  breed: string;
  breeder: string;
  mother?: string;
  father?: string;
  medicalHistory: MedicalRecord[];
  imageUrl?: string;
}

export interface MedicalRecord {
  id: string;
  date: Date;
  description: string;
  treatment: string;
  veterinarian: string;
}

export interface Herd {
  id: string;
  name: string;
  species: string;
  size: number;
  animals: Animal[];
} 
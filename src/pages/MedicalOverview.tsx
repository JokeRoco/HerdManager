import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Typography 
} from '@mui/material';
import { format } from 'date-fns';
import { Animal } from '../types';

const MedicalOverview: React.FC = () => {
  const [animals, setAnimals] = React.useState<Animal[]>([]);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Medical Overview
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Animal Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Treatment</TableCell>
              <TableCell>Veterinarian</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {animals.flatMap(animal => 
              animal.medicalHistory.map(record => (
                <TableRow key={record.id}>
                  <TableCell>{animal.name}</TableCell>
                  <TableCell>{format(record.date, 'dd/MM/yyyy')}</TableCell>
                  <TableCell>{record.description}</TableCell>
                  <TableCell>{record.treatment}</TableCell>
                  <TableCell>{record.veterinarian}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MedicalOverview; 
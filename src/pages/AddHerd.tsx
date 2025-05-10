import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  Box, 
  Typography,
  Paper 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Herd } from '../types';

const AddHerd: React.FC = () => {
  const navigate = useNavigate();
  const [herd, setHerd] = useState<Partial<Herd>>({
    name: '',
    species: '',
    size: 0
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add herd logic here
    navigate('/');
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Add New Herd
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Herd Name"
          value={herd.name}
          onChange={(e) => setHerd({ ...herd, name: e.target.value })}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Species"
          value={herd.species}
          onChange={(e) => setHerd({ ...herd, species: e.target.value })}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Size"
          type="number"
          value={herd.size}
          onChange={(e) => setHerd({ ...herd, size: parseInt(e.target.value) })}
          margin="normal"
          required
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary"
          sx={{ mt: 2 }}
        >
          Add Herd
        </Button>
      </Box>
    </Paper>
  );
};

export default AddHerd; 
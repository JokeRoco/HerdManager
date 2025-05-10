import React, { useState } from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  CardMedia,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
  Chip,
  IconButton,
  Tooltip
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { 
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Pets as PetsIcon
} from '@mui/icons-material';
import { Herd, Animal } from '../types';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

const HerdOverview: React.FC = () => {
  const [herds, setHerds] = useState<Herd[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedHerd, setSelectedHerd] = useState<Herd | null>(null);

  const navigate = useNavigate();

  const handleAddHerd = (herd: Herd) => {
    setHerds([...herds, herd]);
    setOpenDialog(false);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 4 
      }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Herd Overview
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpenDialog(true)}
          sx={{
            borderRadius: '20px',
            textTransform: 'none',
            px: 3
          }}
        >
          Add New Herd
        </Button>
      </Box>
      
      <Grid container spacing={3}>
        {herds.map((herd, index) => (
          <Grid item xs={12} sm={6} md={4} key={herd.id}>
            <MotionCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 3
                }
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={`https://source.unsplash.com/random/800x600/?${herd.species}`}
                alt={herd.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography variant="h6" component="div">
                    {herd.name}
                  </Typography>
                  <Box>
                    <Tooltip title="Edit">
                      <IconButton size="small">
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton size="small" color="error">
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Chip 
                    icon={<PetsIcon />} 
                    label={herd.species} 
                    size="small"
                    sx={{ mr: 1 }}
                  />
                  <Chip 
                    label={`${herd.size} animals`} 
                    size="small"
                    variant="outlined"
                  />
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Last updated: {new Date().toLocaleDateString()}
                </Typography>

                <Button 
                  variant="outlined" 
                  fullWidth
                  onClick={() => navigate(`/herd/${herd.id}`)}
                  sx={{ 
                    borderRadius: '20px',
                    textTransform: 'none'
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>

      <Dialog 
        open={openDialog} 
        onClose={() => setOpenDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          {selectedHerd ? 'Edit Herd' : 'Add New Herd'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <TextField
              fullWidth
              label="Herd Name"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Species"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Size"
              type="number"
              margin="normal"
              required
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpenDialog(false)}>
            {selectedHerd ? 'Save Changes' : 'Add Herd'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default HerdOverview; 
import React from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography,
  List,
  ListItem,
  ListItemText 
} from '@mui/material';
import { Animal } from '../types';

const BreedsOverview: React.FC = () => {
  const [animals, setAnimals] = React.useState<Animal[]>([]);

  const breeds = React.useMemo(() => {
    const breedMap = new Map<string, number>();
    animals.forEach(animal => {
      breedMap.set(animal.breed, (breedMap.get(animal.breed) || 0) + 1);
    });
    return Array.from(breedMap.entries());
  }, [animals]);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Breeds Overview
      </Typography>
      <Grid container spacing={3}>
        {breeds.map(([breed, count]) => (
          <Grid item xs={12} sm={6} md={4} key={breed}>
            <Card>
              <CardContent>
                <Typography variant="h6">{breed}</Typography>
                <Typography>Count: {count}</Typography>
                <List>
                  {animals
                    .filter(animal => animal.breed === breed)
                    .map(animal => (
                      <ListItem key={animal.id}>
                        <ListItemText primary={animal.name} />
                      </ListItem>
                    ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BreedsOverview; 
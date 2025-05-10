import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Layout from './components/Layout';
import HerdOverview from './pages/HerdOverview';
import MedicalOverview from './pages/MedicalOverview';
import BreedsOverview from './pages/BreedsOverview';
import AddHerd from './pages/AddHerd';
import AnimalDetail from './pages/AnimalDetail';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E7D32', // Green shade
    },
    secondary: {
      main: '#FFA000', // Amber shade
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HerdOverview />} />
            <Route path="/medical" element={<MedicalOverview />} />
            <Route path="/breeds" element={<BreedsOverview />} />
            <Route path="/add-herd" element={<AddHerd />} />
            <Route path="/animal/:id" element={<AnimalDetail />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App; 
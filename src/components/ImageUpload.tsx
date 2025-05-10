import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Typography,
  CircularProgress 
} from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
  currentImage?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload, currentImage }) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      try {
        onImageUpload(file);
      } finally {
        setIsUploading(false);
      }
    }
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      {currentImage && (
        <Box sx={{ mb: 2 }}>
          <img 
            src={currentImage} 
            alt="Current" 
            style={{ maxWidth: '200px', maxHeight: '200px' }} 
          />
        </Box>
      )}
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="image-upload"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="image-upload">
        <Button
          variant="contained"
          component="span"
          startIcon={isUploading ? <CircularProgress size={20} /> : <CloudUpload />}
          disabled={isUploading}
        >
          {isUploading ? 'Uploading...' : 'Upload Image'}
        </Button>
      </label>
    </Box>
  );
};

export default ImageUpload; 
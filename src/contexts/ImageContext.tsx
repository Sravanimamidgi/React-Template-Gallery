import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ImageContextProps {
  selectedImage: string;
  setSelectedImage: (image: string) => void;
}

const ImageContext = createContext<ImageContextProps | undefined>(undefined);

export const ImageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState<string>('');

  return (
    <ImageContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = (): ImageContextProps => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return context;
};

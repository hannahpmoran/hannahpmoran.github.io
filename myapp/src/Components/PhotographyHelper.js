import React from 'react';
import styled from 'styled-components';

const PhotographyHelper = ({ images }) => {
  return (
    <GalleryContainer>
      {/* Map through the images and display them */}
      {images.map((image, index) => (
        <Image key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
    </GalleryContainer>
  );
};

// Styled components for gallery and images
const GalleryContainer = styled.div`
  display: grid;
  flex-wrap: wrap; // Allow images to wrap to the next line
  justify-content: space-evenly; // Space images evenly in the container
  gap: 10px; // Adjust gap between images
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adjust the minimum size as needed */
  
`;

const Image = styled.img`
  width: 100%; // Adjust width as desired
  height: auto; // Maintain aspect ratio
  border-radius: 2px; // Optional: Add some border-radius for styling
  object-fit:cover;
  gap: 10px;
`;

export default PhotographyHelper;

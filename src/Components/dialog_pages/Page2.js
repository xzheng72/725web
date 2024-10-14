import React from 'react';
import dpGif from '../../Assets/dp.gif';
import { Box, Button, Link, Modal, ModalDialog, Typography } from '@mui/joy';

const Page2 = () => {
  return (
    <Box>
      <Typography id="privacy-modal-title" level="h2" paddingBottom={'10px'}>
        Your Data Privacy Matters
      </Typography>
      <Typography id="privacy-modal-description" textColor="text.tertiary">
        We use Differential Privacy to ensure your data is protected and remains
        confidential while enhancing our services.
      </Typography>
      <Box
        sx={{
          width: '100%', // Take full width of the parent
          display: 'flex', // Use flexbox for layout

          flexDirection: 'row',
          justifyContent: 'center', // Space out items to the left, center, and right
          alignItems: 'center', // Align items vertically in the center
          padding: '16px', // Optional padding
        }}
      >
        <img
          src={dpGif} // Adjust path if necessary
          alt="Animated GIF"
          style={{
            width: '100%', // Set width to 100% of the Box
            height: 'auto', // Maintain aspect ratio
          }}
        />
      </Box>
    </Box>
  );
};

export default Page2;

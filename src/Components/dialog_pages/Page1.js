import React from 'react';
import Lottie from 'lottie-react';
import { Box, Button, Link, Modal, ModalDialog, Typography } from '@mui/joy';
import Anim from '../../lotties/Animation2.json';

const Page1 = () => {
  return (
    <div className="animation-dialog-page">
      <Typography id="privacy-modal-title" level="h2" paddingBottom={'10px'}>
        Help Advance Health Research
      </Typography>
      <Typography id="privacy-modal-description" textColor="text.tertiary">
        By sharing accurate information, you contribute to vital health research
        that can benefit others and improve community well-being. Your input
        matters!
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
        <Lottie
          style={{ width: '300px', height: '300px' }}
          animationData={Anim}
          loop
        />
      </Box>
    </div>
  );
};

export default Page1;

import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: 'white', padding: '10px 0', textAlign: 'center' }}>
      <Typography variant="body2">
        © 2025 Kelsey Roche. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
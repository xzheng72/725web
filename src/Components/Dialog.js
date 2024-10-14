import { Box, Button, Link, Modal, ModalDialog, Typography } from '@mui/joy';
import React, { useState } from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Page1 from './dialog_pages/Page1';
import Page2 from './dialog_pages/Page2';
import Page3 from './dialog_pages/Page3';

const darkTheme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        // Customize dark palette if needed
      },
    },
  },
});

const Dialog = ({ open, setOpen }) => {
  const [page, setPage] = useState(0);
  const renderContent = (currentPage) => {
    if (currentPage === 0) {
      return <Page1 />;
    } else if (currentPage === 1) {
      return <Page2 />;
    } else {
      return <Page3 />;
    }
  };
  return (
    <CssVarsProvider theme={darkTheme} defaultMode="dark">
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          sx={(theme) => ({
            width: '600px',
            [theme.breakpoints.only('xs')]: {
              width: '100%',
              top: 'unset',
              bottom: 0,
              left: 0,
              right: 0,
              borderRadius: 0,
              transform: 'none',
            },
          })}
          aria-labelledby="privacy-modal-title"
          aria-describedby="privacy-modal-description"
        >
          {renderContent(page)}
          <Box
            sx={{
              mt: 1,
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row-reverse' },
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box display="flex" gap={1}>
              <Button
                variant="outlined"
                color="neutral"
                onClick={() => {
                  setPage(0);
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button
                variant="solid"
                color="primary"
                onClick={() => {
                  if (page === 2) {
                    setOpen(false);
                  }
                  setPage((page + 1) % 3);
                }}
              >
                {page === 2 ? 'Submit' : 'Continue'}
              </Button>
            </Box>
            {page === 1 && (
              <Link
                href="https://en.wikipedia.org/wiki/Differential_privacy"
                color="primary"
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Security attributes
              >
                Learn more about Differential Privacy.
              </Link>
            )}
          </Box>
        </ModalDialog>
      </Modal>
    </CssVarsProvider>
  );
};

export default Dialog;

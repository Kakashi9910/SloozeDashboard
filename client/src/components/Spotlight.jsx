import { Box, Typography, Button, Paper } from '@mui/material';

const Spotlight = () => {
  return (
    <Paper sx={{ p: 2, height: '100%', bgcolor: 'white' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6">Spotlight</Typography>
        <Button 
          variant="text" 
          sx={{ 
            color: '#5B5BF3',
            fontSize: '0.75rem'
          }}
        >
          ALL REGIONS
        </Button>
      </Box>

      <Box sx={{ mb: 3, position: 'relative' }}>
        <Box
          component="img"
          src="/images/worldmap.svg"
          alt="World Map"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            opacity: 1
          }}
        />
      </Box>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button 
          variant="outlined" 
          sx={{ 
            color: 'text.secondary',
            borderColor: 'divider',
            '&:hover': {
              borderColor: 'primary.main'
            }
          }}
        >
          SUPPLIERS
        </Button>
        <Button 
          variant="contained" 
          sx={{ 
            bgcolor: '#5B5BF3',
            '&:hover': {
              bgcolor: '#4949d9'
            }
          }}
        >
          CLIENTS
        </Button>
      </Box>
    </Paper>
  );
};

export default Spotlight;
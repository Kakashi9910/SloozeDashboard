import { Box, Typography, Chip, Avatar } from '@mui/material';

const UserInfo = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      p: 2,
      mb: 3
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar sx={{ bgcolor: '#5B5BF3', width: 48, height: 48 }}>R</Avatar>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="h6">Hello, Rahul</Typography>
            <Chip 
              label="CUSTOMER" 
              size="small" 
              sx={{ 
                bgcolor: '#5B5BF3',
                color: 'white',
                height: '20px',
                fontSize: '0.75rem'
              }} 
            />
          </Box>
          <Typography variant="body2" color="text.secondary">
            ORLE PVT. LTD.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="caption" color="text.secondary" sx={{ mr: 1 }}>
          LAST 30 DAYS
        </Typography>
        <Box component="span" sx={{ color: 'text.secondary' }}>→</Box>
      </Box>
    </Box>
  );
};

export default UserInfo;
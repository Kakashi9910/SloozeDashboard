import { Box, IconButton, Typography, Chip, InputBase } from '@mui/material';
import { Search, NotificationsNone, Settings } from '@mui/icons-material';

const Header = () => {
  return (
    <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        p: 1,
        bgcolor: '#5B5BF3',
        color: 'white',
        height: '64px',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        borderBottom: 1
    }}>
      {/* Left side */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton color="inherit" size="small">
          {/* <Box component="img" src="/menu.svg" sx={{ width: 24, height: 24 }} /> */}
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 128 128">
<path fill="#fff" d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z"></path><path fill="#444b54" d="M64,117c-29.2,0-53-23.8-53-53s23.8-53,53-53s53,23.8,53,53S93.2,117,64,117z M64,17c-25.9,0-47,21.1-47,47s21.1,47,47,47s47-21.1,47-47S89.9,17,64,17z"></path><path fill="#444b54" d="M86.5 52h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 52 86.5 52zM86.5 67h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 67 86.5 67z"></path><g><path fill="#444b54" d="M86.5,82h-45c-1.7,0-3-1.3-3-3s1.3-3,3-3h45c1.7,0,3,1.3,3,3S88.2,82,86.5,82z"></path></g>
</svg>
        </IconButton>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          bgcolor: 'rgba(255,255,255,0.1)', 
          borderRadius: 1,
          px: 2,
          py: 0.5,
          width: 240
        }}>
          <Search sx={{ mr: 1, fontSize: 20 }} />
          <InputBase 
            placeholder="Search" 
            sx={{ 
              color: 'inherit',
              '& input::placeholder': {
                color: 'rgba(255,255,255,0.7)',
                opacity: 1
              }
            }}
          />
        </Box>
      </Box>

      {/* Right side */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton color="inherit" size="small">
          <NotificationsNone />
        </IconButton>
        <IconButton color="inherit" size="small">
          <Settings />
        </IconButton>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1,
          bgcolor: 'rgba(255,255,255,0.1)',
          borderRadius: 1,
          px: 2,
          py: 0.5
        }}>
          <Typography variant="body2">ETLS PVT. LTD.</Typography>
          <Box 
            component="img" 
            src="/images/me.jpg" 
            sx={{ 
              width: 24, 
              height: 24, 
              borderRadius: '50%' 
            }} 
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
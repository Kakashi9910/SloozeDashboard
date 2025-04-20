import { Box, IconButton, Tooltip } from '@mui/material';
import {
  Dashboard,
  Inventory,
  Assignment,
  LocalShipping,
  Assessment,
  Settings,
  Help,
} from '@mui/icons-material';

const Sidebar = () => {
  const menuItems = [
    { icon: <Dashboard />, title: 'Dashboard' },
    { icon: <Inventory />, title: 'Inventory' },
    { icon: <Assignment />, title: 'Orders' },
    { icon: <LocalShipping />, title: 'Shipments' },
    { icon: <Assessment />, title: 'Analytics' },
    { icon: <Settings />, title: 'Settings' },
  ];

  return (
    <Box
      sx={{
        width: 60,
        height: '100vh',
        bgcolor: 'white',
        borderRight: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 2
      }}
    >
      <Box sx={{ mb: 4 }}>
        <img src="/images/logo.png" alt="Logo" width="40" height="40" />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {menuItems.map((item, index) => (
          <Tooltip key={index} title={item.title} placement="right">
            <IconButton
              sx={{
                color: index === 0 ? 'primary.main' : 'text.secondary',
                '&:hover': { color: 'primary.main' },
              }}
            >
              {item.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Box>

      <Box sx={{ mt: 'auto' }}>
        <Tooltip title="Help" placement="right">
          <IconButton sx={{ color: 'text.secondary' }}>
            <Help />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Sidebar;
import { Box, Typography, Button, Paper } from '@mui/material';

const topItemsSold = [
  { id: 1, name: 'Automotive Parts', value: '850 Units' },
  { id: 2, name: 'Steel Sheets', value: '430 Units' },
  { id: 3, name: 'Electronic Parts', value: '300 Units' },
  { id: 4, name: 'Plastic Materials', value: '400 Units' },
  { id: 5, name: 'Office Equipments', value: '150 Units' },
];

const topItemsPurchased = [
  { id: 1, name: 'Office Equipments', value: '₹2,27,459' },
  { id: 2, name: 'Steel Sheets', value: '₹2,27,459' },
  { id: 3, name: 'Plastic Materials', value: '₹2,27,459' },
  { id: 4, name: 'Electronic Parts', value: '₹2,27,459' },
  { id: 5, name: 'Automotive Parts', value: '₹2,27,459' },
];

const TopItems = () => {
  return (
    <Box sx={{ display: 'flex', gap: 3 }}>
      {/* Top Items Sold */}
      <Paper sx={{ p: 2, flex: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h6">Top Items Sold</Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button 
              variant="outlined" 
              size="small"
              sx={{ 
                color: 'text.secondary',
                borderColor: 'divider'
              }}
            >
              VALUE
            </Button>
            <Button 
              variant="contained" 
              size="small"
              sx={{ bgcolor: '#5B5BF3' }}
            >
              VOL.
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {topItemsSold.map((item) => (
            <Box 
              key={item.id}
              sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                p: 1.5,
                bgcolor: '#F8F9FA',
                borderRadius: 1
              }}
            >
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Typography color="text.secondary">#{item.id}</Typography>
                <Typography>{item.name}</Typography>
              </Box>
              <Typography>{item.value}</Typography>
            </Box>
          ))}
        </Box>
      </Paper>

      {/* Top Items Purchased */}
      <Paper sx={{ p: 2, flex: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h6">Top Items Purchased</Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button 
              variant="outlined" 
              size="small"
              sx={{ 
                color: 'text.secondary',
                borderColor: 'divider'
              }}
            >
              VOL.
            </Button>
            <Button 
              variant="contained" 
              size="small"
              sx={{ bgcolor: '#5B5BF3' }}
            >
              VALUE
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {topItemsPurchased.map((item) => (
            <Box 
              key={item.id}
              sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                p: 1.5,
                bgcolor: '#F8F9FA',
                borderRadius: 1
              }}
            >
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Typography color="text.secondary">#{item.id}</Typography>
                <Typography>{item.name}</Typography>
              </Box>
              <Typography>{item.value}</Typography>
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default TopItems;
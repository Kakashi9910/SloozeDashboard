import { Box, Typography, Button, Paper, Grid } from '@mui/material';
import { FilterList } from '@mui/icons-material';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const shipmentDetails = {
  id: '#003455MNP',
  shipmentId: '#0124BCD',
  from: '87 Some Address',
  to: '15 Some Address',
  category: 'Electronics',
  weight: '329 kg',
  destination: 'Bangalore',
  eta: '2 Hrs'
};

const ShipmentAnalytics = () => {
  return (
    <Paper sx={{ p: 3, height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">Shipment Analytics</Typography>
        <Button 
          startIcon={<FilterList />} 
          variant="outlined" 
          size="small"
          sx={{ 
            textTransform: 'uppercase',
            color: '#5B5BF3',
            borderColor: '#5B5BF3'
          }}
        >
          Filters
        </Button>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ mb: 1 }}
        >
          Shipment ID
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            {shipmentDetails.id}
          </Typography>
          <Box sx={{ 
            width: 8, 
            height: 8, 
            borderRadius: '50%', 
            bgcolor: '#4CAF50' 
          }} />
        </Box>

        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2,
          color: 'text.secondary',
          mb: 3
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ 
              width: 8, 
              height: 8, 
              borderRadius: '50%', 
              bgcolor: '#4CAF50' 
            }} />
            <Typography>{shipmentDetails.from}</Typography>
          </Box>
          <Typography color="#5B5BF3">→</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ 
              width: 8, 
              height: 8, 
              borderRadius: '50%', 
              bgcolor: '#5B5BF3' 
            }} />
            <Typography>{shipmentDetails.to}</Typography>
          </Box>
        </Box>

        <Box sx={{ height: 130, borderRadius: 1, overflow: 'hidden' }}>
          <MapContainer 
            center={[51.505, -0.09]} 
            zoom={13} 
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </Box>

        <Grid container spacing={3}>
          <Grid item>
            <Typography variant="caption" color="text.secondary">
              Shipment ID
            </Typography>
            <Typography>{shipmentDetails.shipmentId}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" color="text.secondary">
              Category
            </Typography>
            <Typography>{shipmentDetails.category}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" color="text.secondary">
              Total Weight
            </Typography>
            <Typography>{shipmentDetails.weight}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" color="text.secondary">
              Destination
            </Typography>
            <Typography>{shipmentDetails.destination}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" color="text.secondary">
              Est. Arrival
            </Typography>
            <Typography>{shipmentDetails.eta}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default ShipmentAnalytics;
import { Grid, Paper, Box, Typography, IconButton,Button } from "@mui/material";
import {
  Payment,
  AttachMoney,
  ShoppingCart,
  LocalShipping,
} from "@mui/icons-material";
import ShipmentAnalytics from "./ShipmentsAnalytics";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Spotlight from "./Spotlight";
import TopItems from "./TopItems";


const chartData = [
    { day: 'Mon', sales: 300, purchases: 200 },
    { day: 'Tue', sales: 400, purchases: 250 },
    { day: 'Wed', sales: 500, purchases: 400 },
    { day: 'Thu', sales: 350, purchases: 300 },
    { day: 'Fri', sales: 450, purchases: 350 },
    { day: 'Sat', sales: 400, purchases: 300 },
    { day: 'Sun', sales: 300, purchases: 200 },
  ];

const statsData = [
  {
    title: "Payment Receivables",
    amount: "₹12,40,000",
    subtitle: "OVERDUE PAYMENTS: ₹1,40,000",
    icon: <Payment />,
    color: "#00C49F",
    trend: "+3.97%",
  },
  {
    title: "Payments Made",
    amount: "₹9,50,000",
    subtitle: "NEXT PAYMENT DUE: 1 WEEK",
    icon: <AttachMoney />,
    color: "#0088FE",
  },
  {
    title: "Total Purchases",
    amount: "₹15,20,000",
    subtitle: "SUPPLIERS: 6",
    icon: <ShoppingCart />,
    color: "#FF8042",
    trend: "+3.97%",
  },
  {
    title: "Total Sales",
    amount: "₹18,00,000",
    subtitle: "TOP SELLING PRODUCT: ELECTRONICS",
    icon: <LocalShipping />,
    color: "#8884D8",
    trend: "+3.97%",
  },
];

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      {/* First Row - Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {statsData.map((stat, index) => (
          <Grid item size={{xs:12, sm:6, lg:3}}  key={index}>
            <Paper
              sx={{
                p: 2,
                bgcolor: "white",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Typography color="text.secondary">{stat.title}</Typography>
                <IconButton
                  sx={{
                    bgcolor: `${stat.color}15`,
                    color: stat.color,
                    "&:hover": { bgcolor: `${stat.color}25` },
                  }}
                >
                  {stat.icon}
                </IconButton>
              </Box>
              <Typography variant="h5" sx={{ mb: 1, fontWeight: 500 }}>
                {stat.amount}
                {stat.trend && (
                  <Typography
                    component="span"
                    variant="caption"
                    sx={{ color: "#00C49F", ml: 1 }}
                  >
                    {stat.trend}
                  </Typography>
                )}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {stat.subtitle}
              </Typography>
            </Paper>
          </Grid>
        ))}

      {/* Second row */}
      <Grid item size={{lg:5,md:4,xs:12}}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Box>
                <Typography variant="h6">Inventory Overview</Typography>
                <Typography variant="body2" color="text.secondary">
                  In-Stock Products: 3,200 Units
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button 
                  variant="outlined" 
                  size="small"
                >
                  DAILY
                </Button>
                <Button 
                  variant="contained" 
                  size="small"
                  sx={{ bgcolor: '#5B5BF3' }}
                >
                  WEEKLY
                </Button>
              </Box>
            </Box>
            <Box sx={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#5B5BF3" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="purchases" fill="#E0E0FF" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>
        <Grid item size={{lg:7,md:4,xs:12}}>
        <ShipmentAnalytics />
        </Grid>
        {/* Third row */}
        <Grid item size={{lg:5,md:4,xs:12}}>
            <Spotlight/>
        </Grid>
        <Grid item size={{lg:7,md:4,xs:12}}>
            <TopItems/>
        </Grid>
      </Grid>

    </Box>
  );
};

export default Dashboard;

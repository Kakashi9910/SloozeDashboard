import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5B5BF3",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
        }}
      >
        <Box
          component="nav"
          sx={{
            width: { sm: 60 },
            flexShrink: { sm: 0 },
            display: { xs: isMobileOpen ? "block" : "none", sm: "block" },
          }}
        >
          <Sidebar onClose={handleDrawerToggle}/>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            width: { sm: `calc(100% - 60px)` },
            height: "100vh", 
            overflow: "auto",
            bgcolor: '#f5f5f5'
          }}
        >
          <Header onMenuClick={handleDrawerToggle} />
          <UserInfo />
          <Dashboard />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;

import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import { BorderBottom } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5B5BF3",
    },
    background: {
      default: "#f5f5f5",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          minHeight: "100vh",
          // width: "100vw",
          overflow: "hidden",
        }}
      >
        <Sidebar />
        <Box sx={{ width: "100%", height: "100vh", overflow: "auto",bgcolor:'#f5f5f5' }}>
          <Header/>

          <UserInfo />
          <Dashboard />
        </Box>

        {/* <Dashboard /> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;

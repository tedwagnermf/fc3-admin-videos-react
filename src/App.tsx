import ThemeProvider from "@mui/material/styles/ThemeProvider";
import {
  Box, Typography,
} from "@mui/material";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { appTheme } from "./config/theme";
import { Routes, Route } from "react-router-dom";
import { CategoryCreate } from "./features/categories/CategoryCreate";
import { CategoryEdit } from "./features/categories/CategoryEdit";
import { CategoryList } from "./features/categories/CategoryList";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        component="main"
        sx={{
          height: "100vh",
          backgroundColor: (theme) => theme.palette.grey[900],
        }}
      >
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<CategoryList />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/categories/create" element={<CategoryCreate /> } />
            <Route path="/categories/edit/:id" element={<CategoryEdit /> } />
            <Route path="/categories/list" element={<CategoryList /> } />

            <Route path="*" element={
              <Box sx={{color: "white"}}>
                <Typography variant="h1">404</Typography>
                <Typography variant="h2">Page not found</Typography>
              </Box>
              
              } />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;

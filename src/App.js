import { ThemeProvider } from "@mui/material";
import "./App.css";
import Layout from "./Layout";
import Master from "./Master";
import theme from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Master />
      </Layout>
    </ThemeProvider>
  );
}

export default App;

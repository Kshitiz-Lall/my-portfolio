import { ThemeProvider } from "@mui/material";
import "./App.css";
import Layout from "./Layout";
import theme from "./Theme";
import Project from "./Components/Project";
import Introduction from "./Components/Introduction";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Introduction />
        <Project />
      </Layout>
    </ThemeProvider>
  );
}

export default App;

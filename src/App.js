import { ThemeProvider } from "@mui/material";
import "./App.css";
import Hobby from "./Components/Hobby";
import Introduction from "./Components/Introduction";
import Project from "./Components/Project";
import MyTimeline from "./Components/Timeline";
import Layout from "./Layout";
import theme from "./Theme";
import ContactMe from "./Components/ContactMe";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Introduction />
        <MyTimeline />
        <Project />
        <Hobby />
        <ContactMe />
      </Layout>
    </ThemeProvider>
  );
}

export default App;

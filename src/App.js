import logo from "./logo.svg";
import "./App.css";
import Grid from "@mui/material/Grid";
import Sidebar from "./component/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Settings from "./setting/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Grid container>
      <Grid item xs={2} >
      <Sidebar />
        </Grid>
        <Grid item xs={10} >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        </Grid>
      </Grid>
        
        
        {/*  <Settings /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

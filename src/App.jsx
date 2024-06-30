
import './App.css';
import { All } from './Component/All';
import { Fullstack } from './Component/Fullstack';
import { Datascience } from './Component/Datascience';
import { Career } from './Component/Career';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Cybersecurity } from './Component/Cybersecurity';

function App() {
  var navigate = useNavigate();
  return (
    <div className="App">
      <div style={{marginTop:"20px"}}>

      </div>
      <AppBar position="static" style={{ marginBottom: "20px" }}>
        <Toolbar style={{ justifyContent: "center" }}>
          <div className="nav">
            <Button className="active" variant="text" color="inherit" onClick={() => navigate("/all")}>All</Button>
            <Button variant="text" color="inherit" onClick={() => navigate("fullstack")}>Fullstack Development</Button>
            <Button variant="text" color="inherit" onClick={() => navigate("/datascience")}>DataScience</Button>
            <Button variant="text" color="inherit" onClick={() => navigate("/cyberSecurity")}>Cybersecurity</Button>
            <Button variant="text" color="inherit" onClick={() => navigate("/career")}>Career</Button>
          </div>
        </Toolbar>
      </AppBar>
      
      <Routes>
        <Route path="/all" element={<All />} />
        <Route path="/fullstack" element={<Fullstack />} />
        <Route path="/datascience" element={<Datascience />} />
        <Route path="/cyberSecurity" element={<Cybersecurity />} />
        <Route path="/career" element={<Career />} />
      </Routes>

      
    </div>
  );
}
export default App;
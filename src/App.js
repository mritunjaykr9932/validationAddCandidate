import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SideBar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";


function App() {
  return (
    <BrowserRouter>
    <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          
          <Route path="/analytics" element={<Analytics />} />
          

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    
    </BrowserRouter>
  );
}

export default App;

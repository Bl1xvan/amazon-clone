import Login from "./components/Login/Login"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './Color.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>Welcome!</>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

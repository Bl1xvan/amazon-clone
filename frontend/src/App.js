import Authorization from "./components/Authorization"
import CheckOut from "./components/CheckOut/CheckOut"
import Home from "./components/Home/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './Color.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authorization />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </Router>
  );
}

export default App;

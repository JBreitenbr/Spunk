import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Callback from "./Callback";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Spunk" element={<Home />} />
        <Route path="/Spunk/redirect" element={<Callback />} />
      </Routes>
    </Router>
  );
}

export default App;

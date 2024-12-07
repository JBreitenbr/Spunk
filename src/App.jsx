import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Callback from "./Callback";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redirect" element={<Callback />} />
      </Routes>
    </Router>
  );
}

export default App;

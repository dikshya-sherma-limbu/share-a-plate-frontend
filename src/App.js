import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

import Homepage from "./pages/Homepage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/homePage" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

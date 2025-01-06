
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Tests from "./pages/Test";
import Homepage from "./pages/Homepage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/homePage" element={<Homepage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/test" element={<Tests />} />
        </Routes>
      </Router>
    </div>
}
export default App;

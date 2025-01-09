import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/homePage" element={<Homepage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

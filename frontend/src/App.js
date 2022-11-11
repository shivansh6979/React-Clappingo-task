import "./App.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homescreen from "./Homescreen";
import "./styles.css";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/Login" element={<Login />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

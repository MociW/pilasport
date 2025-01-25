import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Product from "./Pages/Product/Product";
import Project from "./Pages/Project/Project";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Project />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </Router>
    );
}

export default App;

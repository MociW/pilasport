import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Product from "./Pages/Product/Product";
import ProjectList from "./pages/ProjectList/ProjectList";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Project from "./pages/Project/Project";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Project />} />
                <Route path="/product" element={<Product />} />
                <Route path="/project/:category" element={<ProjectList />} />
                <Route
                    path="/project/:category/:id"
                    element={<ProjectDetail />}
                />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </Router>
    );
}

export default App;

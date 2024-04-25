import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Service from "./pages/service/Service";
import Blog from "./pages/blog/Blog";
import Careers from "./pages/careers/Careers";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { NotFound } from "./pages/notFound/NotFound";
import Product from "./pages/products/Product";
import Single from "./pages/single-route/Single";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/product" element={<Product />} />
        <Route path="/single" element={<Single />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

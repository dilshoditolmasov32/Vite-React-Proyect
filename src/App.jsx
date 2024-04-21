import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Service from "./pages/service/Service";
import Blog from "./pages/blog/Blog";
import Careers from "./pages/careers/Careers";
import Footer from "./components/footer/Footer";
import Card from "./components/cards/Card";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
// import Static from "./static/Static";

function App() {
  return (
    <>
      <Header />
      {/* <Static /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Careers" element={<Careers />} />
      </Routes>
      <Card />
      <Footer />
    </>
  );
}

export default App;

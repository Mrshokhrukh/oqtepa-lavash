import { BrowserRouter, Route, Routes } from "react-router-dom";
import app from "./style/main.module.scss";
import Layout from "./routes/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Branches from "./pages/branches/Branches";
import AuthModal from "./components/authModal/AuthModal";

const App = () => {
  return (
    <div className={app.container}>
      <BrowserRouter>
        <div>
          <Layout />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="branches" element={<Branches />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

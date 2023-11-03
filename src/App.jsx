import { BrowserRouter, Route, Routes } from "react-router-dom";
import app from "./style/main.module.scss";
import Layout from "./routes/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
const App = () => {
  return (
    <div className={app.container}>
      <BrowserRouter>
        <div className="header">
          <Layout />
        </div>
        <div className={app.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

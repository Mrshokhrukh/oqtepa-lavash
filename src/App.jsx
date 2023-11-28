import { BrowserRouter, Route, Routes } from "react-router-dom";
import app from "./style/main.module.scss";
import "./style/universal.scss";
import Layout from "./routes/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Branches from "./pages/branches/Branches";
import AuthModal from "./components/authModal/AuthModal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./redux/authSlice";
import Profile from "./pages/profile/Profile";
import User from "./routes/User";
import Cart from "./pages/cart/Cart";
import History from "./pages/history/History";
import Locations from "./pages/locations/Locations";
import Favorites from "./pages/favorites/Favorites";
import NoMatch from "./pages/noMatch/NoMatch";
import { AuthProvider } from "./context/Context";
import ProtectedRoute from "./context/ProtectedRoute";

const App = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    let isTokenHas = JSON.parse(localStorage.getItem("token"));
    if (isTokenHas) {
      dispatch(login());
    } else {
      dispatch(logout());
    }
  }, []);
  return (
    <div className={app.container}>
      <BrowserRouter>
        <div>
          <Layout />
        </div>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="branches" element={<Branches />} />
            <Route path="contact" element={<Contact />} />

            <Route path="user" element={<User />}>
              <ProtectedRoute
                path="profile"
                element={<Profile />}
              ></ProtectedRoute>
              <ProtectedRoute path="cart" element={<Cart />}></ProtectedRoute>
              <ProtectedRoute
                path="history"
                element={<History />}
              ></ProtectedRoute>
              <ProtectedRoute
                path="locations"
                element={<Locations />}
              ></ProtectedRoute>
              <ProtectedRoute
                path="favorites"
                element={<Favorites />}
              ></ProtectedRoute>
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;

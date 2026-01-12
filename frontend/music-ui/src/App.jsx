import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navBar";
import PlayerBar from "./components/playerBar";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import ArtistPage from "./pages/artistPage";
import PrivateRoute from "./components/privateRoute";
import LandingPage from "./pages/landingPage";

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}

      {/* ✅ ALL ROUTES MUST BE INSIDE <Routes> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/artist/:id"
          element={
            <PrivateRoute>
              <ArtistPage />
            </PrivateRoute>
          }
        />
      </Routes>

      <PlayerBar />
    </>
  );
}

export default App;

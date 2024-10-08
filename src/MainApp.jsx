import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Series from "./pages/Series";
import MovieDetails from "./pages/MovieDetails";
import { Toaster } from "react-hot-toast";
import Profile from "./pages/Profile";
import SeriesDetails from "./pages/SeriesDetails";
import About from "./pages/About";
import Footer from "./components/Footer";

function MainApp() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:title" element={<MovieDetails />} />
        <Route path="/series/:title" element={<SeriesDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/series" element={<Series />} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
      <Toaster
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </>
  );
}

export default MainApp;

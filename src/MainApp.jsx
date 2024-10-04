import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Series from './pages/Series'
import MovieDetails from './pages/MovieDetails'

function MainApp() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/login' && location.pathname !== '/signup' && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:title" element={<MovieDetails />} />
        <Route path="/series" element={<Series />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default MainApp

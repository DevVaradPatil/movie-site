import React, { useContext } from 'react';
import { auth } from '../../firebase'; // Import firebase auth for logout functionality
import Card from '../components/Card';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Profile = () => {
  const { user, favorites, favoriteSeries, setUser, setFavorites, setFavoriteSeries } = useContext(UserContext); // Include favoriteSeries
  const navigate = useNavigate();

  // Handle logout functionality
  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      setFavorites([]); // Clear favorites on logout
      setFavoriteSeries([]); // Clear series on logout
      toast.success("Logged out successfully!");
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="mx-auto p-4 px-10 bg-primary-bg w-full text-white"
      style={{
        minHeight: "calc(100vh - 74px)",
      }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Profile</h2>
        <button
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-sm transition duration-300"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Email: {user}</h3>
      </div>

      {/* Favourite Movies Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4 mt-10">Your Favourite Movies</h3>
        <div className="flex justify-start items-center gap-10 flex-wrap">
          {favorites && favorites.length > 0 ? (
            favorites.map((movie) => (
              <Card
                key={movie.id}
                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                title={movie.title}
                year={movie.release_date}
                rating={movie.vote_average}
              />
            ))
          ) : (
            <p>No favorite movies added yet!</p>
          )}
        </div>
      </div>

      {/* Favourite Series Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Your Favourite Series</h3>
        <div className="flex justify-start items-center gap-10 flex-wrap">
          {favoriteSeries && favoriteSeries.length > 0 ? (
            favoriteSeries.map((series) => (
              <Card
                key={series.id}
                image={`https://image.tmdb.org/t/p/w500/${series.poster_path}`}
                title={series.name} // Use series name for series
                year={series.first_air_date} // Use first_air_date for series
                rating={series.vote_average}
              />
            ))
          ) : (
            <p>No favorite series added yet!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

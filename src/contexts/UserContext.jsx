// src/contexts/UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import { auth, db } from '../../firebase'; // Import firebase authentication and Firestore
import { collection, getDocs, query, where, addDoc, deleteDoc } from "firebase/firestore";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('userEmail')); // Initialize with localStorage value
  const [favorites, setFavorites] = useState([]); // New state for favorite movies
  const [favoriteSeries, setFavoriteSeries] = useState([])

  // Function to save favorites to localStorage
  const saveFavoritesToLocalStorage = (favorites) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  // Listen to Firebase auth state changes and persist user in localStorage
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        const email = firebaseUser.email;
        setUser(email);
        localStorage.setItem('userEmail', email);

        // Fetch user's favorite movies from Firestore
        const q = query(collection(db, "favorites"), where("user", "==", email));
        const querySnapshot = await getDocs(q);
        const favMovies = querySnapshot.docs.map(doc => doc.data().movie);
        setFavorites(favMovies); // Store favorites in state
        saveFavoritesToLocalStorage(favMovies); // Save favorites to localStorage
      } else {
        setUser(null);
        localStorage.removeItem('userEmail');
        setFavorites([]); // Clear favorites on logout
        localStorage.removeItem('favorites'); // Clear favorites from localStorage
      }
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, []);

  // Function to add a movie to favorites
  const addFavorite = async (movie) => {
    if (user) {
      // Add movie to Firestore
      await addDoc(collection(db, "favorites"), { user, movie });
      const updatedFavorites = [...favorites, movie];
      setFavorites(updatedFavorites);
      saveFavoritesToLocalStorage(updatedFavorites); // Update localStorage
    }
  };

  // Function to remove a movie from favorites
  const removeFavorite = async (movie) => {
    if (user) {
      const movieRef = query(collection(db, "favorites"), where("user", "==", user), where("movie.title", "==", movie.title));
      const querySnapshot = await getDocs(movieRef);

      // Remove each instance of the movie from Firestore
      querySnapshot.forEach(async (docSnapshot) => {
        await deleteDoc(docSnapshot.ref); // Use docSnapshot.ref to delete the document
      });

      const updatedFavorites = favorites.filter(fav => fav.title !== movie.title);
      setFavorites(updatedFavorites);
      saveFavoritesToLocalStorage(updatedFavorites); // Update localStorage
    }
  };

  return (
    <UserContext.Provider value={{ user,setUser, favorites, setFavorites, addFavorite, removeFavorite }}>
      {children}
    </UserContext.Provider>
  );
};

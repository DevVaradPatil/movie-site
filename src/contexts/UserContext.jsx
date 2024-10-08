// src/contexts/UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import { auth, db } from '../../firebase'; // Import firebase authentication and Firestore
import { collection, getDocs, query, where, addDoc, deleteDoc } from "firebase/firestore";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('userEmail')); // Initialize with localStorage value
  const [favorites, setFavorites] = useState([]); // State for favorite movies
  const [favoriteSeries, setFavoriteSeries] = useState([]); // New state for favorite series

  // Function to save favorites (movies) to localStorage
  const saveFavoritesToLocalStorage = (favorites) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  // Function to save series to localStorage
  const saveSeriesToLocalStorage = (series) => {
    localStorage.setItem('favoriteSeries', JSON.stringify(series));
  };

  // Listen to Firebase auth state changes and persist user in localStorage
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        const email = firebaseUser.email;
        setUser(email);
        localStorage.setItem('userEmail', email);

        // Fetch user's favorite movies from Firestore
        const moviesQuery = query(collection(db, "favorites"), where("user", "==", email), where("type", "==", "movie"));
        const movieSnapshot = await getDocs(moviesQuery);
        const favMovies = movieSnapshot.docs.map(doc => doc.data().item);
        setFavorites(favMovies); 
        saveFavoritesToLocalStorage(favMovies); 

        // Fetch user's favorite series from Firestore
        const seriesQuery = query(collection(db, "favorites"), where("user", "==", email), where("type", "==", "series"));
        const seriesSnapshot = await getDocs(seriesQuery);
        const favSeries = seriesSnapshot.docs.map(doc => doc.data().item);
        setFavoriteSeries(favSeries);
        saveSeriesToLocalStorage(favSeries); 

      } else {
        setUser(null);
        localStorage.removeItem('userEmail');
        setFavorites([]); 
        setFavoriteSeries([]); 
        localStorage.removeItem('favorites'); 
        localStorage.removeItem('favoriteSeries');
      }
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, []);

  // Function to add a movie/series to favorites
  const addFavorite = async (item, type) => {
    if (user) {
      await addDoc(collection(db, "favorites"), { user, item, type });

      if (type === 'movie') {
        const updatedFavorites = [...favorites, item];
        setFavorites(updatedFavorites);
        saveFavoritesToLocalStorage(updatedFavorites);
      } else if (type === 'series') {
        
        const updatedSeries = [...favoriteSeries, item];
        setFavoriteSeries(updatedSeries);
        saveSeriesToLocalStorage(updatedSeries);
      }
    }
  };

  // Function to remove a movie/series from favorites
  const removeFavorite = async (item, type) => {
    if (user) {
      const itemRef = query(collection(db, "favorites"), where("user", "==", user), where("item.title", "==", item.title), where("type", "==", type));
      const querySnapshot = await getDocs(itemRef);

      // Remove each instance of the movie/series from Firestore
      querySnapshot.forEach(async (docSnapshot) => {
        await deleteDoc(docSnapshot.ref); // Use docSnapshot.ref to delete the document
      });

      if (type === 'movie') {
        const updatedFavorites = favorites.filter(fav => fav.title !== item.title);
        setFavorites(updatedFavorites);
        saveFavoritesToLocalStorage(updatedFavorites);
      } else if (type === 'series') {
        const updatedSeries = favoriteSeries.filter(fav => fav.name !== item.name);
        setFavoriteSeries(updatedSeries);
        saveSeriesToLocalStorage(updatedSeries);
      }
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, favorites, favoriteSeries, addFavorite, removeFavorite, setFavoriteSeries, setFavorites }}>
      {children}
    </UserContext.Provider>
  );
};

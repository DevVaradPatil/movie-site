# Cinemix

**Your movie hub.** Browse movies and TV shows, read ratings and cast details, watch trailers, and
keep a list of favourites.

**Live:** [cinemix-delta.vercel.app](https://cinemix-delta.vercel.app)

## Features

- Now-playing, popular and top-rated rails for **movies** and **TV series**
- Browse by category, plus **search** across titles
- Detail pages with rating, overview, cast and trailers
- **Sign up / log in** with Firebase Authentication
- **Favourites** for movies and series on your profile
- Responsive carousels with toast notifications

## Tech stack

React · Vite · Tailwind CSS · React Router · Firebase Auth ·
[TMDB API](https://developer.themoviedb.org/) · react-slick

## Project structure

```
src/
  pages/       Home, Series, MovieDetails, SeriesDetails, Profile, Login, Signup, About
  components/  Header, Navbar, CategoryList, Card, SearchBar, Footer, ...
  contexts/    UserContext (auth state + favourites)
  utils/api.js TMDB requests
firebase.js    Firebase config
```

## Getting started

```bash
npm install
npm run dev
```

You'll need your own [TMDB API key](https://www.themoviedb.org/settings/api) in `src/utils/api.js`
and your own Firebase project in `firebase.js`.

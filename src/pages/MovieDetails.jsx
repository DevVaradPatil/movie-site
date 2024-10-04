// import React from "react";
// import backdrop from "../assets/movie-deadpool-2-deadpool-wallpaper-preview.jpg";
// import poster from "../assets/movie_poster.jpg";
// import { IoCalendarNumber, IoFilm } from "react-icons/io5";
// import age from "../assets/plus-18-movie.png";
// import { FaStar, FaRegStar, FaStarHalfStroke } from "react-icons/fa6";
// import vote from "../assets/manual-voting.png";

// const genreMap = {
//   28: "Action",
//   12: "Adventure",
//   16: "Animation",
//   35: "Comedy",
//   80: "Crime",
//   99: "Documentary",
//   18: "Drama",
//   10751: "Family",
//   14: "Fantasy",
//   36: "History",
//   27: "Horror",
//   10402: "Music",
//   9648: "Mystery",
//   10749: "Romance",
//   878: "Science Fiction",
//   10770: "TV Movie",
//   53: "Thriller",
//   10752: "War",
//   37: "Western",
// };

// const MovieDetails = () => {
//   const ratingFloat = parseFloat(7.3);
//   const ratingOutOf5 = ratingFloat / 2;
//   const genre = genreMap[(878, 28)] || "Movie";

//   const stars = [];
//   for (let i = 1; i <= 5; i++) {
//     if (i <= Math.floor(ratingOutOf5)) {
//       stars.push(<FaStar fontSize={17} key={i} />);
//     } else if (i === Math.ceil(ratingOutOf5) && ratingOutOf5 % 1 !== 0) {
//       stars.push(<FaStarHalfStroke fontSize={17} key={i} />);
//     } else {
//       stars.push(<FaRegStar fontSize={17} key={i} />);
//     }
//   }
//   return (
//     <div>
//       <div
//         className="w-full h-[621px] relative flex flex-col justify-center items-center"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${backdrop})`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="flex items-center gap-12 text-primary-text">
//           <img className="h-[450px]" src={poster} alt="" />
//           <div className="bg-primary-bg bg-opacity-85 w-[900px] h-[500px] rounded-lg">
//             <div className="mt-7 ml-7 mr-7 mb-2 flex items-center justify-between text-primary-text">
//               <h1 className="font-bold text-[40px]">Deadpool and Wolverine</h1>
//               <div className="flex gap-2 items-center">
//                 <IoCalendarNumber fontSize={20} />
//                 <p className="text-xl">2024/7/9</p>
//               </div>
//             </div>

//             <div className="text-primary-text ml-7 mr-56">
//               <p className="text-xl">
//                 A fading celebrity decides to use a black market drug, a
//                 cell-replicating substance that temporarily creates a younger,
//                 better version of herself.
//               </p>
//             </div>

//             <div className="flex items-center justify-between mt-7">
//               <div className="ml-52 mt-7 flex flex-col items-center gap-2">
//                 <div className="flex gap-2 text-primary-text">
//                   <img className="w-7" src={vote} alt="" />
//                   <p className="text-xl">Rating</p>
//                 </div>
//                 <p className="text-2xl flex gap-1">{stars}</p>
//               </div>
//               <div className="mr-52 mt-7 flex items-center flex-col gap-2 text-xl">
//                 <p>Adult</p>
//                 <img className="w-9" src={age} alt="" />
//               </div>
//             </div>
//             <div className="flex mt-20 items-center justify-between">
//               <div className="ml-52 flex flex-col items-center gap-2">
//                 <div className="flex items-center gap-2 text-primary-text">
//                   <IoFilm fontSize={25} />
//                   <p className="text-xl">Genre</p>
//                   <div className="p-2 rounded-full bg-border-primary ml-2">
//                     <p>{genre}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieDetails;

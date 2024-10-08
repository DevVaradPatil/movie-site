import React from "react";
import AboutCard from "../components/AboutCard";
import img1 from "../assets/varad.jpg";
import img2 from "../assets/saket.jpg";
import img3 from "../assets/digvijay.jpg";
import img4 from "../assets/prathmesh.jpg";

const About = () => {
  const aboutCard = [
    {
      img: img1,
      name: "Varad Patil",
      prn: "2103044",
      gradient: "bg-gradient-to-r from-purple-800 to-blue-900",
      linkedin: "https://www.linkedin.com/in/varad-patil-web-dev/",
    },
    {
      img: img2,
      name: "Saket Patil",
      prn: "2103062",
      gradient: "bg-gradient-to-r from-yellow-800 via-orange-700 to-red-800",
      linkedin: "https://www.linkedin.com/in/saket-patil-060640228/",
    },
    {
      img: img3,
      name: "Digvijay Dawar",
      prn: "2103068",
      gradient: "bg-gradient-to-tr from-red-900 via-rose-900 to-purple-900",
      linkedin: "https://www.linkedin.com/in/digvijay-dawar-6a6011239/",
    },
    {
      img: img4,
      name: "Prathmesh Thorat",
      prn: "2103030",
      gradient: "bg-gradient-to-b from-blue-900 via-cyan-900 to-teal-800",
      linkedin: "https://www.linkedin.com/in/prathmeshrt/",
    },
  ];

  return (
    <div
      className="flex flex-col gap-10 justify-center items-center bg-primary-bg"
      style={{
        minHeight: "calc(100vh - 74px)",
      }}
    >
        <h1 className="text-5xl font-bold text-white">Our Team</h1>
        <div className="flex flex-wrap justify-center items-center gap-10">
      {aboutCard.map((item, index) => (
        <a
          href={item.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          <AboutCard aboutCard={item} gradient={item.gradient} />
        </a>
      ))}
        </div>
    </div>
  );
};

export default About;

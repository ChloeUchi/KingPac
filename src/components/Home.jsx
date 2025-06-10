import React, { useState } from "react";
import image1 from "../assets/image-home.png";
import image2 from "../assets/image-home2.png";
import image3 from "../assets/image-home3.png";
import Section1 from "./Section1";
import Section0 from "./Section0";

export default function Home() {
  const images = [image1, image2, image3];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
	<div>
    <div className="relative w-full overflow-hidden">
      <img
        src={images[current]}
        alt="slide"
        className="w-full h-full object-cover transition-all duration-1000"
      />
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-[#d9d9d9] p-2 rounded-full z-10 cursor-pointer hover:bg-[#3c3c3c] hover:text-[#fff]"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-[#d9d9d9] p-2 rounded-full z-10 cursor-pointer hover:bg-[#3c3c3c] hover:text-[#fff]"
      >
        ▶
      </button>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-7xl font-extrabold bg-opacity-50 px-4 py-2 rounded drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]">
          King Pac Industrial CO., LTD.
        </h1>
      </div>
    </div>
	<Section0 />
	  <Section1 />
	</div>
  );
}

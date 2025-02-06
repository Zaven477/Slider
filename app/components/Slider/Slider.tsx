"use client";

import Image from "next/image";
import { sliders } from "./utils";
import { useState } from "react";
import { ResponsiveSlider } from "./ResponsiveSlider";

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(sliders.length / itemsPerPage);

  const nextSlider = () => {
    setCurrentIndex((prev) => {
      if (prev + 1 < totalPages) {
        return prev + 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div className="mx-auto max-w-[1400px] flex gap-3 overflow-hidden">
      <div
        className="flex gap-3 duration-[2000ms]"
        style={{ transform: `translateX(-${currentIndex * 66}%)` }}
      >
        {sliders.map((slide) => {
          return (
            <div
              key={slide.id}
              className="shadow-md w-[335px] mt-[20px] rounded-md bg-[rgba(240,240,240,1)] cursor-pointer hidden md:flex"
              onClick={nextSlider}
            >
              <div className="ml-[10px]">
                <Image src={slide.src} alt="exclude1" className="mt-[15px]" />
                <div className="text-[32px] font-normal w-[330px] mt-[40px]">
                  {slide.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ResponsiveSlider />
    </div>
  );
};

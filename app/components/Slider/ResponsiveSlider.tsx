import Image from "next/image";
import { useState } from "react";
import { sliders } from "./utils";

export const ResponsiveSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const displaySlidesPage = 1;

  const countPages = sliders.length / displaySlidesPage;

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev + 1 < countPages) {
        return prev + 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div
      className="flex gap-5 duration-[2000ms]"
      style={{ transform: `translateX(-${currentIndex * 16.8}%)` }}
    >
      {sliders.map((slide) => {
        return (
          <div
            key={slide.id}
            className="shadow-md w-[400px] mt-40 rounded-md bg-[rgba(240,240,240,1)] cursor-pointer md:hidden"
            onClick={nextSlide}
          >
            <div className="ml-[10px] flex gap-6 items-center">
              <Image src={slide.src} alt="exclude1" className="mt-[15px]" />
              <div className="text-[24px] font-normal w-[242px] mt-[40px]">
                {slide.title}
              </div>
            </div>
            <div className="w-[326px] px-3 pt-10">
              {slide.text}
            </div>
          </div>
        );
      })}
    </div>
  );
};

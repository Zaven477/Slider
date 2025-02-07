import { useState } from "react";
import { sliders } from "./utils";

export const useSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const offset = 66;

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

  return {currentIndex, sliders, nextSlider, offset}
};

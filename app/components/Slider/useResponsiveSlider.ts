import { useEffect, useState } from "react";
import { sliders } from "./utils";

export const useResponsiveSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const offset = 16.8;

  const displaySlidesPage = 1;

  const countPages = sliders.length / displaySlidesPage;

  const [progress, setProgress] = useState<number[]>(
    new Array(countPages).fill(0)
  );

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1 < countPages ? prev + 1 : 0;

      if (nextIndex === 0) {
        setProgress(new Array(countPages).fill(0));
      }

      return nextIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = [...prevProgress];

        if (newProgress[currentIndex] < 100) {
          newProgress[currentIndex] = newProgress[currentIndex] + 2;
        }

        return newProgress;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [currentIndex]);

  return { progress, currentIndex, nextSlide, sliders, offset };
};

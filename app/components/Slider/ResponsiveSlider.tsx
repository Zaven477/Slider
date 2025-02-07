import Image from "next/image";
import { useResponsiveSlider } from "./useResponsiveSlider";

export const ResponsiveSlider = () => {
  const { progress, currentIndex, nextSlide, sliders, offset } = useResponsiveSlider();

  return (
    <div>
      <div className="flex gap-3 absolute top-60">
        {progress.map((prog, index) =>
          index === currentIndex ? (
            <div
              key={index}
              className="border w-14 h-3 rounded-full bg-[rgba(204,204,204,1)]"
            >
              <div
                className="border w-7 h-3 rounded-full bg-[rgba(28,28,28,1)]"
                style={{ width: `${prog}%` }}
              ></div>
            </div>
          ) : (
            <div
              key={index}
              className="border w-3 h-3 rounded-full bg-[rgba(204,204,204,1)]"
            ></div>
          )
        )}
      </div>
      <div
        className="flex gap-5 duration-[2000ms]"
        style={{ transform: `translateX(-${currentIndex * offset}%)` }}
      >
        {sliders.map((slide) => {
          return (
            <div
              key={slide.id}
              className="shadow-md w-full mt-40 rounded-md bg-[rgba(240,240,240,1)] cursor-pointer md:hidden"
              onClick={nextSlide}
            >
              <div className="ml-[10px] flex gap-6 items-center">
                <Image src={slide.src} alt="exclude1" className="mt-[15px]" />
                <div className="text-[24px] font-normal w-[242px] mt-[40px]">
                  {slide.title}
                </div>
              </div>
              <div className="w-[326px] px-3 pt-10">{slide.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

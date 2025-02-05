import { Slider } from "./Slider/Slider";

export const MainContent = () => {
  return (
    <div>
      <div className="w-[1400px] mx-auto flex items-center h-[60px] border-b">
        <div className="text-[rgba(165,157,255,1)] font-normal text-[40px]">
          1.0
        </div>
        <div className="ml-[535px] text-[rgba(165,157,255,1)] font-normal text-[40px]">
          Наши услуги
        </div>
      </div>
      <Slider />
    </div>
  );
};

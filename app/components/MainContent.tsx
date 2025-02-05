import { Slider } from "./Slider/Slider";

export const MainContent = () => {
  return (
    <div>
      <div className="w-full mx-auto flex items-center h-[60px] border-b px-4">
        <div className="text-[rgba(165,157,255,1)] font-normal text-[40px]">
          1.0
        </div>
        <div className="m-auto text-[rgba(165,157,255,1)] font-normal text-[40px]">
          Наши услуги
        </div>
      </div>
      <Slider />
    </div>
  );
};

import Image from "next/image";
import exclude1 from "../icons/Exclude (1).png";
import exclude2 from "../icons/Exclude (2).png";
import exclude3 from "../icons/Exclude(3).png";
import exclude4 from "../icons/Exclude (4).png";

export const Slider = () => {
  return (
    <div className="mx-auto w-[1400px] flex gap-3">
      <div className="shadow-md w-[335px] mt-[20px] rounded-md bg-[rgba(240,240,240,1)]">
        <div className="ml-[10px]">
          <Image src={exclude1} alt="exclude1" className="mt-[15px]" />
          <div className="text-[32px] font-normal w-[364px] mt-[30px]">
            Анализ текущего состояния карьеры
          </div>
        </div>
      </div>
      <div className="shadow-md w-[335px] mt-[20px] rounded-md bg-[rgba(240,240,240,1)]">
        <div className="ml-[10px]">
          <Image src={exclude2} alt="exclude2" className="mt-[15px]" />
          <div className="text-[32px] font-normal w-[364px] mt-[80px]">
            Поиск работы
          </div>
        </div>
      </div>
      <div className="shadow-md w-[335px] mt-[20px] rounded-md bg-[rgba(240,240,240,1)]">
        <div className="ml-[10px]">
          <Image src={exclude3} alt="exclude3" className="mt-[15px]" />
          <div className="text-[32px] font-normal w-[364px] mt-[30px]">
            Сопроводительные письма и резюме
          </div>
        </div>
      </div>
      <div className="shadow-md w-[335px] mt-[20px] rounded-md bg-[rgba(240,240,240,1)]">
        <div className="ml-[10px]">
          <Image src={exclude4} alt="exclude4" className="mt-[15px]" />
          <div className="text-[32px] font-normal w-[355px] mt-[30px]">
            Тренинг по презентации личного бренда
          </div>
        </div>
      </div>
    </div>
  );
};

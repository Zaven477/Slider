"use client";

import { useState } from "react";
import entranceLogo from "../../icons/Exclude.png";
import Image from "next/image";

export const ButtonMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const openDropdown = () => setOpen((prev) => !prev);

  return (
    <div className="md:hidden relative">
      <button
        className="bg-[rgba(18,18,18,1)] text-white px-2 py-0.5"
        onClick={openDropdown}
      >
        Меню
      </button>
      {isOpen && (
        <div className="absolute top-[50px] right-[10px] shadow-md flex flex-col px-4 py-4 gap-2 z-10 bg-white rounded-md">
          <a>О школе</a>
          <a>Курсы</a>
          <a>Библиотека</a>
          <div className="flex gap-2">
            <a>Вход</a>
            <Image src={entranceLogo} alt="entranceLogo" width={20} />
          </div>
        </div>
      )}
    </div>
  );
};

import Image from "next/image";
import stempsLogo from "../icons/logo-big.png";
import entranceLogo from "../icons/Exclude.png";

export const Header = () => {
  return (
    <header className="bg-[rgba(250,250,250,1)] h-[60px] border-b">
      <div className="flex items-center h-full gap-3 w-[1400px] mx-auto">
        <Image src={stempsLogo} alt="Stemps Logo" />
        <div>STEMPS</div>
        <div className="flex-1">
          <nav>
            <ul className="flex gap-6 justify-center">
              <li>
                <a>О школе</a>
              </li>
              <li>
                <a>Курсы</a>
              </li>
              <li>
                <a>Библиотека</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-3">
          <div>Вход</div>
          <Image src={entranceLogo} alt="Entrance Logo" />
        </div>
      </div>
    </header>
  );
};

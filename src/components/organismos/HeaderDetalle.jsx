import { ThemeSwitcher } from "../moleculas/ThemeSwitcher.jsx";
import { Logo } from "../atomos/Logo.jsx";

export function HeaderDetalle() {
  return (
    <header className="w-full fixed bg-background-primary-light dark:bg-background-primary-dark z-50 h-18 select-none p-4">
      <div w-full className="max-w-[1900px] mx-auto">
        <div className="flex justify-between items-center w-full relative">
          <div className="">
            <Logo />
          </div>

          <div className="flex items-center gap-4 animate-slide-in-top relative z-100">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}

import { DashboardIcon, ProfileIcon, SupportIcon } from "./icons";

export function Header() {
  return (
    <nav className="flex items-center justify-center border-b border-b-[#D9D9D9B2] pt-8 pb-5">
      <div className="max-w-max-width flex w-full items-center justify-between">
        <div />
        <div className="flex items-center gap-24">
          <button className="text-green-light flex items-center gap-3">
            <DashboardIcon />
            <span className="text-sm font-semibold">Dashboard</span>
          </button>
          <button className="bg-green-dark flex items-center justify-center gap-3 rounded-4xl px-12 py-3 text-white">
            <ProfileIcon />
            <span className="text-sm font-semibold">Perfil</span>
          </button>
          <button className="text-green-light flex items-center gap-3">
            <SupportIcon />
            <span className="text-sm font-semibold">Suporte</span>
          </button>
        </div>
        <button className="bg-green-dark flex items-center justify-center gap-3 rounded-4xl px-7 py-2 text-white">
          <span className="text-sm font-semibold">home</span>
        </button>
      </div>
    </nav>
  );
}

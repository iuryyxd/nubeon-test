import { useToggle } from "../hooks/use-toggle";
import { cn } from "../utils/cn";
import { ArrowRightIcon, AwardStarRoundedIcon } from "./ui/icons";

export function NotificationEmailItem() {
  const { value: activeDropdown, toggle } = useToggle(false);

  return (
    <>
      <button
        type="button"
        className="border-border w-full border-b py-5"
        onClick={toggle}
      >
        <li className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-orange flex size-6 items-center justify-center gap-1 rounded-full">
              <AwardStarRoundedIcon />
            </div>
            <span className="text-sm font-normal">
              Confirme o seu endereço e-mail
            </span>
          </div>

          <ArrowRightIcon
            className={cn("text-gray hover:text-orange transition-all", {
              ["text-orange rotate-90"]: activeDropdown,
            })}
          />
        </li>{" "}
      </button>
      {activeDropdown && (
        <div
          className={cn(
            "mx-auto flex max-w-[441px] flex-col items-center justify-center gap-3 pt-10 text-center",
            {
              ["animate-accordion-down"]: activeDropdown,
              ["animate-accordion-up"]: !activeDropdown,
            },
          )}
        >
          <span className="text-orange text-2xl font-semibold">
            Você precisa confirmar seu e-mail 👏
          </span>
          <p className="pb-5 text-lg font-normal">
            Confirme esse e-mail e faça parte da maior iniciativa ecológica do
            Brasil, com pequenos atos, geramos grandes diferenças! vem ser do
            #teamattos.
          </p>
          <form className="flex items-center justify-between gap-4">
            <input
              type="text"
              className="placeholder:text-gray border-border rounded-3xl border bg-transparent px-7 py-4 text-black"
              placeholder="E-mail..."
            />
            <button type="submit" className="bg-orange rounded-3xl px-6 py-4">
              <span className="text-sm font-semibold text-white">
                solicitar
              </span>
            </button>
          </form>
        </div>
      )}
    </>
  );
}

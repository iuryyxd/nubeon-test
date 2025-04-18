import { InstagramIcon, MailIcon, WhatsappIcon } from "./icons";

export function Footer() {
  return (
    <footer className="mx-auto flex items-center justify-center gap-4 py-10">
      <div className="border-border h-[37px] w-full max-w-[329px] rounded-[2.5rem] border bg-white" />
      <button
        type="button"
        className="border-border flex items-center justify-center rounded-full border bg-white p-2"
      >
        <InstagramIcon />
      </button>
      <button
        type="button"
        className="border-border flex items-center justify-center rounded-full border bg-white p-2"
      >
        <WhatsappIcon />
      </button>
      <button
        type="button"
        className="border-border flex items-center justify-center rounded-full border bg-white p-2"
      >
        <MailIcon />
      </button>
    </footer>
  );
}

import { ReactNode } from "react";
import { cn } from "../utils/cn";
import { convertDate } from "../utils/convert-date";
import { ArrowRightIcon, AwardStarRoundedIcon } from "./ui/icons";

interface NotificationItemProps {
  content: string;
  date?: Date;
  link?: string;
  icon?: ReactNode;
}

export function NotificationItem({
  content,
  date = new Date(),
  link,
  icon,
}: NotificationItemProps) {
  return (
    <li className="border-border flex items-center justify-between border-b py-5">
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "bg-green-dark flex size-6 items-center justify-center gap-1 rounded-full",
            {
              ["bg-orange"]: link,
            },
          )}
        >
          {icon ?? <AwardStarRoundedIcon />}
        </div>
        <span className="text-sm font-normal">{content}</span>
      </div>
      {link ? (
        <a href={link} target="_blank">
          <button>
            <ArrowRightIcon className="text-gray hover:text-orange transition-colors" />
          </button>
        </a>
      ) : (
        <span className="text-sm font-semibold">{convertDate(date)}</span>
      )}
    </li>
  );
}

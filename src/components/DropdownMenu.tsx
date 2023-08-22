import Link from "next/link";
import { useRef, useState } from "react";

export type TMenuItem = {
  label: string;
  subLabel?: string;
  href: string;
};

export function DropdownMenu({
  links,
  button,
}: {
  links: Array<TMenuItem>;
  button: React.ReactNode;
}) {
  const [isOpen, setOpen] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 500);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      {button}
      {isOpen && (
        <ul className="absolute -left-4 z-10 overflow-hidden rounded-lg bg-white">
          {links.map((link) => (
            <li
              key={link.label}
              className="group border-b  last:border-b-0 hover:bg-gray-100"
            >
              <Link className=" block whitespace-nowrap p-4" href={link.href}>
                <div className="link text-gray-900">{link.label}</div>
                {link.subLabel && (
                  <div className="text-sm font-medium text-gray-400">
                    {link.subLabel}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

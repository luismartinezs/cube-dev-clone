import Link from "next/link";
import { useMenuContext } from "~/components/Menu/Menu.context";

export function MenuItem({
  id,
  button,
  menu,
}: {
  id: string;
  button: React.ReactNode;
  menu: Array<{
    label: string;
    subLabel?: string;
    href: string;
  }>;
}) {
  const ctx = useMenuContext();

  return (
    <div
      onMouseEnter={() => ctx.onMouseEnter(id)}
      onMouseLeave={() => ctx.onMouseLeave()}
      className="relative"
    >
      {button}
      {ctx.activeId === id && (
        <ul className="absolute -left-4 z-10 overflow-hidden rounded-lg bg-white">
          {menu.map((link) => (
            <li
              key={link.label}
              className="group border-b last:border-b-0 hover:bg-gray-100"
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

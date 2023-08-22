import Link from "next/link";

export type TMenuItem = {
  label: string;
  subLabel?: string;
  href: string;
};

export function DropdownMenu({
  links,
  show,
}: {
  links: Array<TMenuItem>;
  show: boolean;
}) {
  if (!show) {
    return null;
  }
  return (
    <div className="absolute z-10 bg-white">
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href}>
              <div>{link.label}</div>
              {link.subLabel && <div>{link.subLabel}</div>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

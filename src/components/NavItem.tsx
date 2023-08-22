import classnames from "classnames";
import Link from "next/link";
import { useRef } from "react";
import { DropdownMenu, type TMenuItem } from "~/components/DropdownMenu";
import { useMouseOver } from "~/hooks/useMouseOver";

type TBase = {
  style?: "link" | "button";
  label: string;
};

type TMenu = TBase & { type: "menu"; menu: TMenuItem[] };
type TLink = TBase & { type: "link"; href: string };
export type TNavItem = TMenu | TLink;

export function NavItem({ item }: { item: TNavItem }) {
  const { style, label, type } = item;
  const menuRef = useRef(null);
  const isHovered = useMouseOver(menuRef.current);

  const classes = style === "button" ? "button" : "link";

  if (type === "menu") {
    const { menu } = item;
    return (
      <Link
        ref={menuRef}
        href="#"
        className={classnames("relative isolate text-white", classes)}
      >
        {label}
        <DropdownMenu links={menu} show={isHovered} />
      </Link>
    );
  }

  const { href } = item;
  return (
    <Link href={href} className={classnames("text-white", classes)}>
      {label}
    </Link>
  );
}

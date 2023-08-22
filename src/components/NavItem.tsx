import classnames from "classnames";
import Link from "next/link";
import { DropdownMenu, type TMenuItem } from "~/components/DropdownMenu";

type TBase = {
  style?: "link" | "button";
  label: string;
};

type TMenu = TBase & { type: "menu"; menu: TMenuItem[] };
type TLink = TBase & { type: "link"; href: string };
export type TNavItem = TMenu | TLink;

export function NavItem({ item }: { item: TNavItem }) {
  const { style, label, type } = item;

  const classes = style === "button" ? "button" : "link";

  if (type === "menu") {
    const { menu } = item;
    return (
      <DropdownMenu
        button={<button className={classnames(style, "my-2")}>{label}</button>}
        links={menu}
      />
    );
  }

  const { href } = item;
  return (
    <Link href={href} className={classnames("text-white", classes)}>
      {label}
    </Link>
  );
}

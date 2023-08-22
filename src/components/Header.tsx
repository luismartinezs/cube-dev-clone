import { Logo } from "~/components/Logo";
import { NavItem, type TNavItem } from "~/components/NavItem";

const navLinks: Array<TNavItem> = [
  {
    type: "menu",
    label: "Product",
    menu: [
      {
        label: "Why cube cloud?",
        href: "https://cube.dev/product/why-cube-cloud",
      },
    ],
  },
  {
    type: "menu",
    label: "Use Cases",
    menu: [
      {
        label: "Why cube cloud?",
        href: "https://cube.dev/product/why-cube-cloud",
      },
    ],
  },
  {
    type: "link",
    label: "Integrations",
    href: "https://cube.dev/integrations",
  },
  {
    type: "link",
    label: "Pricing",
    href: "https://cube.dev/pricing",
  },
  {
    type: "menu",
    label: "Resources",
    menu: [
      {
        label: "Why cube cloud?",
        href: "https://cube.dev/product/why-cube-cloud",
      },
    ],
  },
];

const secondaryLinks: Array<TNavItem> = [
  {
    type: "link",
    style: "link",
    label: "Sign in",
    href: "https://cubecloud.dev/auth",
  },
  {
    type: "link",
    style: "button",
    label: "Request a demo",
    href: "https://cube.dev/contact",
  },
];

export function Header() {
  return (
    <header className="flex items-center justify-between bg-dark-200 py-4">
      <div className="container mx-auto flex w-full items-center justify-between">
        <Logo />
        <nav aria-label="primary" className="font-semibold">
          <ul className="flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavItem item={link} />
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="secondary" className="font-semibold">
          <ul className="flex items-center justify-center gap-8">
            {secondaryLinks.map((link) => (
              <li key={link.label}>
                <NavItem item={link} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

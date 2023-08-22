import { Header } from "~/components/Header";

export function PageLayout({
  children,
  topBar,
  header,
  footer,
}: {
  children: React.ReactNode;
  topBar?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <>
      {topBar ?? topBar}
      {header ? header : <Header />}
      <main>{children}</main>
      {footer ?? footer}
    </>
  );
}

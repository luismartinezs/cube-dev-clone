import Link from "next/link";
import classnames from "classnames";
import { BsArrowRightShort } from "react-icons/bs";
import styles from "./TopBar.module.css";

export function TopBar() {
  return (
    <div
      className={classnames(
        "relative overflow-hidden bg-[#0f0f23] text-center text-xs font-semibold text-white md:text-base",
        styles.topbar
      )}
    >
      <Link
        href="https://cube.dev/events/get-started-with-cube-cloud?utm_medium=purple&utm_source=cube.dev&utm_campaign=get-started-office-hours"
        className="group relative mx-8 my-2 block w-full whitespace-nowrap py-1"
      >
        <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-white opacity-0 transition-opacity group-hover:opacity-20"></div>
        <span className="text-[#ff83a8]">August 23</span>&nbsp;&nbsp;&nbsp;Get
        Started with Cube Cloud Office Hours —&nbsp;&nbsp;&nbsp;
        <span className="inline-flex items-center text-[#ff83a8]">
          <span>Register now</span>
          <BsArrowRightShort size={24} />
        </span>
      </Link>
    </div>
  );
}

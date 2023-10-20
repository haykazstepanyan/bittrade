"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ title, route, className, activeClassName }) {
  const pathname = usePathname();

  return (
    <Link
      href={route}
      className={clsx(className, {
        [activeClassName]: pathname === route,
      })}
    >
      {title}
    </Link>
  );
}

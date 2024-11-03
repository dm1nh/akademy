"use client"

import { usePathname } from "next/navigation"

import NavLink from "./nav-link"

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav>
      <ul className="flex items-center space-x-4">
        <NavLink href="/" active={pathname === "/"}>
          Home
        </NavLink>
        <NavLink href="/sets" active={pathname.startsWith("/sets")}>
          Sets
        </NavLink>
        <NavLink
          href="/assignments"
          active={pathname.startsWith("/assignments")}
        >
          Assignments
        </NavLink>
      </ul>
    </nav>
  )
}

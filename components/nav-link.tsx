import Link from "next/link"

export default function NavLink({
  href,
  active = false,
  children,
}: React.PropsWithChildren<{ href: string; active?: boolean }>) {
  return (
    <li>
      <Link
        href={href}
        className={`font-medium ${active ? "text-background" : "text-background/50"}`}
      >
        {children}
      </Link>
    </li>
  )
}

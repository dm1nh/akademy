import Link from "next/link"

import Nav from "./nav"

export default function Header() {
  return (
    <header className="bg-foreground/90 text-background">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="text-2xl font-bold sm:text-3xl">
          Akademy
        </Link>
        <Nav />
      </div>
    </header>
  )
}

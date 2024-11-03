import Link from "next/link"

import Nav from "./nav"
import SignedInUser from "./signed-in-user"

export default function Header() {
  return (
    <header className="bg-foreground/90 text-background">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-xl font-bold sm:text-2xl">
            Akademy
          </Link>
          <Nav />
        </div>
        <SignedInUser />
      </div>
    </header>
  )
}

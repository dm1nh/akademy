"use client"

import Link from "next/link"
import { useLocalStorage } from "usehooks-ts"

import { Avatar, AvatarFallback } from "~/components/ui/avatar"
import { Button } from "~/components/ui/button"
import { getUserChars } from "~/lib/utils"
import { type Profile } from "~/types"

export default function SignedInUser() {
  const [user] = useLocalStorage<Profile | null>("user", null)

  if (!user)
    return (
      <Link href="/sign-in">
        <Button>Sign In</Button>
      </Link>
    )

  return (
    <Link className="flex items-center space-x-2" href="/profile">
      <Avatar>
        <AvatarFallback>{getUserChars(user.name)}</AvatarFallback>
      </Avatar>
      <div>{user.name}</div>
    </Link>
  )
}

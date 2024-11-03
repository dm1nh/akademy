"use client"

import { useRouter } from "next/navigation"
import { useLocalStorage } from "usehooks-ts"

import { Button } from "~/components/ui/button"
import { type Profile } from "~/types"

export default function ProfilePage() {
  const router = useRouter()

  const [user, setUser, removeUser] = useLocalStorage<Profile | null>(
    "user",
    null
  )

  function onSignOut() {
    removeUser()
    router.push("/")
  }

  return (
    <div>
      <Button variant="destructive" onClick={onSignOut}>
        Sign Out
      </Button>
    </div>
  )
}

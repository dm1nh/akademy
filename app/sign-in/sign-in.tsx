"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useLocalStorage } from "usehooks-ts"
import { z } from "zod"

import { Button } from "~/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import { type Profile, type User } from "~/types"

const users: User[] = [
  {
    username: "gialinh",
    name: "Linh Pham",
    password: "ptgl0101",
  },
  {
    username: "giahan",
    name: "Han Pham",
    password: "ptgh0101",
  },
  {
    username: "philong",
    name: "Long Pham",
    password: "ppl0101",
  },
]

const FormSchema = z.object({
  username: z.string(),
  password: z.string().min(4),
})

export default function SignIn() {
  const router = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const [, setUser] = useLocalStorage<Profile | null>("user", null)

  function onSubmit(values: z.infer<typeof FormSchema>) {
    const signedInUser = users.find((u) => u.username === values.username)
    if (!signedInUser) return
    setUser(signedInUser)
    router.push("/")
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-stretch space-y-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>Continue</Button>
      </form>
    </Form>
  )
}

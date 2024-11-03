"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useLocalStorage } from "usehooks-ts"
import { z } from "zod"

import { Button } from "~/components/ui/button"
import { Form, FormField } from "~/components/ui/form"
import { type Answer, type Profile, type Question } from "~/types"
import Essay from "./essay"
import MultipleChoice from "./multiple-choice"
import ShortAnswer from "./short-answer"

const FormSchema = z.record(z.string(), z.string())

interface AssignmentFormProps {
  title: string
  questions: Question[]
}

export default function AssignmentForm({
  title,
  questions,
}: AssignmentFormProps) {
  const [user] = useLocalStorage<Profile | null>("user", null)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    if (!user) return

    const res = await fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "ndminhdev@gmail.com",
        subject: `${title} - ${user.name}`,
        html: "<pre>" + JSON.stringify(values) + "</pre>",
      }),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {questions.map((q) => (
          <div
            key={q.id}
            className="rounded-lg border border-border bg-slate-50 p-6"
          >
            <FormField
              control={form.control}
              name={q.id}
              render={({ field }) => {
                switch (q.type) {
                  case "1":
                    return (
                      <MultipleChoice
                        field={field}
                        question={{
                          id: q.id,
                          text: q.text,
                          answer: q.answer as Answer[],
                        }}
                      />
                    )
                  case "2":
                    return (
                      <ShortAnswer
                        field={field}
                        question={{
                          id: q.id,
                          text: q.text,
                          answer: q.answer as string,
                        }}
                      />
                    )
                  case "3":
                    return (
                      <Essay
                        field={field}
                        question={{
                          id: q.id,
                          text: q.text,
                          answer: q.answer as string,
                        }}
                      />
                    )
                }
              }}
            />
          </div>
        ))}
        <Button>Submit</Button>
      </form>
    </Form>
  )
}

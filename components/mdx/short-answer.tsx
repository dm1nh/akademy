"use client"

import { type ControllerRenderProps } from "react-hook-form"

import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import { type ShortAnswerQuestion } from "~/types"

interface ShortAnswerProps {
  question: ShortAnswerQuestion
  field: ControllerRenderProps
}

export default function ShortAnswer({ question, field }: ShortAnswerProps) {
  return (
    <FormItem>
      <FormLabel>
        {question.id}. {question.text}
      </FormLabel>
      <FormControl>
        <Input {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}

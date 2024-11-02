"use client"

import { type ControllerRenderProps } from "react-hook-form"

import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"
import { Textarea } from "~/components/ui/textarea"
import { type EssayQuestion } from "~/types"

interface EssayProps {
  question: EssayQuestion
  field: ControllerRenderProps
}

export default function Essay({ question, field }: EssayProps) {
  return (
    <FormItem>
      <FormLabel>
        {question.id}. {question.text}
      </FormLabel>
      <FormControl>
        <Textarea {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}

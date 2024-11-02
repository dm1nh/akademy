"use client"

import { type ControllerRenderProps } from "react-hook-form"

import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"
import { Label } from "~/components/ui/label"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import { type MultipleChoiceQuestion } from "~/types"

interface MultipleChoiceProps {
  question: MultipleChoiceQuestion
  field: ControllerRenderProps
}

export default function MultipleChoice({
  question,
  field,
}: MultipleChoiceProps) {
  return (
    <FormItem>
      <FormLabel>
        {question.id}. {question.text}
      </FormLabel>
      <FormControl>
        <RadioGroup
          onValueChange={field.onChange}
          defaultValue={question.answer[0]?.text ?? ""}
          className="flex justify-between space-x-8"
        >
          {question.answer.map((a) => (
            <div className="flex flex-1 items-center space-x-2" key={a.id}>
              <RadioGroupItem value={a.text} id={a.id} />
              <Label htmlFor={a.id} className="flex-1">
                {a.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}

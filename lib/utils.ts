import { clsx, type ClassValue } from "clsx"
import { format, parseISO } from "date-fns"
import { twMerge } from "tailwind-merge"

import { type Word } from "~/components/mdx/word-card"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string, fm = "LLLL d, yyyy"): string {
  return format(parseISO(date), fm)
}

export function toWords(data: string[]): Word[] {
  return data.map((line) => {
    const [term, ipa, cls, definition, audio] = line.split(";")
    return {
      term: term ?? "",
      ipa: ipa ?? "",
      cls: cls ?? "n",
      definition: definition ?? "",
      audio: audio ?? "",
    }
  })
}

export function getUserChars(name: string) {
  const [first, last] = name.split(" ")
  return first?.[0] ?? "" + last?.[0] ?? ""
}
